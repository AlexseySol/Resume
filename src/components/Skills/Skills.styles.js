import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const ACCENT = {
  nocode:     '#22D3EE',
  ai:         '#A78BFA',
  agents:     '#34D399',
  web:        '#FBBF24',
  infra:      '#F87171',
  consulting: '#60A5FA',
};

const a = (type) => ACCENT[type] || '#94A3B8';

export const SkillsSection = styled.section`
  width: 100%;
  padding: 2.5rem 0;

  @media (max-width: 768px) { padding: 2rem 0; }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
  margin: 0 auto;

  @media (max-width: 768px) { padding: 0 1.25rem; }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1E293B;
  border: 1px solid #334155;
  margin-bottom: 0.25rem;

  svg { color: #CBD5E1; }
`;

export const Title = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #64748B;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px)  { grid-template-columns: 1fr; }
`;

export const SkillCard = styled.article`
  background: #0F172A;
  border: 1px solid #1E293B;
  border-top: 2px solid ${({ $type }) => a($type)};
  border-radius: 10px;
  padding: 1.125rem 1.25rem 1.25rem;
  animation: ${fadeUp} 0.45s ease-out both;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #334155;
    border-top-color: ${({ $type }) => a($type)};
  }
`;

export const CategoryIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: ${({ $type }) => a($type)}18;
  margin-bottom: 0.6rem;

  svg {
    color: ${({ $type }) => a($type)};
    width: 15px;
    height: 15px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 0.775rem;
  font-weight: 700;
  color: #E2E8F0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.875rem;
  line-height: 1.35;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  color: #94A3B8;
  font-size: 0.8rem;
  line-height: 1.5;
  padding-left: 0.875rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 3px;
    height: 3px;
    background: ${({ $accent }) => $accent || '#475569'};
    border-radius: 50%;
  }
`;
