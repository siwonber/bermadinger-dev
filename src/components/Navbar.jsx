import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { handleScroll } from "../javascript/Navbar";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    handleScroll(menuOpen, setScrolling);
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${menuOpen ? "bg-black/80" : scrolling ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-8">
        <h1 className="text-3xl font-bold text-white">DevBer</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white text-lg">
          <li><a href="/" className="hover:text-primary transition">Home</a></li>
          <li><a href="/projects" className="hover:text-primary transition">Projects</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none z-50 relative"
          animate={{ rotate: menuOpen ? 180 : 0, color: menuOpen ? "rgb(177,18,38)" : "#ffffff" }}
          transition={{ duration: 0.2 }}
        >
          {menuOpen ? <FiX size={34} /> : <FiMenu size={34} />}
        </motion.button>
      </div>

      {/* Mobile Fullscreen Overlay
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMenuOpen(false)}
        />
      )} */}

      {/* Mobile Menü */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-[70%] md:w-[50%] lg:w-[30%] bg-dark/95 flex flex-col items-end p-8 pt-24 text-right shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <a href="/" className="text-white text-lg hover:text-primary transition py-3 px-6" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/projects" className="text-white text-lg hover:text-primary transition py-3 px-6" onClick={() => setMenuOpen(false)}>Projects</a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
