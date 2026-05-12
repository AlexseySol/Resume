import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSectionTracking } from '../../hooks/useSectionTracking';
import * as S from './Experience.styles';

const Experience = () => {
  const ref = useSectionTracking('experience');
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const companies = [
    {
      name: i18n.language === 'ua' ? "Фріланс — AI & Автоматизація" : "Freelance — AI & Automation",
      type: "freelance",
      period: i18n.language === 'ua' ? "Грудень 2025 — по сьогодні" : "December 2025 — Present",
      description: i18n.language === 'ua' ?
        "Розробка AI-агентів та автоматизація бізнес-процесів через n8n. Проектування REST API інтеграцій, робота з Claude Code та OpenAI Codex для прискорення розробки. Консультування клієнтів щодо підбору AI-стеку." :
        "Building AI agents and automating business processes via n8n. Designing REST API integrations, using Claude Code and OpenAI Codex to accelerate development. Consulting clients on AI stack selection."
    },
    {
      name: "StickerWall",
      type: "stickerwall",
      period: i18n.language === 'ua' ? "Січень 2024 — Грудень 2024" : "January 2024 — December 2024",
      description: i18n.language === 'ua' ?
        "AI-інтегратор. Впровадження AI-рішень у бізнес-процеси компанії. Проводив внутрішні воркшопи для команди по роботі з ChatGPT, Claude та інструментами автоматизації. Побудував n8n-пайплайни для обробки контенту." :
        "AI Integrator. Implemented AI solutions into company business processes. Conducted internal workshops for the team on using ChatGPT, Claude and automation tools. Built n8n pipelines for content processing."
    },
    {
      name: "ProAir & ProViz",
      type: "proair",
      period: i18n.language === 'ua' ? "Червень 2024 — Листопад 2024" : "June 2024 — November 2024",
      description: i18n.language === 'ua' ?
        "Розробив сервіс аналізу аудіодзвінків на базі Whisper + GPT-4o. Навчав менеджерів роботі з AI-інструментами, провів серію воркшопів. Автоматизував звітність команди через n8n + Google Sheets." :
        "Built an audio call analysis service based on Whisper + GPT-4o. Trained managers on AI tools, ran a series of workshops. Automated team reporting via n8n + Google Sheets."
    },
    {
      name: "VDFY",
      type: "vdfy",
      period: i18n.language === 'ua' ? "Квітень 2024 — Серпень 2024" : "April 2024 — August 2024",
      description: i18n.language === 'ua' ?
        "Платформа відеооглядів громадської думки. Розробляв промпти для транскрибації та аналізу відео/аудіо. Інтегрував AssemblyAI + GPT-4o для автоматичного саммері контенту." :
        "Public opinion video review platform. Developed prompts for video/audio transcription and analysis. Integrated AssemblyAI + GPT-4o for automatic content summarization."
    },
    {
      name: i18n.language === 'ua' ? "Фінансова Академія Актив" : "Finance Academy Active",
      type: "finacademy",
      period: i18n.language === 'ua' ? "Січень 2024 — Березень 2024" : "January 2024 — March 2024",
      description: i18n.language === 'ua' ?
        "Розробляв AI-промпти для навчальних програм ACCA та DipIFR. Адаптував моделі GPT для генерації тестових завдань та пояснень фінансових концепцій." :
        "Developed AI prompts for ACCA and DipIFR training programs. Adapted GPT models to generate test questions and financial concept explanations."
    },
    {
      name: i18n.language === 'ua' ? "AI-консалтинг" : "AI Consulting",
      type: "consulting",
      period: i18n.language === 'ua' ? "Січень 2023 — по сьогодні" : "January 2023 — Present",
      description: i18n.language === 'ua' ?
        "Консультую компанії OsviTech, JetCup, AltaKav по впровадженню AI. Проводжу воркшопи для керівників та команд по використанню LLM, автоматизації та побудові AI-агентів." :
        "Consulting OsviTech, JetCup, AltaKav on AI adoption. Running workshops for managers and teams on LLM usage, automation and AI agent development."
    },
    {
      name: "Frontend Training Club",
      type: "training",
      period: i18n.language === 'ua' ? "Лютий 2024 — Травень 2024" : "February 2024 — May 2024",
      description: i18n.language === 'ua' ?
        "Frontend-розробник. Створення онлайн-платформи для спортивних тренувань на React.js." :
        "Frontend developer. Built an online sports training platform using React.js."
    },
    {
      name: "MidJourney — AI Graphics",
      type: "midjourney",
      period: i18n.language === 'ua' ? "Вересень 2023 — Грудень 2023" : "September 2023 — December 2023",
      description: i18n.language === 'ua' ?
        "Генерація унікальної графіки для відеоігор за допомогою MidJourney та Stable Diffusion." :
        "Generated unique game graphics using MidJourney and Stable Diffusion."
    }
  ];

  return (
    <S.ExperienceSection ref={ref}>
      <S.ContentWrapper>
        <S.TitleArea data-aos="fade-down" data-aos-duration="800">
          <S.IconWrapper>
            <Briefcase size={28} />
          </S.IconWrapper>
          <S.Title>
            {i18n.language === 'ua' ? 'Досвід роботи' : 'Work Experience'}
          </S.Title>
        </S.TitleArea>

        <S.CardsGrid>
          {companies.map((company, index) => (
            <S.CompanyCard
              key={index}
              $type={company.type}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <S.CompanyName>{company.name}</S.CompanyName>
              {company.period && <S.Period>{company.period}</S.Period>}
              <S.Description>
                {company.description}
              </S.Description>
            </S.CompanyCard>
          ))}
        </S.CardsGrid>
      </S.ContentWrapper>
    </S.ExperienceSection>
  );
};

export default Experience;