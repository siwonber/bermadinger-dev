import { Helmet } from "react-helmet";

function SEO({ title, description, url, image }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="google-site-verification" content="J3Az86l6b_AFWj3rvWUKNz4-rW-weLkE3bvOfs1OhI0" />
      {/* Structured Data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Simon Bermadinger",
          "url": "https://www.bermadinger.dev",
          "sameAs": [
            "https://linkedin.com/in/simon-bermadinger-7585b6339"
          ],
          "jobTitle": "Fullstack Developer",
          "worksFor": {
            "@type": "Organization",
            "name": "FH Salzburg"
          },
          "image": "https://www.bermadinger.dev/images/home-og.jpg",
          "description": "Portfolio of Simon Bermadinger, Fullstack Developer with focus on clean design, frontend and backend development."
        }
        `}
      </script>
    </Helmet>
  );
}

export default SEO;
