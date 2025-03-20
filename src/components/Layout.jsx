import Navbar from "./Navbar";
import SimpleNavbar from "./BackToHomeButton";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const isSimpleNavbar = location.pathname.startsWith("/projects/") || location.pathname.startsWith("/footer/");

  return (
    <>
      {isSimpleNavbar ? <SimpleNavbar /> : <Navbar />}

      <div className="bg-background text-textColor min-h-screen flex flex-col">
        <main className="flex-grow px-6 sm:px-0">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
