import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FolderOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label={ua ? 'Перейти до портфоліо' : 'Go to portfolio'}
      className={cn(
        'fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl',
        'bg-primary text-primary-foreground font-medium text-sm',
        'transition-all duration-500 select-none cursor-pointer',
        'animate-float animate-glow',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      )}
    >
      <FolderOpen className="h-4 w-4 shrink-0" />
      <span>{ua ? 'Портфоліо' : 'Portfolio'}</span>
    </button>
  )
}
