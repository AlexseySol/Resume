import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

declare const Deno: { env: { get(key: string): string | undefined } }

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const TG_TOKEN   = '8216552306:AAHK8bLEyOiLXYBkTxDnYFB-xa3uKgX-JYM'
const TG_CHAT_ID = '-1003231729716'

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const EMOJI: Record<string, string> = {
  page_open:    '👀',
  section_view: '📌',
  project_click:'🚀',
  cv_download:  '⬇️',
  link_click:   '🔗',
  contact_send: '📬',
  tab_switch:   '🌐',
  tab_hidden:   '😴',
  tab_visible:  '👁',
  button_click: '🖱',
}

function getIp(req: Request): string {
  return (
    req.headers.get('cf-connecting-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

async function getGeo(ip: string): Promise<{ country: string; city: string; isp: string }> {
  if (ip === 'unknown' || ip.startsWith('127.') || ip.startsWith('::1')) {
    return { country: '🏠 local', city: '', isp: '' }
  }
  try {
    const res  = await fetch(`http://ip-api.com/json/${ip}?fields=country,city,isp`)
    const data = await res.json()
    return {
      country: data.country ?? '?',
      city:    data.city    ?? '',
      isp:     data.isp     ?? '',
    }
  } catch {
    return { country: '?', city: '', isp: '' }
  }
}

async function sendTelegram(text: string): Promise<void> {
  const res = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ chat_id: TG_CHAT_ID, text, parse_mode: 'HTML' }),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('[telegram] error:', res.status, err)
  }
}

function buildMessage(
  e: Record<string, unknown>,
  ua: string,
  geo: { country: string; city: string; isp: string },
): string {
  const type    = e.event_type as string
  const emoji   = EMOJI[type] ?? '⚡'
  const section = e.section ? ` → <b>${e.section}</b>` : ''
  const meta    = (e.metadata ?? {}) as Record<string, unknown>

  let msg = `${emoji} <b>${type}</b>${section}\n`

  const location = [geo.country, geo.city].filter(Boolean).join(', ')
  msg += `🌍 ${location}\n`

  if (type === 'page_open') {
    msg += `📱 ${meta.screen ?? '?'}   🗣 ${meta.lang ?? '?'}\n`
    msg += `📎 ${meta.referrer ?? 'direct'}\n`
    const device = ua.includes('Mobile') ? '📱 Mobile' : '🖥 Desktop'
    msg += `${device}\n`
  }

  if (type === 'project_click' && meta.title) {
    msg += `  📁 <i>${meta.title}</i>\n`
  }

  if (type === 'link_click' && meta.label) {
    msg += `  🔗 <i>${meta.label}</i>\n`
  }

  if (type === 'button_click' && meta.label) {
    msg += `  🖱 <i>${meta.label}</i>\n`
  }

  if (type === 'contact_send') {
    if (meta.name)          msg += `  👤 <i>${meta.name}</i>\n`
    if (meta.contactMethod) msg += `  📞 <i>${meta.contactMethod}</i>\n`
  }

  msg += `🆔 <code>${(e.session_id as string).slice(0, 8)}</code>`

  return msg
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS })
  }

  try {
    const body   = await req.json()
    const events = (Array.isArray(body) ? body : [body]) as Record<string, unknown>[]
    const ua     = req.headers.get('user-agent') ?? ''
    const ip     = getIp(req)
    const geo    = await getGeo(ip)

    const rows = events.map(e => ({
      session_id: e.session_id ?? 'unknown',
      event_type: e.event_type ?? 'unknown',
      section:    e.section    ?? null,
      metadata:   { ...(e.metadata as object ?? {}), country: geo.country, city: geo.city, ip },
      user_agent: ua,
      created_at: e.created_at ?? new Date().toISOString(),
    }))

    await supabase.from('analytics_events').insert(rows)

    for (const e of rows) {
      await sendTelegram(buildMessage(e, ua, geo))
    }

    return new Response(
      JSON.stringify({ ok: true, saved: rows.length }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    console.error('[track-event]', err)
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } },
    )
  }
})
