import { useEffect, useRef } from 'react'
import { track } from '../analytics/tracker'
import { EVENTS } from '../analytics/events'

// Fires section_view once when the section enters viewport (>40% visible)
export function useSectionTracking(sectionName) {
  const ref     = useRef(null)
  const tracked = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || tracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true
          track(EVENTS.SECTION_VIEW, sectionName)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionName])

  return ref
}
