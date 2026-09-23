import type { Locale } from "@/i18n/config";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const copy: Record<
  Locale,
  { subject: string; greeting: (name: string) => string; intro: string; emailLabel: string; passwordLabel: string; login: string; spam: string }
> = {
  fr: {
    subject: "AlgorithmNode — nouveau mot de passe",
    greeting: (name) => `Bonjour ${name},`,
    intro: "Vous avez demandé un nouveau mot de passe. Voici vos identifiants. Vérifiez aussi le dossier spam si besoin.",
    emailLabel: "E-mail",
    passwordLabel: "Nouveau mot de passe",
    login: "Se connecter",
    spam: "Si vous n'êtes pas à l'origine de cette demande, contactez-nous immédiatement.",
  },
  en: {
    subject: "AlgorithmNode — new password",
    greeting: (name) => `Hello ${name},`,
    intro: "You requested a new password. Here are your login details. Check the spam folder if you do not see this email.",
    emailLabel: "Email",
    passwordLabel: "New password",
    login: "Sign in",
    spam: "If you did not request this, contact us immediately.",
  },
  es: {
    subject: "AlgorithmNode — nueva contraseña",
    greeting: (name) => `Hola ${name},`,
    intro: "Ha solicitado una nueva contraseña. Estos son sus datos de acceso. Revise también el spam.",
    emailLabel: "Correo",
    passwordLabel: "Nueva contraseña",
    login: "Iniciar sesión",
    spam: "Si no ha solicitado este cambio, contáctenos de inmediato.",
  },
  it: {
    subject: "AlgorithmNode — nuova password",
    greeting: (name) => `Ciao ${name},`,
    intro: "Avete richiesto una nuova password. Ecco le credenziali. Controllate anche lo spam.",
    emailLabel: "E-mail",
    passwordLabel: "Nuova password",
    login: "Accedi",
    spam: "Se non avete richiesto questa modifica, contattateci subito.",
  },
  de: {
    subject: "AlgorithmNode — neues Passwort",
    greeting: (name) => `Hallo ${name},`,
    intro: "Sie haben ein neues Passwort angefordert. Hier sind Ihre Zugangsdaten. Prüfen Sie gegebenenfalls den Spam-Ordner.",
    emailLabel: "E-Mail",
    passwordLabel: "Neues Passwort",
    login: "Anmelden",
    spam: "Wenn Sie das nicht angefordert haben, kontaktieren Sie uns sofort.",
  },
};

export function passwordResetEmail(params: {
  locale: Locale;
  name: string;
  email: string;
  password: string;
  loginUrl: string;
}) {
  const t = copy[params.locale] ?? copy.fr;
  const name = escapeHtml(params.name);
  const email = escapeHtml(params.email);
  const password = escapeHtml(params.password);
  const loginUrl = escapeHtml(params.loginUrl);

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
      <p>${t.greeting(name)}</p>
      <p>${t.intro}</p>
      <p>${t.emailLabel}: ${email}<br/>${t.passwordLabel}: <code style="font-size:16px">${password}</code></p>
      <p><a href="${loginUrl}" style="display:inline-block;background:#0052ff;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">${t.login}</a></p>
      <p style="color:#555;font-size:13px">${t.spam}</p>
    </div>
  `;

  const text = [
    t.greeting(params.name),
    "",
    t.intro,
    `${t.emailLabel}: ${params.email}`,
    `${t.passwordLabel}: ${params.password}`,
    `${t.login}: ${params.loginUrl}`,
    "",
    t.spam,
  ].join("\n");

  return { subject: t.subject, html, text };
}
