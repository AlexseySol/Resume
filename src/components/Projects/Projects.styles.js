import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const ProjectsSection = styled.section`
  width: 100%;
  padding: 8rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const TitleArea = styled.div`
  margin-bottom: 4rem;
  text-align: center;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  margin-bottom: 1.5rem;

  svg {
    color: #fff;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const getCategoryColor = (category) => {
  switch (category) {
    case 'ai':
      return {
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.05))',
        border: 'rgba(139, 92, 246, 0.2)',
        hover: 'rgba(139, 92, 246, 0.15)'
      };
    case 'automation':
      return {
        gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(74, 222, 128, 0.05))',
        border: 'rgba(34, 197, 94, 0.2)',
        hover: 'rgba(34, 197, 94, 0.15)'
      };
    case 'fullstack':
      return {
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))',
        border: 'rgba(59, 130, 246, 0.2)',
        hover: 'rgba(59, 130, 246, 0.15)'
      };
    default:
      return {
        gradient: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        border: 'rgba(255,255,255,0.1)',
        hover: 'rgba(255,255,255,0.08)'
      };
  }
};

export const ProjectCard = styled.div`
  padding: 2rem;
  background: ${props => getCategoryColor(props.$category).gradient};
  border: 1px solid ${props => getCategoryColor(props.$category).border};
  border-radius: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => getCategoryColor(props.$category).border};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    background: ${props => getCategoryColor(props.$category).hover};
    border-color: ${props => getCategoryColor(props.$category).border};
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ProjectIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  margin-bottom: 1.5rem;

  svg {
    color: #fff;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ProjectShortDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.75);
  margin-bottom: 1.5rem;
`;

export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  transition: gap 0.3s ease;

  ${ProjectCard}:hover & {
    gap: 0.8rem;
  }
`;
