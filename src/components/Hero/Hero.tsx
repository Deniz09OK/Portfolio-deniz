import React from 'react';
import { Monitor, Mail, Scroll, BookOpen, MapPin, FileDown } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558862107-d49ef2a04d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Monitor className="w-16 h-16 mx-auto md:mx-0 mb-6 text-red-600 animate-bounce" />
            <h1 className="hero-title text-5xl font-bold mb-4 text-gray-800 font-['Noto_Serif_JP']">Deniz OK</h1>
            <p className="hero-subtitle text-xl text-gray-600 mb-8">Développeur Full Stack</p>
            <div className="hero-buttons flex flex-wrap justify-center md:justify-start gap-4">
              <a href="mailto:deniz.ok@epitech.eu" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
              <a href="#portfolio" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 flex items-center">
                <Scroll className="w-5 h-5 mr-2 animate-bounce" />
                Portfolio
              </a>
              <a 
                href="/CV Deniz OK Recherche D'alternance (18).pdf" 
                download 
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Télécharger CV
              </a>
            </div>
          </div>
          <div className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-red-600" />
              À propos
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Étudiant à Epitech, je recherche une alternance en développement informatique à partir de janvier 2025 pour 30 mois. Passionné par les technologies, je souhaite renforcer mes compétences en développement logiciel, programmation et gestion de projets dans un cadre innovant et dynamique.
            </p>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 text-red-600" />
              Nancy, France
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};