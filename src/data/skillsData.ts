import { Monitor, FileCode, Database, Network, Server, Wrench, Cpu, Library } from 'lucide-react';

export const skillsData = {
  'Systèmes d\'exploitation': {
    icon: Monitor,
    skills: [
      { name: 'Linux', wikiLink: 'https://fr.wikipedia.org/wiki/Linux', icon: Monitor },
      { name: 'Windows', wikiLink: 'https://fr.wikipedia.org/wiki/Microsoft_Windows', icon: Monitor },
      { name: 'OpenBSD', wikiLink: 'https://fr.wikipedia.org/wiki/OpenBSD', icon: Monitor },
      { name: 'FreeBSD', wikiLink: 'https://fr.wikipedia.org/wiki/FreeBSD', icon: Monitor },
      { name: 'Mageia', wikiLink: 'https://fr.wikipedia.org/wiki/Mageia', icon: Monitor },
      { name: 'Debian', wikiLink: 'https://fr.wikipedia.org/wiki/Debian', icon: Monitor }
    ]
  },
  'Langages de programmation': {
    icon: FileCode,
    skills: [
      { name: 'C/C++', wikiLink: 'https://fr.wikipedia.org/wiki/C%2B%2B', icon: FileCode },
      { name: 'HTML', wikiLink: 'https://fr.wikipedia.org/wiki/Hypertext_Markup_Language', icon: FileCode },
      { name: 'CSS', wikiLink: 'https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade', icon: FileCode },
      { name: 'PHP', wikiLink: 'https://fr.wikipedia.org/wiki/PHP', icon: FileCode },
      { name: 'Python', wikiLink: 'https://fr.wikipedia.org/wiki/Python_(langage)', icon: FileCode },
      { name: 'Java', wikiLink: 'https://fr.wikipedia.org/wiki/Java_(langage)', icon: FileCode },
      { name: 'JavaScript', wikiLink: 'https://fr.wikipedia.org/wiki/JavaScript', icon: FileCode }
    ]
  },
  'Frameworks & Outils': {
    icon: Library,
    skills: [
      { name: 'Node.js', wikiLink: 'https://fr.wikipedia.org/wiki/Node.js', icon: FileCode },
      { name: 'Express.js', wikiLink: 'https://fr.wikipedia.org/wiki/Express.js', icon: FileCode },
      { name: 'React.js', wikiLink: 'https://fr.wikipedia.org/wiki/React', icon: FileCode },
      { name: 'Bootstrap', wikiLink: 'https://fr.wikipedia.org/wiki/Bootstrap_(framework)', icon: FileCode },
      { name: 'Tailwind CSS', wikiLink: 'https://fr.wikipedia.org/wiki/Tailwind_CSS', icon: FileCode },
      { name: 'Symfony', wikiLink: 'https://fr.wikipedia.org/wiki/Symfony', icon: FileCode }
    ]
  },
  'Bases de données': {
    icon: Database,
    skills: [
      { name: 'MongoDB', wikiLink: 'https://fr.wikipedia.org/wiki/MongoDB', icon: Database },
      { name: 'MySQL', wikiLink: 'https://fr.wikipedia.org/wiki/MySQL', icon: Database },
      { name: 'SQLite', wikiLink: 'https://fr.wikipedia.org/wiki/SQLite', icon: Database }
    ]
  },
  'Réseaux': {
    icon: Network,
    skills: [
      { name: 'Configuration routeurs', wikiLink: 'https://fr.wikipedia.org/wiki/Routeur', icon: Server },
      { name: 'Configuration switches', wikiLink: 'https://fr.wikipedia.org/wiki/Commutateur_réseau', icon: Server },
      { name: 'Maintenance réseaux', wikiLink: 'https://fr.wikipedia.org/wiki/Administration_réseau', icon: Server }
    ]
  },
  'Dépannage': {
    icon: Wrench,
    skills: [
      { name: 'Montage PC', wikiLink: 'https://fr.wikipedia.org/wiki/Ordinateur_personnel', icon: Cpu },
      { name: 'Démontage PC', wikiLink: 'https://fr.wikipedia.org/wiki/Ordinateur_personnel', icon: Cpu },
      { name: 'Assistance technique', wikiLink: 'https://fr.wikipedia.org/wiki/Support_technique', icon: Wrench }
    ]
  }
};