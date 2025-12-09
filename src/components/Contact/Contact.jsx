import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, ExternalLink, MessageCircle } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer'; // Импортируем компонент для скачивания PDF
import PortfolioPDF from '../../pdf/PortfolioPDF';

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
          email: 'Надіслати Email',
          download: 'Завантажити PDF'
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
          email: 'Send Email',
          download: 'Download PDF'
        }
      };

  const pdfData = {
    hero: {
      title: i18n.language === 'ua' ? 'Резюме Олексія С.' : 'Resume of Oleksiy S.',
      quote: i18n.language === 'ua'
        ? 'Інновації - це особливий інструмент, який дозволяє перетворити зміни на можливості'
        : 'Innovation is the specific tool that allows us to transform change into opportunity'
    },
    about: { text: 'I am a prompt engineer and web developer specializing in AI solutions.' },
    skills: ['JavaScript', 'React', 'Node.js', 'AI Development'],
    experience: ['Web Developer at XYZ', 'Prompt Engineer at ABC'],
    education: ['Kyiv Polytechnic Institute', 'AI Certification'],
    achievements: ['Created a successful AI chatbot', 'Automated company workflows'],
    contact: { email: 'alexsey.solyanoy@gmail.com', telegram: 'https://t.me/Memory_al' }
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

        {/* Кнопка для скачивания PDF */}
        <S.ButtonGroup>
          <PDFDownloadLink
            document={<PortfolioPDF {...pdfData} />}
            fileName="portfolio.pdf"
            style={{ textDecoration: 'none', color: 'white', background: '#333', padding: '10px 20px', borderRadius: '5px', marginTop: '20px' }}
          >
            {({ loading }) => (loading ? (i18n.language === 'ua' ? 'Генерація PDF...' : 'Generating PDF...') : contactData.buttons.download)}
          </PDFDownloadLink>
        </S.ButtonGroup>
      </S.ContentWrapper>
    </S.ContactSection>
  );
};

export default Contact;
