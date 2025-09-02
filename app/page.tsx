"use client";

import { flohmaerkte } from "@/data/flohmaerkte";
import { useNextOverallTermin } from "@/lib/hooks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoSection from "@/components/InfoSection";
import NextTerminBanner from "@/components/NextTerminBanner";
import FlohmarktTabs from "@/components/FlohmarktTabs";
import StructuredData from "@/components/StructuredData";

export default function FlohmarktFlensburg() {
  const naechsterGesamtTermin = useNextOverallTermin(flohmaerkte);

  return (
    <>
      <StructuredData />
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
