import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.1); }
  70% { box-shadow: 0 0 8px 3px rgba(255,255,255,0.1); }
  100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.1); }
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

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const PersonalityCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out forwards;
  grid-column: ${props => props.$wide ? '1 / -1' : 'auto'};
  
  &:hover {
    animation: ${glowPulse} 2s infinite;
    border-color: rgba(255,255,255,0.1);
  }
`;

export const CardHeader = styled.div`
  padding: 1.5rem;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: #fff;
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;

  svg {
    color: rgba(255,255,255,0.9);
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: rgba(255,255,255,0.1);
  margin: 1.5rem 0;
`;

export const StrengthsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StrengthItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 0.75rem;
  font-size: 1rem;

  svg {
    color: #4CAF50;
  }
`;

export const ChallengesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ChallengeItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.75rem;
  font-size: 0.95rem;

  svg {
    color: #FFB74D;
  }
`;

export const Quote = styled.blockquote`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255,255,255,0.8);
  font-style: italic;
  margin: 0;
  padding: 1rem 0;
  text-align: center;

  &::before,
  &::after {
    content: '"';
    color: rgba(255,255,255,0.4);
  }
`;