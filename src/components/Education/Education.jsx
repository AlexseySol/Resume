import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Building, Code, Bookmark } from 'lucide-react';
import * as S from './Education.styles';

const Education = () => {
  const { t, i18n } = useTranslation();

  const educationData = [
    {
      icon: <Building size={24} />,
      title: "ЛНАУ",
      fullTitle: i18n.language === 'ua' ? 
        "Луганський Національний Аграрний Університет" :
        "Luhansk National Agrarian University",
      period: "2013 – 2017",
      location: i18n.language === 'ua' ? 
        "Україна, Луганськ-Харків" :
        "Ukraine, Luhansk-Kharkiv",
      type: "university",
      specialty: i18n.language === 'ua' ? 
        "Промислове та цивільне будівництво" :
        "Industrial and Civil Engineering"
    },
    {
      icon: <Code size={24} />,
      title: "Prog.Academy",
      period: "2022 – 2023",
      location: i18n.language === 'ua' ? 
        "Україна, Київ" :
        "Ukraine, Kyiv",
      type: "academy",
      program: "Frontend Training Club",
      details: i18n.language === 'ua' ? 
        "Професійне навчання веб-розробці: HTML, CSS, JavaScript та сучасні фреймворки" :
        "Professional web development training: HTML, CSS, JavaScript and modern frameworks"
    },
    {
      icon: <Bookmark size={24} />,
      title: i18n.language === 'ua' ? "AI та Автоматизація" : "AI & Automation",
      period: "2023",
      type: "courses",
      courses: i18n.language === 'ua' ? [
        "Розробка та оптимізація промптів для AI-моделей",
        "Автоматизація бізнес-процесів з використанням штучного інтелекту"
      ] : [
        "Development and optimization of prompts for AI models",
        "Business process automation using artificial intelligence"
      ]
    }
  ];

  return (
    <S.EducationSection>
      <S.ContentWrapper>
        <S.TitleArea>
          <S.IconWrapper>
            <GraduationCap size={28} />
          </S.IconWrapper>
          <S.SectionTitle>
            {i18n.language === 'ua' ? 'Освіта' : 'Education'}
          </S.SectionTitle>
        </S.TitleArea>

        <S.CardsContainer>
          {educationData.map((card, index) => (
            <S.EducationCard 
              key={index} 
              $delay={index * 0.15} 
              $type={card.type}
            >
              <S.CardIconWrapper>
                {card.icon}
              </S.CardIconWrapper>
              
              <S.CardContent>
                <S.CardTitle>
                  {card.title}
                  {card.fullTitle && (
                    <S.CardFullTitle>{card.fullTitle}</S.CardFullTitle>
                  )}
                </S.CardTitle>

                {(card.location || card.period) && (
                  <S.CardMeta>
                    {card.location && (
                      <S.LocationWrapper>
                        <span>{card.location}</span>
                      </S.LocationWrapper>
                    )}
                    {card.period && (
                      <S.Period>{card.period}</S.Period>
                    )}
                  </S.CardMeta>
                )}

                {card.specialty && (
                  <S.SpecialtyBadge>
                    {card.specialty}
                  </S.SpecialtyBadge>
                )}

                {card.program && (
                  <S.ProgramInfo>
                    <S.ProgramTitle>{card.program}</S.ProgramTitle>
                    <S.ProgramDetails>{card.details}</S.ProgramDetails>
                  </S.ProgramInfo>
                )}

                {card.courses && (
                  <S.CoursesList>
                    {card.courses.map((course, i) => (
                      <S.CourseItem key={i}>
                        {course}
                      </S.CourseItem>
                    ))}
                  </S.CoursesList>
                )}
              </S.CardContent>
            </S.EducationCard>
          ))}
        </S.CardsContainer>
      </S.ContentWrapper>
    </S.EducationSection>
  );
};

export default Education;