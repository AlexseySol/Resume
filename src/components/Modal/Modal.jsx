import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, X } from 'lucide-react';

import * as S from './Modal.styles';
import { sendMessageToTelegram } from '../../utils/telegram';

const Modal = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactMethod: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, contactMethod, message } = formData;

    if (!name || !email || !contactMethod) {
      setFormError(i18n.language === 'ua' 
        ? 'Всі поля, крім повідомлення, обов\'язкові!' 
        : 'All fields except message are required!'
      );
      return;
    }

    if (!validateEmail(email)) {
      setFormError(i18n.language === 'ua'
        ? 'Невірний формат email!'
        : 'Invalid email format!'
      );
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      await sendMessageToTelegram(name, email, contactMethod, message);
      setSuccessMessage(i18n.language === 'ua'
        ? 'Ваше повідомлення успішно надіслано!'
        : 'Your message has been sent successfully!'
      );
      setTimeout(() => {
        setSuccessMessage('');
        setFormData({ name: '', email: '', contactMethod: '', message: '' });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending form data to Telegram:', error.message);
      setFormError(i18n.language === 'ua'
        ? 'Помилка відправки. Спробуйте пізніше.'
        : 'Failed to send. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>
          <X size={24} />
        </S.CloseButton>

        <S.ModalTitle>
          {i18n.language === 'ua' ? 'Зв\'яжіться зі мною' : 'Get in Touch'}
        </S.ModalTitle>

        {successMessage ? (
          <S.SuccessMessage>{successMessage}</S.SuccessMessage>
        ) : (
          <S.Form onSubmit={handleSubmit}>
            <S.Input
              type="text"
              name="name"
              placeholder={i18n.language === 'ua' ? 'Ваше ім\'я *' : 'Your name *'}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <S.Input
              type="email"
              name="email"
              placeholder={i18n.language === 'ua' ? 'Ваш email *' : 'Your email *'}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <S.Input
              type="text"
              name="contactMethod"
              placeholder={i18n.language === 'ua' ? 'Як з вами зв\'язатися? *' : 'How can we contact you? *'}
              value={formData.contactMethod}
              onChange={handleChange}
              required
            />
            <S.TextArea
              name="message"
              placeholder={i18n.language === 'ua' ? 'Ваше повідомлення' : 'Your message'}
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            {formError && <S.ErrorMessage>{formError}</S.ErrorMessage>}
            <S.SubmitButton type="submit" disabled={isSubmitting}>
              <Send size={18} />
              {isSubmitting 
                ? (i18n.language === 'ua' ? 'Відправка...' : 'Sending...')
                : (i18n.language === 'ua' ? 'Надіслати' : 'Send Message')
              }
            </S.SubmitButton>
          </S.Form>
        )}

        {!successMessage && (
          <S.Subtitle>
            {i18n.language === 'ua'
              ? 'Я відповім якомога швидше!'
              : 'I will reply as soon as possible!'
            }
          </S.Subtitle>
        )}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;