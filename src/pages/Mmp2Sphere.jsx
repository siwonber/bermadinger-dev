import BackToHomeButton from "../components/BackToHomeButton";

const Mmp2Sphere = () => {
  return (
    <div className="bg-bg-color text-text-color">
      <BackToHomeButton />

      {/* Hero Section */}
      <div className="-mx-6 sm:mx-0">
        <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/mmp2a/Header.jpeg')",
            }}
          ></div>
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/40"></div>

          <hgroup className="relative z-10 text-center px-6 py-6 bg-black bg-opacity-75 rounded-xl shadow-lg text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Sphere
            </h1>
            <p className="font-medium">
              MMP2a Web - WS 2024 | MultiMediaTechnology, 2025
            </p>
          </hgroup>
        </section>
      </div>

      {/* Project Intro */}
      <section className="max-w-3xl mx-auto py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-primary-color">
          Manage your Design System in one place
        </h2>
        <p className="text-primary-text-grey leading-relaxed mb-4">
          Create a new project and start managing your design elements efficiently. Add images, fonts, colors, and typography to organize your visual identity.
        </p>
        <p className="text-primary-text-grey leading-relaxed">
          Streamline your workflow and keep everything consistent and accessible. This project helped me structure complex UI functionality into a smooth admin experience.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/Projects.png"
            alt="Projects Overview"
            className="rounded-xl shadow-lg max-w-[800px]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Projects</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Easily create and manage multiple projects. Keep all assets like logos, colors, icons, and fonts organized within each project.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Key Features</h2>
          <ul className="text-primary-text-grey leading-relaxed list-disc list-inside">
            <li>Upload & manage logos, colors, icons, fonts</li>
            <li>Organize design rules per project</li>
            <li>Download assets anytime</li>
            <li>Tagging system for easy navigation</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/key_features.png"
            alt="Key Features"
            className="rounded-xl shadow-lg max-w-[800px]"
          />
        </div>
      </section>

      {/* Upload/Download Section */}
      <section className="max-w-6xl mx-auto py-24 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/Create_download.png"
            alt="Upload Download"
            className="rounded-xl shadow-lg max-w-[800px]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Upload & Download</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Easily upload logos, colors, fonts, images. Download your organized assets anytime to use them across various platforms. 
          </p>
        </div>
      </section>

      {/* Colors */}
      <section className="max-w-4xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">
          Color Template
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { color: "#00FF00", label: "#00FF00" },
            { color: "#FFFFFF", label: "#FFFFFF" },
            { color: "#000000", label: "#000000" },
          ].map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-16 h-16 md:w-24 md:h-24 rounded-lg border"
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
      <section className="max-w-3xl mx-auto py-24 text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">Learnings</h2>
        <p className="text-primary-text-grey leading-relaxed">
          This project strengthened my skills in building admin dashboards, managing data-driven UI components, and structuring reusable components efficiently.
        </p>
      </section>
    </div>
  );
};

export default Mmp2Sphere;
