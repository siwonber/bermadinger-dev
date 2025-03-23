import SimpleNavbar from "../components/BackToHomeButton";
import '../styles/loader.css';
import SEO from "../components/SEO";

const MemoryGame = () => {
  return (
    <div className="bg-bg-color text-text-color min-h-screen flex flex-col">

      {/* SEO */}
      <SEO
        title="Memory Game | Simon Bermadinger"
        description="A fun matching memory game to test your skills. Coming soon!"
        url="https://www.bermadinger.dev/projects/memory-game"
        image="https://www.bermadinger.dev/images/memory-game-og.jpg"
      />

      <SimpleNavbar />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary-color">Memory Game</h1>
        <p className="text-primary-text-grey mb-8">A fun matching game to test your memory skills.</p>

        <div className="bg-primary-color text-bg-color px-8 py-4 rounded-full text-lg font-semibold shadow-lg mb-10 animate-pulse">
          Coming Soon
        </div>

        {/* Loader */}
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default MemoryGame;
