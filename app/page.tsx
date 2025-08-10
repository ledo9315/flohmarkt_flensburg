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
            "@type": "ItemList",
            name: "Flohmärkte in Flensburg 2025",
            description: "Alle Flohmarkt-Termine in Flensburg für 2025",
            numberOfItems: flohmaerkte.length,
            itemListElement: [
              ...flohmaerkte.map((flohmarkt, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "LocalBusiness",
                  name: `${flohmarkt.name} Flohmarkt`,
                  description: flohmarkt.description,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Flensburg",
                    addressCountry: "DE",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "54.7837",
                    longitude: "9.4360",
                  },
                  openingHours: flohmarkt.termine.map((termin) => ({
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: termin.wochentag,
                    opens: termin.zeiten.split("–")[0].trim(),
                    closes: termin.zeiten.split("–")[1].trim(),
                  })),
                },
              })),
            ],
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
