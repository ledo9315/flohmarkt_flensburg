import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flohmarkt Flensburg 2025 - Alle Termine & Adressen",
  description:
    "Alle Flohmärkte in Flensburg 2025: Citti-Park, Südermarkt, Förde-Park, EXE, Holtex. Termine, Adressen und Öffnungszeiten. Kostenlos und aktuell.",
  keywords:
    "Flohmarkt Flensburg, Flohmärkte Flensburg, Flohmarkt Termine Flensburg, Citti-Park Flohmarkt, Südermarkt Flensburg, Förde-Park Flohmarkt, EXE Flohmarkt, Holtex Flohmarkt, Flohmarkt 2025 Flensburg",
  authors: [{ name: "Leonid Domahalskyy" }],
  creator: "Leonid Domahalskyy",
  publisher: "Flohmarkt Flensburg",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://flensburg-flohmarkt.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flohmarkt Flensburg 2025 - Alle Termine & Adressen",
    description:
      "Alle Flohmärkte in Flensburg 2025: Citti-Park, Südermarkt, Förde-Park, EXE, Holtex. Termine, Adressen und Öffnungszeiten.",
    url: "https://flensburg-flohmarkt.de",
    siteName: "Flohmarkt Flensburg",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flohmarkt Flensburg - Alle Termine 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flohmarkt Flensburg 2025 - Alle Termine & Adressen",
    description:
      "Alle Flohmärkte in Flensburg 2025: Citti-Park, Südermarkt, Förde-Park, EXE, Holtex. Termine, Adressen und Öffnungszeiten.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        {/* Favicon für verschiedene Geräte */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        <link rel="canonical" href="https://flensburg-flohmarkt.de" />
        <meta name="geo.region" content="DE-SH" />
        <meta name="geo.placename" content="Flensburg" />
        <meta name="geo.position" content="54.7837;9.4360" />
        <meta name="ICBM" content="54.7837, 9.4360" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Flohmarkt Flensburg",
              description:
                "Alle Flohmärkte in Flensburg 2025: Termine, Adressen und Öffnungszeiten",
              url: "https://flensburg-flohmarkt.de",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://flensburg-flohmarkt.de?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Person",
                name: "Leonid Domahalskyy",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rude 13",
                  addressLocality: "Flensburg",
                  postalCode: "24941",
                  addressCountry: "DE",
                },
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
