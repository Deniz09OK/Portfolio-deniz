import React from 'react';
import { Heart, Gamepad2, Music, Book } from 'lucide-react';

export const Interests = () => {
  return (
    <section id="interests" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
          <Heart className="w-8 h-8 mr-3 text-red-600 icon-spin" />
          Centres d'intérêt
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-600" />
              Culture Japonaise
            </h3>
            <p className="text-gray-600">
              Passionné d'animes et de mangas. Parmi mes préférés :
            </p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Chainsaw Man</li>
              <li>• Naruto</li>
              <li>• Jujutsu Kaisen</li>
              <li>• Fullmetal Alchemist: Brotherhood</li>
              <li>• Death Note</li>
            </ul>
          </div>

          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Music className="w-5 h-5 mr-2 text-red-600" />
              Musique
            </h3>
            <p className="text-gray-600">
              Éclectique dans mes goûts musicaux :
            </p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Rap : Future, Kendrick Lamar, Freeze Corleone</li>
              <li>• Rock : Linkin Park</li>
              <li>• J-pop : Flow, Ado, Creepy Nuts, SiM, Survive Said The Prophet, MAN WITH A MISSION</li>
            </ul>
          </div>

          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 mr-2 text-red-600" />
              Jeux Vidéo
            </h3>
            <p className="text-gray-600">
              Amateur de jeux de stratégie et MOBA :
            </p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Age of Empires</li>
              <li>• Football Manager</li>
              <li>• Civilization</li>
              <li>• League of Legends</li>
              <li>• Crusader Kings III</li>
              <li>• Mobile Legends</li>
            </ul>
          </div>

          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-600" />
              Mythologie
            </h3>
            <p className="text-gray-600">
              Passionné par les contes mythologiques :
            </p>
            <ul className="mt-2 space-y-1 text-gray-700">
              <li>• Mythologie Grecque</li>
              <li>• Mythologie Romaine</li>
              <li>• Mythologie Viking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};