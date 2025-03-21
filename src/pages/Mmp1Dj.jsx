import BackToHomeButton from "../components/BackToHomeButton";

const Mmp1Dj = () => {
  return (
    <div className="bg-bg-color text-text-color">
      <BackToHomeButton />

      {/* Hero Section */}
      <div className="-mx-6 sm:mx-0">
        <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/mmp1/Asom_Stage.webp')",
            }}
          ></div>
          <hgroup className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-primary-color">
              MMP1 DJ Advertising
            </h1>
            <p className="text-primary-text-grey">
              FH Salzburg | MultiMediaTechnology | 2024
            </p>
          </hgroup>
        </section>
          </div>


      {/* Project Intro */}
      <section className="max-w-3xl mx-auto py-12 sm:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-primary-color">
          A clean, minimal website for DJ Asom
        </h2>
        <p className="text-primary-text-grey leading-relaxed mb-4">
          Designed to showcase DJ Asom's unique sound and brand identity.
          Focused on simplicity, responsiveness, and seamless integration of
          music previews.
        </p>
        <p className="text-primary-text-grey leading-relaxed">
          My first real-world project, where I combined design, development, and
          external API integrations into one cohesive product.
        </p>
        <div className="relative z-10 mt-8">
          <a
            href="https://users.multimediatechnology.at/~fhs50842/mmp1/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primaryColor text-primaryColor px-8 py-3 rounded-full bg-black text-base hover:bg-primaryColor hover:text-white transition-all duration-300 ease-in-out"
          >
            Visit Site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto py-12 sm:py-24 grid md:grid-cols-2 gap-12 text-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary-color">
            Key Features
          </h3>
          <ul className="text-primary-text-grey leading-relaxed list-disc list-inside text-start">
            <li>Responsive layout</li>
            <li>Fast loading & minimal navigation</li>
            <li>SoundCloud API Integration</li>
            <li>Spotify API Integration</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary-color">
            Process
          </h3>
          <p className="text-primary-text-grey leading-relaxed">
            Built using HTML, CSS, PHP with clean grid systems, SoundCloud &
            Spotify embeds, and prioritization of key user flows.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto py-12 sm:py-24 text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary-color">
          Technologies Used
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "HTML",
            "CSS",
            "PHP",
            "SoundCloud API",
            "Spotify API",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-primary-color px-6 py-3 rounded-full text-primary-color hover:bg-primary-color hover:text-bg-color transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* About & Releases */}
      <section className="max-w-6xl mx-auto py-12 sm:py-24 flex flex-col md:flex-row gap-16 items-stretch">
        {/* Text & About */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-color">
              About DJ Asom
            </h2>
            <p className="text-primary-text-grey leading-relaxed mb-4">
              Asom is a Salzburg-based Drum & Bass DJ, known for his signature
              sound and strong presence in the underground scene.
            </p>
            <p className="text-primary-text-grey leading-relaxed mb-8">
              This platform allows fans to stay connected & easily book gigs.
            </p>
          </div>
          <img
            src="/images/mmp1/About.webp"
            alt="DJ Asom"
            className="rounded-xl shadow-lg w-full md:w-[90%] lg:w-[1000px] mx-auto mt-12"
          />
        </div>

        {/* Releases Bild */}
        <div className="flex-1 flex justify-center items-end">
          <img
            src="/images/mmp1/Music_API.webp"
            alt="DJ Website Showcase"
            className="rounded-xl shadow-lg w-full md:w-[90%] lg:w-[550px]"
          />
        </div>
      </section>

      {/* SoundCloud */}
      <section className="bg-code-bg py-12 sm:py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-color">
          Music Preview
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-[30%]">
            <iframe
              width="100%"
              height="400"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              className="rounded-lg"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/asom_dnb&color=%23b11226&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="max-w-4xl mx-auto py-12 sm:py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">
          Color Template
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { color: "rgb(48, 126, 0)", label: "rgb(48, 126, 0)" },
            { color: "rgb(245, 245, 245)", label: "rgb(245, 245, 245)" },
            { color: "rgb(51, 51, 51)", label: "rgb(51, 51, 51)" },
          ].map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 md:w-24 md:h-24 rounded-lg"
                style={{ backgroundColor: color }}
              ></div>
              <span className="text-primary-text-grey text-xs md:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="max-w-3xl mx-auto py-12 sm:py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">Learnings</h2>
        <p className="text-primary-text-grey leading-relaxed">
          My first real project taught me how to bring design and development
          together while working with external APIs and ensuring a cohesive,
          minimal, and fast user experience.
        </p>
      </section>
    </div>
  );
};

export default Mmp1Dj;
