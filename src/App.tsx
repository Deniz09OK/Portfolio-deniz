import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Languages } from './components/Languages/Languages';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;