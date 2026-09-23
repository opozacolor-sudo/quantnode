import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { defaultLocale, isLocale } from "@/i18n/config";
import { Providers } from "@/i18n/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgorithmNode — Trading algorithmique automatisé",
  description:
    "Bots d’exécution actionnés par des agents qui lisent le marché à la microseconde et suivent les facteurs qui influencent les prix.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/apple-icon",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const jar = await cookies();
  const raw = jar.get("an_locale")?.value;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}
