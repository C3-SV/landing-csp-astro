import { e as createComponent, r as renderTemplate, n as defineScriptVars, g as addAttribute, o as renderHead, l as renderComponent, k as renderSlot, h as createAstro, m as maybeRenderHead } from './astro/server_uYHly2D0.mjs';
import 'piccolore';
import 'clsx';
import { extractRouterConfig } from 'uploadthing/server';
import { o as ourFileRouter } from './uploadthing_CkiOpQ_y.mjs';
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

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$UploadThingSSR = createComponent(($$result, $$props, $$slots) => {
  const routerConfig = extractRouterConfig(ourFileRouter);
  globalThis.__UPLOADTHING ??= routerConfig;
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  globalThis.__UPLOADTHING ??= routerConfig;\n})();<\/script>"])), defineScriptVars({ routerConfig }));
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/UploadThingSSR.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = EVENT_NAME,
    description = "M\xF3dulo de inscripci\xF3n y administraci\xF3n de la CSP 2026."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="h-full antialiased"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> ${renderComponent($$result, "UploadThingSSR", $$UploadThingSSR, {})} ${renderSlot($$result, $$slots["default"])} </html>`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/layouts/BaseLayout.astro", void 0);

const $$PublicFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-10 border-t border-csp-white/15 bg-csp-primary"> <div class="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4"> <p class="text-xs text-csp-white/85">${EVENT_NAME} - 2026</p> <div class="flex items-center gap-3"> <img alt="Logo CSP horizontal" height="22" src="/brands/csp-logo-horizontal.png" width="112"> <span class="text-csp-white/40">|</span> <img alt="Logo C3" height="20" src="/brands/c3-logo-main.png" width="20"> </div> </div> </footer>`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/PublicFooter.astro", void 0);

const $$PublicHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-csp-white/15 bg-csp-primary"> <div class="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-2.5"> <a class="flex items-center" href="/"> <img alt="Copa Salvadorena de Programacion" height="24" src="/brands/csp-logo-horizontal.png" width="122"> </a> </div> </header>`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/PublicHeader.astro", void 0);

export { $$BaseLayout as $, CATEGORY_OPTIONS as C, DISCOVERY_SOURCE_OPTIONS as D, EVENT_NAME as E, SCHOOL_RESPONSIBLE_ROLES as S, $$PublicHeader as a, $$PublicFooter as b };
