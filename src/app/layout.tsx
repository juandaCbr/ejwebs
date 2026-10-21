import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06080F" },
    { media: "(prefers-color-scheme: light)", color: "#F4F6FB" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Fija el tema antes del primer paint para evitar el parpadeo (FOUC).
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Agencia de Desarrollo Web de Alto Rendimiento & Software a Medida`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Desarrollo Web",
    "Agencia de Software",
    "Next.js",
    "React",
    "Diseño UI UX",
    "Ejwebs",
    "Desarrollo Web Colombia",
    "Desarrollo Web España",
    "SaaS",
    "E-commerce Headless",
    "Core Web Vitals",
  ],
  authors: [{ name: `${siteConfig.name} Team`, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Agencia de Desarrollo Web de Alto Rendimiento & Software`,
    description:
      "Transformamos visiones de negocio en productos digitales ultra veloces, estéticos y convertidores.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "es_LA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Desarrollo Web & Software Moderno`,
    description: "Webs ultrarrápidas y aplicaciones a medida con Next.js y React.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-canvas font-body text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
