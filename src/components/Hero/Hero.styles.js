// Hero.styles.js
import styled, { keyframes } from 'styled-components';

const textShine = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: center;
  padding: 2rem 4rem;
  max-width: 1800px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    padding: 2rem;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 1rem;
  }
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    padding-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  width: 500px;
  height: 700px;
  border-radius: 20px;
  overflow: hidden;
  justify-self: flex-start;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0,0,0,0.2)
    );
    pointer-events: none;
  }

  @media (max-width: 1440px) {
    width: 450px;
    height: 630px;
  }

  @media (max-width: 1024px) {
    width: 400px;
    height: 560px;
    justify-self: center;
    order: 2;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    width: 320px;
    height: 448px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 800px;
  position: relative;

  @media (max-width: 1024px) {
    order: 1;
    text-align: center;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 0.5rem;
    min-height: 60vh;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  animation: ${fadeIn} 0.8s ease-out;
  flex: 1;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

export const NameTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 600;
  line-height: 1.1;
  background: linear-gradient(
    120deg,
    #ffffff 0%,
    rgba(255,255,255,0.8) 20%,
    #ffffff 40%,
    rgba(255,255,255,0.9) 60%,
    #ffffff 80%,
    rgba(255,255,255,0.8) 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textShine} 5s linear infinite;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SpecialtiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

export const SpecialtyItem = styled.span`
  color: rgba(255,255,255,0.9);
  font-size: clamp(0.9rem, 1.1vw, 1.1rem);
  letter-spacing: 0.05em;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.05),
    rgba(255,255,255,0.1)
  );
  border-radius: 30px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
  border: 1px solid rgba(255,255,255,0.1);
  white-space: nowrap;

  &:hover {
    color: #fff;
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-2px);
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.1),
      rgba(255,255,255,0.15)
    );
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const QuoteWrapper = styled.div`
  position: relative;
  padding: 0 2.5rem;
  margin: 1rem 0;

  @media (max-width: 480px) {
    padding: 0 2rem;
  }
`;

export const QuoteText = styled.p`
  font-size: clamp(1.1rem, 1.8vw, 1.3rem);
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
  font-style: italic;
  text-align: center;
  background: linear-gradient(
    120deg,
    rgba(255,255,255,0.9),
    rgba(255,255,255,0.7),
    rgba(255,255,255,0.9)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textShine} 4s linear infinite;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const QuoteMarks = styled.span`
  position: absolute;
  font-size: 4rem;
  line-height: 1;
  font-family: serif;
  color: rgba(255,255,255,0.2);
  height: 40px;
  ${props => props.position === 'left' ? `
    left: 0;
    top: -20px;
  ` : `
    right: 0;
    bottom: -20px;
  `}

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem 0;

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);

  svg {
    color: rgba(255,255,255,0.6);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.8rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 1rem auto 0;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: ${props => props.primary ? 
    'linear-gradient(135deg, rgba(255,255,255,0.95), #fff)' : 
    'rgba(255,255,255,0.05)'
  };
  color: ${props => props.primary ? '#000' : '#fff'};
  border: 1px solid ${props => props.primary ? 
    'transparent' : 
    'rgba(255,255,255,0.2)'
  };
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 
      '#fff' : 
      'rgba(255,255,255,0.1)'
    };
    border-color: ${props => props.primary ? 
      'transparent' : 
      'rgba(255,255,255,0.5)'
    };
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LangSwitch = styled.div`
  display: flex;
  gap: 1px;
  padding: 2px;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  z-index: 10;
`;

export const LangButton = styled.button`
  background: ${props => props.active ? '#fff' : 'transparent'};
  color: ${props => props.active ? '#000' : 'rgba(255,255,255,0.6)'};
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover {
    color: ${props => props.active ? '#000' : '#fff'};
    background: ${props => props.active ? '#fff' : 'rgba(255,255,255,0.1)'};
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;