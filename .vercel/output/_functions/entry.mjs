import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DSCDa2sr.mjs';
import { manifest } from './manifest_DFWwwFm3.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/uploadthing.astro.mjs');
const _page2 = () => import('./pages/inscripcion/exito.astro.mjs');
const _page3 = () => import('./pages/inscripcion/registro.astro.mjs');
const _page4 = () => import('./pages/inscripcion.astro.mjs');
const _page5 = () => import('./pages/phases.astro.mjs');
const _page6 = () => import('./pages/register.astro.mjs');
const _page7 = () => import('./pages/rules.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/uploadthing.ts", _page1],
    ["src/pages/inscripcion/exito.astro", _page2],
    ["src/pages/inscripcion/registro.astro", _page3],
    ["src/pages/inscripcion/index.astro", _page4],
    ["src/pages/phases.astro", _page5],
    ["src/pages/register.astro", _page6],
    ["src/pages/rules.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "746d89ea-2ee3-4cf4-9542-c2aef4ba2b88",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
