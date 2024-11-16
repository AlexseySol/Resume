// About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Bot, Cpu, MessagesSquare } from 'lucide-react';
import {
  AboutSection,
  ContentContainer,
  HeaderArea,
  SectionTitle,
  MainText,
  SkillsGrid,
  SkillCard,
  CardIcon,
  CardTitle,
  CardDescription
} from './About.styles';

const About = () => {
  const { i18n } = useTranslation();

  const skills = i18n.language === 'ua' 
    ? [
        {
          icon: <Bot size={24} />,
          title: 'Промпт-інжиніринг',
          description: 'Експерт в створенні та оптимізації запитів для AI-моделей. Адаптація моделей під специфічні задачі клієнтів.'
        },
        {
          icon: <Code2 size={24} />,
          title: 'Веб-розробка',
          description: 'Професійні навички у фронтенд-розробці (HTML, CSS, JavaScript). Створення інтерактивних веб-застосунків.'
        },
        {
          icon: <Cpu size={24} />,
          title: 'AI-рішення',
          description: 'Розробка та інтеграція AI-асистентів у різні платформи. Робота з API ChatGPT, Anthropic, HuggingFace.'
        },
        {
          icon: <MessagesSquare size={24} />,
          title: 'Автоматизація',
          description: 'Налаштування автоматизації процесів через Make.com, Zapier. Створення чат-ботів на основі GPT.'
        }
      ]
    : [
        {
          icon: <Bot size={24} />,
          title: 'Prompt Engineering',
          description: 'Expert in creating and optimizing prompts for AI models. Adapting models to specific client tasks.'
        },
        {
          icon: <Code2 size={24} />,
          title: 'Web Development',
          description: 'Professional skills in frontend development (HTML, CSS, JavaScript). Creating interactive web applications.'
        },
        {
          icon: <Cpu size={24} />,
          title: 'AI Solutions',
          description: 'Development and integration of AI assistants into various platforms. Working with ChatGPT, Anthropic, HuggingFace APIs.'
        },
        {
          icon: <MessagesSquare size={24} />,
          title: 'Automation',
          description: 'Setting up process automation through Make.com, Zapier. Creating GPT-based chatbots.'
        }
      ];

  const description = i18n.language === 'ua'
    ? "Захоплений і цілеспрямований фахівець у сфері штучного інтелекту з глибокою зацікавленістю інноваціями та передовими технологіями. Маю великий досвід у розробці AI-рішень, промпт-інжинірингу та автоматизації бізнес-процесів."
    : "An enthusiastic and goal-oriented AI specialist with a deep passion for innovation and cutting-edge technologies. Extensive experience in developing AI solutions, prompt engineering, and business process automation.";

  return (
    <AboutSection>
      <ContentContainer>
        <HeaderArea>
          <SectionTitle>
            {i18n.language === 'ua' ? 'Професійний профіль' : 'Professional Profile'}
          </SectionTitle>
          <MainText>{description}</MainText>
        </HeaderArea>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard key={index} $delay={index * 0.1}>
              <CardIcon>
                {skill.icon}
              </CardIcon>
              <CardTitle>{skill.title}</CardTitle>
              <CardDescription>{skill.description}</CardDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;