import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const AboutSection = styled.section`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) { padding: 2rem 0; }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 768px) { padding: 0 1.25rem; }
`;

export const HeaderArea = styled.div`
  animation: ${fadeUp} 0.45s ease-out;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
`;

export const MainText = styled.p`
  font-size: 0.9rem;
  line-height: 1.8;
  color: #94A3B8;
  max-width: 820px;
  white-space: pre-line;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const PersonalityCard = styled.div`
  background: #0F172A;
  border: 1px solid #1E293B;
  border-radius: 10px;
  overflow: hidden;
  grid-column: ${({ $wide }) => $wide ? '1 / -1' : 'auto'};
  animation: ${fadeUp} 0.45s ease-out both;
  transition: border-color 0.2s ease;

  &:hover { border-color: #334155; }
`;

export const CardHeader = styled.div`
  padding: 0.75rem 1.125rem;
  background: #161D2F;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.7rem;
  font-weight: 700;
  color: #CBD5E1;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid #1E293B;
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #1E293B;
  border-radius: 6px;
  flex-shrink: 0;

  svg {
    color: #94A3B8;
    width: 13px;
    height: 13px;
  }
`;

export const CardContent = styled.div`
  padding: 0.875rem 1.125rem 1.125rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: #1E293B;
  margin: 0.75rem 0;
`;

export const StrengthsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const StrengthItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #94A3B8;
  font-size: 0.82rem;
  line-height: 1.5;

  svg {
    color: #34D399;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    margin-top: 0.18em;
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
  gap: 0.5rem;
  color: #94A3B8;
  font-size: 0.82rem;
  margin-bottom: 0.375rem;

  svg {
    color: #FBBF24;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }
`;

export const Quote = styled.blockquote`
  font-size: 0.875rem;
  line-height: 1.75;
  color: #94A3B8;
  font-style: italic;
  margin: 0;
  border-left: 2px solid #334155;
  padding-left: 1rem;
`;
