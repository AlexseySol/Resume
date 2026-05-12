// Edge Function — daily analytics report → Telegram
// Trigger: GET /functions/v1/analytics-report?hours=24
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
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

async function sendTelegram(text: string) {
  const token  = Deno.env.get('TELEGRAM_BOT_TOKEN')!
  const chatId = Deno.env.get('TELEGRAM_CHAT_ID')!
  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    },
  )
  if (!res.ok) throw new Error(`Telegram: ${await res.text()}`)
  return res.json()
}

function topN(items: string[], n: number): Array<[string, number]> {
  const counts: Record<string, number> = {}
  for (const item of items) counts[item] = (counts[item] ?? 0) + 1
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, n)
}

const SECTION_LABELS: Record<string, string> = {
  hero:         '👋 Hero',
  about:        '👤 Обо мне',
  skills:       '🛠 Навыки',
  experience:   '💼 Опыт',
  projects:     '🚀 Проекты',
  education:    '🎓 Образование',
  contact:      '📬 Контакт',
}

const EVENT_LABELS: Record<string, string> = {
  page_open:    '🌐 Открытие сайта',
  page_close:   '🚪 Закрытие сайта',
  section_view: '👁 Просмотр секции',
  project_click:'🚀 Клик по проекту',
  contact_send: '📬 Отправка контакта',
  cv_download:  '⬇️ Скачивание CV',
  link_click:   '🔗 Клик по ссылке',
  button_click: '🖱 Клик по кнопке',
  tab_switch:   '📑 Смена вкладки',
  tab_hidden:   '😴 Вкладка скрыта',
  tab_visible:  '👁 Вкладка активна',
  scroll_depth: '📜 Глубина скролла',
}

interface AnalyticsEvent {
  session_id: string
  event_type: string
  section:    string | null
  metadata:   Record<string, unknown>
  created_at: string
}

function buildReport(events: AnalyticsEvent[], from: Date, to: Date): string {
  const uniqueSessions = new Set(events.map(e => e.session_id)).size
  const pageOpens      = events.filter(e => e.event_type === 'page_open')
  const sectionViews   = events.filter(e => e.event_type === 'section_view')
  const interactions   = events.filter(e => !['section_view', 'page_open', 'tab_hidden', 'tab_visible', 'scroll_depth'].includes(e.event_type))

  const topSections = topN(sectionViews.map(e => e.section ?? 'unknown'), 5)
  const topEvents   = topN(interactions.map(e => e.event_type), 5)

  // Scroll depth stats
  const scrollEvents  = events.filter(e => e.event_type === 'scroll_depth')
  const scroll100     = scrollEvents.filter(e => e.metadata?.depth === 100).length
  const scroll50      = scrollEvents.filter(e => e.metadata?.depth === 50).length

  // Avg time on page
  const closedSessions = events.filter(e => e.event_type === 'page_close' && e.metadata?.time_on_page)
  const avgTime = closedSessions.length
    ? Math.round(closedSessions.reduce((s, e) => s + Number(e.metadata.time_on_page), 0) / closedSessions.length)
    : null

  // Country breakdown
  const countries = pageOpens.map(e => e.metadata?.country as string).filter(Boolean)
  const topCountries = topN(countries, 3)

  const dateStr = to.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })

  let msg = `📊 <b>Resume Analytics — ${dateStr}</b>\n\n`
  msg    += `👥 <b>Посетителей:</b> ${uniqueSessions}\n`
  msg    += `🌐 <b>Заходов на сайт:</b> ${pageOpens.length}\n`
  msg    += `⚡ <b>Всего событий:</b> ${events.length}\n`
  if (avgTime !== null) msg += `⏱ <b>Среднее время:</b> ${avgTime}с\n`

  if (topCountries.length) {
    msg += `\n🌍 <b>Страны:</b>\n`
    topCountries.forEach(([country, count]) => {
      msg += `  ${country} — <b>${count}</b>\n`
    })
  }

  if (scroll100 || scroll50) {
    msg += `\n📜 <b>Скролл:</b>\n`
    msg += `  50% дочитали: <b>${scroll50}</b>\n`
    msg += `  100% дочитали: <b>${scroll100}</b>\n`
  }

  if (topSections.length) {
    msg += `\n📌 <b>Топ секций:</b>\n`
    topSections.forEach(([section, count], i) => {
      const label = SECTION_LABELS[section] ?? section
      msg += `  ${i + 1}. ${label} — <b>${count}</b>\n`
    })
  }

  if (topEvents.length) {
    msg += `\n🖱 <b>Действия:</b>\n`
    topEvents.forEach(([type, count], i) => {
      const label = EVENT_LABELS[type] ?? type
      msg += `  ${i + 1}. ${label} — <b>${count}</b>\n`
    })
  }

  const cvDownloads = events.filter(e => e.event_type === 'cv_download').length
  const contacts    = events.filter(e => e.event_type === 'contact_send').length
  if (cvDownloads || contacts) {
    msg += `\n🎯 <b>Конверсии:</b>\n`
    if (contacts)    msg += `  📬 Контактов отправлено: <b>${contacts}</b>\n`
    if (cvDownloads) msg += `  ⬇️ CV скачано: <b>${cvDownloads}</b>\n`
  }

  if (events.length === 0) msg += `\n💤 Событий не зафиксировано.`

  return msg
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  try {
    const url   = new URL(req.url)
    const hours = Number(url.searchParams.get('hours') ?? '24')
    const to    = new Date()
    const from  = new Date(to.getTime() - hours * 60 * 60 * 1000)

    const { data: events, error } = await supabase
      .from('analytics_events')
      .select('*')
      .gte('created_at', from.toISOString())
      .lte('created_at', to.toISOString())

    if (error) throw error

    const report = buildReport(events ?? [], from, to)
    const result = await sendTelegram(report)

    return new Response(
      JSON.stringify({ ok: true, events_count: events?.length ?? 0, telegram: result }),
      { headers: { ...CORS, 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    console.error('[analytics-report]', err)
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...CORS, 'Content-Type': 'application/json' } },
    )
  }
})
