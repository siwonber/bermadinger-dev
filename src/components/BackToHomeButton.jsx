import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = () => (
  <Link
    to="/"
    className="fixed top-5 right-5 sm:left-5 sm:right-auto flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-2 bg-primaryColor text-white rounded-full shadow-md hover:bg-primary-dark z-50 md:p-3 md:px-5 md:top-10 md:left-10"
  >
    <ArrowLeft size={20} />
    <span className="hidden sm:inline text-sm font-medium">
      Home
    </span>
  </Link>
);

export default BackToHomeButton;
