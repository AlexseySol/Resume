const EDGE_URL    = import.meta.env.VITE_ANALYTICS_URL
const SESSION_KEY = 'analytics_sid'
const INIT_KEY    = 'analytics_init'

// Module-level — survive HMR without duplicating listeners
const depthFired = new Set()

function getSessionId() {
  let sid = sessionStorage.getItem(SESSION_KEY)
  if (!sid) {
    sid = crypto.randomUUID()
    sessionStorage.setItem(SESSION_KEY, sid)
  }
  return sid
}

export function track(eventType, section = null, metadata = {}) {
  if (!EDGE_URL) {
    console.warn('[analytics] VITE_ANALYTICS_URL not set — event dropped:', eventType)
    return
  }

  const event = {
    session_id: getSessionId(),
    event_type: eventType,
    section:    section ?? null,
    metadata,
    created_at: new Date().toISOString(),
  }

  console.log('[analytics]', eventType, section ?? '', metadata)

  fetch(EDGE_URL, {
    method:    'POST',
    headers:   { 'Content-Type': 'application/json' },
    body:      JSON.stringify([event]),
    keepalive: true,
  }).catch(err => console.error('[analytics] fetch error:', err))
}

// Tab visibility — once per type per session (no spam on repeated switches)
function onVisibilityChange() {
  const type = document.visibilityState === 'hidden' ? 'tab_hidden' : 'tab_visible'
  if (sessionStorage.getItem(type)) return
  sessionStorage.setItem(type, '1')
  track(type)
}

function onPageHide() {
  track('page_close', null, { time_on_page: Math.round(performance.now() / 1000) })
}

function onScroll() {
  const depths  = [25, 50, 75, 100]
  const scrolled = window.scrollY + window.innerHeight
  const total    = document.documentElement.scrollHeight
  const pct      = Math.round((scrolled / total) * 100)

  for (const d of depths) {
    if (pct >= d && !depthFired.has(d)) {
      depthFired.add(d)
      track('scroll_depth', null, { depth: d })
    }
  }

  if (depthFired.size === depths.length) {
    window.removeEventListener('scroll', onScroll)
  }
}

export function initAnalytics() {
  if (!EDGE_URL) {
    console.warn('[analytics] VITE_ANALYTICS_URL not set — tracking disabled')
    return
  }

  // page_open fires once per browser session (survives HMR)
  if (!sessionStorage.getItem(INIT_KEY)) {
    sessionStorage.setItem(INIT_KEY, '1')
    track('page_open', null, {
      referrer: document.referrer || 'direct',
      screen:   `${window.screen.width}x${window.screen.height}`,
      lang:     navigator.language,
      ua:       navigator.userAgent.slice(0, 120),
    })
  }

  // Remove before adding — if HMR re-runs initAnalytics, no duplicate listeners
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('pagehide', onPageHide)
  window.removeEventListener('scroll', onScroll)

  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('pagehide', onPageHide)
  window.addEventListener('scroll', onScroll, { passive: true })
}
