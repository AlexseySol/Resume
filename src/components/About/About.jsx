import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Heart, Target, AlertTriangle, Sparkles } from 'lucide-react';
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
  Divider,
  StrengthsList,
  StrengthItem,
  ChallengesList,
  ChallengeItem,
  Quote
} from './About.styles';

const About = () => {
  const { i18n } = useTranslation();

  const personalityData = i18n.language === 'ua'
    ? {
        intro: "Спеціалізуюся на автоматизації бізнес-процесів та впровадженні AI-рішень через NO-CODE платформу n8n. Створюю системи, які економлять час і підвищують ефективність роботи команд.",
        mind: {
          title: "Експертиза",
          strengths: [
            "Розробка AI-агентів для автоматизації комунікацій",
            "Інтеграція штучного інтелекту в бізнес-процеси",
            "Автоматизація через n8n та NO-CODE рішення",
            "Аналіз та оптимізація робочих процесів"
          ],
          challenges: []
        },
        heart: {
          title: "Підхід до роботи",
          strengths: [
            "Фокус на практичних рішеннях, що дають результат",
            "Швидка адаптація під потреби бізнесу",
            "Комплексний підхід від аналізу до впровадження",
            "Навчання команд роботі з новими інструментами"
          ],
          challenges: []
        },
        principles: {
          title: "Філософія",
          quote: "Автоматизація та AI мають спрощувати роботу, а не ускладнювати її. Мій підхід — створювати рішення, якими легко користуватись і які реально економлять час."
        }
      }
    : {
        intro: "I specialize in business process automation and AI implementation through the NO-CODE platform n8n. I create systems that save time and increase team efficiency.",
        mind: {
          title: "Expertise",
          strengths: [
            "Development of AI agents for communication automation",
            "Integration of artificial intelligence into business processes",
            "Automation through n8n and NO-CODE solutions",
            "Analysis and optimization of workflows"
          ],
          challenges: []
        },
        heart: {
          title: "Work Approach",
          strengths: [
            "Focus on practical solutions that deliver results",
            "Quick adaptation to business needs",
            "Comprehensive approach from analysis to implementation",
            "Training teams to work with new tools"
          ],
          challenges: []
        },
        principles: {
          title: "Philosophy",
          quote: "Automation and AI should simplify work, not complicate it. My approach is to create solutions that are easy to use and genuinely save time."
        }
      };

  return (
    <AboutSection>
      <ContentContainer>
        <HeaderArea>
          <SectionTitle>
            {i18n.language === 'ua' ? 'Про мене' : 'About me'}
          </SectionTitle>
          <MainText>{personalityData.intro}</MainText>
        </HeaderArea>

        <CardsGrid>
          <PersonalityCard>
            <CardHeader>
              <CardIcon><Brain size={24} /></CardIcon>
              {personalityData.mind.title}
            </CardHeader>
            <CardContent>
              <StrengthsList>
                {personalityData.mind.strengths.map((strength, index) => (
                  <StrengthItem key={index}>
                    <Sparkles size={16} />
                    {strength}
                  </StrengthItem>
                ))}
              </StrengthsList>
            </CardContent>
          </PersonalityCard>

          <PersonalityCard>
            <CardHeader>
              <CardIcon><Heart size={24} /></CardIcon>
              {personalityData.heart.title}
            </CardHeader>
            <CardContent>
              <StrengthsList>
                {personalityData.heart.strengths.map((strength, index) => (
                  <StrengthItem key={index}>
                    <Sparkles size={16} />
                    {strength}
                  </StrengthItem>
                ))}
              </StrengthsList>
            </CardContent>
          </PersonalityCard>

          <PersonalityCard $wide>
            <CardHeader>
              <CardIcon><Target size={24} /></CardIcon>
              {personalityData.principles.title}
            </CardHeader>
            <CardContent>
              <Quote>{personalityData.principles.quote}</Quote>
            </CardContent>
          </PersonalityCard>
        </CardsGrid>
      </ContentContainer>
    </AboutSection>
  );
};

export default About;