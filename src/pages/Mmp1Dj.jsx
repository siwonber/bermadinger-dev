import BackToHomeButton from "../components/BackToHomeButton";

const Mmp1Dj = () => {
  return (
    <div className="text-white">
      <BackToHomeButton />

      {/* Hero Section */}
      <div
        className="w-full h-[70vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/mmp1/Header.jpeg')" }}
      ></div>

      {/* Title */}
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primaryColor">MMP1 DJ Advertising</h1>
        <p className="text-gray-400 mt-4">FH Salzburg | MultiMediaTechnology | 2024</p>
      </div>

      {/* Overview */}
      <section className="max-w-5xl mx-auto px-8 py-16 leading-relaxed text-center">
        <h2 className="text-4xl font-bold text-primaryColor mb-8">Project Overview</h2>
        <p className="text-gray-300 text-lg mb-6">
          My goal was to build a modern, responsive platform to promote DJ <span className="text-primaryColor">Asom</span>. The site offers brand visibility, event information, and ways for clients to book easily.
        </p>
        <p className="text-gray-300 text-lg">Developed as part of MMP1, focusing on frontend, design & planning.</p>
      </section>

      {/* Challenges & Solutions */}
      <section className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-primaryColor mb-12 text-center">Challenges & Solutions</h2>
          <div className="grid md:grid-cols-2 gap-12 text-gray-300 text-lg">
            <div>
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Challenge</h3>
              <p>Creating a clean UI that reflects the energy of a DJ brand while remaining accessible and fast.</p>
              <p className="mt-4">Additionally, integrating third-party services without cluttering the experience.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primaryColor mb-4">Solution</h3>
              <p>I used PHP & HTML/CSS for flexibility, focused on minimal layouts, and embedded SoundCloud cleanly. User flows prioritize simplicity for both fans & potential clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-primaryColor mb-8">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 text-primaryColor">
          <span className="border border-primaryColor px-4 py-2 rounded-full">HTML</span>
          <span className="border border-primaryColor px-4 py-2 rounded-full">CSS</span>
          <span className="border border-primaryColor px-4 py-2 rounded-full">PHP</span>
          <span className="border border-primaryColor px-4 py-2 rounded-full">SoundCloud API</span>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <img 
          src="/images/mmp1/Music_API.png" 
          alt="Music API"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </section>

      {/* About DJ */}
      <section className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/images/mmp1/About.png"
          alt="Asom DJ"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-primaryColor mb-6">About the DJ</h2>
          <p className="leading-relaxed text-gray-300 mb-4">Asom is a Salzburg-based Drum & Bass DJ, known for his signature sound and dedication to the underground scene.</p>
          <p className="leading-relaxed text-gray-300">This website allows fans to stay connected & book gigs directly.</p>
        </div>
      </section>

      {/* SoundCloud */}
      <section className="bg-black py-16">
        <h2 className="text-4xl font-bold text-center text-primaryColor mb-8">Music Preview</h2>
        <div className="flex justify-center px-8">
          <div className="w-full md:w-[60%] bg-black p-4 rounded-xl shadow-lg relative">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="rounded-lg"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/asom_dnb&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Outro */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-primaryColor mb-6">Final Thoughts</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          This project sharpened my frontend development, improved my client communication, and gave me experience integrating external media while maintaining a strong design identity.
        </p>
      </section>
    </div>
  );
};

export default Mmp1Dj;
