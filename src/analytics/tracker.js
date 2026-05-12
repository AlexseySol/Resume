// Sends analytics events to Supabase Edge Function (track-event)
// No auth needed — public portfolio site

const EDGE_URL    = process.env.REACT_APP_ANALYTICS_URL
const SESSION_KEY = 'analytics_sid'
const BUFFER_KEY  = 'analytics_buf'
const FLUSH_MS    = 30_000
const MAX_BUF     = 15

function getSessionId() {
  let sid = sessionStorage.getItem(SESSION_KEY)
  if (!sid) {
    sid = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, sid)
  }
  return sid
}

function getBuffer() {
  try { return JSON.parse(localStorage.getItem(BUFFER_KEY) || '[]') } catch { return [] }
}

function setBuffer(events) {
  try { localStorage.setItem(BUFFER_KEY, JSON.stringify(events.slice(0, 100))) } catch {}
}

let _flushing = false

export async function flush() {
  if (_flushing || !EDGE_URL) return
  const events = getBuffer()
  if (!events.length) return

  _flushing = true
  setBuffer([])

  try {
    await fetch(EDGE_URL, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(events),
    })
  } catch {
    const cur = getBuffer()
    setBuffer([...events, ...cur])
  } finally {
    _flushing = false
  }
}

export function track(eventType, section = null, metadata = {}) {
  const buf = getBuffer()
  buf.push({
    session_id: getSessionId(),
    event_type: eventType,
    section,
    metadata,
    created_at: new Date().toISOString(),
  })
  setBuffer(buf)
  if (buf.length >= MAX_BUF) flush()
}

export function initAnalytics() {
  if (!EDGE_URL) {
    console.warn('[analytics] REACT_APP_ANALYTICS_URL not set')
    return
  }
  track('page_open')
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
  })
  setInterval(flush, FLUSH_MS)
  window.addEventListener('beforeunload', () => flush())
}
