import '@fontsource/roboto-mono';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./javascript/ThemeContext";
import MatrixBackground from "./components/MatrixBackground";
import Projects from "./components/Projects"; // Von pages nach components verschoben
import CodeWindow from "./components/CodeWindow";
import Experience from "./components/Experience";
import HomeSection from "./components/HomeSection";


function App() {
  return (
    <ThemeProvider> {/* ThemeProvider für Theme-Kontext */}
      <MatrixBackground>
          <Navbar />
      <div className="bg-background text-textColor px-4 sm:px-0">
          
          {/* Home Sektion */}
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


          <Footer />
        </div>
      </MatrixBackground>
    </ThemeProvider>
  );
}

export default App;
