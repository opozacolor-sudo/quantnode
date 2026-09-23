import type { Locale } from "@/i18n/config";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Copy = {
  subject: string;
  greeting: (name: string) => string;
  intro: string;
  credentialsTitle: string;
  emailLabel: string;
  passwordLabel: string;
  login: string;
  footer: string;
};

const copy: Record<Locale, Copy> = {
  fr: {
    subject: "Bienvenue chez AlgorithmNode — vos identifiants",
    greeting: (name) => `Bonjour ${name},`,
    intro:
      "Félicitations, vous faites partie de l'équipe AlgorithmNode. Un spécialiste de notre équipe va bientôt vous contacter pour vous guider pas à pas.",
    credentialsTitle: "Voici vos identifiants de connexion :",
    emailLabel: "E-mail",
    passwordLabel: "Mot de passe",
    login: "Se connecter",
    footer: "Conservez cet e-mail. Vous pourrez modifier le mot de passe après la première connexion, avec l'aide du spécialiste.",
  },
  en: {
    subject: "Welcome to AlgorithmNode — your login details",
    greeting: (name) => `Hello ${name},`,
    intro:
      "Congratulations on joining the AlgorithmNode team. A specialist from our team will contact you shortly to guide you step by step.",
    credentialsTitle: "Your login details:",
    emailLabel: "Email",
    passwordLabel: "Password",
    login: "Sign in",
    footer: "Keep this email. You can change the password after your first login, with help from the specialist.",
  },
  es: {
    subject: "Bienvenido a AlgorithmNode — sus datos de acceso",
    greeting: (name) => `Hola ${name},`,
    intro:
      "Enhorabuena por formar parte del equipo AlgorithmNode. Un especialista de nuestro equipo se pondrá en contacto con usted para guiarle paso a paso.",
    credentialsTitle: "Estos son sus datos de acceso:",
    emailLabel: "Correo",
    passwordLabel: "Contraseña",
    login: "Iniciar sesión",
    footer: "Guarde este correo. Podrá cambiar la contraseña tras el primer acceso, con ayuda del especialista.",
  },
  it: {
    subject: "Benvenuto in AlgorithmNode — le credenziali di accesso",
    greeting: (name) => `Ciao ${name},`,
    intro:
      "Congratulazioni per far parte del team AlgorithmNode. Uno specialista del nostro team vi contatterà per guidarvi passo dopo passo.",
    credentialsTitle: "Ecco le credenziali di accesso:",
    emailLabel: "E-mail",
    passwordLabel: "Password",
    login: "Accedi",
    footer: "Conservate questa e-mail. Potrete modificare la password dopo il primo accesso, con l'aiuto dello specialista.",
  },
  de: {
    subject: "Willkommen bei AlgorithmNode — Ihre Zugangsdaten",
    greeting: (name) => `Hallo ${name},`,
    intro:
      "Herzlichen Glückwunsch, Sie gehören zum AlgorithmNode-Team. Ein Spezialist aus unserem Team wird Sie kontaktieren und Schritt für Schritt begleiten.",
    credentialsTitle: "Ihre Zugangsdaten:",
    emailLabel: "E-Mail",
    passwordLabel: "Passwort",
    login: "Anmelden",
    footer: "Bewahren Sie diese E-Mail auf. Das Passwort können Sie nach der ersten Anmeldung mit Hilfe des Spezialisten ändern.",
  },
  ro: {
    subject: "Bine ați venit la AlgorithmNode — datele de conectare",
    greeting: (name) => `Bună ${name},`,
    intro:
      "Felicitări că faci parte din echipa AlgorithmNode. Urmează să fii contactat de un specialist din echipa noastră pentru a te ghida pas cu pas.",
    credentialsTitle: "Mai jos datele de conectare:",
    emailLabel: "Email",
    passwordLabel: "Parolă",
    login: "Conectare",
    footer: "Păstrați acest email. Parola poate fi schimbată după prima conectare, cu ajutorul specialistului.",
  },
};

export function welcomeEmail(params: {
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
      <p><strong>${t.credentialsTitle}</strong></p>
      <p>${t.emailLabel}: ${email}<br/>${t.passwordLabel}: <code style="font-size:16px">${password}</code></p>
      <p><a href="${loginUrl}" style="display:inline-block;background:#0052ff;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none">${t.login}</a></p>
      <p style="color:#555;font-size:13px">${t.footer}</p>
    </div>
  `;

  const text = [
    t.greeting(params.name),
    "",
    t.intro,
    "",
    t.credentialsTitle,
    `${t.emailLabel}: ${params.email}`,
    `${t.passwordLabel}: ${params.password}`,
    "",
    `${t.login}: ${params.loginUrl}`,
    "",
    t.footer,
  ].join("\n");

  return { subject: t.subject, html, text };
}
