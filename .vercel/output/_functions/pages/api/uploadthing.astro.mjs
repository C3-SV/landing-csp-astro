import { createRouteHandler } from 'uploadthing/server';
import { o as ourFileRouter } from '../../chunks/uploadthing_CkiOpQ_y.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const handlers = createRouteHandler({
  router: ourFileRouter,
  config: {
    token: "eyJhcGlLZXkiOiJza19saXZlX2JhZjE1NjBlNDFhYzAxNDBhMzE4MGM3MDQ5ZTE3NTQwYmFiZTk0YWY4MmRmNjgzMmUwYjgwYTY3NzA4ZjU4OTAiLCJhcHBJZCI6InV1Zzh4MTRvdDIiLCJyZWdpb25zIjpbInNlYTEiXX0="
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET: handlers,
  POST: handlers,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
