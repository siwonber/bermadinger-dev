import React from "react";
import { FolderOpen } from "lucide-react";

const schoolProjects = [
  {
    name: "Projekt Kaspal 1",
    details:
      "Ein leistungsstarkes Web-Tool zur Analyse von Datenströmen in Echtzeit.",
    technologies: ["React", "Tailwind", "Node.js"],
    link: "https://projekt-alpha.com",
  },
  {
    name: "Projekt Kaspal 2",
    details:
      "Ein minimalistischer Code-Editor mit Live-Preview für Web-Entwicklung.",
    technologies: ["Electron", "TypeScript", "Monaco Editor"],
    link: "https://projekt-beta.com",
  },
  {
    name: "Projekt Kaspal 3",
    details: "Eine KI-gestützte Suchmaschine für technische Dokumentationen.",
    technologies: ["Python", "Flask", "Elasticsearch"],
    link: "https://projekt-gamma.com",
  },
];

const otherProjects = [
  {
    name: "Side Project 1",
    details: "Ein persönliches Projekt zur Automatisierung von Deployments.",
    technologies: ["Go", "Docker", "CI/CD"],
    link: "https://side-project.com",
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-black p-6 mb-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between relative">
    {/* Icon */}
    <div className="absolute top-4 right-4 text-primaryColor">
      <FolderOpen size={24} className="hover:rotate-12 transition-transform duration-300" />
    </div>

    <div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primaryColor text-2xl font-semibold hover:underline"
      >
        {project.name}
      </a>
      <p className="text-gray-400 text-sm mt-3">{project.details}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-xs px-3 py-1 border border-primaryColor text-primaryColor rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="w-full mb-6 bg-black border border-primaryColor py-2 px-4 rounded-md flex items-center justify-between">
    <span className="text-primaryColor text-sm uppercase tracking-widest font-semibold">{title}</span>
  </div>
);

const Projects = () => {
  return (
    <div id="projects" className="h-auto text-white py-12 px-4 font-mono overflow-hidden">
      <h2 className="text-4xl font-bold text-primaryTextColor mb-12 flex items-center justify-center gap-3">
        Projekte
      </h2>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* School Projects */}
        <div>
          <SectionHeader title="School Projects" />
          {schoolProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <SectionHeader title="Projects" />
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll - School Projects */}
      <div className="sm:hidden mb-8">
        <SectionHeader title="School Projects" />
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {schoolProjects.map((project, index) => (
            <div key={index} className="flex-shrink-0 basis-[90%] snap-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Horizontal Scroll - Other Projects */}
      <div className="sm:hidden">
        <SectionHeader title="Projects" />
        <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {otherProjects.map((project, index) => (
            <div key={index} className="flex-shrink-0 basis-[90%] snap-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Projects;
