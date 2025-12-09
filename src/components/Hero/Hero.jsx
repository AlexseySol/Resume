import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mail, MessageCircle, MapPin } from 'lucide-react';
import Modal from '../Modal/Modal';
import {
  HeroContainer,
  ContentWrapper,
  ImageSection,
  ProfileImage,
  MainInfo,
  Header,
  ResumeTitle,
  LocationBadge,
  QuoteWrapper,
  QuoteText,
  QuoteMarks,
  SpecialtiesList,
  SpecialtyItem,
  ButtonGroup,
  Button,
  LangSwitch,
  LangButton,
  Footer
} from './Hero.styles';

const Hero = () => {
  const { i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const specialties = i18n.language === 'ua'
    ? ['Спеціаліст з автоматизації', 'Впровадження штучного інтелекту', 'n8n спеціаліст', 'AI інтегратор']
    : ['Automation Specialist', 'AI Implementation Expert', 'n8n Specialist', 'AI Integrator'];

  const quote = i18n.language === 'ua'
    ? 'Інновації - це особливий інструмент, який дозволяє перетворити зміни на можливості'
    : 'Innovation is the specific tool that allows us to transform change into opportunity';

  const resumeTitle = i18n.language === 'ua' 
    ? 'Резюме Олексія С.' 
    : 'Resume of Oleksiy S.';

  return (
    <>
      <HeroContainer>
        <Header>
          <LangSwitch>
            <LangButton
              active={i18n.language === 'en'}
              onClick={() => i18n.changeLanguage('en')}
            >
              EN
            </LangButton>
            <LangButton
              active={i18n.language === 'ua'}
              onClick={() => i18n.changeLanguage('ua')}
            >
              UA
            </LangButton>
          </LangSwitch>
        </Header>

        <ImageSection>
          <ProfileImage
            src="/images/profile.jpg"
            alt={i18n.language === 'ua' ? 'Олексій Соляной' : 'Oleksiy Solyanoy'}
            loading="eager"
          />
        </ImageSection>

        <ContentWrapper>
          <MainInfo>
            <ResumeTitle>
              {resumeTitle}
            </ResumeTitle>

            <SpecialtiesList>
              {specialties.map((specialty, index) => (
                <SpecialtyItem key={specialty} index={index}>
                  {specialty}
                </SpecialtyItem>
              ))}
            </SpecialtiesList>

            <QuoteWrapper>
              <QuoteMarks position="left">"</QuoteMarks>
              <QuoteText>{quote}</QuoteText>
              <QuoteMarks position="right">"</QuoteMarks>
            </QuoteWrapper>

            <ButtonGroup>
              <Button 
                primary
                onClick={() => setIsModalOpen(true)}
              >
                <MessageCircle size={18} />
                {i18n.language === 'ua' ? 'Написати мені' : 'Contact Me'}
              </Button>

              <Button
                as="a"
                href="https://t.me/Memory_al"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={18} />
                Telegram
              </Button>

              <Button
                as="a"
                href="mailto:alexsey.solyanoy@gmail.com"
              >
                <Mail size={18} />
                Email
              </Button>
            </ButtonGroup>
          </MainInfo>

          <Footer>
            <LocationBadge>
              <MapPin size={16} />
              {i18n.language === 'ua' ? 'Київ, Україна' : 'Kyiv, Ukraine'}
            </LocationBadge>
          </Footer>
        </ContentWrapper>
      </HeroContainer>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Hero;