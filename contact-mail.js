import nodemailer from "nodemailer";

const REQUIRED_ENV_VARS = [
  "FROM_EMAIL",
  "FROM_NAME",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
];

export const getMissingEnvVars = () =>
  getMissingEnvVarsFrom(process.env);

export const getMissingEnvVarsFrom = (env = {}) =>
  REQUIRED_ENV_VARS.filter((key) => !env[key]);

const escapeHtml = (value = "") =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export const validatePayload = (payload) => {
  const errors = {};
  const name = String(payload?.name || "").trim();
  const email = String(payload?.email || "").trim();
  const phone = String(payload?.phone || "").trim();
  const notes = String(payload?.notes || "").trim();

  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2 || name.length > 50 || !/^[A-Za-z\s]+$/.test(name)) {
    errors.name = "Enter a valid name.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid Indian 10-digit mobile number.";
  }

  if (notes && (notes.length < 5 || notes.length > 2000)) {
    errors.notes = "Notes must be between 5 and 2000 characters when provided.";
  }

  return {
    errors,
    data: { name, email, phone, notes },
  };
};

const buildEmailHtml = ({ name, email, phone, notes }, env = process.env) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeNotes = escapeHtml(notes || "No additional notes were provided.");
  const safeBrand = escapeHtml(env.FROM_NAME || "Music Mentors Global");

  return `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#f4efe8;font-family:Arial,sans-serif;color:#3f3555;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe8;padding:24px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 18px 50px rgba(63,53,85,0.12);">
                <tr>
                  <td style="background:linear-gradient(135deg,#5f4d8c 0%,#f05a28 100%);padding:28px 32px;color:#ffffff;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="width:64px;vertical-align:top;">
                          <div style="width:52px;height:52px;border-radius:16px;background:rgba(255,255,255,0.18);text-align:center;line-height:52px;font-size:28px;">
                            &#9835;
                          </div>
                        </td>
                        <td style="vertical-align:middle;">
                          <div style="font-size:12px;letter-spacing:1.6px;text-transform:uppercase;opacity:0.9;">New Contact Enquiry</div>
                          <div style="font-size:28px;font-weight:700;line-height:1.2;margin-top:6px;">${safeBrand}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.7;">
                      A new contact form submission has been received from your website.
                    </p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;border-spacing:0 12px;">
                      <tr>
                        <td style="width:160px;font-weight:700;color:#5f4d8c;">Name</td>
                        <td style="background:#f8f5ff;border:1px solid #e6def7;border-radius:14px;padding:14px 16px;">${safeName}</td>
                      </tr>
                      <tr>
                        <td style="width:160px;font-weight:700;color:#5f4d8c;">Email</td>
                        <td style="background:#f8f5ff;border:1px solid #e6def7;border-radius:14px;padding:14px 16px;">${safeEmail}</td>
                      </tr>
                      <tr>
                        <td style="width:160px;font-weight:700;color:#5f4d8c;">Phone</td>
                        <td style="background:#f8f5ff;border:1px solid #e6def7;border-radius:14px;padding:14px 16px;">${safePhone}</td>
                      </tr>
                      <tr>
                        <td style="width:160px;font-weight:700;color:#5f4d8c;vertical-align:top;">Notes</td>
                        <td style="background:#f8f5ff;border:1px solid #e6def7;border-radius:14px;padding:14px 16px;white-space:pre-wrap;">${safeNotes}</td>
                      </tr>
                    </table>
                    <div style="margin-top:28px;padding:18px 20px;background:#fff5ef;border:1px solid #ffd8c7;border-radius:16px;color:#8f4a28;font-size:14px;line-height:1.6;">
                      Reply directly to this email to respond to ${safeName}. The sender's email has been set as the reply-to address.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 32px 32px;">
                    <div style="border-top:1px solid #ece7f5;padding-top:20px;font-size:14px;line-height:1.8;color:#6e5f89;">
                      Regards,<br />
                      <strong style="color:#3f3555;">${safeBrand}</strong><br />
                      Website Contact Notification Service
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

const buildEmailText = ({ name, email, phone, notes }, env = process.env) => {
  const brand = env.FROM_NAME || "Music Mentors Global";

  return [
    `New contact enquiry received for ${brand}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Notes: ${notes || "No additional notes were provided."}`,
    "",
    "Regards,",
    brand,
    "Website Contact Notification Service",
  ].join("\n");
};

const createTransporter = (env = process.env) =>
  nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT || 587),
    secure: Number(env.SMTP_PORT) === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASSWORD,
    },
  });

export const sendContactEmail = async (data, env = process.env) => {
  const transporter = createTransporter(env);
  const notificationRecipient = env.NOTIFICATION_EMAIL || env.FROM_EMAIL;

  await transporter.sendMail({
    from: `"${env.FROM_NAME}" <${env.FROM_EMAIL}>`,
    to: notificationRecipient,
    replyTo: `${data.name} <${data.email}>`,
    subject: `New contact enquiry from ${data.name}`,
    text: buildEmailText(data, env),
    html: buildEmailHtml(data, env),
  });
};
