import React from "react";
import { FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => (
<div
  className="bg-black p-8 mb-10 rounded-2xl shadow-lg transition-shadow duration-300 flex flex-col justify-between relative hover:shadow-[0_0_25px_5px_theme(colors.primaryColor)]"
>

    {/* Icon - interne Seite */}
    <Link
        to={`/projects/${project.route}`}
        className="absolute top-5 right-5 text-primaryColor hover:text-primary-dark transition-colors"
        aria-label={`Open ${project.name} details`} // <- WICHTIG
      >
        <FolderOpen
          size={28}
          className="hover:rotate-12 transition-transform duration-300"
        />
      </Link>

    {/* Title - interne Seite */}
    <div>
      <Link
        to={`/projects/${project.route}`}
        className="text-primaryColor text-2xl font-bold hover:underline"
      >
        {project.name}
      </Link>
      <p className="text-primaryTextGray text-base mt-4 leading-relaxed">{project.details}</p>
    </div>

    {/* Technologies */}
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

    {/* Buttons */}
    <div className="mt-8 flex gap-4 flex-wrap">
      {/* Visit Site - extern */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-primaryColor text-primaryColor px-6 py-2 rounded-full text-sm hover:bg-primaryColor hover:text-white transition-all duration-300 ease-in-out"
        >
          Visit Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      )}

      {/* Read More - interne Seite */}
      <Link
        to={`/projects/${project.route}`}
        className="inline-flex items-center gap-2 border border-primaryColor text-primaryColor px-6 py-2 rounded-full text-sm hover:bg-primaryColor hover:text-white transition-all duration-300 ease-in-out"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default ProjectCard;
