import SimpleNavbar from "../components/BackToHomeButton";
import '../styles/loader.css';

const MemoryGame = () => {
  return (
    <div className="bg-bg-color text-text-color min-h-screen flex flex-col">
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
