import { createRouteHandler } from "uploadthing/server";

import { ourFileRouter } from "../../server/uploadthing";

export const prerender = false;

const uploadThingToken = process.env.UPLOADTHING_TOKEN ?? import.meta.env.UPLOADTHING_TOKEN;

const handlers = uploadThingToken
  ? createRouteHandler({
      router: ourFileRouter,
      config: {
        token: uploadThingToken,
      },
    })
  : null;

const missingTokenResponse = new Response(
  JSON.stringify({
    error: "UPLOADTHING_TOKEN is not configured on the server.",
  }),
  {
    status: 503,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  },
);

import type { APIRoute } from "astro";

const handler: APIRoute = async ({ request }) => {
  if (!handlers) return missingTokenResponse;
  return handlers(request);
};

export { handler as GET, handler as POST };
