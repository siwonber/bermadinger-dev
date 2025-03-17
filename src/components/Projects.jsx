import React from "react";
import { FolderOpen } from "lucide-react";

const projects = [
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

const Projects = () => {
  return (
    <div id="projects" className="h-auto text-white py-12 px-6 font-mono">
      <h2 className="text-4xl font-bold text-white mb-8 bg-black max-w-3xl mx-auto flex items-center justify-center gap-2">
        <FolderOpen size={36} className="text-primaryColor" />
        Projekte
      </h2>
      <div className="max-w-3xl mx-auto bg-black">
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryColor text-2xl hover:underline"
            >
              {project.name}
            </a>
            <p className="text-gray-400 text-sm mt-1">{project.details}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 border border-primaryColor text-primaryColor rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
