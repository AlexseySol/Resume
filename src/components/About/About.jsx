import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Zap, Target, Sparkles } from 'lucide-react';
import { useSectionTracking } from '../../hooks/useSectionTracking';
import {
  AboutSection,
  ContentContainer,
  HeaderArea,
  SectionTitle,
  MainText,
  CardsGrid,
  PersonalityCard,
  CardHeader,
  CardIcon,
  CardContent,
  StrengthsList,
  StrengthItem,
  Quote,
} from './About.styles';

const About = () => {
  const ref = useSectionTracking('about');
  const { i18n } = useTranslation();
  const ua = i18n.language === 'ua';

  const data = ua
    ? {
        intro:
          '3+ роки в AI-автоматизації та системних інтеграціях. Проєктую мульти-агентні системи на n8n з Claude та GPT-5, будую RAG-архітектури на Supabase pgvector, інтегрую API телефонії, CRM, HMS, платіжних систем та LLM-провайдерів у єдині production-пайплайни.\n\nРозгортаю self-hosted n8n у production-режимі на VPS: Docker Compose, Traefik, PostgreSQL, Redis, queue mode з кількома воркерами. Від проєктування архітектури до фінального деплою та документації.',
        mind: {
          title: 'Експертиза',
          strengths: [
            'AI-агенти: Claude Code, OpenAI Codex CLI, n8n AI Agent, multi-agent workflows',
            'RAG та векторний пошук: Supabase pgvector, hybrid search, chunking-стратегії',
            'n8n у production: self-hosted, queue mode, Docker Compose, GitHub-бекапи',
            'REST API та інтеграції: OAuth 2.0, webhook-маршрутизація, Node.js',
            'Голосові пайплайни: AssemblyAI, Whisper — транскрибація та AI-аналітика',
          ],
        },
        heart: {
          title: 'Підхід до роботи',
          strengths: [
            'Аудит процесу → MVP → ітерації під реальне використання',
            'Готові рішення, які команда запускає одразу без ручного супроводу',
            'Воркшопи з впровадження AI — щоб після здачі все працювало автономно',
            'Чесно кажу, де AI не потрібен і вистачить простого скрипта',
            'Документую все: воркфлоу, схеми даних, інструкції для нетехнічних',
          ],
        },
        principles: {
          title: 'Філософія',
          quote:
            'AI — це інструмент економії часу команди, а не вітрина технологій. Моя метрика успіху — скільки годин на тиждень повертається людям після впровадження. Якщо рішення складне в підтримці або вимагає мене щотижня — це поганий продукт.',
        },
      }
    : {
        intro:
          '3+ years in AI automation and system integrations. I design multi-agent systems on n8n with Claude and GPT-5, build RAG architectures on Supabase pgvector, and integrate telephony APIs, CRM, HMS, payment systems and LLM providers into unified production pipelines.\n\nI deploy self-hosted n8n in production mode on VPS: Docker Compose, Traefik, PostgreSQL, Redis, queue mode with multiple workers. From architecture design to final deployment and documentation.',
        mind: {
          title: 'Expertise',
          strengths: [
            'AI agents: Claude Code, OpenAI Codex CLI, n8n AI Agent, multi-agent workflows',
            'RAG & vector search: Supabase pgvector, hybrid search, chunking strategies',
            'n8n in production: self-hosted, queue mode, Docker Compose, GitHub backups',
            'REST API & integrations: OAuth 2.0, webhook routing, Node.js',
            'Voice pipelines: AssemblyAI, Whisper — transcription & AI call analytics',
          ],
        },
        heart: {
          title: 'Work Approach',
          strengths: [
            'Process audit → MVP → iterations for real-world usage',
            'Ready-to-run solutions that teams launch immediately',
            'AI workshops — so everything runs autonomously after handoff',
            'Honest about when AI isn\'t needed and a simple script will do',
            'Document everything: workflows, data schemas, guides for non-technical users',
          ],
        },
        principles: {
          title: 'Philosophy',
          quote:
            'AI is a tool for saving the team\'s time, not a technology showcase. My success metric: how many hours per week are returned to people after implementation. If a solution is hard to maintain or requires me every week — it\'s a bad product.',
        },
      };

  return (
    <AboutSection ref={ref}>
      <ContentContainer>
        <HeaderArea>
          <SectionTitle>{ua ? 'Про мене' : 'About me'}</SectionTitle>
          <MainText>{data.intro}</MainText>
        </HeaderArea>

        <CardsGrid>
          <PersonalityCard>
            <CardHeader>
              <CardIcon><Brain size={14} /></CardIcon>
              {data.mind.title}
            </CardHeader>
            <CardContent>
              <StrengthsList>
                {data.mind.strengths.map((s, i) => (
                  <StrengthItem key={i}>
                    <Sparkles size={14} />
                    {s}
                  </StrengthItem>
                ))}
              </StrengthsList>
            </CardContent>
          </PersonalityCard>

          <PersonalityCard>
            <CardHeader>
              <CardIcon><Zap size={14} /></CardIcon>
              {data.heart.title}
            </CardHeader>
            <CardContent>
              <StrengthsList>
                {data.heart.strengths.map((s, i) => (
                  <StrengthItem key={i}>
                    <Sparkles size={14} />
                    {s}
                  </StrengthItem>
                ))}
              </StrengthsList>
            </CardContent>
          </PersonalityCard>

          <PersonalityCard $wide>
            <CardHeader>
              <CardIcon><Target size={14} /></CardIcon>
              {data.principles.title}
            </CardHeader>
            <CardContent>
              <Quote>{data.principles.quote}</Quote>
            </CardContent>
          </PersonalityCard>
        </CardsGrid>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;
