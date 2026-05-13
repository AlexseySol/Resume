import React from 'react'
import { useTranslation } from 'react-i18next'
import { GraduationCap, Building, Code, Bookmark, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { useSectionTracking } from '../../hooks/useSectionTracking'

const Education = () => {
  const ref = useSectionTracking('education')
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  const educationData = [
    {
      icon: <Building className="h-5 w-5" />,
      title: 'ЛНАУ',
      fullTitle: ua
        ? 'Луганський Національний Аграрний Університет'
        : 'Luhansk National Agrarian University',
      period: '2013 – 2017',
      location: ua ? 'Україна, Луганськ-Харків' : 'Ukraine, Luhansk-Kharkiv',
      specialty: ua ? 'Промислове та цивільне будівництво' : 'Industrial and Civil Engineering',
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: 'Prog.Academy',
      fullTitle: 'Frontend Training Club',
      period: '2022 – 2023',
      location: ua ? 'Україна, Київ' : 'Ukraine, Kyiv',
      specialty: ua
        ? 'HTML, CSS, JavaScript та сучасні фреймворки'
        : 'HTML, CSS, JavaScript and modern frameworks',
    },
    {
      icon: <Bookmark className="h-5 w-5" />,
      title: ua ? 'AI та Автоматизація' : 'AI & Automation',
      period: '2023',
      courses: ua
        ? [
            'Розробка та оптимізація промптів для AI-моделей',
            'Автоматизація бізнес-процесів з використанням штучного інтелекту',
          ]
        : [
            'Development and optimization of prompts for AI models',
            'Business process automation using artificial intelligence',
          ],
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border mb-4">
            <GraduationCap className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {ua ? 'Освіта' : 'Education'}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationData.map((card, index) => (
            <FadeIn key={index} delay={index * 120}>
            <Card
              className="bg-card border-border/60 hover:border-border transition-colors duration-300 h-full"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-secondary text-muted-foreground shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-foreground leading-none mb-1">
                      {card.title}
                    </h3>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-border/50">
                      {card.period}
                    </Badge>
                  </div>
                </div>

                {card.fullTitle && (
                  <p className="text-xs text-muted-foreground mb-3 leading-snug">
                    {card.fullTitle}
                  </p>
                )}

                {card.location && (
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span>{card.location}</span>
                  </div>
                )}

                {card.specialty && (
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    {card.specialty}
                  </p>
                )}

                {card.courses && (
                  <ul className="space-y-2">
                    {card.courses.map((course, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-border shrink-0" />
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
