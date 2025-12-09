// Contact.styles.js
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const ContactSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    gap: 3rem;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);

  svg {
    color: rgba(255,255,255,0.9);
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  @media (max-width: 768px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.$delay}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);

    ${CardIcon} {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255,255,255,0.7);
  margin-bottom: 0.5rem;
`;

export const CardText = styled.a`
  display: block;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255,255,255,0.8);
    transform: translateX(5px);
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 2rem auto 0;
    width: 100%;
  }
`;

export const ContactButton = styled.button`
  padding: 1rem 2rem;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.primary ? '#000' : '#fff'};
  background: ${props => props.primary ? 
    'linear-gradient(135deg, rgba(255,255,255,0.95), #fff)' : 
    'rgba(255,255,255,0.05)'
  };
  border: 1px solid ${props => props.primary ? 
    'transparent' : 
    'rgba(255,255,255,0.2)'
  };
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

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


export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
