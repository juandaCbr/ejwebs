"use server";

import { siteConfig } from "@/data/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const name = get("name");
  const email = get("email");
  const phone = get("phone");
  const company = get("company");
  const projectType = get("projectType");
  const budgetRange = get("budgetRange");
  const message = get("message");
  const website = get("website"); // honeypot: humanos lo dejan vacío

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Ingresá tu nombre.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Ingresá un correo válido.";
  if (message.length < 10)
    fieldErrors.message = "Contanos un poco más sobre el proyecto (mínimo 10 caracteres).";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Revisá los campos marcados.", fieldErrors };
  }

  // Bot detectado por el honeypot: respondemos éxito sin hacer nada.
  if (website) return { status: "success", message: "¡Mensaje recibido!" };

  const summary = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    phone && `Teléfono: ${phone}`,
    company && `Empresa: ${company}`,
    projectType && `Tipo de proyecto: ${projectType}`,
    budgetRange && `Presupuesto: ${budgetRange}`,
    "",
    "Mensaje:",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Ejwebs <onboarding@resend.dev>";

  if (!apiKey) {
    // Sin proveedor de correo configurado todavía: dejamos registro en el servidor.
    // TODO: definí RESEND_API_KEY (ver .env.example) para enviar los correos de verdad.
    console.info("[contacto] Nueva solicitud (RESEND_API_KEY no configurada):\n" + summary);
    return { status: "success", message: "¡Mensaje recibido!" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nueva solicitud de proyecto — ${name}`,
        text: summary,
      }),
    });

    if (!res.ok) {
      console.error("[contacto] Resend respondió", res.status, await res.text());
      return {
        status: "error",
        message: "No pudimos enviar el mensaje. Escribinos por WhatsApp o correo directo.",
      };
    }
  } catch (err) {
    console.error("[contacto] Error enviando el correo:", err);
    return {
      status: "error",
      message: "No pudimos enviar el mensaje. Escribinos por WhatsApp o correo directo.",
    };
  }

  return { status: "success", message: "¡Mensaje recibido!" };
}
