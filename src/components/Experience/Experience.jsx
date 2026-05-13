import React from 'react'
import { useTranslation } from 'react-i18next'
import { Briefcase, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { useSectionTracking } from '../../hooks/useSectionTracking'

const Experience = () => {
  const ref = useSectionTracking('experience')
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  const companies = [
    {
      name: ua ? 'Фріланс — AI & Автоматизація' : 'Freelance — AI & Automation',
      period: ua ? 'Грудень 2025 — по сьогодні' : 'December 2025 — Present',
      current: true,
      description: ua
        ? 'Розробка AI-агентів та автоматизація бізнес-процесів через n8n. Проектування REST API інтеграцій, робота з Claude Code та OpenAI Codex для прискорення розробки. Консультування клієнтів щодо підбору AI-стеку.'
        : 'Building AI agents and automating business processes via n8n. Designing REST API integrations, using Claude Code and OpenAI Codex to accelerate development. Consulting clients on AI stack selection.',
    },
    {
      name: 'StickerWall',
      period: ua ? 'Січень 2024 — Грудень 2024' : 'January 2024 — December 2024',
      description: ua
        ? 'AI-інтегратор. Впровадження AI-рішень у бізнес-процеси компанії. Проводив внутрішні воркшопи для команди по роботі з ChatGPT, Claude та інструментами автоматизації. Побудував n8n-пайплайни для обробки контенту.'
        : 'AI Integrator. Implemented AI solutions into company business processes. Conducted internal workshops for the team on using ChatGPT, Claude and automation tools. Built n8n pipelines for content processing.',
    },
    {
      name: 'ProAir & ProViz',
      period: ua ? 'Червень 2024 — Листопад 2024' : 'June 2024 — November 2024',
      description: ua
        ? 'Розробив сервіс аналізу аудіодзвінків на базі Whisper + GPT-4o. Навчав менеджерів роботі з AI-інструментами, провів серію воркшопів. Автоматизував звітність команди через n8n + Google Sheets.'
        : 'Built an audio call analysis service based on Whisper + GPT-4o. Trained managers on AI tools, ran a series of workshops. Automated team reporting via n8n + Google Sheets.',
    },
    {
      name: 'VDFY',
      period: ua ? 'Квітень 2024 — Серпень 2024' : 'April 2024 — August 2024',
      description: ua
        ? 'Платформа відеооглядів громадської думки. Розробляв промпти для транскрибації та аналізу відео/аудіо. Інтегрував AssemblyAI + GPT-4o для автоматичного саммері контенту.'
        : 'Public opinion video review platform. Developed prompts for video/audio transcription and analysis. Integrated AssemblyAI + GPT-4o for automatic content summarization.',
    },
    {
      name: ua ? 'Фінансова Академія Актив' : 'Finance Academy Active',
      period: ua ? 'Січень 2024 — Березень 2024' : 'January 2024 — March 2024',
      description: ua
        ? 'Розробляв AI-промпти для навчальних програм ACCA та DipIFR. Адаптував моделі GPT для генерації тестових завдань та пояснень фінансових концепцій.'
        : 'Developed AI prompts for ACCA and DipIFR training programs. Adapted GPT models to generate test questions and financial concept explanations.',
    },
    {
      name: ua ? 'AI-консалтинг' : 'AI Consulting',
      period: ua ? 'Січень 2023 — по сьогодні' : 'January 2023 — Present',
      current: true,
      description: ua
        ? 'Консультую компанії OsviTech, JetCup, AltaKav по впровадженню AI. Проводжу воркшопи для керівників та команд по використанню LLM, автоматизації та побудові AI-агентів.'
        : 'Consulting OsviTech, JetCup, AltaKav on AI adoption. Running workshops for managers and teams on LLM usage, automation and AI agent development.',
    },
    {
      name: 'Frontend Training Club',
      period: ua ? 'Лютий 2024 — Травень 2024' : 'February 2024 — May 2024',
      description: ua
        ? 'Frontend-розробник. Створення онлайн-платформи для спортивних тренувань на React.js.'
        : 'Frontend developer. Built an online sports training platform using React.js.',
    },
    {
      name: 'MidJourney — AI Graphics',
      period: ua ? 'Вересень 2023 — Грудень 2023' : 'September 2023 — December 2023',
      description: ua
        ? 'Генерація унікальної графіки для відеоігор за допомогою MidJourney та Stable Diffusion.'
        : 'Generated unique game graphics using MidJourney and Stable Diffusion.',
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border mb-4">
            <Briefcase className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            {ua ? 'Досвід роботи' : 'Work Experience'}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {companies.map((company, index) => (
            <FadeIn key={index} delay={index * 80}>
              <Card className="bg-card border-border/60 hover:border-border transition-colors duration-300 h-full">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm text-foreground leading-snug">
                      {company.name}
                    </h3>
                    {company.current && (
                      <Badge variant="secondary" className="text-[10px] px-1.5 py-0 shrink-0">
                        {ua ? 'зараз' : 'now'}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 shrink-0" />
                    <span>{company.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {company.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
