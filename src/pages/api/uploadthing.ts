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

const getHandler: APIRoute = async ({ request }) => {
  if (!handlers) return missingTokenResponse;
  return handlers.GET(request);
};

const postHandler: APIRoute = async ({ request }) => {
  if (!handlers) return missingTokenResponse;
  return handlers.POST(request);
};

export { getHandler as GET, postHandler as POST };