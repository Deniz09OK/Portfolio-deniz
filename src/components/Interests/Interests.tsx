import React from 'react';
import { Heart, Gamepad2, Music, Book, Trophy } from 'lucide-react';

export const Interests = () => {
  return (
    <section id="interests" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
          <Heart className="w-8 h-8 mr-3 text-red-600 icon-spin" />
          Centres d'intérêt
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Culture Japonaise section */}
          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-600" />
              Culture Japonaise
            </h3>
            <p className="text-gray-600 mb-4">
              Passionné d'animes et de mangas.
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Top 3 Animes
                </h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Naruto</li>
                  <li>Fullmetal Alchemist: Brotherhood</li>
                  <li>Death Note</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Autres favoris :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dragon Ball Z</li>
                  <li>Les Chevaliers du Zodiaque</li>
                  <li>Yu-Gi-Oh!</li>
                  <li>Chainsaw Man</li>
                  <li>Jujutsu Kaisen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Musique section */}
          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Music className="w-5 h-5 mr-2 text-red-600" />
              Musique
            </h3>
            <p className="text-gray-600 mb-4">
              Éclectique dans mes goûts musicaux.
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Top 3 Artistes
                </h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Orelsan</li>
                  <li>Linkin Park</li>
                  <li>Flow</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Par genre :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Rap : Future, Freeze Corleone, Kendrick Lamar</li>
                  <li>Rock : Imagine Dragons</li>
                  <li>J-pop : Ado, Creepy Nuts, SiM, Survive Said The Prophet, MAN WITH A MISSION</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Jeux Vidéo section */}
          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 mr-2 text-red-600" />
              Jeux Vidéo
            </h3>
            <p className="text-gray-600 mb-4">
              Amateur de jeux de stratégie et FPS.
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Top 3 Jeux
                </h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Civilization</li>
                  <li>Age of Empires</li>
                  <li>Football Manager</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Autres jeux :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Doom</li>
                  <li>League of Legends</li>
                  <li>Crusader Kings III</li>
                  <li>Mobile Legends</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mythologie section */}
          <div className="interest-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Book className="w-5 h-5 mr-2 text-red-600" />
              Mythologie
            </h3>
            <p className="text-gray-600 mb-4">
              Passionné par les contes mythologiques.
            </p>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-600 flex items-center mb-2">
                  <Trophy className="w-4 h-4 mr-2" />
                  Top 3 Mythologies
                </h4>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Mythologie Grecque</li>
                  <li>Mythologie Viking</li>
                  <li>Mythologie Turque</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Autres mythologies :</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Mythologie Romaine</li>
                  <li>Mythologie Aztèque</li>
                  <li>Mythologie Inca</li>
                  <li>Mythologie Maya</li>
                  <li>Mythologie Japonaise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};