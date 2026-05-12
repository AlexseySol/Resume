import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const EXP_ACCENT = {
  freelance:   '#22D3EE',
  stickerwall: '#A78BFA',
  proair:      '#34D399',
  vdfy:        '#FBBF24',
  training:    '#60A5FA',
  finacademy:  '#C084FC',
  midjourney:  '#F472B6',
  consulting:  '#FB923C',
};

const a = (type) => EXP_ACCENT[type] || '#64748B';

export const ExperienceSection = styled.section`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  justify-content: center;

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
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(-14px);
  transition: opacity 0.4s ease, transform 0.4s ease;

  &[data-aos='fade-down'].aos-animate {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) { justify-content: center; }
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
  flex-shrink: 0;

  svg { color: #CBD5E1; }
`;

export const Title = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.02em;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

export const CompanyCard = styled.article`
  background: #0F172A;
  border: 1px solid #1E293B;
  border-left: 3px solid ${({ $type }) => a($type)};
  border-radius: 0 10px 10px 0;
  padding: 1rem 1.25rem;
  opacity: 0;
  transform: translateY(14px);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &[data-aos='fade-up'].aos-animate {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.4s ease, transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: #334155;
    border-left-color: ${({ $type }) => a($type)};
  }
`;

export const CompanyName = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #E2E8F0;
  margin-bottom: 0.25rem;
  line-height: 1.3;
`;

export const Period = styled.div`
  font-size: 0.7rem;
  color: #64748B;
  font-weight: 500;
  margin-bottom: 0.6rem;
  letter-spacing: 0.02em;
`;

export const Description = styled.p`
  color: #94A3B8;
  font-size: 0.8rem;
  line-height: 1.6;
`;
