import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import { getAllProjects } from '../../data/projectsData';
import { track } from '../../analytics/tracker';
import { EVENTS } from '../../analytics/events';
import * as S from './ProjectPage.styles';

const CAT_COLOR = {
  ai:         '#A78BFA',
  automation: '#34D399',
  fullstack:  '#60A5FA',
};
const CAT_LABEL = {
  ai:         { ua: 'AI', en: 'AI' },
  automation: { ua: 'Автоматизація', en: 'Automation' },
  fullstack:  { ua: 'Full-stack', en: 'Full-stack' },
};

function parseDescription(text) {
  const sections = [];
  const lines = text.split('\n');
  let currentSection = { type: 'text', content: [] };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      if (currentSection.content.length > 0) {
        sections.push({ ...currentSection });
        currentSection = { type: 'text', content: [] };
      }
      continue;
    }

    if (line.startsWith('**') && line.endsWith('**') && line.endsWith(':**')) {
      if (currentSection.content.length > 0) sections.push({ ...currentSection });
      currentSection = {
        type: 'section',
        title: line.replace(/\*\*/g, '').replace(':', ''),
        content: [],
      };
    } else if (line.startsWith('**') && line.endsWith('**')) {
      currentSection.content.push({ type: 'subtitle', text: line.replace(/\*\*/g, '') });
    } else if (line.startsWith('✅') || line.startsWith('❌')) {
      currentSection.content.push({ type: 'checkitem', icon: line[0], text: line.substring(2).trim() });
    } else if (line.startsWith('•') || line.startsWith('-')) {
      currentSection.content.push({ type: 'bullet', text: line.substring(1).trim() });
    } else if (line.includes('🔗') || line.includes('🎥') || line.includes('📱')) {
      currentSection.content.push({ type: 'highlight', text: line });
    } else {
      currentSection.content.push({ type: 'text', text: line });
    }
  }

  if (currentSection.content.length > 0) sections.push(currentSection);
  return sections;
}

function renderItem(item, index) {
  switch (item.type) {
    case 'subtitle':
      return <S.Subtitle key={index}>{item.text}</S.Subtitle>;
    case 'checkitem':
      return (
        <S.CheckItem key={index} $positive={item.icon === '✅'}>
          <S.CheckIcon>{item.icon}</S.CheckIcon>
          <span>{item.text}</span>
        </S.CheckItem>
      );
    case 'bullet':
      return (
        <S.BulletItem key={index}>
          <S.Bullet />
          <span>{item.text}</span>
        </S.BulletItem>
      );
    case 'highlight':
      return <S.HighlightText key={index}>{item.text}</S.HighlightText>;
    default:
      return <S.Paragraph key={index}>{item.text}</S.Paragraph>;
  }
}

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('i18nextLng') || 'en'; } catch { return 'en'; }
  });
  const [lightbox, setLightbox] = useState(null);

  const allProjects = getAllProjects();
  const project = allProjects.find(p => p.id === id);

  useEffect(() => {
    if (project) {
      track(EVENTS.PROJECT_CLICK, 'projects', { title: project[lang]?.title || project.id, page: true });
      window.scrollTo(0, 0);
    }
  }, [id]);

  const switchLang = (l) => {
    setLang(l);
    try { localStorage.setItem('i18nextLng', l); } catch {}
  };

  if (!project) {
    return (
      <S.PageWrapper>
        <S.TopBar>
          <S.BackButton onClick={() => navigate('/')}>
            <ArrowLeft size={15} />
            {lang === 'ua' ? 'Назад' : 'Back'}
          </S.BackButton>
        </S.TopBar>
        <S.Hero>
          <S.ProjectTitle>
            {lang === 'ua' ? 'Проект не знайдено' : 'Project not found'}
          </S.ProjectTitle>
        </S.Hero>
      </S.PageWrapper>
    );
  }

  const data = project[lang] || project.en;
  const accentColor = CAT_COLOR[project.category] || '#64748B';
  const catLabel = (CAT_LABEL[project.category] || {})[lang] || project.category;
  const sections = parseDescription(data.fullDesc);

  return (
    <S.PageWrapper>
      <S.TopBar>
        <S.BackButton onClick={() => navigate('/')}>
          <ArrowLeft size={15} />
          {lang === 'ua' ? 'Назад до портфоліо' : 'Back to portfolio'}
        </S.BackButton>
        <S.LangSwitch>
          <S.LangButton active={lang === 'en'} onClick={() => switchLang('en')}>EN</S.LangButton>
          <S.LangButton active={lang === 'ua'} onClick={() => switchLang('ua')}>UA</S.LangButton>
        </S.LangSwitch>
      </S.TopBar>

      <S.Hero>
        <S.CategoryBadge $color={accentColor}>{catLabel}</S.CategoryBadge>
        <S.ProjectTitle>{data.title}</S.ProjectTitle>
        <S.ShortDesc>{data.shortDesc}</S.ShortDesc>
      </S.Hero>

      <S.TechSection>
        <S.TechList>
          {project.technologies.map(t => <S.TechTag key={t}>{t}</S.TechTag>)}
        </S.TechList>
      </S.TechSection>

      <S.Divider />

      <S.ContentArea>
        {sections.map((section, idx) => (
          <S.Section key={idx} $delay={idx * 0.04}>
            {section.title && <S.SectionTitle>{section.title}</S.SectionTitle>}
            <S.SectionContent>
              {section.content.map((item, i) => renderItem(item, i))}
            </S.SectionContent>
          </S.Section>
        ))}

        {project.technologies.length > 0 && (
          <S.Section $delay={sections.length * 0.04}>
            <S.SectionTitle>{lang === 'ua' ? 'Технологічний стек' : 'Tech Stack'}</S.SectionTitle>
            <S.TechList style={{ gap: '0.4rem' }}>
              {project.technologies.map(t => <S.TechTag key={t}>{t}</S.TechTag>)}
            </S.TechList>
          </S.Section>
        )}

        {project.links && project.links.length > 0 && (
          <S.Section $delay={(sections.length + 1) * 0.04}>
            <S.SectionTitle>{lang === 'ua' ? 'Корисні посилання' : 'Useful Links'}</S.SectionTitle>
            <S.LinksSection>
              {project.links.map((link, i) => (
                <S.LinkCard key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                  {link[lang] || link.title}
                </S.LinkCard>
              ))}
            </S.LinksSection>
          </S.Section>
        )}

        {project.images && project.images.length > 0 && (
          <S.Section $delay={(sections.length + 2) * 0.04}>
            <S.SectionTitle>{lang === 'ua' ? 'Скріншоти' : 'Screenshots'}</S.SectionTitle>
            <S.ImagesGrid>
              {project.images.map((src, i) => (
                <S.ProjectImage
                  key={i}
                  src={src}
                  alt={`${data.title} screenshot ${i + 1}`}
                  onClick={() => setLightbox(src)}
                />
              ))}
            </S.ImagesGrid>
          </S.Section>
        )}
      </S.ContentArea>

      {lightbox && createPortal(
        <S.ImageLightbox onClick={() => setLightbox(null)}>
          <S.LightboxClose onClick={() => setLightbox(null)}><X size={18} /></S.LightboxClose>
          <S.LightboxImg src={lightbox} alt="Full size" onClick={e => e.stopPropagation()} />
        </S.ImageLightbox>,
        document.body
      )}
    </S.PageWrapper>
  );
};

export default ProjectPage;
