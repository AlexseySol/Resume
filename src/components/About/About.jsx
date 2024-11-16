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
        intro: "Привіт! Я розробник, що захоплюється технологіями та інноваціями. Моя історія - це постійний пошук балансу між технічною досконалістю та людяністю у всьому, що я роблю.",
        mind: {
          title: "Мислення",
          strengths: [
            "Технічна кмітливість та гнучкість мислення",
            "Аналітичний підхід до вирішення задач",
            "Здатність швидко опановувати нові технології",
            "Системний погляд на проблеми"
          ],
          challenges: [
            "Іноді надто заглиблююсь в деталі",
            "Можу перезавантажити себе багатьма ідеями",
            "Прагнення до досконалості може сповільнювати"
          ]
        },
        heart: {
          title: "Характер",
          strengths: [
            "Щире захоплення своєю справою",
            "Відкритість до нового",
            "Бажання ділитися знаннями",
            "Прагнення до постійного розвитку"
          ],
          challenges: [
            "Можу бути надто самокритичним",
            "Складно делегувати завдання",
            "Іноді надто занурююсь в роботу"
          ]
        },
        principles: {
          title: "Принципи",
          quote: "Вірю, що технології мають робити життя людей кращим, а не складнішим. Саме тому я завжди шукаю баланс між інноваціями та простотою використання."
        }
      }
    : {
        intro: "Hi! I'm a developer passionate about technology and innovation. My story is a constant search for balance between technical excellence and humanity in everything I do.",
        mind: {
          title: "Mindset",
          strengths: [
            "Technical ingenuity and flexible thinking",
            "Analytical approach to problem-solving",
            "Quick adoption of new technologies",
            "Systematic view of problems"
          ],
          challenges: [
            "Sometimes dive too deep into details",
            "Can overload myself with many ideas",
            "Perfectionism might slow things down"
          ]
        },
        heart: {
          title: "Character",
          strengths: [
            "Genuine passion for what I do",
            "Openness to new things",
            "Desire to share knowledge",
            "Commitment to continuous growth"
          ],
          challenges: [
            "Can be too self-critical",
            "Difficulty delegating tasks",
            "Sometimes get too absorbed in work"
          ]
        },
        principles: {
          title: "Principles",
          quote: "I believe technology should make people's lives better, not more complicated. That's why I always seek balance between innovation and ease of use."
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
              <Divider />
              <ChallengesList>
                {personalityData.mind.challenges.map((challenge, index) => (
                  <ChallengeItem key={index}>
                    <AlertTriangle size={16} />
                    {challenge}
                  </ChallengeItem>
                ))}
              </ChallengesList>
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
              <Divider />
              <ChallengesList>
                {personalityData.heart.challenges.map((challenge, index) => (
                  <ChallengeItem key={index}>
                    <AlertTriangle size={16} />
                    {challenge}
                  </ChallengeItem>
                ))}
              </ChallengesList>
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