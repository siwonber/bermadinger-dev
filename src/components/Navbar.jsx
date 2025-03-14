import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll"; // Import für smooth scrolling
import { handleScroll } from "../javascript/Navbar";
import ColorBlindButton from "../components/ColorBlindButton";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);
const primaryColor = fullConfig.theme.colors.primaryColor;

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
        
        {/* DevBer als Scroll-Link */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => setMenuOpen(false)} // Falls im mobilen Menü geöffnet
        >
          DevBer
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-white text-lg">
          <li>
            <Link to="home" smooth={true} duration={500} className="hover:text-primaryColor transition cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500} offset={-80} className="hover:text-primaryColor transition cursor-pointer">
              Experience
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="hover:text-primaryColor transition cursor-pointer">
              Projects
            </Link>
          </li>
          <li>
            <ColorBlindButton />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none z-50 relative"
          animate={{ rotate: menuOpen ? 180 : 0, color: menuOpen ? primaryColor : "#ffffff" }}
          transition={{ duration: 0.2 }}
        >
          {menuOpen ? <FiX size={34} /> : <FiMenu size={34} />}
        </motion.button>
      </div>

      {/* Mobile Menü */}
      <motion.div
        className={`fixed top-0 right-0 h-screen w-[70%] md:w-[50%] lg:w-[30%] bg-dark/95 flex flex-col items-end p-8 pt-24 text-right shadow-lg 
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Link to="home" smooth={true} duration={500} className="text-white text-lg hover:text-primaryColor transition py-3 px-6 cursor-pointer" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-80} className="text-white text-lg hover:text-primaryColor transition py-3 px-6 cursor-pointer" onClick={() => setMenuOpen(false)}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} className="text-white text-lg hover:text-primaryColor transition py-3 px-6 cursor-pointer" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>

        {/* Colorblind Button */}
        <div className="mt-auto pb-8 w-full flex justify-center">
          <ColorBlindButton />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
