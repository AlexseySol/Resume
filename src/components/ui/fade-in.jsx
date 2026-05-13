import React from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

export function FadeIn({ children, className, delay = 0, duration = 600 }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0px)' : 'translateY(24px)',
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
