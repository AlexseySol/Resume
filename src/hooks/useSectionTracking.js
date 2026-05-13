import { useEffect, useRef } from 'react'
import { track } from '../analytics/tracker'
import { EVENTS } from '../analytics/events'

// Fires section_view once the section stays in viewport for 1s (filters scroll-through and initial load burst)
export function useSectionTracking(sectionName) {
  const ref     = useRef(null)
  const tracked = useRef(false)
  const timer   = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || tracked.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          timer.current = setTimeout(() => {
            if (!tracked.current) {
              tracked.current = true
              track(EVENTS.SECTION_VIEW, sectionName)
              observer.disconnect()
            }
          }, 1000)
        } else {
          clearTimeout(timer.current)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timer.current)
    }
  }, [sectionName])

  return ref
}
