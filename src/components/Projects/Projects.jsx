import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  Folder, Bot, TrendingUp, MessageCircle, FileText, Calendar, Sparkles, Phone,
  BarChart2, Users, Rss, Youtube, Wand2, Star, Package, Brain, Smartphone,
} from 'lucide-react';
import * as S from './Projects.styles';
import { getAllProjects } from '../../data/projectsData';
import { useSectionTracking } from '../../hooks/useSectionTracking';
import { track } from '../../analytics/tracker';
import { EVENTS } from '../../analytics/events';

const ICON_MAP = {
  Bot, TrendingUp, MessageCircle, FileText, Calendar, Sparkles, Phone,
  BarChart2, Users, Rss, Youtube, Wand2, Star, Package, Brain, Smartphone,
};

const CAT_LABEL = {
  ai:         { ua: 'AI',            en: 'AI' },
  automation: { ua: 'Автоматизація', en: 'Automation' },
  fullstack:  { ua: 'Full-stack',    en: 'Full-stack' },
};

const Projects = () => {
  const { i18n } = useTranslation();
  const ref = useSectionTracking('projects');
  const lang = i18n.language === 'ua' ? 'ua' : 'en';
  const allProjects = getAllProjects();

  return (
    <S.ProjectsSection ref={ref} id="projects-section">
      <S.ContentWrapper>
        <S.TitleArea>
          <S.IconWrapper><Folder size={22} /></S.IconWrapper>
          <S.Title>{lang === 'ua' ? 'Мої проекти' : 'My Projects'}</S.Title>
          <S.Subtitle>
            {lang === 'ua'
              ? 'Реальні проекти з автоматизації та впровадження ШІ'
              : 'Real automation and AI implementation projects'}
          </S.Subtitle>
        </S.TitleArea>

        <S.ProjectsGrid>
          {allProjects.map((project, index) => {
            const data = project[lang] || project.en;
            const Icon = ICON_MAP[project.icon] || Bot;
            const catLabel = (CAT_LABEL[project.category] || {})[lang] || project.category;

            return (
              <S.ProjectCard
                as={Link}
                to={`/project/${project.id}`}
                key={project.id}
                $delay={index * 0.06}
                $category={project.category}
                onClick={() => {
                  sessionStorage.setItem('scroll_restore', String(window.scrollY));
                  track(EVENTS.PROJECT_CLICK, 'projects', { title: data.title });
                }}
                style={{ textDecoration: 'none' }}
              >
                <S.CardTop>
                  <S.ProjectIcon $category={project.category}>
                    <Icon size={17} />
                  </S.ProjectIcon>
                  <S.CategoryBadge $category={project.category}>{catLabel}</S.CategoryBadge>
                </S.CardTop>
                <S.ProjectTitle>{data.title}</S.ProjectTitle>
                <S.ProjectShortDesc>{data.shortDesc}</S.ProjectShortDesc>
                <S.TechList>
                  {project.technologies.slice(0, 4).map(t => (
                    <S.TechTag key={t}>{t}</S.TechTag>
                  ))}
                </S.TechList>
                <S.ReadMore $category={project.category}>
                  {lang === 'ua' ? 'Детальніше →' : 'Read more →'}
                </S.ReadMore>
              </S.ProjectCard>
            );
          })}
        </S.ProjectsGrid>
      </S.ContentWrapper>
    </S.ProjectsSection>
  );
};

export default Projects;
