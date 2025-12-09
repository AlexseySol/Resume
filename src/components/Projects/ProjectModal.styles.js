import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin: auto;

  @media (max-width: 768px) {
    max-height: 95vh;
    border-radius: 16px;
    max-width: calc(100% - 2rem);
  }
`;

export const ModalHeader = styled.div`
  padding: 2rem 2.5rem;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  min-width: 0;
`;

const getCategoryGradient = (category) => {
  switch (category) {
    case 'ai':
      return 'linear-gradient(135deg, #8b5cf6, #a78bfa)';
    case 'automation':
      return 'linear-gradient(135deg, #22c55e, #4ade80)';
    case 'fullstack':
      return 'linear-gradient(135deg, #3b82f6, #60a5fa)';
    default:
      return 'linear-gradient(135deg, #6366f1, #818cf8)';
  }
};

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  background: ${props => getCategoryGradient(props.$category)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);

  svg {
    color: white;
    width: 26px;
    height: 26px;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const HeaderText = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProjectTitle = styled.h2`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #fff;
  margin: 0 0 0.4rem 0;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const ProjectSubtitle = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  margin: 0;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const CloseButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  svg {
    color: rgba(255,255,255,0.7);
    transition: all 0.2s ease;
  }

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.2);
    transform: rotate(90deg);

    svg {
      color: #fff;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 2.5rem;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.03);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.2);
    border-radius: 4px;

    &:hover {
      background: rgba(255,255,255,0.3);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Section = styled.div`
  margin-bottom: 2rem;
  max-width: 100%;
  overflow-x: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #fff;
  margin: 0 0 1.25rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(255,255,255,0.1);
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  max-width: 100%;
  overflow-x: hidden;
`;

export const Subtitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.95);
  margin: 1.2rem 0 0.75rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Paragraph = styled.p`
  font-size: 0.98rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.85);
  margin: 0 0 0.5rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.65rem 0.9rem;
  background: ${props => props.$positive
    ? 'rgba(34, 197, 94, 0.1)'
    : 'rgba(239, 68, 68, 0.1)'};
  border-left: 3px solid ${props => props.$positive
    ? 'rgba(34, 197, 94, 0.5)'
    : 'rgba(239, 68, 68, 0.5)'};
  border-radius: 7px;
  max-width: 100%;

  span {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.85);
    word-wrap: break-word;
    overflow-wrap: break-word;
    min-width: 0;
  }
`;

export const CheckIcon = styled.span`
  flex-shrink: 0;
  font-size: 1.1rem;
  line-height: 1;
`;

export const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding-left: 0.4rem;
  max-width: 100%;

  span {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.8);
    word-wrap: break-word;
    overflow-wrap: break-word;
    min-width: 0;
  }
`;

export const Bullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  margin-top: 0.6rem;
  flex-shrink: 0;
`;

export const HighlightText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.95);
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;

export const TechnologiesSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255,255,255,0.03);
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.9rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 7px;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.9);
  transition: all 0.2s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;

  svg {
    color: #22c55e;
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.25);
    transform: translateY(-2px);
  }
`;

export const LinksSection = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05));
  border-radius: 14px;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

export const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;

  svg {
    flex-shrink: 0;
    color: rgba(255,255,255,0.7);
  }

  span {
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.3);
    transform: translateX(8px);

    svg {
      color: #fff;
    }
  }
`;

export const ImagesGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  }
`;

export const ImageModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 2rem;
  animation: ${fadeIn} 0.2s ease;
  cursor: zoom-out;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ImageModalContainer = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageCloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2001;

  svg {
    color: #fff;
  }

  &:hover {
    background: rgba(255,255,255,0.2);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

export const FullSizeImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  cursor: default;

  @media (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
`;
