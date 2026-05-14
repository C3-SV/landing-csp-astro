import { createRouteHandler } from 'uploadthing/server';
import { o as ourFileRouter } from '../../chunks/uploadthing_CkiOpQ_y.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const readUploadThingToken = () => {
  const runtimeToken = typeof process !== "undefined" && process.env ? process.env.UPLOADTHING_TOKEN : void 0;
  return runtimeToken ?? undefined                                 ;
};
const createHandlers = () => {
  const uploadThingToken = readUploadThingToken();
  if (!uploadThingToken) return null;
  return createRouteHandler({
    router: ourFileRouter,
    config: {
      token: uploadThingToken
    }
  });
};
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
const handleUploadThingRequest = async (request) => {
  const handlers = createHandlers();
  if (!handlers) return missingTokenResponse;
  try {
    return await handlers(request);
  } catch (error) {
    console.error("[UploadThing] /api/uploadthing failed:", error);
    return new Response(
      JSON.stringify({
        error: "UploadThing route failed to execute.",
        message: error instanceof Error ? error.message : "Unknown server error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }
    );
  }
};
const GET = async ({ request }) => handleUploadThingRequest(request);
const POST = async ({ request }) => handleUploadThingRequest(request);

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
