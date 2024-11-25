import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Подключаем i18n
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
