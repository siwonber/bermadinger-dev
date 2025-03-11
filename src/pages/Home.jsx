import { motion } from "framer-motion";
import ChangingPhrase from "../javascript/ChangingPhrase.jsx";
import CodeWindow from "../components/CodeWindow";
import MatrixBackground from "../components/MatrixBackground";
import Experience from "../components/Experience";


function Home() {
  return (
    <MatrixBackground>
    <section className="min-h-screen flex flex-col items-center justify-start text-center px-6 pt-32">
      <motion.div
        className="w-72 h-72 rounded-full overflow-hidden shadow-xl mb-6 flex-shrink-0 aspect-square"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }} 
      >
        <img 
          src="/images/simon.jpg" 
          alt="Simon" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      <motion.h1
        className="text-5xl font-bold text-white tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} 
      >
        Simon Bermadinger
      </motion.h1>
      
      <motion.p
        className="text-2xl font-semibold text-primary mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        I am <ChangingPhrase />
      </motion.p>
      
      <motion.p
        className="text-lg text-gray-400 mt-4 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Aspiring developer passionate about learning and building user-friendly digital solutions. 
        Currently studying and constantly improving my skills to create better experiences.
      </motion.p>
      
      <div className="mt-6 flex space-x-4">
        <motion.a
          href="/pdf/Lebenslauf_Simon_Bermadinger.pdf"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }} 
        >
          📄 Resume
        </motion.a>
        <motion.a
          href="mailto:office.code.bermadinger@gmail.com"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }} 
        >
          Get In Touch
        </motion.a>
      </div>
      
      <div className="mt-12 w-full flex justify-center">
        <CodeWindow />
      </div>
      <div className="mt-20 w-full flex justify-center">
          <Experience />
      </div>
    </section>
      </MatrixBackground>
  );
}

export default Home;
