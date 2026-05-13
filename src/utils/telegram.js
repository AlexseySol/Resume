// src/utils/telegram.js
import axios from 'axios';

const TELEGRAM_API_URL = 'https://api.telegram.org/bot';
const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHANNEL_ID = import.meta.env.VITE_TELEGRAM_CHANNEL_ID

export const sendMessageToTelegram = async (name, email, contactMethod, message) => {
  // Форматируем текст сообщения
  const messageText = `
  *Новая заявка с сайта!* 🎉
  
  *Имя:* ${name}
  *Email:* ${email}
  *Как связаться:* ${contactMethod}
  ${message ? `*Сообщение:* ${message}` : ''}
  
  _Проверьте и свяжитесь с клиентом как можно скорее!_
  `;

  const data = {
    chat_id: TELEGRAM_CHANNEL_ID,
    text: messageText,
    parse_mode: 'Markdown', // Используем Markdown для форматирования текста
  };

  try {
    const response = await axios.post(`${TELEGRAM_API_URL}${TELEGRAM_TOKEN}/sendMessage`, data);
    console.log('Message sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error.response?.data || error.message);
    throw new Error('Failed to send message');
  }
};
