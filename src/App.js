import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    // Инициализация AOS
    AOS.init({
      duration: 1000,     // продолжительность анимации
      once: true,         // анимация происходит только один раз
      offset: 100,        // отступ перед началом анимации
      delay: 100,         // задержка перед началом
      easing: 'ease-in-out', // тип анимации
      disable: window.matchMedia('print').matches // Отключаем для печати
    });

    // Обработчик для печати
    const handlePrint = () => {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-animate');
      });
    };

    window.addEventListener('beforeprint', handlePrint);
    return () => window.removeEventListener('beforeprint', handlePrint);
  }, []);

  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div data-aos="fade-down">
          <Hero />
        </div>

        <div data-aos="fade-up">
          <About />
        </div>

        <div data-aos="fade-up">
          <Skills />
        </div>

        <div data-aos="fade-up">
          <Experience />
        </div>

        <div data-aos="fade-up">
          <Projects />
        </div>

        <div data-aos="fade-up">
          <Education />
        </div>

        <div data-aos="fade-up">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;