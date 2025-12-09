import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'; // Потом i18n
import GlobalStyles from './GlobalStyles';
import App from './App';

// Создаем метатег для печати
const printViewport = document.createElement('meta');
printViewport.name = 'viewport';
printViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(printViewport);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);