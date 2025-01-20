import { useEffect, useState } from 'react';
import { 
  Scroll, Mail as MailIcon, MapPin, Github as GithubIcon, Linkedin, Code2, BookOpen, Briefcase, 
  Languages, GraduationCap, Database, Monitor, Globe, Network, Wrench, 
  FileCode, Server, Settings, Cpu 

} from 'lucide-react';

// Liens Wikipedia pour les compétences
const wikiLinks = {
  // Systèmes d'exploitation
  'Linux': 'https://fr.wikipedia.org/wiki/Linux',
  'Windows': 'https://fr.wikipedia.org/wiki/Microsoft_Windows',
  'OpenBSD': 'https://fr.wikipedia.org/wiki/OpenBSD',
  'FreeBSD': 'https://fr.wikipedia.org/wiki/FreeBSD',
  'Mageia': 'https://fr.wikipedia.org/wiki/Mageia',
  'Debian': 'https://fr.wikipedia.org/wiki/Debian',
  
  // Langages de programmation
  'C/C++': 'https://fr.wikipedia.org/wiki/C%2B%2B',
  'HTML': 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language',
  'CSS': 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade',
  'PHP': 'https://fr.wikipedia.org/wiki/PHP',
  'Python': 'https://fr.wikipedia.org/wiki/Python_(langage)',
  'Java': 'https://fr.wikipedia.org/wiki/Java_(langage)',
  'JavaScript': 'https://fr.wikipedia.org/wiki/JavaScript',
  
  // Bases de données
  'MongoDB': 'https://fr.wikipedia.org/wiki/MongoDB',
  'MySQL': 'https://fr.wikipedia.org/wiki/MySQL',
  'SQLite': 'https://fr.wikipedia.org/wiki/SQLite',
  
  // Réseaux
  'Configuration routeurs': 'https://fr.wikipedia.org/wiki/Routeur',
  'Configuration switches': 'https://fr.wikipedia.org/wiki/Commutateur_réseau',
  'Maintenance réseaux': 'https://fr.wikipedia.org/wiki/Administration_réseau',
  
  // Dépannage
  'Montage PC': 'https://fr.wikipedia.org/wiki/Ordinateur_personnel',
  'Démontage PC': 'https://fr.wikipedia.org/wiki/Ordinateur_personnel',
  'Assistance technique': 'https://fr.wikipedia.org/wiki/Support_technique'
};

// Liens vers les projets GitHub
const projectLinks = {
  'CultureQuiz': 'https://github.com/Deniz09OK/CultureQuiz',
  'AI-Morpion': 'https://github.com/Deniz09OK/AI-Morpion',
  'API Symfony': 'https://github.com/Deniz09OK/API-Asymfony',
  'Projet Jeu Java': 'https://github.com/Deniz09OK/Projet-Jeu-Java'
};

// Descriptions des projets
const projectDescriptions: { [key: string]: string } = {
  'CultureQuiz': 'Application de quiz interactif pour tester ses connaissances sur divers sujets.',
  'AI-Morpion': 'Développement d\'un jeu de Morpion avec une intelligence artificielle.',
  'API Symfony': 'API RESTful développée avec le framework Symfony.',
  'Projet Jeu Java': 'Jeu développé en Java avec interface graphique.'
};

function App() {
  const [, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section avec À propos intégré */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558862107-d49ef2a04d72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Monitor className="w-16 h-16 mx-auto md:mx-0 mb-6 text-red-600 animate-bounce" />
              <h1 className="hero-title text-5xl font-bold mb-4 text-gray-800 font-['Noto_Serif_JP']">Deniz OK</h1>
              <p className="hero-subtitle text-xl text-gray-600 mb-8">Développeur Full Stack</p>
              <div className="hero-buttons flex justify-center md:justify-start space-x-4">
                <a href="mailto:deniz.ok@epitech.eu" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" />
                  Contact
                </a>
                <a href="#portfolio" className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Scroll className="w-5 h-5 mr-2 animate-bounce" />
                  Portfolio
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

      {/* Section Formation */}
      <section id="education" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-red-600 icon-spin" />
            Formation
          </h2>
          <div className="space-y-8">
            <div className="education-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Programme MSc Pro (En Cours)</h3>
              <p className="text-gray-600 mb-2">Epitech Nancy | 09/2024-07/2027</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pédagogie active - Programmation (HTML, CSS, PHP, Python, Java, JavaScript)</li>
                <li>Virtualisation (Debian, OpenBSD, FreeBSD)</li>
              </ul>
            </div>
            <div className="education-card bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-2">BTS SNIR (Systèmes Numériques - Informatique et Réseaux)</h3>
              <p className="text-gray-600 mb-2">Charles de Foucauld, Nancy | 09/2020-07/2022</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Programmation (C/C++, HTML, CSS, Python)</li>
                <li>Administration Réseau (VLAN, LAN, Routeur, Commutateur, IPv4, Sous-réseaux)</li>
                <li>Virtualisation (Mageia)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
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

      {/* Section Compétences */}
      <section id="skills" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
            <Settings className="w-8 h-8 mr-3 text-red-600 icon-spin" />
            Compétences
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
            {/* Systèmes d'exploitation */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 flex items-center">
                <Monitor className="w-5 h-5 mr-2 text-red-600" />
                Systèmes d'exploitation
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {['Linux', 'Windows', 'OpenBSD', 'FreeBSD', 'Mageia', 'Debian'].map((skill) => (
                  <a
                    key={skill}
                    href={wikiLinks[skill as keyof typeof wikiLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card bg-white px-4 py-3 rounded-lg text-sm text-gray-600 text-center shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Monitor className="w-4 h-4 mr-2 text-red-600" />
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Langages de programmation */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 flex items-center">
                <FileCode className="w-5 h-5 mr-2 text-red-600" />
                Langages de programmation
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {['C/C++', 'HTML', 'CSS', 'PHP', 'Python', 'Java', 'JavaScript'].map((skill) => (
                  <a
                    key={skill}
                    href={wikiLinks[skill as keyof typeof wikiLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card bg-white px-4 py-3 rounded-lg text-sm text-gray-600 text-center shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <FileCode className="w-4 h-4 mr-2 text-red-600" />
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bases de données */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 flex items-center">
                <Database className="w-5 h-5 mr-2 text-red-600" />
                Bases de données
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {['MongoDB', 'MySQL', 'SQLite'].map((skill) => (
                  <a
                    key={skill}
                    href={wikiLinks[skill as keyof typeof wikiLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card bg-white px-4 py-3 rounded-lg text-sm text-gray-600 text-center shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Database className="w-4 h-4 mr-2 text-red-600" />
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Réseaux */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 flex items-center">
                <Network className="w-5 h-5 mr-2 text-red-600" />
                Réseaux
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {['Configuration routeurs', 'Configuration switches', 'Maintenance réseaux'].map((skill) => (
                  <a
                    key={skill}
                    href={wikiLinks[skill as keyof typeof wikiLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card bg-white px-4 py-3 rounded-lg text-sm text-gray-600 text-center shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Server className="w-4 h-4 mr-2 text-red-600" />
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Dépannage */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-700 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-red-600" />
                Dépannage
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {['Montage PC', 'Démontage PC', 'Assistance technique'].map((skill) => (
                  <a
                    key={skill}
                    href={wikiLinks[skill as keyof typeof wikiLinks]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card bg-white px-4 py-3 rounded-lg text-sm text-gray-600 text-center shadow-sm hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <Cpu className="w-4 h-4 mr-2 text-red-600" />
                      {skill}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="portfolio" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
            <Code2 className="w-8 h-8 mr-3 text-red-600 icon-spin" />
            Projets
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(projectLinks).map(([name, link]: [string, string]) => (
              <a 
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-4 flex items-center text-gray-800">
                  <GithubIcon className="w-5 h-5 mr-2 text-red-600" />
                  {name}
                </h3>
                <p className="text-gray-600">
                  {projectDescriptions[name]}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section Langues - Déplacée après les projets */}
      <section id="languages" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center">
            <Languages className="w-8 h-8 mr-3 text-red-600 icon-spin" />
            Langues
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-red-600" />
                Français
              </h3>
              <p className="text-gray-600">Langue maternelle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-red-600" />
                Turc
              </h3>
              <p className="text-gray-600">Langue maternelle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-red-600" />
                Anglais
              </h3>
              <p className="text-gray-600">TOEIC 790/990</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Deniz09OK" className="hover:text-red-400 transition duration-300">
              <GithubIcon className="w-6 h-6 icon-spin" />
            </a>
            <a href="https://www.linkedin.com/in/deniz-ok" className="hover:text-red-400 transition duration-300">
              <Linkedin className="w-6 h-6 icon-spin" />
            </a>
          </div>
          <p className="text-center text-gray-400">© 2025 Deniz OK.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;