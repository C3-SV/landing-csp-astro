import { absoluteUrl, siteConfig } from "./site";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.parentBrand,
  legalName: siteConfig.parentFullName,
  alternateName: ["Competitive Coding Club", "C3 El Salvador"],
  url: siteConfig.mainC3Site,
  logo: `${siteConfig.mainC3Site}/favicon.svg`,
  description:
    "C3 potencia talento técnico joven mediante experiencias de alto nivel que integran competencia, creación y conexión.",
  slogan: siteConfig.tagline,
  sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
};

export const copaEventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.domain,
  startDate: siteConfig.event.virtualPhaseDate,
  endDate: siteConfig.event.universityFinalDate,
  image: absoluteUrl(siteConfig.defaultOgImage),
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  organizer: {
    "@type": "Organization",
    name: siteConfig.parentBrand,
    url: siteConfig.mainC3Site,
  },
  location: {
    "@type": "Place",
    name: siteConfig.event.venue,
  },
  audience: {
    "@type": "Audience",
    audienceType:
      "Estudiantes de colegios y universidades interesados en programación competitiva",
  },
};
