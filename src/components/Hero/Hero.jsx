import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, Mail, MessageCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { cn } from '@/lib/utils'
import Modal from '../Modal/Modal'
import { useSectionTracking } from '../../hooks/useSectionTracking'
import { track } from '../../analytics/tracker'
import { EVENTS } from '../../analytics/events'

const Hero = () => {
  const { i18n } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const ref = useSectionTracking('hero')
  const ua = i18n.language === 'ua'

  const specialties = ua
    ? ['Спеціаліст з автоматизації', 'Впровадження ШІ', 'n8n спеціаліст', 'AI інтегратор']
    : ['Automation Specialist', 'AI Implementation Expert', 'n8n Specialist', 'AI Integrator']

  const quote = ua
    ? 'Інновації — це особливий інструмент, який дозволяє перетворити зміни на можливості'
    : 'Innovation is the specific tool that allows us to transform change into opportunity'

  const resumeTitle = ua ? 'Резюме Олексія С.' : 'Resume of Oleksiy S.'

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Language toggle */}
        <div className="absolute top-6 right-6 z-20 flex gap-0.5 p-1 bg-secondary rounded-lg border border-border">
          <button
            className={cn(
              'px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200',
              !ua
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
            onClick={() => {
              i18n.changeLanguage('en')
              track(EVENTS.TAB_SWITCH, 'hero', { lang: 'en' })
            }}
          >
            EN
          </button>
          <button
            className={cn(
              'px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200',
              ua
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
            onClick={() => {
              i18n.changeLanguage('ua')
              track(EVENTS.TAB_SWITCH, 'hero', { lang: 'ua' })
            }}
          >
            UA
          </button>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile image */}
          <FadeIn delay={100} className="flex justify-center lg:justify-start order-first">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] lg:w-[420px] lg:h-[560px] rounded-2xl overflow-hidden border border-border">
              <img
                src="/images/profile.jpg"
                alt={ua ? 'Олексій Соляной' : 'Oleksiy Solyanoy'}
                loading="eager"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </FadeIn>

          {/* Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <FadeIn delay={200} className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                {resumeTitle}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="text-xs px-3 py-1 border-border/60 text-muted-foreground">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={350}>
              <blockquote className="relative pl-0 lg:pl-5 lg:border-l-2 lg:border-border/50">
                <p className="text-muted-foreground italic text-base leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={500} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => {
                  track(EVENTS.BUTTON_CLICK, 'hero', { label: 'Contact Me' })
                  setIsModalOpen(true)
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {ua ? 'Написати мені' : 'Contact Me'}
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://t.me/Memory_al"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(EVENTS.LINK_CLICK, 'hero', { label: 'Telegram' })}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Telegram
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="mailto:alexsey.solyanoy@gmail.com"
                  onClick={() => track(EVENTS.LINK_CLICK, 'hero', { label: 'Email' })}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </FadeIn>

            <FadeIn delay={650} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground border border-border/50 rounded-full px-4 py-2">
                <MapPin className="h-3.5 w-3.5" />
                {ua ? 'Київ, Україна' : 'Kyiv, Ukraine'}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Hero
