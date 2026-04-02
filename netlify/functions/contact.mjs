import {
  getMissingEnvVars,
  sendContactEmail,
  validatePayload,
} from "../../contact-mail.mjs";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { message: "Method not allowed." });
  }

  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
    return json(500, {
      message: "Email server is not configured correctly. Please check environment variables.",
    });
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const { errors, data } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      return json(400, {
        message: "Please correct the highlighted fields.",
        errors,
      });
    }

    await sendContactEmail(data);

    return json(200, { message: "Contact details sent successfully." });
  } catch (error) {
    console.error("Failed to handle Netlify contact email:", error);
    return json(500, {
      message: "Unable to send the email right now. Please try again in a moment.",
    });
  }
};
