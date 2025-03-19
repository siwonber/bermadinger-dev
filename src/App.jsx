import '@fontsource/roboto-mono';
import { ThemeProvider } from "./javascript/ThemeContext.jsx";
import MatrixBackground from "./components/MatrixBackground";
import Projects from "./components/Projects";
import CodeWindow from "./components/CodeWindow";
import Experience from "./components/Experience";
import HomeSection from "./components/HomeSection";
import Navbar from "./components/Navbar";
import SimpleNavbar from "./components/BackToHomeButton.jsx"; // NEU!
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Mmp1Dj from "./pages/Mmp1Dj";
import Mmp2Sphere from "./pages/Mmp2Sphere";
import MemoryGame from "./pages/MemoryGame";

function App() {
  const location = useLocation();

  // Check: Sind wir auf einer Projekt-Detailseite?
  const isProjectDetail = location.pathname.startsWith("/projects/");

  return (
    <ThemeProvider>
      <MatrixBackground>
        {/* Dynamisch Navbar wählen */}
        {isProjectDetail ? <SimpleNavbar /> : <Navbar />}

        <div className="bg-background text-textColor px-4 sm:px-0">
          <Routes>
            {/* Startseite */}
            <Route
              path="/"
              element={
                <>
                  <HomeSection />
                  <div className="section-spacing">
                    <CodeWindow />
                  </div>
                  <div className="section-spacing">
                    <Experience />
                  </div>
                  <div className="section-spacing">
                    <Projects />
                  </div>
                </>
              }
            />

            {/* Detail-Seite für Projekte */}
            <Route path="/projects/mmp1-dj" element={<Mmp1Dj />} />
            <Route path="/projects/mmp2-sphere" element={<Mmp2Sphere />} />
            <Route path="/projects/memory-game" element={<MemoryGame />} />
          </Routes>
        </div>

        <Footer />
      </MatrixBackground>
    </ThemeProvider>
  );
}

export default App;
