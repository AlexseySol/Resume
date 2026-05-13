import React from 'react'
import { useTranslation } from 'react-i18next'
import { Bot, Cpu, Code, Users, BookOpen, Server } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { useSectionTracking } from '../../hooks/useSectionTracking'
import { cn } from '@/lib/utils'

const CATEGORY_COLORS = {
  nocode:     'text-cyan-400',
  ai:         'text-violet-400',
  agents:     'text-emerald-400',
  web:        'text-amber-400',
  infra:      'text-red-400',
  consulting: 'text-blue-400',
}

const CATEGORY_DOT_COLORS = {
  nocode:     'bg-cyan-400/80',
  ai:         'bg-violet-400/80',
  agents:     'bg-emerald-400/80',
  web:        'bg-amber-400/80',
  infra:      'bg-red-400/80',
  consulting: 'bg-blue-400/80',
}

const Skills = () => {
  const ref = useSectionTracking('skills')
  const { i18n } = useTranslation()
  const ua = i18n.language === 'ua'

  const skillCategories = [
    {
      icon: <Bot className="h-4 w-4" />,
      type: 'nocode',
      title: ua ? 'n8n та no-code автоматизація — 3+ роки' : 'n8n & No-Code Automation — 3+ years',
      skills: ua
        ? [
            'n8n — експертний рівень (self-hosted, queue mode, custom nodes)',
            'Make.com — впевнений рівень для швидких прототипів',
            'Webhook-архітектура: Zoom, Ringostat, Binotel, Bitrix24',
            'OAuth 2.0: YouTube API, Google Workspace, корпоративні CRM',
            'Multi-step workflows з retry-логікою та error branches',
          ]
        : [
            'n8n — expert level (self-hosted, queue mode, custom nodes)',
            'Make.com — confident level for rapid prototyping',
            'Webhook routing: Zoom, Ringostat, Binotel, Bitrix24',
            'OAuth 2.0: YouTube API, Google Workspace, enterprise CRM',
            'Multi-step workflows with retry logic and error branches',
          ],
    },
    {
      icon: <Bot className="h-4 w-4" />,
      type: 'ai',
      title: ua ? 'AI-моделі та промпт-інжиніринг' : 'AI Models & Prompt Engineering',
      skills: ua
        ? [
            'Claude Opus 4.7, Sonnet 4.6 (Anthropic) — основні робочі моделі',
            'GPT-5, o3 (OpenAI) — reasoning та складна логіка',
            'Gemini 2.5 Pro / Flash — великий контекст та мультимодальність',
            'AssemblyAI, Whisper — транскрибація UA/EN, довгі аудіо',
            'Структуровані промпти, anti-hallucination, structured output',
          ]
        : [
            'Claude Opus 4.7, Sonnet 4.6 (Anthropic) — primary working models',
            'GPT-5, o3 (OpenAI) — reasoning and complex logic',
            'Gemini 2.5 Pro / Flash — large context and multimodality',
            'AssemblyAI, Whisper — UA/EN transcription, long audio',
            'Structured prompts, anti-hallucination rules, structured output',
          ],
    },
    {
      icon: <Cpu className="h-4 w-4" />,
      type: 'agents',
      title: ua ? 'AI-агенти та CLI-інструменти' : 'AI Agents & CLI Tools',
      skills: ua
        ? [
            'Claude Code — щоденний інструмент для розробки та агентних задач',
            'OpenAI Codex CLI — паралельні агентні задачі в терміналі',
            'n8n AI Agent nodes — production-агенти з tool-calling та memory',
            'Supabase pgvector — vector DB, hybrid search, кастомні retriever',
            'Мульти-агентні системи з ролями та передачею контексту',
          ]
        : [
            'Claude Code — daily tool for development and agentic tasks',
            'OpenAI Codex CLI — parallel agentic tasks in terminal',
            'n8n AI Agent nodes — production agents with tool-calling & memory',
            'Supabase pgvector — vector DB, hybrid search, custom retrievers',
            'Multi-agent systems with roles and context handoff',
          ],
    },
    {
      icon: <Code className="h-4 w-4" />,
      type: 'web',
      title: ua ? 'Backend та інтеграції' : 'Backend & Integrations',
      skills: ua
        ? [
            'Node.js — серверна логіка, кастомні API під n8n, webhook handlers',
            'PostgreSQL, Supabase — RLS, edge functions, Data Tables',
            'REST API — проєктування та інтеграція з зовнішніми системами',
            'Telegram Bot API — state machine, inline keyboards, sessions',
            'Bitrix24, Finmap, Servio HMS, Poster POS, Google Workspace',
          ]
        : [
            'Node.js — server logic, custom APIs for n8n, webhook handlers',
            'PostgreSQL, Supabase — RLS, edge functions, Data Tables',
            'REST API — design and integration with external systems',
            'Telegram Bot API — state machine, inline keyboards, sessions',
            'Bitrix24, Finmap, Servio HMS, Poster POS, Google Workspace',
          ],
    },
    {
      icon: <Server className="h-4 w-4" />,
      type: 'infra',
      title: ua ? 'Інфраструктура та DevOps' : 'Infrastructure & DevOps',
      skills: ua
        ? [
            'Docker Compose, Traefik — self-hosted n8n у production з SSL',
            'VPS-адміністрування, queue mode: Redis + кілька воркерів',
            'GitHub Actions — автоматичний бекап воркфлоу та конфігів',
            'Vercel — деплой фронтендів, дашбордів та лендингів',
            'React — фронтенд для внутрішніх дашбордів аналітики',
          ]
        : [
            'Docker Compose, Traefik — self-hosted n8n in production with SSL',
            'VPS administration, queue mode: Redis + multiple workers',
            'GitHub Actions — automated workflow and config backups',
            'Vercel — frontend, dashboard and landing page deployments',
            'React — frontend for internal analytics dashboards',
          ],
    },
    {
      icon: <Users className="h-4 w-4" />,
      type: 'consulting',
      title: ua ? 'Консалтинг та воркшопи' : 'Consulting & Workshops',
      skills: ua
        ? [
            'Воркшопи для команд: від базового ChatGPT до власних агентів',
            'Аудит бізнес-процесів і вибір ділянок з реальним ROI',
            'Стратегія автоматизації під специфіку бізнесу',
            'Розробка кастомних AI-рішень під клієнтські задачі',
            'Документація та передача знань нетехнічним командам',
          ]
        : [
            'Team workshops: from basic ChatGPT to building your own agents',
            'Business process audit and ROI-positive automation identification',
            'Automation strategy tailored to specific business context',
            'Custom AI solution development for client requirements',
            'Documentation and knowledge transfer for non-technical teams',
          ],
    },
  ]

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-secondary border border-border mb-4">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">
            {ua ? 'Навички та компетенції' : 'Skills & Expertise'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {ua
              ? 'Постійно вдосконалюю навички та вивчаю нові технології'
              : 'Continuously improving skills and learning new technologies'}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 80}>
              <Card className="bg-card border-border/60 hover:border-border transition-colors duration-300 group h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-sm font-semibold leading-snug">
                    <span className={cn('flex items-center justify-center w-7 h-7 rounded-md bg-secondary', CATEGORY_COLORS[category.type])}>
                      {category.icon}
                    </span>
                    <span className="text-foreground">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <span className={cn('mt-1.5 h-1.5 w-1.5 rounded-full shrink-0', CATEGORY_DOT_COLORS[category.type])} />
                        <span>{skill}</span>
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

export default Skills
