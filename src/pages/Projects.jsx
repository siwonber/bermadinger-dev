import { motion } from "framer-motion";

const projects = [
  { title: "Project One", img: "/assets/project1.jpg" },
  { title: "Project Two", img: "/assets/project2.jpg" },
  { title: "Project Three", img: "/assets/project3.jpg" },
];

function Projects() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h2
        className="text-5xl font-bold text-white tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        School Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg bg-gray-800"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.img} alt={project.title} className="w-full h-60 object-cover opacity-80 hover:opacity-100 transition duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-lg font-semibold">
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
