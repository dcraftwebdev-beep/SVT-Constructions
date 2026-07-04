import { Helmet } from "react-helmet-async";

const SITE_NAME = "SVT Constructions";
const SITE_URL = "https://svtconstructions.com";

export default function SEO({
  title,
  description,
  image,
  type = "website",
  url,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Premium Construction Company in Chennai`;

  const canonicalUrl = url || SITE_URL;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={
          description ||
          "SVT Constructions is a trusted construction company in Chennai specializing in residential, commercial, villas, apartments, renovations, and turnkey construction services."
        }
      />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={
          description ||
          "Building quality homes and commercial spaces with exceptional craftsmanship."
        }
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={
          description ||
          "Trusted construction company delivering premium residential and commercial projects."
        }
      />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}