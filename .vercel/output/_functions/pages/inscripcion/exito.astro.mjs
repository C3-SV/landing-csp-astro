import { e as createComponent, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, k as renderSlot, r as renderTemplate, h as createAstro, l as renderComponent } from '../../chunks/astro/server_uYHly2D0.mjs';
import 'piccolore';
import { $ as $$PublicHeader, a as $$PublicFooter, E as EVENT_NAME, b as $$BaseLayout } from '../../chunks/PublicHeader_Cy2KZvzW.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className = "", ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp", className], "class:list")}${spreadAttributes(rest)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/components/Card.astro", void 0);

const $$Astro = createAstro();
const $$Exito = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Exito;
  const id = Astro2.url.searchParams.get("id")?.trim() ?? "";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `Inscripci\xF3n enviada | ${EVENT_NAME}`, "description": "Confirmaci\xF3n de inscripci\xF3n enviada correctamente." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen flex-col"> ${renderComponent($$result2, "PublicHeader", $$PublicHeader, {})} <main class="mx-auto flex w-full max-w-4xl flex-1 items-center px-4 py-12"> ${renderComponent($$result2, "Card", $$Card, { "class": "w-full text-center" }, { "default": ($$result3) => renderTemplate` <h1 class="font-display text-3xl font-semibold text-csp-primary">Inscripción enviada</h1> <p class="mt-3 text-csp-black/70">
Tu equipo fue registrado correctamente. Pronto el comité organizador contactará al responsable para confirmar el proceso.
</p> ${id ? renderTemplate`<p class="mt-2 text-sm text-csp-black/70">
ID de inscripción: <strong>${id}</strong> </p>` : null}<div class="mt-6 flex flex-wrap justify-center gap-3"> <a class="inline-flex h-11 items-center justify-center rounded-md bg-csp-blue px-5 text-sm font-semibold text-csp-white hover:bg-csp-primary" href="/inscripcion">
Nueva inscripción
</a> <a class="inline-flex h-11 items-center justify-center rounded-md border border-csp-primary px-5 text-sm font-semibold text-csp-primary hover:bg-csp-soft" href="/">
Volver al inicio
</a> </div> ` })} </main> ${renderComponent($$result2, "PublicFooter", $$PublicFooter, {})} </div> ` })}`;
}, "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/exito.astro", void 0);

const $$file = "C:/Users/gemc1/Documents/GitHub/landing-csp-astro/src/pages/inscripcion/exito.astro";
const $$url = "/inscripcion/exito";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Exito,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
