import BackToHomeButton from "../components/BackToHomeButton";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-bg-color text-text-color py-16 px-0 sm:px-6">
      <BackToHomeButton />

      <div className="max-w-3xl mx-auto bg-black/90 px-0 py-8 rounded-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-primary-color text-center">Imprint (Impressum)</h1>
        <p className="text-primary-text-grey mb-12 text-center">Last updated: March 2025</p>

        {/* 1. Responsible */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">1. Responsible for Content</h2>
          <p className="text-primary-text-grey leading-relaxed">
            <span className="block"><strong>Name:</strong> Simon Bermadinger</span>
            <span className="block"><strong>Address:</strong> Egger-Lienz-Gasse 7, 5020 Salzburg, Austria</span>
            <span className="block"><strong>Email:</strong> <a href="mailto:office.code.bermadinger@gmail.com" className="text-primary-color underline">office.code.bermadinger@gmail.com</a></span>
          </p>
        </div>

        {/* 2. Purpose */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">2. Purpose of the Website</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website is a personal portfolio created to showcase my skills, projects, and professional experience as part of my studies in MultiMediaTechnology at FH Salzburg. It is not operated for commercial purposes.
          </p>
        </div>

        {/* 3. Hosting */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">3. Hosting Information</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website is hosted by <strong>Netlify, Inc.</strong>. Netlify processes technical data (e.g., IP addresses, server logs) solely for security and operational purposes.
            <br /><br />
            Details:{" "}
            <a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noopener noreferrer" className="text-primary-color underline">Netlify DPA</a>.
          </p>
        </div>

        {/* 4. Analytics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">4. Analytics</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website uses <strong>GoatCounter</strong>, a privacy-friendly analytics service. GoatCounter does not use cookies or collect personal data.
            <br /><br />
            More information:{" "}
            <a href="https://www.goatcounter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-color underline">GoatCounter Privacy Policy</a>.
          </p>
        </div>

        {/* 5. Dispute Resolution */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">5. Online Dispute Resolution</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Consumers may submit complaints via the EU Online Dispute Resolution platform:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-color underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </div>

        {/* 6. Disclaimer */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">6. Disclaimer</h2>
          <p className="text-primary-text-grey leading-relaxed mb-4">
            <strong>Liability for Content:</strong><br />
            The content on this website has been created with care. However, I cannot guarantee the accuracy, completeness, or timeliness of the content.
          </p>
          <p className="text-primary-text-grey leading-relaxed">
            <strong>Liability for Links:</strong><br />
            This website may contain links to external websites. I have no influence over the content of those external sites and therefore cannot accept liability for them.
          </p>
        </div>

        {/* 7. Copyright */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">7. Copyright Notice</h2>
          <p className="text-primary-text-grey leading-relaxed">
            All content on this website, including text, images, and graphics, is protected by copyright. Unauthorized use, reproduction, or distribution is prohibited without explicit permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imprint;
