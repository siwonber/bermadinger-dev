import React from "react";
import { FolderOpen } from "lucide-react";

const ProjectCard = ({ project }) => (
  <div className="bg-black p-8 mb-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between relative">
    {/* Icon */}
    <div className="absolute top-5 right-5 text-primaryColor">
      <FolderOpen size={28} className="hover:rotate-12 transition-transform duration-300" />
    </div>

    <div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primaryColor text-2xl font-bold hover:underline"
      >
        {project.name}
      </a>
      <p className="text-gray-400 text-base mt-4 leading-relaxed">{project.details}</p>
    </div>

    <div className="flex flex-wrap gap-3 mt-6">
      {project.technologies.map((tech, idx) => (
        <span
          key={idx}
          className="text-sm px-4 py-1 border border-primaryColor text-primaryColor rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Beautified Visit Button */}
    <div className="mt-8 flex justify-start">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primaryColor text-primaryColor px-6 py-2 rounded-full text-sm hover:bg-primary-dark hover:text-black transition-all duration-300 ease-in-out"
      >
        Visit Site
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

export default ProjectCard;
