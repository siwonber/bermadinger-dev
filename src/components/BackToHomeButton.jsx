import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = () => (
  <Link
    to="/"
    className="fixed top-5 left-5 flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-primaryColor text-white rounded-full shadow-md hover:bg-primary-dark transition-all duration-300 z-50"
  >
    <ArrowLeft size={20} />
    <span className="hidden sm:inline text-sm font-medium">
      Home
    </span>
  </Link>
);

export default BackToHomeButton;
