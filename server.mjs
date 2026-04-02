import http from "node:http";
import dotenv from "dotenv";
import {
  getMissingEnvVars,
  sendContactEmail,
  validatePayload,
} from "./contact-mail.js";

dotenv.config();

const PORT = Number(process.env.CONTACT_API_PORT || 3001);
const HOST = process.env.CONTACT_API_HOST || "127.0.0.1";
const missingEnvVars = getMissingEnvVars();

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}

const sendJson = (res, statusCode, body) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(body));
};

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 404, { message: "Not found." });
    return;
  }

  const url = new URL(req.url, "http://localhost");

  if (req.method === "OPTIONS" && url.pathname === "/api/contact") {
    sendJson(res, 204, {});
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, { status: "ok" });
    return;
  }

  if (req.method !== "POST" || url.pathname !== "/api/contact") {
    sendJson(res, 404, { message: "Not found." });
    return;
  }

  if (missingEnvVars.length > 0) {
    sendJson(res, 500, {
      message: "Email server is not configured correctly. Please check environment variables.",
    });
    return;
  }

  try {
    let rawBody = "";

    for await (const chunk of req) {
      rawBody += chunk;

      if (rawBody.length > 1_000_000) {
        sendJson(res, 413, { message: "Request payload is too large." });
        return;
      }
    }

    const payload = JSON.parse(rawBody || "{}");
    const { errors, data } = validatePayload(payload);

    if (Object.keys(errors).length > 0) {
      sendJson(res, 400, { message: "Please correct the highlighted fields.", errors });
      return;
    }

    await sendContactEmail(data);

    sendJson(res, 200, { message: "Contact details sent successfully." });
  } catch (error) {
    console.error("Failed to handle contact email:", error);
    sendJson(res, 500, {
      message: "Unable to send the email right now. Please try again in a moment.",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Contact mail server is running on http://${HOST}:${PORT}`);
});
