type RegistrationConfirmationResponse = Record<string, unknown>;

const MISSING_ENDPOINT_ERROR =
  "Falta configurar PUBLIC_REGISTRATION_CONFIRMATION_ENDPOINT para solicitar el correo de confirmación.";

function getErrorDetails(payload: unknown, fallbackText: string) {
  if (payload && typeof payload === "object") {
    const message =
      "message" in payload && typeof payload.message === "string"
        ? payload.message
        : "error" in payload && typeof payload.error === "string"
          ? payload.error
          : "";
    if (message) return message;
  }

  return fallbackText;
}

export async function sendRegistrationConfirmationEmail(
  registrationId: string,
): Promise<RegistrationConfirmationResponse> {
  const endpoint = import.meta.env.PUBLIC_REGISTRATION_CONFIRMATION_ENDPOINT?.trim();

  if (!endpoint) {
    if (import.meta.env.DEV) {
      console.error("[RegistrationEmail] Endpoint faltante.", {
        envVar: "PUBLIC_REGISTRATION_CONFIRMATION_ENDPOINT",
      });
    }
    throw new Error(MISSING_ENDPOINT_ERROR);
  }

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ registrationId }),
    });
  } catch (error) {
    throw new Error(
      `No se pudo contactar el endpoint de confirmación de inscripción: ${error instanceof Error ? error.message : "error desconocido"}.`,
    );
  }

  const rawBody = await response.text();
  let parsedBody: unknown = null;

  if (rawBody) {
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      parsedBody = null;
    }
  }

  if (!response.ok) {
    const details = getErrorDetails(parsedBody, rawBody);
    if (import.meta.env.DEV) {
      console.error("[RegistrationEmail] El endpoint respondió con error.", {
        status: response.status,
        statusText: response.statusText,
        details,
      });
    }
    throw new Error(
      `El endpoint de confirmación respondió con error (${response.status}${details ? `: ${details}` : ""}).`,
    );
  }

  if (!parsedBody || typeof parsedBody !== "object") {
    throw new Error("El endpoint de confirmación no devolvió un JSON válido.");
  }

  return parsedBody as RegistrationConfirmationResponse;
}
