const EDGE_URL    = process.env.REACT_APP_ANALYTICS_URL
const SESSION_KEY = 'analytics_sid'

function getSessionId() {
  let sid = sessionStorage.getItem(SESSION_KEY)
  if (!sid) {
    sid = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, sid)
  }
  return sid
}

// Fire-and-forget: every event goes immediately, no buffering
export function track(eventType, section = null, metadata = {}) {
  if (!EDGE_URL) return

  const event = {
    session_id: getSessionId(),
    event_type: eventType,
    section:    section ?? null,
    metadata,
    created_at: new Date().toISOString(),
  }

  fetch(EDGE_URL, {
    method:    'POST',
    headers:   { 'Content-Type': 'application/json' },
    body:      JSON.stringify([event]),
    keepalive: true,
  }).catch(() => {})
}

export function initAnalytics() {
  if (!EDGE_URL) {
    console.warn('[analytics] REACT_APP_ANALYTICS_URL not set')
    return
  }

  // Page open — with full metadata
  track('page_open', null, {
    referrer: document.referrer || 'direct',
    screen:   `${window.screen.width}x${window.screen.height}`,
    lang:     navigator.language,
    ua:       navigator.userAgent.slice(0, 120),
  })

  // Tab hidden / visible
  document.addEventListener('visibilitychange', () => {
    track(document.visibilityState === 'hidden' ? 'tab_hidden' : 'tab_visible')
  })
}
