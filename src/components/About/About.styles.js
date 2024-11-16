// About.styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;

  @media (max-width: 1024px) {
    padding: 4rem 1.5rem;
    min-height: auto;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

export const HeaderArea = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: #fff;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const MainText = styled.p`
  font-size: clamp(1.1rem, 1.2vw, 1.2rem);
  line-height: 1.8;
  color: rgba(255,255,255,0.8);
  margin: 0 auto;
  max-width: 800px;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.05);
  border-radius: 12px;
  margin-bottom: 0.5rem;

  svg {
    color: rgba(255,255,255,0.9);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255,255,255,0.7);
`;