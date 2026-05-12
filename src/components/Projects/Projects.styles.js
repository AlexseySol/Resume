import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const CAT_COLOR = {
  ai:         { accent: '#A78BFA', bg: '#1A1130' },
  automation: { accent: '#34D399', bg: '#0C1F18' },
  fullstack:  { accent: '#60A5FA', bg: '#0C1628' },
};

const c = (cat, key) => (CAT_COLOR[cat] || { accent: '#64748B', bg: '#0F172A' })[key];

export const ProjectsSection = styled.section`
  width: 100%;
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) { padding: 2rem 0; }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;

  @media (max-width: 768px) { padding: 0 1.25rem; }
`;

export const TitleArea = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
  animation: ${fadeUp} 0.45s ease-out;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1E293B;
  border: 1px solid #334155;
  margin-bottom: 1rem;

  svg { color: #CBD5E1; }
`;

export const Title = styled.h2`
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #64748B;
  max-width: 540px;
  margin: 0 auto;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px)  { grid-template-columns: 1fr; }
`;

export const ProjectCard = styled.div`
  background: ${({ $category }) => c($category, 'bg')};
  border: 1px solid #1E293B;
  border-top: 2px solid ${({ $category }) => c($category, 'accent')};
  border-radius: 10px;
  padding: 1.25rem;
  cursor: pointer;
  animation: ${fadeUp} 0.45s ease-out both;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  transition: transform 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    border-color: #334155;
    border-top-color: ${({ $category }) => c($category, 'accent')};
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.875rem;
  gap: 0.5rem;
`;

export const ProjectIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ $category }) => c($category, 'accent')}18;
  flex-shrink: 0;

  svg {
    color: ${({ $category }) => c($category, 'accent')};
    width: 17px;
    height: 17px;
  }
`;

export const CategoryBadge = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  color: ${({ $category }) => c($category, 'accent')};
  background: ${({ $category }) => c($category, 'accent')}18;
  border: 1px solid ${({ $category }) => c($category, 'accent')}30;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`;

export const ProjectTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: #E2E8F0;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export const ProjectShortDesc = styled.p`
  font-size: 0.8rem;
  line-height: 1.55;
  color: #94A3B8;
  margin-bottom: 1rem;
  flex: 1;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  font-size: 0.68rem;
  font-weight: 500;
  color: #64748B;
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 4px;
  padding: 0.15rem 0.45rem;
`;

export const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.775rem;
  font-weight: 600;
  color: ${({ $category }) => c($category, 'accent')};
  transition: gap 0.2s ease;

  ${ProjectCard}:hover & {
    gap: 0.65rem;
  }
`;
