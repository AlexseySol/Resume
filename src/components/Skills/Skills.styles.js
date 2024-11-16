import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const SkillsSection = styled.section`
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
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
  text-align: center;
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
  margin-bottom: 1rem;
  
  svg {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Title = styled.h2`
  font-size: clamp(2.2rem, 5vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled.article`
  position: relative;
  padding: 2rem;
  background: ${props => {
    switch(props.$type) {
      case 'ai':
        return 'linear-gradient(135deg, rgba(130, 200, 255, 0.1) 0%, rgba(130, 200, 255, 0.05) 100%)';
      case 'web':
        return 'linear-gradient(135deg, rgba(255, 180, 130, 0.1) 0%, rgba(255, 180, 130, 0.05) 100%)';
      case 'automation':
        return 'linear-gradient(135deg, rgba(130, 255, 180, 0.1) 0%, rgba(130, 255, 180, 0.05) 100%)';
      case 'consulting':
        return 'linear-gradient(135deg, rgba(255, 130, 180, 0.1) 0%, rgba(255, 130, 180, 0.05) 100%)';
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
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    ${props => props.$type === 'ai' && `
      background: linear-gradient(135deg, rgba(130, 200, 255, 0.15) 0%, rgba(130, 200, 255, 0.08) 100%);
    `}
    ${props => props.$type === 'web' && `
      background: linear-gradient(135deg, rgba(255, 180, 130, 0.15) 0%, rgba(255, 180, 130, 0.08) 100%);
    `}
    ${props => props.$type === 'automation' && `
      background: linear-gradient(135deg, rgba(130, 255, 180, 0.15) 0%, rgba(130, 255, 180, 0.08) 100%);
    `}
    ${props => props.$type === 'consulting' && `
      background: linear-gradient(135deg, rgba(255, 130, 180, 0.15) 0%, rgba(255, 130, 180, 0.08) 100%);
    `}
  }
`;

export const CategoryIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;

  svg {
    color: #fff;
  }

  &:hover {
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SkillItem = styled.li`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
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

  &:hover {
    color: rgba(255, 255, 255, 1);
    transform: translateX(5px);
    transition: all 0.2s ease;
  }
`;