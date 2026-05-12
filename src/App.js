import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { initAnalytics } from './analytics/tracker';
import 'aos/dist/aos.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ProjectPage from './components/Projects/ProjectPage';

function MainPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      disable: window.matchMedia('print').matches,
    });

    const handlePrint = () => {
      document.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-animate');
      });
    };

    window.addEventListener('beforeprint', handlePrint);
    return () => window.removeEventListener('beforeprint', handlePrint);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div data-aos="fade-down"><Hero /></div>
      <div data-aos="fade-up"><About /></div>
      <div data-aos="fade-up"><Skills /></div>
      <div data-aos="fade-up"><Experience /></div>
      <div data-aos="fade-up"><Projects /></div>
      <div data-aos="fade-up"><Education /></div>
      <div data-aos="fade-up"><Contact /></div>
    </div>
  );
}

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
