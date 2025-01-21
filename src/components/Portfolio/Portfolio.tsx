import React from 'react';
import { Code2, Github } from 'lucide-react';
import { projectsData } from '../../data/projectsData';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
          <Code2 className="w-8 h-8 mr-3 text-red-600 icon-spin" />
          Projets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <a 
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="font-bold text-xl mb-4 flex items-center text-gray-800">
                <Github className="w-5 h-5 mr-2 text-red-600" />
                {project.name}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};