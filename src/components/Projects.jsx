import React from "react";
import ProjectCard from "./ProjectCard"; 
import { FolderOpen } from "lucide-react"; 

const schoolProjects = [
  {
    name: "MMP1 DJ Advertising",
    route: "mmp1-dj", 
    details: "Promoting site for a local D&B DJ.",
    technologies: ["PHP", "HTML", "CSS"],
    link: "https://users.multimediatechnology.at/~fhs50842/mmp1/",
  },
  {
    name: "MMP2a Sphere",
    route: "mmp2-sphere", 
    details: "Manage your project design elements efficiently.",
    technologies: ["Ruby on Rails", "TypeScript"],
    link: "https://team-trasla.projects.multimediatechnology.at/",
  },
];

const otherProjects = [
  {
    name: "Memory Game",
    route: "memory-game", 
    details: "A simple memory game with a highscore.",
    technologies: ["React Native", "Nativewind"],
    // optional link
  },
];



const SectionHeader = ({ title, center = false }) => (
  <div className={`w-full mb-6 bg-black border border-primaryColor py-2 px-4 rounded-md flex items-center ${center ? "justify-center" : "justify-between"}`}>
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
        <div>
          <SectionHeader title="School Projects" center />
          {schoolProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div>
          <SectionHeader title="Projects" center />
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

       {/* Mobile Horizontal Scroll - School Projects */}
          <div className="sm:hidden mb-12 pt-12">
            <SectionHeader title="School Projects" center />
            
            <div className="overflow-x-scroll scrollbar-hide">
              <div className="flex space-x-6 snap-x snap-mandatory px-6">
                {schoolProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 snap-center bg-transparent rounded-2xl shadow-lg p-4"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Horizontal Scroll - Other Projects */}
          <div className="sm:hidden mb-12 pt-12">
            <SectionHeader title="Projects" center />
            
            <div className="overflow-x-scroll scrollbar-hide">
              <div className="flex space-x-6 snap-x snap-mandatory px-6">
                {otherProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 snap-center bg-transparent rounded-2xl shadow-lg p-4"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>


    </div>
  );
};

export default Projects;