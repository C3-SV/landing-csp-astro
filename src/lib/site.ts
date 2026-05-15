import { EVENT_NAME } from "./constants";

export const siteConfig = {
  name: EVENT_NAME,
  shortName: "CSP 2026",
  parentBrand: "C3",
  parentFullName: "Competitive Coding Club",
  line: "Compite",
  displayName: `${EVENT_NAME} | C3`,
  domain: "https://copa.c3.com.sv",
  mainC3Site: "https://c3.com.sv",
  locale: "es_SV",
  language: "es",
  tagline: "Compite. Crea. Conecta.",
  mission:
    "Potenciar talento joven mediante experiencias de alto nivel que integran competencia, creación y conexión.",
  vision:
    "Ser el referente regional de una nueva generación técnica con pertenencia, oportunidades e impacto.",
  description:
    "La Copa Salvadoreña de Programación 2026 es una iniciativa de C3 Compite que reúne talento de colegios y universidades para resolver problemas, fortalecer pensamiento algorítmico y conectar con una comunidad técnica de alto nivel.",
  keywords: [
    "Copa Salvadoreña de Programación",
    "Copa de Programación",
    "Copa C3",
    "CSP 2026",
    "C3",
    "C3 Compite",
    "Competitive Coding Club",
    "programación competitiva El Salvador",
    "competencia de programación El Salvador",
    "ICPC El Salvador",
    "OmegaUp",
    "algoritmos",
    "estructuras de datos",
    "resolución de problemas",
    "talento técnico joven",
    "jóvenes programadores",
    "comunidad tecnológica El Salvador",
    "programación competitiva Centroamérica",
  ],
  event: {
    virtualPhaseDate: "2026-08-01",
    schoolFinalDate: "2026-08-15",
    universityFinalDate: "2026-09-05",
    virtualPhaseLabel: "1 de agosto de 2026",
    schoolFinalLabel: "15 de agosto de 2026",
    universityFinalLabel: "5 de septiembre de 2026",
    venue: "ESEN",
    categories: ["Colegios", "Universidades"],
    platform: "OmegaUp",
    problemCount: 6,
    teamSize: 3,
  },
  social: {
    instagram: "https://www.instagram.com/c3.elsalvador",
    linkedin: "https://www.linkedin.com/company/c3-sv",
    youtube: "https://www.youtube.com/@C3_ElSalvador",
    email: "competitivecodingclub.sv@gmail.com",
  },
  sites: {
    main: "https://c3.com.sv",
    copa: "https://copa.c3.com.sv",
    festival: "https://festival.c3.com.sv",
  },
  sponsors: [
    "TechyWe",
    "Applaudo",
    "Boxful",
    "RSM",
    "Fusades",
    "OSI",
    "Ravn",
    "Enblueprint",
  ],
  defaultOgImage: "/index/fotoHero.webp",
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return new URL(path, siteConfig.domain).toString();
}

export const pageMetadata = {
  home: {
    title: siteConfig.name,
    description: siteConfig.description,
    canonical: absoluteUrl("/"),
  },
  rules: {
    title: `Reglamento | ${siteConfig.name}`,
    description:
      "Reglamento oficial de la Copa Salvadoreña de Programación 2026: equipos, plataforma, problemas, lenguajes, evaluación, conducta y jurado.",
    canonical: absoluteUrl("/rules/"),
  },
  register: {
    title: `Inscripción | ${siteConfig.name}`,
    description:
      "Inscríbete gratis a la Copa Salvadoreña de Programación 2026. Forma tu equipo, selecciona tu categoría y completa el registro oficial.",
    canonical: absoluteUrl("/register/"),
  },
  phases: {
    title: `Fases | ${siteConfig.name}`,
    description:
      "Fases de la Copa Salvadoreña de Programación 2026 para colegios y universidades.",
    canonical: absoluteUrl("/phases/"),
    noindex: true,
  },
  registrationForm: {
    title: `Formulario de inscripción | ${siteConfig.name}`,
    description:
      "Formulario oficial de registro de equipos para la Copa Salvadoreña de Programación 2026.",
    canonical: absoluteUrl("/inscripcion/registro/"),
    noindex: true,
  },
  registrationSuccess: {
    title: `Inscripción enviada | ${siteConfig.name}`,
    description:
      "Confirmación de inscripción enviada para la Copa Salvadoreña de Programación 2026.",
    canonical: absoluteUrl("/inscripcion/exito/"),
    noindex: true,
  },
} as const;
