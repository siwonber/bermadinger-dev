import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative z-20 p-4 bg-gray-800 text-center text-gray-400 mt-auto text-sm">
      <div className="mb-2">
        © {new Date().getFullYear()} Simon Bermadinger. All rights reserved.
      </div>

      {/* Legal Links */}
      <div className="flex justify-center gap-4 mb-4">
        <Link to="/footer/imprint" className="hover:text-white transition">
          Imprint
        </Link>
        <Link to="/footer/privacy" className="hover:text-white transition">
          Privacy Policy
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-lg">
          <a 
            href="https://www.instagram.com/siwonber/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            role="link"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://www.linkedin.com/in/simon-bermadinger-7585b6339/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            role="link"
            className="hover:text-white transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
