import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
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
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-out',
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
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
