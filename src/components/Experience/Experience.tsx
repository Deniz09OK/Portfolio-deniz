import React from 'react';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
          <Briefcase className="w-8 h-8 mr-3 text-red-600 icon-spin" />
          Expérience Professionnelle
        </h2>
        <div className="space-y-8">
          <div className="experience-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Equipier polyvalent</h3>
            <p className="text-gray-600 mb-2">Burger King, Vandoeuvre-lès-Nancy | 01/2024-03/2024</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Service à table et au drive - Entretien du restaurant</li>
              <li>Service client : Accueil chaleureux, prise de commande rapide et précise</li>
            </ul>
          </div>
          <div className="experience-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Volontaire Stagiaire</h3>
            <p className="text-gray-600 mb-2">1er régiment du service militaire volontaire, Montigny-Lès-Metz | 03/2023-12/2023</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Développement de compétences essentielles en discipline et travail d'équipe</li>
              <li>Participation à des missions variées et enrichissantes</li>
            </ul>
          </div>
          <div className="experience-card bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Installation et mise en service d'une salle informatique (Stage)</h3>
            <p className="text-gray-600 mb-2">Charles de Foucauld Nancy | 05/2021-07/2021</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Installation de nouveaux ordinateurs dans une salle informatique</li>
              <li>Création d'adresses IP pour les étudiants en BTS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};