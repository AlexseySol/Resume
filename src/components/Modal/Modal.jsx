import React, { useState } from 'react';
import { Send, X } from 'lucide-react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  Form,
  Input,
  TextArea,
  SubmitButton,
  Subtitle
} from './Modal.styles';
import { sendMessageToTelegram } from '../../utils/telegram';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactMethod: '',
    message: '',
  });

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Новое состояние для сообщения об успехе

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
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

    // Валидация
    if (!name || !email || !contactMethod) {
      setFormError('All fields except message are required!');
      return;
    }

    if (!validateEmail(email)) {
      setFormError('Invalid email format!');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    try {
      console.log('Sending data to Telegram:', formData); // Логируем данные формы
      await sendMessageToTelegram(name, email, contactMethod, message);
      setSuccessMessage('Your message has been sent successfully!'); // Устанавливаем сообщение об успехе
      setTimeout(() => {
        setSuccessMessage('');
        setFormData({ name: '', email: '', contactMethod: '', message: '' }); // Очищаем форму
        onClose(); // Закрываем модалку
      }, 2000); // Закрытие через 2 секунды
    } catch (error) {
      console.error('Error sending form data to Telegram:', error.message);
      setFormError('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={24} />
        </CloseButton>

        <ModalTitle>Get in Touch</ModalTitle>

        {successMessage ? ( // Показываем сообщение об успехе
          <p style={{ color: 'green', textAlign: 'center', marginTop: '20px' }}>
            {successMessage}
          </p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="contactMethod"
              placeholder="How can we contact you? *"
              value={formData.contactMethod}
              onChange={handleChange}
              required
            />
            <TextArea
              name="message"
              placeholder="Your message (optional)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            {formError && <p style={{ color: 'red' }}>{formError}</p>}
            <SubmitButton type="submit" disabled={isSubmitting}>
              <Send size={18} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        )}

        {!successMessage && <Subtitle>I will reply as soon as possible!</Subtitle>}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
