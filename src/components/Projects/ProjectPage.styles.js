import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #020817;
  color: #E2E8F0;
  padding-bottom: 6rem;
`;

/* ── Top bar ── */
export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(2, 8, 23, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid #1E293B;
  padding: 0.75rem 2rem;
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
  color: #64748B;
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
  color: ${p => p.active ? '#E2E8F0' : 'rgba(255,255,255,0.4)'};
  border: none;
  padding: 0.4rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover { color: #E2E8F0; }
`;

/* ── Hero ── */
export const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #1E293B;
`;

export const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 60% at 60% 40%, ${p => p.$color}14 0%, transparent 70%);
  pointer-events: none;
`;

export const HeroInner = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 3.5rem 2rem 3rem;
  animation: ${fadeUp} 0.45s ease-out;

  @media (max-width: 640px) { padding: 2.5rem 1.25rem 2.5rem; }
`;

export const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  color: ${p => p.$color};
  background: ${p => p.$color}18;
  border: 1px solid ${p => p.$color}35;
`;

export const ProjectTitle = styled.h1`
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: #F1F5F9;
  letter-spacing: -0.03em;
  line-height: 1.18;
  margin-bottom: 1.1rem;
`;

export const ShortDesc = styled.p`
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
  color: #94A3B8;
  line-height: 1.7;
  max-width: 680px;
`;

/* ── Tech strip ── */
export const TechStrip = styled.div`
  border-bottom: 1px solid #1E293B;
  background: #040c1f;
`;

export const TechStripInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  @media (max-width: 640px) { padding: 1rem 1.25rem; }
`;

export const TechTag = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: #64748B;
  background: #0F172A;
  border: 1px solid #1E293B;
  border-radius: 5px;
  padding: 0.25rem 0.65rem;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${p => p.$accent || '#334155'};
    color: ${p => p.$accent || '#94A3B8'};
  }
`;

/* ── Images (shown first, full-width) ── */
export const ImagesSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 2rem 0;

  @media (max-width: 640px) { padding: 2rem 1.25rem 0; }
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: ${p => p.$count === 1 ? '1fr' : p.$count === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(260px, 1fr))'};
  gap: 0.75rem;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

export const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #1E293B;
  cursor: zoom-in;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  display: block;

  &:hover {
    border-color: #334155;
    transform: scale(1.015);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  }
`;

/* ── Content area ── */
export const ContentArea = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.25rem;

  @media (max-width: 640px) { padding: 2rem 1.25rem 0; }
`;

export const Section = styled.div`
  animation: ${fadeUp} 0.4s ease-out both;
  animation-delay: ${p => p.$delay || 0}s;
`;

export const SectionTitle = styled.h2`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${p => p.$accent || '#475569'};
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${p => p.$accent ? p.$accent + '30' : '#1E293B'};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 14px;
    background: ${p => p.$accent || '#475569'};
    border-radius: 2px;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.925rem;
  font-weight: 600;
  color: #CBD5E1;
  margin-top: 0.75rem;
  margin-bottom: 0.1rem;
`;

export const Paragraph = styled.p`
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.75;
`;

export const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.875rem;
  color: #94A3B8;
  line-height: 1.6;
`;

export const Bullet = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${p => p.$accent || '#475569'};
  flex-shrink: 0;
  margin-top: 0.55em;
  opacity: 0.8;
`;

/* Two-column row for "Component — Role" table-style bullets */
export const DefinitionRow = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 200px) 1fr;
  gap: 0.75rem 1rem;
  align-items: start;
  padding: 0.55rem 0.75rem;
  border-radius: 7px;
  background: #0A1628;
  border: 1px solid #1E293B;
  font-size: 0.845rem;
  line-height: 1.55;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
`;

export const DefinitionTerm = styled.span`
  color: ${p => p.$accent || '#94A3B8'};
  font-weight: 600;
  font-size: 0.825rem;
`;

export const DefinitionDesc = styled.span`
  color: #7A8FA6;
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

/* ── Links ── */
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

/* ── Lightbox ── */
export const ImageLightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
`;

export const LightboxImg = styled.img`
  max-width: 92vw;
  max-height: 92vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.7);
`;

export const LightboxClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  color: #E2E8F0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.15); }
`;
