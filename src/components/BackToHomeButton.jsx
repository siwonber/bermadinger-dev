import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToHomeButton = () => (
  <Link
    to="/"
    className="fixed top-5 left-5 w-12 h-12 sm:w-40 sm:h-12 flex justify-center items-center bg-primaryColor text-white rounded-lg hover:bg-primary-dark transition z-50"
  >
    <span className="sm:hidden">
      <ArrowLeft size={20} />
    </span>
    <span className="hidden sm:block text-sm font-medium">
      ← Home
    </span>
  </Link>
);

export default BackToHomeButton;
