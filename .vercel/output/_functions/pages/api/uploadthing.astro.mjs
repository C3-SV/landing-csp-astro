import { createRouteHandler } from 'uploadthing/server';
import { o as ourFileRouter } from '../../chunks/uploadthing_CkiOpQ_y.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const uploadThingToken = process.env.UPLOADTHING_TOKEN ?? "eyJhcGlLZXkiOiJza19saXZlX2JhZjE1NjBlNDFhYzAxNDBhMzE4MGM3MDQ5ZTE3NTQwYmFiZTk0YWY4MmRmNjgzMmUwYjgwYTY3NzA4ZjU4OTAiLCJhcHBJZCI6InV1Zzh4MTRvdDIiLCJyZWdpb25zIjpbInNlYTEiXX0=";
const handlers = uploadThingToken ? createRouteHandler({
  router: ourFileRouter,
  config: {
    token: uploadThingToken
  }
}) : null;
const missingTokenResponse = new Response(
  JSON.stringify({
    error: "UPLOADTHING_TOKEN is not configured on the server."
  }),
  {
    status: 503,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  }
);
const getHandler = async ({ request }) => {
  if (!handlers) return missingTokenResponse;
  return handlers.GET(request);
};
const postHandler = async ({ request }) => {
  if (!handlers) return missingTokenResponse;
  return handlers.POST(request);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET: getHandler,
  POST: postHandler,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
