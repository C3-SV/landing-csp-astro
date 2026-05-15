import { e as createComponent, g as addAttribute, o as renderHead, k as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_uYHly2D0.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const EVENT_NAME = "Copa Salvadoreña de Programación 2026";
const DISCOVERY_SOURCE_OPTIONS = [
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "c3", label: "C3" },
  { value: "esen", label: "ESEN" },
  { value: "omegaup", label: "OmegaUp" },
  { value: "profesor", label: "Profesor / docente" },
  { value: "amigo_companero", label: "Amigo o compañero" },
  { value: "institucion", label: "Institución educativa" },
  { value: "otro", label: "Otro" }
];
const SCHOOL_RESPONSIBLE_ROLES = [
  { value: "docente", label: "Docente" },
  { value: "coordinador_academico", label: "Coordinador académico" },
  { value: "director", label: "Director" },
  { value: "encargado_institucional", label: "Encargado institucional" },
  { value: "mentor", label: "Mentor" },
  { value: "otro", label: "Otro" }
];
const CATEGORY_OPTIONS = [
  {
    value: "colegios",
    label: "Colegios",
    description: "Para equipos de educación media."
  },
  {
    value: "universidades",
    label: "Universidades",
    description: "Para equipos de educación superior."
  }
];

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = EVENT_NAME,
    description = "M\xF3dulo de inscripci\xF3n y administraci\xF3n de la CSP 2026."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="h-full antialiased"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="min-h-full flex flex-col bg-csp-background text-csp-black"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Melisa Rivas/OneDrive/Desktop/C3/landing-csp-astro/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, CATEGORY_OPTIONS as C, DISCOVERY_SOURCE_OPTIONS as D, EVENT_NAME as E, SCHOOL_RESPONSIBLE_ROLES as S };
