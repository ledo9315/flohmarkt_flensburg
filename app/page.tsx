"use client";

import { flohmaerkte } from "@/data/flohmaerkte";
import { useNextOverallTermin } from "@/lib/hooks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NextTerminBanner from "@/components/NextTerminBanner";
import FlohmarktTabs from "@/components/FlohmarktTabs";

export default function FlohmarktFlensburg() {
  const naechsterGesamtTermin = useNextOverallTermin(flohmaerkte);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Flohmärkte in Flensburg 2025",
            description: "Alle Flohmarkt-Termine in Flensburg für 2025",
            url: "https://flensburg-flohmarkt.de",
            about: {
              "@type": "Place",
              name: "Flensburg",
              addressCountry: "DE",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-secondary">
        <Header />

        {naechsterGesamtTermin && (
          <NextTerminBanner nextTermin={naechsterGesamtTermin} />
        )}

        <main className="container mx-auto px-4 py-8">
          <section aria-labelledby="flohmarkt-tabs-heading">
            <h2 id="flohmarkt-tabs-heading" className="sr-only">
              Flohmärkte in Flensburg - Termine und Informationen
            </h2>
            <FlohmarktTabs flohmaerkte={flohmaerkte} />
          </section>

          <InfoSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
