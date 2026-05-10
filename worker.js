import { handleContactRequest } from "./functions/api/contact.js";

const json = (body, init = {}) =>
  Response.json(body, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContactRequest({ request, env });
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ message: "Not found." }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};
