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

export function track(eventType, section = null, metadata = {}) {
  if (!EDGE_URL) {
    console.warn('[analytics] REACT_APP_ANALYTICS_URL not set — event dropped:', eventType)
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

export function initAnalytics() {
  if (!EDGE_URL) {
    console.warn('[analytics] REACT_APP_ANALYTICS_URL not set — tracking disabled')
    return
  }

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

  // Page close
  window.addEventListener('pagehide', () => {
    track('page_close', null, { time_on_page: Math.round(performance.now() / 1000) })
  })

  // Scroll depth — fires once per threshold
  const depths = [25, 50, 75, 100]
  const fired  = new Set()

  const onScroll = () => {
    const scrolled = window.scrollY + window.innerHeight
    const total    = document.documentElement.scrollHeight
    const pct      = Math.round((scrolled / total) * 100)

    for (const d of depths) {
      if (pct >= d && !fired.has(d)) {
        fired.add(d)
        track('scroll_depth', null, { depth: d })
      }
    }

    if (fired.size === depths.length) {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
}
