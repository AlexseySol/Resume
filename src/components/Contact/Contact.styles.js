import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ContactSection = styled.section`
  width: 100%;
  padding: 2.5rem 0 3.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) { padding: 2rem 0 2.5rem; }
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
  gap: 0.875rem;
  margin-bottom: 1.5rem;
  animation: ${fadeUp} 0.45s ease-out;

  @media (max-width: 768px) { justify-content: center; }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 9px;
  background: #1E293B;
  border: 1px solid #334155;
  flex-shrink: 0;

  svg { color: #CBD5E1; width: 17px; height: 17px; }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.02em;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

export const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.875rem 1.125rem;
  background: #0F172A;
  border: 1px solid #1E293B;
  border-radius: 10px;
  animation: ${fadeUp} 0.45s ease-out both;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  transition: border-color 0.2s ease;

  &:hover { border-color: #334155; }
`;

export const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const CardTitle = styled.h3`
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
`;

export const CardText = styled.a`
  display: block;
  font-size: 0.85rem;
  color: #E2E8F0;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;

  &:hover { color: #fff; }
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const ContactButton = styled.button`
  padding: 0.7rem 1.5rem;
  min-width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${p => p.primary ? '#000' : '#E2E8F0'};
  background: ${p => p.primary ? '#fff' : '#0F172A'};
  border: 1px solid ${p => p.primary ? 'transparent' : '#1E293B'};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    background: ${p => p.primary ? '#f0f0f0' : '#1E293B'};
    border-color: ${p => p.primary ? 'transparent' : '#334155'};
  }

  @media (max-width: 640px) { width: 100%; }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;
