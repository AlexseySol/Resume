import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

declare const Deno: { env: { get(key: string): string | undefined } }

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const TG_TOKEN   = Deno.env.get('TELEGRAM_BOT_TOKEN') ?? ''
const TG_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID')   ?? ''

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const EMOJI: Record<string, string> = {
  page_open:    '👀',
  page_close:   '🚪',
  section_view: '📌',
  project_click:'🚀',
  cv_download:  '⬇️',
  link_click:   '🔗',
  contact_send: '📬',
  tab_switch:   '🌐',
  tab_hidden:   '😴',
  tab_visible:  '👁',
  button_click: '🖱',
  scroll_depth: '📜',
}

const EVENT_LABELS: Record<string, string> = {
  page_open:    'Открыл сайт',
  page_close:   'Закрыл сайт',
  section_view: 'Посмотрел секцию',
  project_click:'Кликнул на проект',
  cv_download:  'Скачал CV',
  link_click:   'Кликнул по ссылке',
  contact_send: 'Отправил контакт',
  tab_switch:   'Сменил язык',
  tab_hidden:   'Свернул вкладку',
  tab_visible:  'Вернулся на вкладку',
  button_click: 'Нажал кнопку',
  scroll_depth: 'Прокрутил страницу',
}

const SECTION_LABELS: Record<string, string> = {
  hero:       'Hero',
  about:      'Обо мне',
  skills:     'Навыки',
  experience: 'Опыт',
  projects:   'Проекты',
  education:  'Образование',
  contact:    'Контакт',
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

function parseUA(ua: string): { browser: string; os: string; device: string } {
  const browser =
    ua.includes('Edg/')    ? 'Edge'    :
    ua.includes('OPR/')    ? 'Opera'   :
    ua.includes('Chrome/') ? 'Chrome'  :
    ua.includes('Firefox/') ? 'Firefox' :
    ua.includes('Safari/')  ? 'Safari'  :
    'Unknown'

  const os =
    ua.includes('Windows NT') ? 'Windows' :
    ua.includes('Mac OS X')   ? 'macOS'   :
    ua.includes('Android')    ? 'Android' :
    ua.includes('iPhone') || ua.includes('iPad') ? 'iOS' :
    ua.includes('Linux')      ? 'Linux'   :
    'Unknown'

  const device = ua.includes('Mobile') || ua.includes('Android') || ua.includes('iPhone') ? '📱 Мобильный' : '🖥 Компьютер'

  return { browser, os, device }
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
  const type        = e.event_type as string
  const emoji       = EMOJI[type] ?? '⚡'
  const label       = EVENT_LABELS[type] ?? type
  const sectionName = e.section ? SECTION_LABELS[e.section as string] ?? e.section as string : null
  const section     = sectionName ? ` → <b>${sectionName}</b>` : ''
  const meta        = (e.metadata ?? {}) as Record<string, unknown>
  const { browser, os, device } = parseUA(ua)

  let msg = `${emoji} <b>${label}</b>${section}\n`

  const location = [geo.country, geo.city].filter(Boolean).join(', ')
  if (location) msg += `🌍 ${location}\n`
  if (geo.isp)  msg += `📶 ${geo.isp}\n`

  if (type === 'page_open') {
    msg += `${device} · ${browser} · ${os}\n`
    msg += `📐 ${meta.screen ?? '?'}   🗣 ${meta.lang ?? '?'}\n`
    msg += `📎 ${meta.referrer ?? 'прямой переход'}\n`
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

  if (type === 'cv_download') {
    msg += `  ${device} · ${browser} · ${os}\n`
  }

  msg += `🆔 <code>${(e.session_id as string).slice(0, 8)}</code>`

  return msg
}

serve(async (req: Request) => {
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
      metadata:   { ...(e.metadata as object ?? {}), country: geo.country, city: geo.city, isp: geo.isp, ip },
      user_agent: ua,
      created_at: e.created_at ?? new Date().toISOString(),
    }))

    const { error: dbError } = await supabase.from('analytics_events').insert(rows)
    if (dbError) console.error('[db] insert error:', dbError.message)

    // Only important events go to Telegram; the rest are DB-only
    const NOTIFY_EVENTS = new Set(['page_open', 'cv_download', 'contact_send', 'project_click', 'link_click', 'button_click'])
    const toNotify = rows.filter(e => NOTIFY_EVENTS.has(e.event_type as string))
    if (toNotify.length === 1) {
      await sendTelegram(buildMessage(toNotify[0], ua, geo))
    } else if (toNotify.length > 1) {
      const combined = toNotify.map(e => buildMessage(e, ua, geo)).join('\n\n')
      await sendTelegram(combined)
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
