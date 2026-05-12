import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_uYHly2D0.mjs';
import 'piccolore';
import { b as $$BaseLayout, $ as $$PublicHeader, C as CATEGORY_OPTIONS, a as $$PublicFooter, E as EVENT_NAME } from '../chunks/PublicHeader_Cy2KZvzW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Inscripci\xF3n | ${EVENT_NAME}`, "description": "Selecciona la categor\xEDa para continuar el registro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen flex-col"> ${renderComponent($$result2, "PublicHeader", $$PublicHeader, {})} <main class="mx-auto w-full max-w-5xl flex-1 px-4 py-12"> <div class="mb-6"> <h1 class="font-display text-3xl font-semibold text-csp-primary">Inscripción de equipos</h1> <p class="mt-2 text-sm text-csp-black/70">Selecciona la categoría para continuar el registro.</p> </div> <div class="grid gap-4 md:grid-cols-2"> ${CATEGORY_OPTIONS.map((option) => renderTemplate`<a${addAttribute(`/inscripcion/registro?categoria=${option.value}`, "href")} class="rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp transition hover:border-csp-blue/40 hover:shadow-csp-lg"> <p class="font-display text-2xl font-semibold text-csp-primary">${option.label}</p> <p class="mt-2 text-sm text-csp-black/70">${option.description}</p> </a>`)} </div> </main> ${renderComponent($$result2, "PublicFooter", $$PublicFooter, {})} </div> ` })}`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/index.astro", void 0);

const $$file = "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/index.astro";
const $$url = "/inscripcion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
