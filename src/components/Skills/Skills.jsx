import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Bot, Cpu, Users, BookOpen } from 'lucide-react';
import * as S from './Skills.styles';

const Skills = () => {
  const { i18n } = useTranslation();

  const skillCategories = [
    {
      icon: <Bot />,
      title: i18n.language === 'ua' ?
        "NO-CODE автоматизація (1+ рік досвіду)" :
        "NO-CODE Automation (1+ year experience)",
      type: "nocode",
      skills: i18n.language === 'ua' ? [
        "n8n - експертний рівень",
        "Досвід роботи з Make.com, Zapier",
        "Інтеграція API та Webhooks",
        "Підключення CRM, фінансових додатків",
        "Google Sheets, Facebook Looker Studio"
      ] : [
        "n8n - expert level",
        "Experience with Make.com, Zapier",
        "API and Webhooks integration",
        "CRM, financial apps integration",
        "Google Sheets, Facebook Looker Studio"
      ]
    },
    {
      icon: <Bot />,
      title: i18n.language === 'ua' ?
        "ШІ та Промпт-інжиніринг" :
        "AI and Prompt Engineering",
      type: "ai",
      skills: i18n.language === 'ua' ? [
        "GPT-4, GPT-4 Turbo, Claude Sonnet 4",
        "Gemini 2.0 Flash, Grok (xAI)",
        "Розробка ШІ-агентів для автоматизації",
        "Транскрибація: Whisper, AssemblyAI",
        "Векторні БД для пошуку (Supabase)"
      ] : [
        "GPT-4, GPT-4 Turbo, Claude Sonnet 4",
        "Gemini 2.0 Flash, Grok (xAI)",
        "AI agents development for automation",
        "Transcription: Whisper, AssemblyAI",
        "Vector DB for search (Supabase)"
      ]
    },
    {
      icon: <Code />,
      title: i18n.language === 'ua' ?
        "Веб-розробка та Backend" :
        "Web Development and Backend",
      type: "web",
      skills: i18n.language === 'ua' ? [
        "React.js, JavaScript, HTML5, CSS3",
        "Node.js - серверна частина",
        "REST API розробка та інтеграції",
        "PostgreSQL, MongoDB",
        "GitHub, адаптивна верстка"
      ] : [
        "React.js, JavaScript, HTML5, CSS3",
        "Node.js - backend development",
        "REST API development and integrations",
        "PostgreSQL, MongoDB",
        "GitHub, responsive design"
      ]
    },
    {
      icon: <Cpu />,
      title: i18n.language === 'ua' ?
        "Бази даних та інтеграції" :
        "Databases and Integrations",
      type: "databases",
      skills: i18n.language === 'ua' ? [
        "PostgreSQL, MongoDB",
        "Supabase (векторні БД)",
        "Redis для кешування",
        "Telegram Bot API, ManyChat",
        "Social Media APIs (Instagram, Facebook, TikTok)"
      ] : [
        "PostgreSQL, MongoDB",
        "Supabase (vector databases)",
        "Redis for caching",
        "Telegram Bot API, ManyChat",
        "Social Media APIs (Instagram, Facebook, TikTok)"
      ]
    },
    {
      icon: <Users />,
      title: i18n.language === 'ua' ? 
        "Консалтинг та навчання" : 
        "Consulting and Training",
      type: "consulting",
      skills: i18n.language === 'ua' ? [
        "Консультації з впровадження AI-рішень",
        "Навчання команд роботі з AI",
        "Розробка стратегій автоматизації",
        "Аудит та оптимізація процесів",
        "Створення навчальних матеріалів"
      ] : [
        "AI implementation consulting",
        "Team training in AI technologies",
        "Automation strategy development",
        "Process audit and optimization",
        "Educational materials creation"
      ]
    }
  ];

  return (
    <S.SkillsSection>
      <S.ContentWrapper>
        <S.TitleArea>
          <S.IconWrapper>
            <BookOpen size={28} />
          </S.IconWrapper>
          <S.Title>
            {i18n.language === 'ua' ? 'Навички та компетенції' : 'Skills & Expertise'}
          </S.Title>
          <S.Subtitle>
            {i18n.language === 'ua' 
              ? 'Постійно вдосконалюю навички та вивчаю нові технології'
              : 'Continuously improving skills and learning new technologies'
            }
          </S.Subtitle>
        </S.TitleArea>

        <S.SkillsGrid>
          {skillCategories.map((category, index) => (
            <S.SkillCard 
              key={index}
              $delay={index * 0.1}
              $type={category.type}
            >
              <S.CategoryIcon>
                {category.icon}
              </S.CategoryIcon>
              <S.CategoryTitle>
                {category.title}
              </S.CategoryTitle>
              <S.SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <S.SkillItem key={skillIndex}>
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