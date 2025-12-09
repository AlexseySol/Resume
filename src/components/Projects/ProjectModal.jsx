import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, Check } from 'lucide-react';
import * as S from './ProjectModal.styles';

const ProjectModal = ({ project, onClose }) => {
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const parseDescription = (text) => {
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

      // Заголовок секції
      if (line.startsWith('**') && line.endsWith('**') && line.endsWith(':**')) {
        if (currentSection.content.length > 0) {
          sections.push({ ...currentSection });
        }
        currentSection = {
          type: 'section',
          title: line.replace(/\*\*/g, '').replace(':', ''),
          content: []
        };
      }
      // Підзаголовок
      else if (line.startsWith('**') && line.endsWith('**')) {
        currentSection.content.push({
          type: 'subtitle',
          text: line.replace(/\*\*/g, '')
        });
      }
      // Список з галочками
      else if (line.startsWith('✅') || line.startsWith('❌')) {
        currentSection.content.push({
          type: 'checkitem',
          icon: line[0],
          text: line.substring(2).trim()
        });
      }
      // Список з bullet points
      else if (line.startsWith('•') || line.startsWith('-')) {
        currentSection.content.push({
          type: 'bullet',
          text: line.substring(1).trim()
        });
      }
      // Посилання
      else if (line.includes('🔗') || line.includes('🎥') || line.includes('📱')) {
        currentSection.content.push({
          type: 'highlight',
          text: line
        });
      }
      // Звичайний текст
      else {
        currentSection.content.push({
          type: 'text',
          text: line
        });
      }
    }

    if (currentSection.content.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  const renderContent = (item, index) => {
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
      case 'text':
        return <S.Paragraph key={index}>{item.text}</S.Paragraph>;
      default:
        return null;
    }
  };

  const sections = parseDescription(project.fullDesc);

  const modalContent = (
    <S.ModalOverlay onClick={handleOverlayClick}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.HeaderContent>
            <S.IconContainer $category={project.category}>
              {project.icon}
            </S.IconContainer>
            <S.HeaderText>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectSubtitle>{project.shortDesc}</S.ProjectSubtitle>
            </S.HeaderText>
          </S.HeaderContent>
          <S.CloseButton onClick={onClose} aria-label="Close">
            <X size={24} />
          </S.CloseButton>
        </S.ModalHeader>

        <S.ModalBody>
          {sections.map((section, idx) => (
            <S.Section key={idx}>
              {section.title && <S.SectionTitle>{section.title}</S.SectionTitle>}
              <S.SectionContent>
                {section.content.map((item, itemIdx) => renderContent(item, itemIdx))}
              </S.SectionContent>
            </S.Section>
          ))}

          <S.TechnologiesSection>
            <S.SectionTitle>
              {i18n.language === 'ua' ? 'Технології' : 'Technologies'}
            </S.SectionTitle>
            <S.TechGrid>
              {project.technologies.map((tech, index) => (
                <S.TechBadge key={index}>
                  <Check size={14} />
                  {tech}
                </S.TechBadge>
              ))}
            </S.TechGrid>
          </S.TechnologiesSection>

          {project.links && project.links.length > 0 && (
            <S.LinksSection>
              <S.SectionTitle>
                {i18n.language === 'ua' ? 'Корисні посилання' : 'Useful Links'}
              </S.SectionTitle>
              <S.LinksGrid>
                {project.links.map((link, index) => (
                  <S.LinkCard
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    <span>{link.title}</span>
                  </S.LinkCard>
                ))}
              </S.LinksGrid>
            </S.LinksSection>
          )}

          {project.images && project.images.length > 0 && (
            <S.ImagesGrid>
              {project.images.map((image, index) => (
                <S.ProjectImage
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </S.ImagesGrid>
          )}
        </S.ModalBody>
      </S.ModalContainer>
    </S.ModalOverlay>
  );

  const imageModal = selectedImage && (
    <S.ImageModalOverlay onClick={() => setSelectedImage(null)}>
      <S.ImageModalContainer>
        <S.ImageCloseButton onClick={() => setSelectedImage(null)}>
          <X size={32} />
        </S.ImageCloseButton>
        <S.FullSizeImage src={selectedImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
      </S.ImageModalContainer>
    </S.ImageModalOverlay>
  );

  return (
    <>
      {createPortal(modalContent, document.body)}
      {selectedImage && createPortal(imageModal, document.body)}
    </>
  );
};

export default ProjectModal;
