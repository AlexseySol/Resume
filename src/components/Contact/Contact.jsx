import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, ExternalLink, MessageCircle } from 'lucide-react';
import * as S from './Contact.styles';

const Contact = () => {
  const { i18n } = useTranslation();

  const contactData = i18n.language === 'ua'
    ? {
        title: "Зв'язок",
        contacts: [
          {
            icon: <Mail />,
            title: 'Email',
            text: 'alexsey.solyanoy@gmail.com',
            link: 'mailto:alexsey.solyanoy@gmail.com'
          },
          {
            icon: <Send />,
            title: 'Telegram',
            text: '@Memory_al',
            link: 'https://t.me/Memory_al'
          },
          {
            icon: <ExternalLink />,
            title: 'Telegram канал',
            text: 'AI NEWS',
            link: 'https://t.me/V3vj2KRLbT5iMDU6'
          }
        ],
        buttons: {
          telegram: 'Написати в Telegram',
          email: 'Надіслати Email'
        }
      }
    : {
        title: 'Contact',
        contacts: [
          {
            icon: <Mail />,
            title: 'Email',
            text: 'alexsey.solyanoy@gmail.com',
            link: 'mailto:alexsey.solyanoy@gmail.com'
          },
          {
            icon: <Send />,
            title: 'Telegram',
            text: '@Memory_al',
            link: 'https://t.me/Memory_al'
          },
          {
            icon: <ExternalLink />,
            title: 'Telegram Channel',
            text: 'AI NEWS',
            link: 'https://t.me/V3vj2KRLbT5iMDU6'
          }
        ],
        buttons: {
          telegram: 'Write on Telegram',
          email: 'Send Email'
        }
      };

  return (
    <S.ContactSection>
      <S.ContentWrapper>
        <S.TitleArea>
          <S.CardIcon>
            <MessageCircle size={28} />
          </S.CardIcon>
          <S.SectionTitle>{contactData.title}</S.SectionTitle>
        </S.TitleArea>

        <S.ContactGrid>
          {contactData.contacts.map((contact, index) => (
            <S.ContactCard key={index} $delay={index * 0.1}>
              <S.CardIcon>{contact.icon}</S.CardIcon>
              <S.CardContent>
                <S.CardTitle>{contact.title}</S.CardTitle>
                <S.CardText 
                  as="a" 
                  href={contact.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {contact.text}
                </S.CardText>
              </S.CardContent>
            </S.ContactCard>
          ))}
        </S.ContactGrid>

       
        
      </S.ContentWrapper>
    </S.ContactSection>
  );
};

export default Contact;