import { motion } from "framer-motion";
import { Plug, Hammer, Ambulance, Wrench, Layers, Code } from "lucide-react";

const experiences = [
  {
    title: "Electrician",
    company: "EAV GmbH",
    description: "Accomplished my apprenticeship.",
    icon: <Plug size={20} className="text-[#b11226]" />,
  },
  {
    title: "Rescue Paramedic",
    company: "Red Cross Salzburg",
    description: "Completed my civil service.",
    icon: <Ambulance size={20} className="text-[#b11226]" />,
  },
  {
    title: "Electrician",
    company: "STAM PERSONAL",
    description: "First company as a finished technician.",
    icon: <Plug size={20} className="text-[#b11226]" />,
  },
  {
    title: "Electrician",
    company: "TECAN Salzburg",
    description: "Had the opportunity to work on medical devices for data analysis.",
    icon: <Plug size={20} className="text-[#b11226]" />,
  },
  {
    title: "MMT-Web BSc Studies",
    company: "FH Salzburg",
    description: "Specialized in web development, design principles, and programming techniques.",
    icon: <Code size={20} className="text-[#b11226]" />,
  },
];

export default function Experience() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">My Experience</h2>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl">
        {/* Middle Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gray-700"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
            key={index}
            className={`relative flex p-6 rounded-lg bg-black/70 border border-gray-700 shadow-lg backdrop-blur-md ${
              index % 2 === 0 
                ? "md:flex-row text-right pr-6 mr-6" 
                : "md:flex-row-reverse text-left pl-6 ml-6"
              }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
              {/* Icon */}
              <div className={`absolute ${index % 2 === 0 ? "top-4 left-4" : "top-4 right-4"} bg-black p-3 rounded-full border border-[#b11226] flex items-center justify-center w-12 h-12`}>
                {exp.icon}
              </div>

              {/* Text */}
              <div className={`w-full max-w-md mt-8 ${index % 2 === 0 ? "ml-6 pl-6" : "mr-6 pr-6"}`}>
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-sm text-[#b11226] font-medium">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
