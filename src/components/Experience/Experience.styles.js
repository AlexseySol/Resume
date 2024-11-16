import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ExperienceSection = styled.section`
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
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 3rem;
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

export const Title = styled.h2`
  font-size: clamp(2.2rem, 5vw, 2.8rem);
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const CompanyCard = styled.article`
  position: relative;
  padding: 2.5rem;
  background: ${props => {
    switch(props.$type) {
      case 'proair':
        return 'linear-gradient(135deg, rgba(130, 200, 255, 0.1) 0%, rgba(130, 200, 255, 0.05) 100%)';
      case 'vdfy':
        return 'linear-gradient(135deg, rgba(255, 200, 130, 0.1) 0%, rgba(255, 200, 130, 0.05) 100%)';
      case 'training':
        return 'linear-gradient(135deg, rgba(130, 255, 180, 0.1) 0%, rgba(130, 255, 180, 0.05) 100%)';
      case 'finacademy':
        return 'linear-gradient(135deg, rgba(200, 130, 255, 0.1) 0%, rgba(200, 130, 255, 0.05) 100%)';
      case 'midjourney':
        return 'linear-gradient(135deg, rgba(255, 130, 200, 0.1) 0%, rgba(255, 130, 200, 0.05) 100%)';
      case 'consulting':
        return 'linear-gradient(135deg, rgba(255, 220, 130, 0.1) 0%, rgba(255, 220, 130, 0.05) 100%)';
      default:
        return 'rgba(255, 255, 255, 0.05)';
    }
  }};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    background: ${props => {
      switch(props.$type) {
        case 'proair':
          return 'linear-gradient(135deg, rgba(130, 200, 255, 0.15) 0%, rgba(130, 200, 255, 0.08) 100%)';
        case 'vdfy':
          return 'linear-gradient(135deg, rgba(255, 200, 130, 0.15) 0%, rgba(255, 200, 130, 0.08) 100%)';
        case 'training':
          return 'linear-gradient(135deg, rgba(130, 255, 180, 0.15) 0%, rgba(130, 255, 180, 0.08) 100%)';
        case 'finacademy':
          return 'linear-gradient(135deg, rgba(200, 130, 255, 0.15) 0%, rgba(200, 130, 255, 0.08) 100%)';
        case 'midjourney':
          return 'linear-gradient(135deg, rgba(255, 130, 200, 0.15) 0%, rgba(255, 130, 200, 0.08) 100%)';
        case 'consulting':
          return 'linear-gradient(135deg, rgba(255, 220, 130, 0.15) 0%, rgba(255, 220, 130, 0.08) 100%)';
        default:
          return 'rgba(255, 255, 255, 0.08)';
      }
    }};
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;

  svg {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
`;