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
      name: i18n.language === 'ua' ?
        "ProAir & ProViz" :
        "ProAir & ProViz",
      type: "proair",
      description: i18n.language === 'ua' ?
        "Розробка сервісу аналізу аудіодзвінків, навчання персоналу та системи автоматизації для менеджерів" :
        "Development of audio call analysis service, staff training and automation system for managers"
    },
    {
      name: i18n.language === 'ua' ?
        "Frontend Training Club" :
        "Frontend Training Club",
      type: "training",
      description: i18n.language === 'ua' ?
        "Джуніор фронтенд-розробник. Створення онлайн платформи для спортивних тренувань" :
        "Junior frontend developer. Creating online sports training platform"
    },
    {
      name: "VDFY",
      type: "vdfy",
      description: i18n.language === 'ua' ?
        "Створення промптів для транскрибації відео та аудіо під специфіку компанії" :
        "Creating prompts for video and audio transcription specific to company needs"
    },
    {
      name: i18n.language === 'ua' ?
        "Фінансова Академія Актив" :
        "Finance Academy Active",
      type: "finacademy",
      description: i18n.language === 'ua' ?
        "Розробка промптів під навчальні програми ACCA та DipIFR" :
        "Development of prompts for ACCA and DipIFR training programs"
    },
    {
      name: "MidJourney Image Creator",
      type: "midjourney",
      description: i18n.language === 'ua' ?
        "Генерація зображень для відеоігор, створення унікального графічного контенту" :
        "Generating images for video games, creating unique graphic content"
    },
    {
      name: i18n.language === 'ua' ?
        "AI-консультації" :
        "AI Consulting",
      type: "consulting",
      description: i18n.language === 'ua' ?
        "Консультація компаній OsviTech, JetCup, AltaKav щодо впровадження AI-рішень" :
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