import '@fontsource/roboto-mono';
import { ThemeProvider } from "./javascript/ThemeContext.jsx";
import MatrixBackground from "./components/MatrixBackground";
import Projects from "./components/Projects";
import CodeWindow from "./components/CodeWindow";
import Experience from "./components/Experience";
import HomeSection from "./components/HomeSection";
import Layout from "./components/Layout"; 
import { Routes, Route } from "react-router-dom";
import Mmp1Dj from "./pages/Mmp1Dj";
import Mmp2Sphere from "./pages/Mmp2Sphere";
import MemoryGame from "./pages/MemoryGame";
import Imprint from "./pages/Imprint";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";


function App() {
  return (
    <ThemeProvider>
      <MatrixBackground>
      <ScrollToTop />
        <Routes>
          {/* Startseite */}
          <Route
            path="/"
            element={
              <Layout>

                {/* SEO */}
                <SEO
                  title="Simon Bermadinger | Fullstack Developer in Salzburg, Austria"
                  description="Welcome to the portfolio of Simon Bermadinger – Fullstack Developer based in Salzburg, Austria. Explore projects, skills, and experience in web development."
                  url="https://www.bermadinger.dev/"
                  image="https://www.bermadinger.dev/images/home-og.jpg"
                />

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
              </Layout>
            }
          />

          {/* Projekte */}
          <Route
            path="/projects/mmp1-dj"
            element={
              <Layout>
                <Mmp1Dj />
              </Layout>
            }
          />
          <Route
            path="/projects/mmp2-sphere"
            element={
              <Layout>
                <Mmp2Sphere />
              </Layout>
            }
          />
          <Route
            path="/projects/memory-game"
            element={
              <Layout>
                <MemoryGame />
              </Layout>
            }
          />

          {/* Footer Pages */}
          <Route
            path="/footer/imprint"
            element={
              <Layout>
                <Imprint />
              </Layout>
            }
          />
          <Route
            path="/footer/privacy"
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            }
          />
        </Routes>
      </MatrixBackground>
    </ThemeProvider>
  );
}

export default App;
