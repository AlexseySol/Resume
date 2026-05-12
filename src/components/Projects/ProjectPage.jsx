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

// Detect "Term — Description" pattern (em dash or double dash)
function isDefinitionLine(text) {
  return /^[^—–\n]{2,60}[—–].{4,}/.test(text);
}

function splitDefinition(text) {
  const match = text.match(/^(.+?)\s*[—–]\s*(.+)$/);
  return match ? [match[1].trim(), match[2].trim()] : null;
}

function parseDescription(text) {
  const sections = [];
  const lines = text.split('\n');
  let currentSection = { type: 'text', title: null, content: [] };

  const flush = () => {
    if (currentSection.content.length > 0 || currentSection.title) {
      sections.push({ ...currentSection });
    }
    currentSection = { type: 'text', title: null, content: [] };
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      if (currentSection.content.length > 0) flush();
      continue;
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      flush();
      const cleaned = line.replace(/\*\*/g, '').replace(/:$/, '');
      currentSection = { type: 'section', title: cleaned, content: [] };
      continue;
    }

    if (line.startsWith('✅') || line.startsWith('❌')) {
      currentSection.content.push({ type: 'checkitem', icon: line[0], text: line.substring(2).trim() });
    } else if (line.startsWith('•') || line.startsWith('-')) {
      const body = line.substring(1).trim();
      if (isDefinitionLine(body)) {
        const parts = splitDefinition(body);
        currentSection.content.push(parts
          ? { type: 'definition', term: parts[0], desc: parts[1] }
          : { type: 'bullet', text: body }
        );
      } else {
        currentSection.content.push({ type: 'bullet', text: body });
      }
    } else if (line.includes('🔗') || line.includes('🎥') || line.includes('📱')) {
      currentSection.content.push({ type: 'highlight', text: line });
    } else {
      currentSection.content.push({ type: 'text', text: line });
    }
  }

  flush();
  return sections;
}

function renderItem(item, index, accent) {
  switch (item.type) {
    case 'definition':
      return (
        <S.DefinitionRow key={index}>
          <S.DefinitionTerm $accent={accent}>{item.term}</S.DefinitionTerm>
          <S.DefinitionDesc>{item.desc}</S.DefinitionDesc>
        </S.DefinitionRow>
      );
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
          <S.Bullet $accent={accent} />
          <span>{item.text}</span>
        </S.BulletItem>
      );
    case 'highlight':
      return <S.HighlightText key={index}>{item.text}</S.HighlightText>;
    case 'text':
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
    window.scrollTo(0, 0);
    if (project) {
      track(EVENTS.PROJECT_CLICK, 'projects', { title: project[lang]?.title || project.id, page: true });
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
          <S.BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={15} />
            {lang === 'ua' ? 'Назад' : 'Back'}
          </S.BackButton>
        </S.TopBar>
        <S.HeroSection>
          <S.HeroInner>
            <S.ProjectTitle>{lang === 'ua' ? 'Проект не знайдено' : 'Project not found'}</S.ProjectTitle>
          </S.HeroInner>
        </S.HeroSection>
      </S.PageWrapper>
    );
  }

  const data = project[lang] || project.en;
  const accent = CAT_COLOR[project.category] || '#64748B';
  const catLabel = (CAT_LABEL[project.category] || {})[lang] || project.category;
  const sections = parseDescription(data.fullDesc);
  const hasImages = project.images && project.images.length > 0;

  return (
    <S.PageWrapper>
      <S.TopBar>
        <S.BackButton onClick={() => navigate(-1)}>
          <ArrowLeft size={15} />
          {lang === 'ua' ? 'Назад до портфоліо' : 'Back to portfolio'}
        </S.BackButton>
        <S.LangSwitch>
          <S.LangButton active={lang === 'en'} onClick={() => switchLang('en')}>EN</S.LangButton>
          <S.LangButton active={lang === 'ua'} onClick={() => switchLang('ua')}>UA</S.LangButton>
        </S.LangSwitch>
      </S.TopBar>

      <S.HeroSection>
        <S.HeroGradient $color={accent} />
        <S.HeroInner>
          <S.CategoryBadge $color={accent}>{catLabel}</S.CategoryBadge>
          <S.ProjectTitle>{data.title}</S.ProjectTitle>
          <S.ShortDesc>{data.shortDesc}</S.ShortDesc>
        </S.HeroInner>
      </S.HeroSection>

      <S.TechStrip>
        <S.TechStripInner>
          {project.technologies.map(t => (
            <S.TechTag key={t} $accent={accent}>{t}</S.TechTag>
          ))}
        </S.TechStripInner>
      </S.TechStrip>

      {hasImages && (
        <S.ImagesSection>
          <S.ImagesGrid $count={project.images.length}>
            {project.images.map((src, i) => (
              <S.ProjectImage
                key={i}
                src={src}
                alt={`${data.title} ${i + 1}`}
                onClick={() => setLightbox(src)}
              />
            ))}
          </S.ImagesGrid>
        </S.ImagesSection>
      )}

      <S.ContentArea>
        {sections.map((section, idx) => (
          <S.Section key={idx} $delay={idx * 0.035}>
            {section.title && (
              <S.SectionTitle $accent={accent}>{section.title}</S.SectionTitle>
            )}
            <S.SectionContent>
              {section.content.map((item, i) => renderItem(item, i, accent))}
            </S.SectionContent>
          </S.Section>
        ))}

        {project.links && project.links.length > 0 && (
          <S.Section $delay={(sections.length) * 0.035}>
            <S.SectionTitle $accent={accent}>
              {lang === 'ua' ? 'Корисні посилання' : 'Useful Links'}
            </S.SectionTitle>
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
