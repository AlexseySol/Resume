import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #020817;
  color: #E2E8F0;
  padding-bottom: 5rem;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(2, 8, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #1E293B;
  padding: 0.875rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #94A3B8;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #E2E8F0;
    background: #1E293B;
  }
`;

export const LangSwitch = styled.div`
  display: flex;
  gap: 1px;
  padding: 2px;
  background: rgba(255,255,255,0.05);
  border-radius: 10px;
`;

export const LangButton = styled.button`
  background: ${p => p.active ? '#1E293B' : 'transparent'};
  color: ${p => p.active ? '#E2E8F0' : 'rgba(255,255,255,0.45)'};
  border: none;
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover { color: #E2E8F0; }
`;

export const Hero = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 2.5rem;
  animation: ${fadeUp} 0.4s ease-out;

  @media (max-width: 640px) { padding: 2.5rem 1.25rem 2rem; }
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  color: ${p => p.$color};
  background: ${p => p.$color}18;
  border: 1px solid ${p => p.$color}35;
`;

export const ProjectTitle = styled.h1`
  font-size: clamp(1.5rem, 3.5vw, 2.4rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const ShortDesc = styled.p`
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: #94A3B8;
  line-height: 1.65;
  max-width: 680px;
`;

export const TechSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem 2rem;

  @media (max-width: 640px) { padding: 0 1.25rem 1.75rem; }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TechTag = styled.span`
  font-size: 0.72rem;
  font-weight: 500;
  color: #64748B;
  background: #0F172A;
  border: 1px solid #1E293B;
  border-radius: 5px;
  padding: 0.25rem 0.6rem;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #1E293B;
  max-width: 900px;
  margin: 0 auto 2rem;
`;

export const ContentArea = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  gap: 2rem;

  @media (max-width: 640px) { padding: 0 1.25rem; }
`;

export const Section = styled.div`
  animation: ${fadeUp} 0.4s ease-out both;
  animation-delay: ${p => p.$delay || 0}s;
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #1E293B;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Subtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #CBD5E1;
  margin-top: 0.75rem;
  margin-bottom: 0.2rem;
`;

export const Paragraph = styled.p`
  font-size: 0.9rem;
  color: #94A3B8;
  line-height: 1.7;
`;

export const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.55;
`;

export const Bullet = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #475569;
  flex-shrink: 0;
  margin-top: 0.52em;
`;

export const CheckItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: ${p => p.$positive ? '#4ADE80' : '#F87171'};
  line-height: 1.55;
`;

export const CheckIcon = styled.span`
  flex-shrink: 0;
  font-size: 0.85rem;
  margin-top: 0.05em;
`;

export const HighlightText = styled.p`
  font-size: 0.875rem;
  color: #7DD3FC;
  line-height: 1.6;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const LinkCard = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: #0F172A;
  border: 1px solid #1E293B;
  border-radius: 8px;
  color: #94A3B8;
  font-size: 0.825rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: #334155;
    color: #E2E8F0;
    background: #1E293B;
  }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.75rem;
`;

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #1E293B;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: #334155;
    transform: scale(1.01);
  }
`;

export const ImageLightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
`;

export const LightboxImg = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 6px;
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.08);
  border: none;
  color: #E2E8F0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover { background: rgba(255,255,255,0.15); }
`;
