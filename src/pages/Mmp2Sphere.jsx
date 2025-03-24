import BackToHomeButton from "../components/BackToHomeButton";
import SEO from "../components/SEO";

const Mmp2Sphere = () => {
  return (
    <div className="bg-bg-color text-text-color">

      {/* SEO */}
      <SEO
        title="MMP2 Sphere | Design System Manager | Simon Bermadinger | FH Salzburg"
        description="Sphere – A design system management tool developed during the MultiMediaTechnology program at FH Salzburg. Upload, download & organize your projects' assets efficiently. Built by Simon Bermadinger based in Salzburg, Austria."
        url="https://www.bermadinger.dev/projects/mmp2-sphere"
        image="https://www.bermadinger.dev/images/mmp2-sphere-og.jpg"
      />

      <BackToHomeButton />

      {/* Hero Section */}
      <div className="-mx-6 sm:mx-0">
        <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
          <img
            src="/images/mmp2a/Header.webp"
            alt="Sphere Header"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </section>

        {/* hgroup under the image */}
        <div className="relative z-10 text-center px-6 py-10 bg-black bg-opacity-100 rounded-none sm:rounded-xl max-w-3xl mx-auto mt-[-4rem]">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Sphere
          </h1>
          <p className="font-medium text-white">
            MMP2a Web - WS 2024 | MultiMediaTechnology, 2025
          </p>
        </div>
      </div>

      {/* Project Intro */}
      <section className="max-w-3xl mx-auto py-12 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-snug text-primary-color">
          Manage your Design System in one place
        </h2>
        <p className="text-primary-text-grey leading-relaxed mb-4">
          Create a new project and start managing your design elements efficiently. Add images, fonts, colors, and typography to organize your visual identity.
        </p>
        <p className="text-primary-text-grey leading-relaxed">
          Streamline your workflow and keep everything consistent and accessible. This project helped me structure complex UI functionality into a smooth admin experience.
        </p>
        <div className="relative z-10 mt-8">
          <a
            href="https://team-trasla.projects.multimediatechnology.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primaryColor text-white px-8 py-3 rounded-full text-base bg-black hover:bg-primary-dark hover: transition-all duration-300 ease-in-out"
          >
            Visit Site
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row gap-16 items-center px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Projects</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Easily create and manage multiple projects.<br />
            <div className="py-2">Keep all assets like logos, colors, icons, and fonts organized within each project.</div>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/Projects.webp"
            alt="Projects Overview"
            className="rounded-xl shadow-lg max-w-full md:max-w-[800px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row gap-16 items-center px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Key Features</h2>
          <ul className="text-primary-text-grey leading-relaxed list-disc list-inside list-none">
            <li className="py-1">Upload & manage logos, colors, icons, fonts</li>
            <li className="py-1">Organize design rules per project</li>
            <li className="py-1">Download assets anytime</li>
            <li className="py-1">Tagging system for easy navigation</li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/key_features.webp"
            alt="Key Features"
            className="rounded-xl shadow-lg max-w-full md:max-w-[800px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Upload/Download Section */}
      <section className="max-w-6xl mx-auto py-12 flex flex-col md:flex-row gap-16 items-center px-4">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-6 text-primary-color">Upload & Download</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Easily upload logos, colors, fonts, images.<br />
            <div className="py-2">Download your organized assets anytime to use them across various platforms.</div>
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/mmp2a/Create_download.webp"
            alt="Upload Download"
            className="rounded-xl shadow-lg max-w-full md:max-w-[800px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Colors */}
      <section className="max-w-4xl mx-auto py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">Color Template</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { color: "#00FF00", label: "#00FF00" },
            { color: "#FFFFFF", label: "#FFFFFF" },
            { color: "#000000", label: "#000000" },
          ].map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-lg border" style={{ backgroundColor: color }}></div>
              <span className="text-primary-text-grey text-xs md:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="max-w-3xl mx-auto py-12 text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-primary-color">Learnings</h2>
        <p className="text-primary-text-grey leading-relaxed">
          This project strengthened my skills in building admin dashboards, managing data-driven UI components, and structuring reusable components efficiently.
        </p>
      </section>
    </div>
  );
};

export default Mmp2Sphere;
