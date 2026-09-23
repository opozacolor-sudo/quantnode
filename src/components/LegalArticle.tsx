"use client";

import Link from "next/link";
import type { LegalDoc } from "@/content/legal-types";
import { useI18n } from "@/i18n/I18nProvider";

export function LegalArticle({ doc }: { doc: LegalDoc }) {
  const { t } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs tracking-wide text-accent uppercase">{doc.kicker}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{doc.title}</h1>
          <p className="mt-4 text-sm text-muted">{doc.updated}</p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted">
            {doc.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:py-16">
        <aside className="lg:col-span-4">
          <div className="rounded-xl border border-line bg-panel p-5 lg:sticky lg:top-24">
            <p className="text-xs tracking-wide text-muted uppercase">{doc.tocLabel}</p>
            <ol className="mt-4 space-y-2 text-sm leading-6">
              {doc.sections.map((section) => (
                <li key={section.title}>
                  <a href={`#${slugify(section.title)}`} className="text-muted hover:text-foreground">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-col gap-2 border-t border-line pt-4 text-sm">
              <Link href="/conditions-generales" className="text-accent hover:underline">
                {t("footer.terms")}
              </Link>
              <Link href="/confidentialite" className="text-accent hover:underline">
                {t("footer.privacy")}
              </Link>
              <Link href="/contact" className="text-muted hover:text-foreground">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </aside>

        <div className="space-y-10 lg:col-span-8">
          {doc.sections.map((section) => (
            <article key={section.title} id={slugify(section.title)} className="scroll-mt-24">
              <h2 className="text-xl font-medium tracking-tight">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 64)}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 64)}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
