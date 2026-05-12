import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const EducationSection = styled.section`
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
  gap: 0.875rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) { justify-content: center; }
`;

export const IconWrapper = styled.div`
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

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

export const EducationCard = styled.div`
  background: #0F172A;
  border: 1px solid #1E293B;
  border-top: 2px solid ${({ $type }) =>
    $type === 'university' ? '#60A5FA' :
    $type === 'academy'    ? '#34D399' :
    '#A78BFA'
  };
  border-radius: 10px;
  padding: 1.125rem 1.25rem;
  animation: ${fadeUp} 0.45s ease-out both;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #334155;
    border-top-color: ${({ $type }) =>
      $type === 'university' ? '#60A5FA' :
      $type === 'academy'    ? '#34D399' :
      '#A78BFA'
    };
  }
`;

export const CardIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #1E293B;
  margin-bottom: 0.6rem;

  svg { color: #94A3B8; width: 14px; height: 14px; }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const CardTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: #E2E8F0;
  line-height: 1.3;
`;

export const CardFullTitle = styled.div`
  font-size: 0.78rem;
  color: #64748B;
  margin-top: 0.1rem;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.72rem;
  color: #64748B;
  margin-top: 0.4rem;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: #64748B;
`;

export const Period = styled.span`
  color: #475569;
`;

export const SpecialtyBadge = styled.div`
  font-size: 0.78rem;
  color: #94A3B8;
  padding: 0.35rem 0.7rem;
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 6px;
  margin-top: 0.6rem;
  display: inline-block;
`;

export const ProgramInfo = styled.div`
  margin-top: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px solid #1E293B;
`;

export const ProgramTitle = styled.h4`
  font-size: 0.78rem;
  font-weight: 600;
  color: #CBD5E1;
  margin-bottom: 0.3rem;
`;

export const ProgramDetails = styled.p`
  font-size: 0.75rem;
  color: #64748B;
  line-height: 1.6;
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-top: 0.3rem;
`;

export const CourseItem = styled.li`
  font-size: 0.78rem;
  color: #94A3B8;
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
    background: #475569;
    border-radius: 50%;
  }
`;
