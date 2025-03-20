import Navbar from "./Navbar";
import SimpleNavbar from "./BackToHomeButton";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  // Check ob SimpleNavbar gebraucht wird
  const isSimpleNavbar = location.pathname.startsWith("/projects/") || location.pathname.startsWith("/footer/");

  return (
    <>
      {isSimpleNavbar ? <SimpleNavbar /> : <Navbar />}

      <div className="bg-background text-textColor px-6 sm:px-0 min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
