import { createGlobalStyle, keyframes } from 'styled-components';

const gradientMovement = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const GlobalStyles = createGlobalStyle`
  /* Reset и базовые стили */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Основные настройки */
  :root {
    /* Основная палитра */
    --primary-bg: #0A0A0A;
    --secondary-bg: #111111;
    --tertiary-bg: #1A1A1A;
    
    /* Акценты */
    --accent-light: #FFFFFF;
    --accent-gray: #808080;
    --accent-dark: #2A2A2A;
    
    /* Текст */
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    
    /* Градиенты */
    --gradient-subtle: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    --gradient-glow: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.08),
      transparent
    );
    
    /* Тени */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 2px 4px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    /* Spacing система */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;

    /* Радиусы */
    --radius-sm: 2px;
    --radius-md: 4px;
    --radius-lg: 8px;
    
    /* Анимации */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }

  /* HTML & Body настройки */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    height: 100%;
    background: var(--primary-bg);
    
    /* Адаптивная типографика */
    @media (min-width: 2560px) {
      font-size: 20px;
    }
    
    @media (min-width: 3840px) {
      font-size: 24px;
    }
    
    @media (max-width: 1400px) {
      font-size: 15px;
    }
    
    @media (max-width: 1200px) {
      font-size: 14px;
    }
    
    @media (max-width: 768px) {
      font-size: 13px;
    }
    
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    background: 
      linear-gradient(0deg, transparent 95%, rgba(255, 255, 255, .03) 100%),
      linear-gradient(90deg, transparent 95%, rgba(255, 255, 255, .03) 100%);
    background-size: 20px 20px;
    
    /* Улучшенный рендеринг */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 80%
      );
      pointer-events: none;
    }
  }

  /* Секции */
  section {
    width: 100vw;
   
    position: relative;
    overflow: hidden;
    padding: var(--spacing-lg) 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: var(--gradient-glow);
    }
    
    @media (max-width: 768px) {
      padding: var(--spacing-md) 0;
    }
  }

  /* Контейнер */
  .container {
    width: 100%;
    max-width: 2560px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: var(--spacing-lg);
      bottom: 0;
      width: 1px;
      background: var(--gradient-glow);
    }
    
    @media (max-width: 768px) {
      padding: 0 var(--spacing-md);
      
      &::before {
        left: var(--spacing-md);
      }
    }
  }

  /* Изображения */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    filter: contrast(1.05) brightness(0.95);
    transition: filter var(--transition-normal);
    
    &:hover {
      filter: contrast(1.1) brightness(1);
    }
  }

  /* Ссылки */
  a {
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-normal);
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--text-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform var(--transition-normal);
    }
    
    &:hover {
      color: var(--text-primary);
      
      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  /* Типографика */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 200;
    
    strong {
      font-weight: 600;
    }
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  /* Анимации */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  /* Утилиты */
  .fade-in {
    opacity: 0;
    animation: fadeIn var(--transition-normal) ease forwards;
  }

  .slide-in {
    transform: translateX(-100%);
    animation: slideIn var(--transition-normal) ease forwards;
  }

  /* Скроллбар */
  ::-webkit-scrollbar {
    width: 8px;
    background: var(--secondary-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-dark);
    border-radius: var(--radius-sm);
    
    &:hover {
      background: var(--accent-gray);
    }
  }

  /* Выделение текста */
  ::selection {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
  }
`;

export default GlobalStyles;