import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll"; 
import { handleScroll } from "../javascript/Navbar";
import ColorBlindToggle from "./ColorBlindToggle";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import ThemeToggle from "./ThemeToggle";

const fullConfig = resolveConfig(tailwindConfig);
const primaryColor = fullConfig.theme.colors.primaryColor;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-3 px-8">
        
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="text-3xl font-bold text-white cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          DevBer
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-primaryTextColor text-lg">
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

          {/* Settings Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="cursor-pointer hover:text-primaryColor transition relative"
            >
              Settings
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 px-6 py-3 shadow-lg bg-dark border border-gray-700 rounded-xl z-50 flex justify-center items-center w-max">
                <ColorBlindToggle />
              </div>
            )}
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
        
        {/* Toggles at the bottom */}
        <div className="mt-auto pb-8 w-full flex flex-col items-center space-y-4">
          <ColorBlindToggle />
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
