import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,     // продолжительность анимации
      once: true,         // анимация происходит только один раз
      offset: 100,        // отступ перед началом анимации
      delay: 100,         // задержка перед началом
      easing: 'ease-in-out', // тип анимации
    });
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
          <Education />
        </div>
        
        <div data-aos="fade-up">
          <Achievements />
        </div>
        
        <div data-aos="fade-up">
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;