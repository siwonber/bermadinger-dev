import BackToHomeButton from "../components/BackToHomeButton";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-bg-color text-text-color py-16 px-0 sm:px-6">
      <BackToHomeButton />

      <div className="w-full bg-black/90 px-0 py-8 sm:max-w-3xl sm:mx-auto rounded-none sm:rounded-xl">
        <h1 className="text-5xl font-extrabold mb-6 text-primary-color text-center">Privacy Policy</h1>
        <p className="text-primary-text-grey mb-12 text-center">Last updated: March 2025</p>

        {/* 1. Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">1. Introduction</h2>
          <p className="text-primary-text-grey leading-relaxed">
            I am committed to protecting your personal data and privacy. This Privacy Policy outlines how I handle personal information in compliance with the General Data Protection Regulation (GDPR).
          </p>
        </div>

        {/* 2. Data Controller */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">2. Data Controller Information</h2>
          <p className="text-primary-text-grey leading-relaxed">
            <span className="block"><strong>Name:</strong> Simon Bermadinger</span>
            <span className="block"><strong>Address:</strong> Egger-Lienz-Gasse 7, 5020 Salzburg, Austria</span>
            <span className="block"><strong>Email:</strong> <a href="mailto:office.code.bermadinger@gmail.com" className="text-primary-color underline">office.code.bermadinger@gmail.com</a></span>
          </p>
        </div>

        {/* 3. Data Collection */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">3. Data Collection</h2>
          <p className="text-primary-text-grey leading-relaxed mb-4">
            This website does not actively collect personal data. You may contact me via the provided email link; any data you share (such as name or email address) will solely be used to respond to your inquiry.
          </p>
          <p className="text-primary-text-grey leading-relaxed">
            Additionally, technical data such as IP addresses and server logs are automatically collected by our hosting provider, Netlify.
          </p>
        </div>

        {/* 4. Analytics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">4. Analytics (GoatCounter)</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website uses <strong>GoatCounter</strong>, a privacy-friendly analytics service. GoatCounter does not use cookies or collect personal data. It tracks basic, non-identifiable information (e.g., page views, referrer) to analyze website usage without profiling visitors.
            <br /><br />
            Learn more:{" "}
            <a href="https://www.goatcounter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-color underline">GoatCounter Privacy Policy</a>.
          </p>
        </div>

        {/* 5. Hosting */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">5. Hosting (Netlify)</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website is hosted by <strong>Netlify, Inc.</strong>, which may process technical data like IP addresses and server logs for security purposes.
            <br /><br />
            Their data handling is governed by their Data Processing Agreement (DPA):{" "}
            <a href="https://www.netlify.com/gdpr-ccpa/" target="_blank" rel="noopener noreferrer" className="text-primary-color underline">Netlify DPA</a>.
          </p>
        </div>

        {/* 6. Data Transfers */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">6. Data Transfers Outside the EU</h2>
          <p className="text-primary-text-grey leading-relaxed">
            Both Netlify and GoatCounter may process data on servers outside the EU. Standard Contractual Clauses (SCCs) and other safeguards are used to ensure GDPR compliance.
          </p>
        </div>

        {/* 7. Cookies */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">7. Cookies</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This website does not use cookies for marketing or tracking purposes.
          </p>
        </div>

        {/* 8. Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">8. Your Rights Under GDPR</h2>
          <p className="text-primary-text-grey leading-relaxed mb-4">
            Since this website does not store identifiable personal data, exercising rights like data access, correction, or deletion may not apply. However, you retain the right to contact me or your local data authority for concerns.
          </p>
        </div>

        {/* 9. Security */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">9. Security Measures</h2>
          <ul className="list-disc list-inside text-primary-text-grey mb-4">
            <li>SSL/TLS encryption (via Netlify)</li>
            <li>Restricted server access</li>
            <li>Minimal data collection by design</li>
          </ul>
        </div>

        {/* 10. Policy Changes */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">10. Policy Updates</h2>
          <p className="text-primary-text-grey leading-relaxed">
            This policy may be updated to reflect legal or technical changes. Please revisit periodically for the latest version.
          </p>
        </div>

        {/* 11. Contact */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-4 text-primary-color">11. Contact</h2>
          <p className="text-primary-text-grey leading-relaxed">
            For questions about this Privacy Policy:
            <br /><br />
            Simon Bermadinger<br />
            <a href="mailto:office.code.bermadinger@gmail.com" className="text-primary-color underline">office.code.bermadinger@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
