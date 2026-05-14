import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_uYHly2D0.mjs';
import 'piccolore';
import 'clsx';
import { E as EVENT_NAME } from './BaseLayout_3NCMgYNC.mjs';

const $$PublicFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="mt-10 border-t border-csp-white/15 bg-csp-primary"> <div class="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4"> <p class="text-xs text-csp-white/85">${EVENT_NAME} - 2026</p> <div class="flex items-center gap-3"> <img alt="Logo CSP horizontal" height="22" src="/brands/csp-logo-horizontal.png" width="112"> <span class="text-csp-white/40">|</span> <img alt="Logo C3" height="20" src="/brands/c3-logo-main.png" width="20"> </div> </div> </footer>`;
}, "C:/Users/Melisa Rivas/OneDrive/Desktop/C3/landing-csp-astro/src/components/PublicFooter.astro", void 0);

const $$PublicHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="border-b border-csp-white/15 bg-csp-primary"> <div class="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-2.5"> <a class="flex items-center" href="/"> <img alt="Copa Salvadorena de Programacion" height="24" src="/brands/csp-logo-horizontal.png" width="122"> </a> </div> </header>`;
}, "C:/Users/Melisa Rivas/OneDrive/Desktop/C3/landing-csp-astro/src/components/PublicHeader.astro", void 0);

export { $$PublicHeader as $, $$PublicFooter as a };
