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
        "AI та Промпт-інжиніринг" : 
        "AI and Prompt Engineering",
      type: "ai",
      skills: i18n.language === 'ua' ? [
        "GPT-4, Claude-2, MidJourney, DALL-E",
        "Розробка та оптимізація промптів",
        "Транскрибація аудіо та відео через AI",
        "Make.com, Zapier для AI-автоматизації",
        "Робота з API: OpenAI, Anthropic, HuggingFace"
      ] : [
        "GPT-4, Claude-2, MidJourney, DALL-E",
        "Prompt development and optimization",
        "AI-powered audio and video transcription",
        "Make.com, Zapier for AI automation",
        "APIs: OpenAI, Anthropic, HuggingFace"
      ]
    },
    {
      icon: <Code />,
      title: i18n.language === 'ua' ? 
        "Веб-розробка" : 
        "Web Development",
      type: "web",
      skills: i18n.language === 'ua' ? [
        "React.js, JavaScript, HTML5, CSS3",
        "Адаптивна верстка та веб-дизайн",
        "GitHub: версіонування та командна робота",
        "REST API інтеграції",
        "Розробка та оптимізація веб-застосунків"
      ] : [
        "React.js, JavaScript, HTML5, CSS3",
        "Responsive design and web design",
        "GitHub: versioning and team collaboration",
        "REST API integrations",
        "Web application development and optimization"
      ]
    },
    {
      icon: <Cpu />,
      title: i18n.language === 'ua' ? 
        "Автоматизація процесів" : 
        "Process Automation",
      type: "automation",
      skills: i18n.language === 'ua' ? [
        "Аналіз та оптимізація бізнес-процесів",
        "Розробка систем автоматизації",
        "Інтеграція AI в робочі процеси",
        "Автоматизація аналізу даних",
        "Оптимізація роботи команд"
      ] : [
        "Business process analysis and optimization",
        "Automation systems development",
        "AI workflow integration",
        "Data analysis automation",
        "Team workflow optimization"
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