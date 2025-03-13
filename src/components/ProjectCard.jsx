import React from "react";

const ProjectCard = ({ name, details, technologies, link }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-primaryColor">{name}</h3>
      <p className="text-gray-300 text-sm mt-2">{details}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-secondary-dark text-white text-xs px-3 py-1 rounded-full border border-primaryColor"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="block mt-6 text-center bg-primaryColor hover:bg-primary-dark text-black font-bold py-2 rounded-md transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mehr erfahren
      </a>
    </div>
  );
};

export default ProjectCard;
