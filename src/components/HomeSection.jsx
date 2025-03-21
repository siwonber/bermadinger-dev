import { motion } from "framer-motion";
import ChangingPhrase from "../javascript/ChangingPhrase";
import CodeWindow from "./CodeWindow"; // Angepasst, weil es jetzt in components ist
import Experience from "./Experience";

const HomeSection = () => {
  return (
    <section id="home" className="h-auto flex flex-col items-center justify-start text-center px-0 pt-20 pb-0 mb-0">
      <motion.div
        className="w-72 h-72 rounded-full overflow-hidden shadow-xl mb-6 flex-shrink-0 aspect-square"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }} 
      >
        <img 
          src="/images/simon.webp" 
          alt="Simon" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      <motion.h1
        className="text-5xl font-bold text-primaryTextColor tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
      >
        Simon Bermadinger
      </motion.h1>
      
      <motion.p
        className="text-2xl font-semibold text-primaryColor mt-2 "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        I am <ChangingPhrase />
      </motion.p>
      
      <motion.p
        className="text-lg text-primaryTextGray mt-4 max-w-2xl "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Aspiring developer passionate about learning and building user-friendly digital solutions. 
        Currently studying and constantly improving my skills to create better experiences.
      </motion.p>
      
      <div className="mt-6 flex space-x-4">
      <motion.a
        href="/pdf/CV_Bermadinger.pdf"
        className="w-40 h-12 flex justify-center items-center bg-secondaryColor text-white rounded-lg hover:bg-secondary-dark transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        📄 Resume
      </motion.a>
      <motion.a
        href="mailto:office.code.bermadinger@gmail.com"
        className="w-40 h-12 flex justify-center items-center bg-primaryColor text-white rounded-lg hover:bg-primary-dark transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Get In Touch
      </motion.a>

      </div>
      
    </section>
  );
};

export default HomeSection;
