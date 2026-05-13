import React from 'react'
import { useTranslation } from 'react-i18next'
import { Brain, Zap, Sparkles } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { useSectionTracking } from '../../hooks/useSectionTracking'

const About = () => {
  const ref = useSectionTracking('about')
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  const data = ua
    ? {
        intro:
          '3+ роки в AI-автоматизації та системних інтеграціях. Проєктую мульти-агентні системи на n8n з Claude та GPT-5, будую RAG-архітектури на Supabase pgvector, інтегрую API телефонії, CRM, HMS, платіжних систем та LLM-провайдерів у єдині production-пайплайни.\n\nРозгортаю self-hosted n8n у production-режимі на VPS: Docker Compose, Traefik, PostgreSQL, Redis, queue mode з кількома воркерами.',
        cards: [
          {
            icon: <Brain className="h-4 w-4" />,
            title: 'Експертиза',
            items: [
              'AI-агенти: Claude Code, OpenAI Codex CLI, n8n AI Agent, multi-agent workflows',
              'RAG та векторний пошук: Supabase pgvector, hybrid search, chunking-стратегії',
              'n8n у production: self-hosted, queue mode, Docker Compose, GitHub-бекапи',
              'REST API та інтеграції: OAuth 2.0, webhook-маршрутизація, Node.js',
              'Голосові пайплайни: AssemblyAI, Whisper — транскрибація та AI-аналітика',
            ],
          },
          {
            icon: <Zap className="h-4 w-4" />,
            title: 'Підхід до роботи',
            items: [
              'Аудит процесу → MVP → ітерації під реальне використання',
              'Готові рішення, які команда запускає одразу без ручного супроводу',
              'Воркшопи з впровадження AI — щоб після здачі все працювало автономно',
              'Чесно кажу, де AI не потрібен і вистачить простого скрипта',
              'Документую все: воркфлоу, схеми даних, інструкції для нетехнічних',
            ],
          },
        ],
      }
    : {
        intro:
          '3+ years in AI automation and system integrations. I design multi-agent systems on n8n with Claude and GPT-5, build RAG architectures on Supabase pgvector, and integrate telephony APIs, CRM, HMS, payment systems and LLM providers into unified production pipelines.\n\nI deploy self-hosted n8n in production mode on VPS: Docker Compose, Traefik, PostgreSQL, Redis, queue mode with multiple workers.',
        cards: [
          {
            icon: <Brain className="h-4 w-4" />,
            title: 'Expertise',
            items: [
              'AI agents: Claude Code, OpenAI Codex CLI, n8n AI Agent, multi-agent workflows',
              'RAG & vector search: Supabase pgvector, hybrid search, chunking strategies',
              'n8n in production: self-hosted, queue mode, Docker Compose, GitHub backups',
              'REST API & integrations: OAuth 2.0, webhook routing, Node.js',
              'Voice pipelines: AssemblyAI, Whisper — transcription & AI call analytics',
            ],
          },
          {
            icon: <Zap className="h-4 w-4" />,
            title: 'Work Approach',
            items: [
              'Process audit → MVP → iterations for real-world usage',
              'Ready-to-run solutions that teams launch immediately',
              'AI workshops — so everything runs autonomously after handoff',
              "Honest about when AI isn't needed and a simple script will do",
              'Document everything: workflows, data schemas, guides for non-technical users',
            ],
          },
        ],
      }

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            {ua ? 'Про мене' : 'About Me'}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
            {data.intro}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {data.cards.map((card, idx) => (
            <FadeIn key={idx} delay={idx * 120}>
              <Card className="bg-card border-border/60 hover:border-border transition-colors duration-300 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base font-semibold">
                    <span className="flex items-center justify-center w-7 h-7 rounded-md bg-secondary text-muted-foreground">
                      {card.icon}
                    </span>
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5 mt-0.5 shrink-0 text-foreground/40" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
