import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as S from './Experience.styles';

const Experience = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    AOS.refresh();
  }, []);

  const companies = [
    {
      name: i18n.language === 'ua' ? "Фріланс" : "Freelance",
      type: "freelance",
      period: i18n.language === 'ua' ? "Грудень 2025 - по сьогодні" : "December 2025 - Present",
      description: i18n.language === 'ua' ?
        "Надання послуг з автоматизації бізнес-процесів, розробка ШІ-агентів, інтеграція AI-рішень через n8n" :
        "Providing business process automation services, AI agent development, AI solutions integration via n8n"
    },
    {
      name: "StickerWall",
      type: "stickerwall",
      period: i18n.language === 'ua' ? "Січень 2024 - Грудень 2024" : "January 2024 - December 2024",
      description: i18n.language === 'ua' ?
        "ШІ впроваджуватель штучного інтелекту / ШІ інтегратор. Впровадження AI-рішень для автоматизації бізнес-процесів" :
        "AI Implementation Expert / AI Integrator. Implementation of AI solutions for business process automation"
    },
    {
      name: i18n.language === 'ua' ?
        "ProAir & ProViz" :
        "ProAir & ProViz",
      type: "proair",
      period: i18n.language === 'ua' ? "Червень 2024 - Листопад 2024" : "June 2024 - November 2024",
      description: i18n.language === 'ua' ?
        "Розробка сервісу аналізу аудіодзвінків, навчання персоналу та системи автоматизації для менеджерів" :
        "Development of audio call analysis service, staff training and automation system for managers"
    },
    {
      name: i18n.language === 'ua' ?
        "Frontend Training Club" :
        "Frontend Training Club",
      type: "training",
      period: i18n.language === 'ua' ? "Лютий 2024 - Травень 2024" : "February 2024 - May 2024",
      description: i18n.language === 'ua' ?
        "Джуніор фронтенд-розробник. Створення онлайн платформи для спортивних тренувань" :
        "Junior frontend developer. Creating online sports training platform"
    },
    {
      name: "VDFY",
      type: "vdfy",
      period: i18n.language === 'ua' ? "Квітень 2024 - Серпень 2024" : "April 2024 - August 2024",
      description: i18n.language === 'ua' ?
        "Створення промптів для транскрибації відео та аудіо під специфіку компанії" :
        "Creating prompts for video and audio transcription specific to company needs"
    },
    {
      name: i18n.language === 'ua' ?
        "Фінансова Академія Актив" :
        "Finance Academy Active",
      type: "finacademy",
      period: i18n.language === 'ua' ? "Січень 2024 - Березень 2024" : "January 2024 - March 2024",
      description: i18n.language === 'ua' ?
        "Розробка промптів під навчальні програми ACCA та DipIFR" :
        "Development of prompts for ACCA and DipIFR training programs"
    },
    {
      name: "MidJourney Image Creator",
      type: "midjourney",
      period: i18n.language === 'ua' ? "Вересень 2023 - Грудень 2023" : "September 2023 - December 2023",
      description: i18n.language === 'ua' ?
        "Генерація зображень для відеоігор, створення унікального графічного контенту" :
        "Generating images for video games, creating unique graphic content"
    },
    {
      name: i18n.language === 'ua' ?
        "ШІ-консультації" :
        "AI Consulting",
      type: "consulting",
      period: i18n.language === 'ua' ? "Січень 2023 - по сьогодні" : "January 2023 - Present",
      description: i18n.language === 'ua' ?
        "Консультація компаній OsviTech, JetCup, AltaKav щодо впровадження ШІ-рішень" :
        "Consulting for OsviTech, JetCup, AltaKav on AI solutions implementation"
    }
  ];

  return (
    <S.ExperienceSection>
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