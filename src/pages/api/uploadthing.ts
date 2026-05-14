import { createRouteHandler } from "uploadthing/server";
import type { APIRoute } from "astro";

import { ourFileRouter } from "../../server/uploadthing";

export const prerender = false;

const readUploadThingToken = () => {
  const runtimeToken =
    typeof process !== "undefined" && process.env
      ? process.env.UPLOADTHING_TOKEN
      : undefined;

  return runtimeToken ?? import.meta.env.UPLOADTHING_TOKEN;
};

const createHandlers = () => {
  const uploadThingToken = readUploadThingToken();
  if (!uploadThingToken) return null;

  return createRouteHandler({
    router: ourFileRouter,
    config: {
      token: uploadThingToken,
    },
  });
};

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

const handleUploadThingRequest = async (request: Request) => {
  try {
    const handlers = createHandlers();
    if (!handlers) return missingTokenResponse;
    return await handlers(request);
  } catch (error) {
    console.error("[UploadThing] /api/uploadthing failed:", error);
    return new Response(
      JSON.stringify({
        error: "UploadThing route failed to execute.",
        message: error instanceof Error ? error.message : "Unknown server error",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      },
    );
  }
};

export const GET: APIRoute = async ({ request }) => handleUploadThingRequest(request);
export const POST: APIRoute = async ({ request }) => handleUploadThingRequest(request);

