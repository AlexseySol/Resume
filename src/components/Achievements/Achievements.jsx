// Achievements.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trophy, Star } from 'lucide-react';
import {
  AchievementsSection,
  TitleArea,
  SectionTitle,
  AchievementsWrapper,
  AchievementCard,
  CardHeader,
  CardIcon,
  CardContent,
} from './Achievements.styles';

const Achievements = () => {
  const { i18n } = useTranslation();

  const achievements = i18n.language === 'ua' 
    ? [
        {
          title: 'AI-графіка',
          desc: 'Створив унікальну графіку для відеоігор за допомогою AI, покращивши візуальну складову та залучивши більше користувачів.'
        },
        {
          title: 'Голосова аналітика',
          desc: 'Розробив інструмент аналізу аудіодзвінків на основі AI, що сприяє підвищенню якості обслуговування та ефективності комунікацій.'
        },
        {
          title: 'Автоматизація',
          desc: 'Автоматизував ключові завдання менеджерів, що призвело до збільшення продуктивності та скорочення часу на виконання рутинних операцій.'
        }
      ]
    : [
        {
          title: 'AI Graphics',
          desc: 'Created unique graphics for video games using AI, enhancing visuals and attracting more users.'
        },
        {
          title: 'Voice Analytics',
          desc: 'Developed an AI-based audio call analyzer to improve service quality and communication efficiency.'
        },
        {
          title: 'Automation',
          desc: 'Automated key manager tasks, leading to increased productivity and reduced time on routine operations.'
        }
      ];



  return (
    <AchievementsSection>
      <TitleArea>
        <CardIcon>
          <Trophy size={28} />
        </CardIcon>
        <SectionTitle>
          {i18n.language === 'ua' ? 'Ключові досягнення' : 'Key Achievements'}
        </SectionTitle>
      </TitleArea>

      <AchievementsWrapper>
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} $delay={index * 0.15}>
            <CardHeader>
              <CardIcon>
                <Star size={20} />
              </CardIcon>
              <h3>{achievement.title}</h3>
            </CardHeader>
            <CardContent>
              {achievement.desc}
            </CardContent>
          </AchievementCard>
        ))}
      </AchievementsWrapper>

      
    </AchievementsSection>
  );
};

export default Achievements;