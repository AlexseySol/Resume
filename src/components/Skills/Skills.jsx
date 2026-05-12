import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Bot, Cpu, Users, BookOpen, Server } from 'lucide-react';
import * as S from './Skills.styles';
import { useSectionTracking } from '../../hooks/useSectionTracking';

const ACCENT = {
  nocode:     '#22D3EE',
  ai:         '#A78BFA',
  agents:     '#34D399',
  web:        '#FBBF24',
  infra:      '#F87171',
  consulting: '#60A5FA',
};

const Skills = () => {
  const ref = useSectionTracking('skills');
  const { i18n } = useTranslation();
  const ua = i18n.language === 'ua';

  const skillCategories = [
    {
      icon: <Bot />,
      title: ua
        ? 'n8n та no-code автоматизація — 3+ роки'
        : 'n8n & No-Code Automation — 3+ years',
      type: 'nocode',
      skills: ua ? [
        'n8n — експертний рівень (self-hosted, queue mode, custom nodes)',
        'Make.com — впевнений рівень для швидких прототипів',
        'Webhook-архітектура: Zoom, Ringostat, Binotel, Bitrix24, Finmap, ManyChat',
        'OAuth 2.0: YouTube API, Google Workspace, корпоративні CRM',
        'Multi-step workflows з retry-логікою та error branches',
      ] : [
        'n8n — expert level (self-hosted, queue mode, custom nodes)',
        'Make.com — confident level for rapid prototyping',
        'Webhook routing: Zoom, Ringostat, Binotel, Bitrix24, Finmap, ManyChat',
        'OAuth 2.0: YouTube API, Google Workspace, enterprise CRM',
        'Multi-step workflows with retry logic and error branches',
      ],
    },
    {
      icon: <Bot />,
      title: ua
        ? 'AI-моделі та промпт-інжиніринг'
        : 'AI Models & Prompt Engineering',
      type: 'ai',
      skills: ua ? [
        'Claude Opus 4.7, Sonnet 4.6 (Anthropic) — основні робочі моделі',
        'GPT-5, o3 (OpenAI) — reasoning та складна логіка',
        'Gemini 2.5 Pro / Flash — великий контекст та мультимодальність',
        'AssemblyAI, Whisper — транскрибація UA/EN, довгі аудіо',
        'Структуровані промпти, anti-hallucination, structured output',
      ] : [
        'Claude Opus 4.7, Sonnet 4.6 (Anthropic) — primary working models',
        'GPT-5, o3 (OpenAI) — reasoning and complex logic',
        'Gemini 2.5 Pro / Flash — large context and multimodality',
        'AssemblyAI, Whisper — UA/EN transcription, long audio',
        'Structured prompts, anti-hallucination rules, structured output',
      ],
    },
    {
      icon: <Cpu />,
      title: ua
        ? 'AI-агенти та CLI-інструменти'
        : 'AI Agents & CLI Tools',
      type: 'agents',
      skills: ua ? [
        'Claude Code — щоденний інструмент для розробки та агентних задач',
        'OpenAI Codex CLI — паралельні агентні задачі в терміналі',
        'n8n AI Agent nodes — production-агенти з tool-calling та memory',
        'Supabase pgvector — vector DB, hybrid search, кастомні retriever',
        'Мульти-агентні системи з ролями та передачею контексту між агентами',
      ] : [
        'Claude Code — daily tool for development and agentic tasks',
        'OpenAI Codex CLI — parallel agentic tasks in terminal',
        'n8n AI Agent nodes — production agents with tool-calling & memory',
        'Supabase pgvector — vector DB, hybrid search, custom retrievers',
        'Multi-agent systems with roles and context handoff between agents',
      ],
    },
    {
      icon: <Code />,
      title: ua
        ? 'Backend та інтеграції'
        : 'Backend & Integrations',
      type: 'web',
      skills: ua ? [
        'Node.js — серверна логіка, кастомні API під n8n, webhook handlers',
        'PostgreSQL, Supabase — RLS, edge functions, Data Tables',
        'REST API — проєктування та інтеграція з зовнішніми системами',
        'Telegram Bot API — state machine, inline keyboards, sessions',
        'Bitrix24, Finmap, Servio HMS, Poster POS, Google Workspace',
      ] : [
        'Node.js — server logic, custom APIs for n8n, webhook handlers',
        'PostgreSQL, Supabase — RLS, edge functions, Data Tables',
        'REST API — design and integration with external systems',
        'Telegram Bot API — state machine, inline keyboards, sessions',
        'Bitrix24, Finmap, Servio HMS, Poster POS, Google Workspace',
      ],
    },
    {
      icon: <Server />,
      title: ua
        ? 'Інфраструктура та DevOps'
        : 'Infrastructure & DevOps',
      type: 'infra',
      skills: ua ? [
        'Docker Compose, Traefik — self-hosted n8n у production з SSL',
        'VPS-адміністрування, queue mode: Redis + кілька воркерів',
        'GitHub Actions — автоматичний бекап воркфлоу та конфігів',
        'Vercel — деплой фронтендів, дашбордів та лендингів',
        'React — фронтенд для внутрішніх дашбордів аналітики',
      ] : [
        'Docker Compose, Traefik — self-hosted n8n in production with SSL',
        'VPS administration, queue mode: Redis + multiple workers',
        'GitHub Actions — automated workflow and config backups',
        'Vercel — frontend, dashboard and landing page deployments',
        'React — frontend for internal analytics dashboards',
      ],
    },
    {
      icon: <Users />,
      title: ua
        ? 'Консалтинг та воркшопи'
        : 'Consulting & Workshops',
      type: 'consulting',
      skills: ua ? [
        'Воркшопи для команд: від базового ChatGPT до власних агентів',
        'Аудит бізнес-процесів і вибір ділянок з реальним ROI',
        'Стратегія автоматизації під специфіку бізнесу',
        'Розробка кастомних AI-рішень під клієнтські задачі',
        'Документація та передача знань нетехнічним командам',
      ] : [
        'Team workshops: from basic ChatGPT to building your own agents',
        'Business process audit and ROI-positive automation identification',
        'Automation strategy tailored to specific business context',
        'Custom AI solution development for client requirements',
        'Documentation and knowledge transfer for non-technical teams',
      ],
    },
  ];

  return (
    <S.SkillsSection ref={ref}>
      <S.ContentWrapper>
        <S.TitleArea>
          <S.IconWrapper>
            <BookOpen size={22} />
          </S.IconWrapper>
          <S.Title>
            {ua ? 'Навички та компетенції' : 'Skills & Expertise'}
          </S.Title>
          <S.Subtitle>
            {ua
              ? 'Постійно вдосконалюю навички та вивчаю нові технології'
              : 'Continuously improving skills and learning new technologies'}
          </S.Subtitle>
        </S.TitleArea>

        <S.SkillsGrid>
          {skillCategories.map((category, index) => (
            <S.SkillCard
              key={index}
              $delay={index * 0.07}
              $type={category.type}
            >
              <S.CategoryIcon $type={category.type}>
                {category.icon}
              </S.CategoryIcon>
              <S.CategoryTitle>{category.title}</S.CategoryTitle>
              <S.SkillsList>
                {category.skills.map((skill, i) => (
                  <S.SkillItem key={i} $accent={ACCENT[category.type]}>
                    {skill}
                  </S.SkillItem>
                ))}
              </S.SkillsList>
            </S.SkillCard>
          ))}
        </S.SkillsGrid>
      </S.ContentWrapper>
    </S.SkillsSection>
  );
};

export default Skills;
