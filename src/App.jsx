import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import { ThemeProvider } from "./javascript/ThemeContext";
import MatrixBackground from "./components/MatrixBackground";
import '@fontsource/roboto-mono';

function App() {
  return (
    <ThemeProvider> {/* ThemeProvider um die gesamte App */}
      <MatrixBackground>
      <Router>
        <div className="bg-background text-textColor"> {/* Farben über CSS-Variablen */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </MatrixBackground>
    </ThemeProvider>
  );
}

export default App;
