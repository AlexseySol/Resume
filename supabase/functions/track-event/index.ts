// Edge Function — receive analytics events + send realtime Telegram alerts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

declare const Deno: { env: { get(key: string): string } }

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

const CORS = {
  'Access-Control-Allow-Origin':  '*',
  'Access-Control-Allow-Headers': 'content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Events that trigger instant Telegram notification
const NOTIFY_EVENTS = new Set([
  'page_open',
  'project_click',
  'cv_download',
  'link_click',
  'contact_send',
])

const EVENT_EMOJI: Record<string, string> = {
  page_open:     '👀 Кто-то зашёл на сайт',
  project_click: '🚀 Открыл проект',
  cv_download:   '⬇️ Скачал CV',
  link_click:    '🔗 Кликнул по ссылке',
  contact_send:  '📬 Отправил контакт',
  section_view:  '📌 Посмотрел секцию',
  tab_switch:    '🌐 Сменил язык',
}

async function notify(events: Array<Record<string, unknown>>) {
  const token  = Deno.env.get('TELEGRAM_BOT_TOKEN')
  const chatId = Deno.env.get('TELEGRAM_CHAT_ID')
  if (!token || !chatId) return

  for (const e of events) {
    if (!NOTIFY_EVENTS.has(e.event_type as string)) continue

    const label   = EVENT_EMOJI[e.event_type as string] ?? e.event_type
    const section = e.section ? ` <b>${e.section}</b>` : ''
    const meta    = e.metadata && Object.keys(e.metadata as object).length
      ? `\n<code>${JSON.stringify(e.metadata)}</code>`
      : ''

    const text = `${label}${section}${meta}`

    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      },
    ).catch(() => {})
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS })
  }

  try {
    const body   = await req.json()
    const events = Array.isArray(body) ? body : [body]

    const rows = events.map((e: Record<string, unknown>) => ({
      session_id: e.session_id ?? 'unknown',
      event_type: e.event_type ?? 'unknown',
      section:    e.section    ?? null,
      metadata:   e.metadata   ?? {},
      user_agent: req.headers.get('user-agent') ?? null,
      created_at: e.created_at ?? new Date().toISOString(),
    }))

    const { error } = await supabase.from('analytics_events').insert(rows)
    if (error) throw error

    // Send realtime Telegram notifications (non-blocking)
    notify(rows).catch(() => {})

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
