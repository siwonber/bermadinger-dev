import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-20 p-4 bg-gray-800 text-center text-gray-400 mt-auto text-sm">
      <div className="mb-2">
        © {new Date().getFullYear()} Simon Bermadinger. All rights reserved.
      </div>
      <div className="flex justify-center gap-4">
        <Link to="/footer/imprint" className="hover:text-white transition">
          Imprint
        </Link>
        <Link to="/footer/privacy" className="hover:text-white transition">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
