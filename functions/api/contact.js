import {
  getMissingEnvVarsFrom,
  sendContactEmail,
  validatePayload,
} from "../../contact-mail.js";

const json = (body, init = {}) =>
  Response.json(body, {
    ...init,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      ...(init.headers || {}),
    },
  });

export const onRequest = async ({ request, env }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method !== "POST") {
    return json({ message: "Method not allowed." }, { status: 405 });
  }

  const missingEnvVars = getMissingEnvVarsFrom(env);

  if (missingEnvVars.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
    return json(
      {
        message: "Email server is not configured correctly. Please check environment variables.",
      },
      { status: 500 },
    );
  }

  try {
    const payload = await request.json();
    const { errors, data } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return json(
        {
          message: "Please correct the highlighted fields.",
          errors,
        },
        { status: 400 },
      );
    }

    await sendContactEmail(data, env);

    return json({ message: "Contact details sent successfully." });
  } catch (error) {
    console.error("Failed to handle Cloudflare contact email:", error);
    return json(
      {
        message: "Unable to send the email right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
};
