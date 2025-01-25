import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Skills } from './components/Skills/Skills';
import { Interests } from './components/Interests/Interests';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Languages } from './components/Languages/Languages';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Interests />
      <Portfolio />
      <Languages />
      <Footer />
    </div>
  );
}