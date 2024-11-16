import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <Router>
      <div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
