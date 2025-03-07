import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Rocket } from "lucide-react";

const experiences = [
  {
    title: "Building and House Installation Technician",
    company: "Elektro Maislinger",
    location: "Feldkirchen, Austria",
    description:
      "Started an apprenticeship in electrical construction.",
  },
  {
    title: "Technician Apprenticeship",
    company: "EAV GMBH",
    location: "Moosdorf, Austria",
    description:
      "Changed Company.",
  },
  {
    title: "Paramedic",
    company: "Red Cross Salzburg",
    location: "Salzburg, Austria",
    description:
      "Civil Service.",
  },
  {
    title: "Building and House Installation Technician",
    company: "STAM PERSONAL",
    location: "Oberndorf, Austria",
    description:
      "Worked as a \"Geselle\" in electrical construction.",
  },
  {
    title: "Matura Course",
    company: "WIFI Salzburg",
    location: "Salzburg, Austria",
    description:
      "Completed courses to qualify for higher academic studies.",
  },
  {
    title: "Building and House Installation Technician",
    company: "Tecan",
    location: "Salzburg, Austria",
    description:
      "Tried my electric knowledge on medical devices.",
  },
  {
    title: "Bachelor's Student in MMT Web",
    company: "FH Salzburg",
    location: "Salzburg, Austria",
    description:
      "Pursuing a degree in MultiMediaTechnology with a specialization in web development.",
  },
];

export default function GlassyStarryExperience() {
  const [position, setPosition] = useState(0);

  /**
   * 1) STARFIELD
   */
  const stars = useMemo(() => {
    const count = 50;
    return Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 4 + 1, // 1–5px
    }));
  }, []);

  /**
   * 2) STUFEN (1200×700)
   */
  const steps = experiences.map((_, i) => ({
    x: 100 + i * 150,
    y: 600 - i * 50,
  }));
  const containerWidth = 1200;
  const containerHeight = 700;

  // Stufengröße / Rakete
  const stepWidth = 120;
  const stepHeight = 20;
  const rocketSize = 60;

  // Pfeiltasten
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") {
        setPosition((prev) => Math.min(prev + 1, experiences.length - 1));
      } else if (e.key === "ArrowLeft") {
        setPosition((prev) => Math.max(prev - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Aktive Experience
  const activeExp = experiences[position];

  return (
    <section
      className="
        relative
        min-h-screen
        bg-black/90
        text-white
        overflow-hidden
        flex
        flex-col
        items-center
        px-4
        pt-32

      "
    >
      {/* STERNE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              backgroundColor: "#fff",
              borderRadius: "50%",
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Überschrift */}
      <h1 className="mt-8 text-5xl font-extrabold text-white drop-shadow-lg z-10">
          My Experience
      </h1>

      {/* Haupt-Bühne */}
      <div
        className="relative mt-10 z-10"
        style={{ width: containerWidth, height: containerHeight }}
      >
        {/* EXPERIENCE-KARTE (noch größer) */}
        <div
          className="
            absolute
            left-1/2
            top-10
            transform
            -translate-x-1/2
            bg-[#0A192F]
            rounded-2xl
            shadow-2xl
            border-4
            border-[#112240]
            w-[800px]
            p-10
            max-w-full
            z-20
          "
        >
          <h2 className="text-3xl font-bold mb-6">{activeExp.title}</h2>
          <p className="text-base text-gray-300 mb-4">
            {activeExp.company} — {activeExp.location}
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            {activeExp.description}
          </p>
        </div>

        {/* Stufen unten */}
        {steps.map((step, i) => {
          const isActive = i === position;
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: step.x,
                top: step.y,
                width: stepWidth,
                height: stepHeight,
                borderRadius: 4,
                backgroundColor: isActive ? "#fff" : "#666",
                boxShadow: isActive ? "0 0 15px #fff" : "none",
                transition: "all 0.2s",
              }}
            />
          );
        })}

        {/* Rakete */}
        <motion.div
          style={{
            position: "absolute",
            width: rocketSize,
            height: rocketSize,
          }}
          animate={{
            x: steps[position].x + stepWidth / 2 - rocketSize / 2,
            y: steps[position].y - rocketSize,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
        >
          <Rocket className="w-full h-full text-white" />
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-6 z-10">
        {/* Linker Button */}
        <motion.button
          whileHover={{ backgroundColor: "#9f1239", boxShadow: "0 0 10px #9f1239" }}
          whileTap={{ scale: 0.98 }}
          className="
            w-24
            h-12
            flex
            items-center
            justify-center
            text-white
            border-t-2
            border-l-2
            border-[#9f1239]
            rounded-none
            transition-all
            duration-300
            hover:border-r-2
            hover:border-b-2
            hover:shadow-xl
            disabled:opacity-50
            relative
          "
          disabled={position === 0}
          onClick={() => setPosition((prev) => Math.max(prev - 1, 0))}
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>

        {/* Rechter Button */}
        <motion.button
          whileHover={{ backgroundColor: "#9f1239", boxShadow: "0 0 10px #9f1239" }}
          whileTap={{ scale: 0.98 }}
          className="
            w-24
            h-12
            flex
            items-center
            justify-center
            text-white
            border-t-2
            border-l-2
            border-[#9f1239]
            rounded-none
            transition-all
            duration-300
            hover:border-r-2
            hover:border-b-2
            hover:shadow-xl
            disabled:opacity-50
            relative
          "
          disabled={position === experiences.length - 1}
          onClick={() => setPosition((prev) => Math.min(prev + 1, experiences.length - 1))}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}
