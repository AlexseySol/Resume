import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const EducationSection = styled.section`
  width: 100%;
  padding: 8rem 0;
  position: relative;
  display: flex;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 3rem;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${bounceIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  
  svg {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 70px;
    height: 3px;
    background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0.1));
  }

  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const EducationCard = styled.div`
  position: relative;
  padding: 2rem;
  background: ${props => {
    switch(props.$type) {
      case 'university':
        return 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)';
      case 'academy':
        return 'linear-gradient(135deg, rgba(152, 224, 255, 0.1) 0%, rgba(152, 224, 255, 0.05) 100%)';
      case 'courses':
        return 'linear-gradient(135deg, rgba(255, 198, 218, 0.1) 0%, rgba(255, 198, 218, 0.05) 100%)';
      default:
        return 'rgba(255, 255, 255, 0.05)';
    }
  }};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    animation: ${shimmer} 8s infinite linear;
  }

  &:hover {
    transform: translateY(-8px);
    background: ${props => {
      switch(props.$type) {
        case 'university':
          return 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)';
        case 'academy':
          return 'linear-gradient(135deg, rgba(152, 224, 255, 0.15) 0%, rgba(152, 224, 255, 0.08) 100%)';
        case 'courses':
          return 'linear-gradient(135deg, rgba(255, 198, 218, 0.15) 0%, rgba(255, 198, 218, 0.08) 100%)';
        default:
          return 'rgba(255, 255, 255, 0.08)';
      }
    }};
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

export const CardIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  margin-bottom: 1.5rem;

  svg {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const CardTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
`;

export const CardFullTitle = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.3rem;
  font-weight: normal;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
`;

export const Period = styled.span`
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  padding-left: 1.2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-50%);
  }
`;

export const SpecialtyBadge = styled.div`
  font-size: 1.1rem;
  color: #fff;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-top: 0.5rem;
`;

export const ProgramInfo = styled.div`
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ProgramTitle = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const ProgramDetails = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

export const CourseItem = styled.li`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  padding-left: 1.2rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }
`;