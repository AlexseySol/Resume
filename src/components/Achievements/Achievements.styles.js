// Achievements.styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const AchievementsSection = styled.section`
  width: 100%;
  padding: 8rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  @media (max-width: 1024px) {
    padding: 6rem 0;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    gap: 3rem;
  }
`;

export const TitleArea = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const AchievementsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1400px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);

  svg {
    color: #fff;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
  }
`;

export const AchievementCard = styled.div`
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);

    ${CardIcon} {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.8);
`;

export const CompanyList = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;
  width: 100%;
  max-width: 1400px;
`;

export const CompanyName = styled.span`
  font-size: 1.1rem;
  color: rgba(255,255,255,0.7);
  padding: 0.8rem 1.5rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 30px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;

  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
`;