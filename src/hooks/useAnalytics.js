import { useCallback } from 'react'
import { track } from '../analytics/tracker'

export function useAnalytics() {
  const trackEvent = useCallback((eventType, section = null, metadata = {}) => {
    track(eventType, section, metadata)
  }, [])

  return { track: trackEvent }
}
