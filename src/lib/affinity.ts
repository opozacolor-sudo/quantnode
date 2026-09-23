type Lead = {
  name: string;
  email: string;
  phone: string;
  message: string;
  locale: string;
};

function authHeader(apiKey: string) {
  return `Basic ${Buffer.from(`:${apiKey}`).toString("base64")}`;
}

function splitName(name: string) {
  const parts = name.trim().split(/\s+/);
  const first_name = parts[0] || "Lead";
  const last_name = parts.slice(1).join(" ") || "—";
  return { first_name, last_name };
}

async function affinityFetch(path: string, apiKey: string, init?: RequestInit) {
  const res = await fetch(`https://api.affinity.co${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(apiKey),
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(`Affinity ${path} ${res.status}: ${JSON.stringify(json)}`);
  }
  return json;
}

export async function syncAffinityLead(lead: Lead) {
  const apiKey = process.env.AFFINITY_API_KEY;
  if (!apiKey) return;

  const { first_name, last_name } = splitName(lead.name);
  const search = await affinityFetch(`/persons?term=${encodeURIComponent(lead.email)}`, apiKey);
  const existing = Array.isArray(search?.persons)
    ? search.persons.find((person: { emails?: string[]; primary_email?: string }) => {
        const emails = [...(person.emails ?? []), person.primary_email ?? ""].map((value) => value.toLowerCase());
        return emails.includes(lead.email);
      })
    : null;

  let personId: number | undefined = existing?.id;
  if (!personId) {
    const created = await affinityFetch("/persons", apiKey, {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        emails: [lead.email],
      }),
    });
    personId = created?.id;
  }

  if (!personId) return;

  const content = [
    "Formular AlgorithmNode",
    `Limbă: ${lead.locale}`,
    `Telefon: ${lead.phone}`,
    "",
    lead.message,
  ].join("\n");

  await affinityFetch("/notes", apiKey, {
    method: "POST",
    body: JSON.stringify({
      person_ids: [personId],
      content,
    }),
  });
}
