import { e as createComponent, l as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_uYHly2D0.mjs';
import 'piccolore';
import { b as $$BaseLayout, E as EVENT_NAME, $ as $$PublicHeader, a as $$PublicFooter } from '../chunks/PublicHeader_Cy2KZvzW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": EVENT_NAME, "description": "Sitio oficial de la Copa Salvadore\xF1a de Programaci\xF3n 2026." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen flex-col"> ${renderComponent($$result2, "PublicHeader", $$PublicHeader, {})} <main class="mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-4 py-16"> <section class="w-full rounded-lg border border-csp-soft bg-csp-white p-8 text-center shadow-csp"> <div class="mx-auto w-fit rounded-lg bg-csp-primary p-3"> <img alt="Logo CSP" height="140" src="/brands/csp-logo-square.png" width="140"> </div> <h1 class="mt-5 font-display text-3xl font-semibold text-csp-primary">${EVENT_NAME}</h1> <p class="mt-2 text-csp-black/70">Sitio oficial en proceso.</p> <div class="mt-6 flex flex-wrap items-center justify-center gap-3"> <a class="inline-flex h-11 items-center justify-center rounded-md bg-csp-blue px-5 text-sm font-semibold text-csp-white hover:bg-csp-primary" href="/inscripcion">
Ir a inscripcion
</a> </div> <div class="mt-6 flex items-center justify-center gap-3"> <span class="text-xs text-csp-black/60">Organiza:</span> <img alt="Logo C3" height="28" src="/brands/c3-logo-main.png" width="28"> </div> </section> </main> ${renderComponent($$result2, "PublicFooter", $$PublicFooter, {})} </div> ` })}`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
