import { motion } from "framer-motion";
import { Plug, Ambulance, Code } from "lucide-react";

const experiences = [
  {
    title: "BSc MMT-Web",
    company: "FH Salzburg",
    description: "Started studying web development, design, and programming.",
    icon: <Code size={20} className="text-primaryColor" />,
  },
  {
    title: "Medical Tech",
    company: "TECAN Salzburg",
    description: "Worked on medical devices for data analysis.",
    icon: <Plug size={20} className="text-primaryColor" />,
  },
  {
    title: "Electrician",
    company: "STAM PERSONAL",
    description: "Started working as a certified electrician.",
    icon: <Plug size={20} className="text-primaryColor" />,
  },
  {
    title: "Civil Service",
    company: "Red Cross Salzburg",
    description: "Served as a paramedic during my civil service.",
    icon: <Ambulance size={20} className="text-primaryColor" />,
  },
  {
    title: "Electrician",
    company: "EAV GmbH",
    description: "Started my electrician apprenticeship.",
    icon: <Plug size={20} className="text-primaryColor" />,
  },
];

export default function Experience() {
  return (
    <div id="experience" className="relative w-full h-auto flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-12 text-center text-primaryTextColor">Experience</h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gray-700"></div>

        <div className="flex flex-col space-y-10 relative">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-center w-full ${
                  isLeft ? "justify-start pr-10" : "justify-end pl-10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-primaryColor w-5 h-5 rounded-full border-4 border-black"></div>

                {/* Card mit Icon innerhalb */}
                <div
                  className={`w-full max-w-md bg-black/70 border border-gray-700 shadow-lg backdrop-blur-md p-6 rounded-lg flex ${
                    isLeft ? "flex-row text-right sm:-ml-5 ml-0" : "flex-row-reverse text-left sm:-mr-5 mr-0"
                  } items-center`}
                >
                  {/* Icon innerhalb der Fahne */}
                  <div className="w-14 h-14 flex items-center justify-center bg-black p-3 rounded-full border border-primaryColor shadow-lg">
                    {exp.icon}
                  </div>

                  {/* Text-Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-primaryColor font-medium mt-2">{exp.company}</p>
                    <p className="text-primaryTextGray text-sm mt-2">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
