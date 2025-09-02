"use client";

import { flohmaerkte } from "@/data/flohmaerkte";

export default function StructuredData() {
  // Alle Events in strukturierte Daten umwandeln
  const events = flohmaerkte.flatMap((flohmarkt) =>
    flohmarkt.termine.map((termin) => {
      // Start- und Endzeit extrahieren
      const [startTime, endTime] = termin.zeiten
        .split(" – ")
        .map((time) => time.replace(/\s*Uhr\s*/, "").replace(":", ""));

      // Datum in ISO Format konvertieren
      const [day, month, year] = termin.datum.split(".");
      const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
        2,
        "0"
      )}`;

      // Postleitzahl aus Adresse extrahieren
      const postalCode = flohmarkt.address.match(/\d{5}/)?.[0] || "24941";
      const streetAddress = flohmarkt.address.split(",")[0].trim();

      return {
        "@type": "Event",
        name: `${flohmarkt.name} Flohmarkt`,
        description: `${flohmarkt.description} am ${termin.datum}`,
        startDate: `${isoDate}T${startTime
          .padStart(4, "0")
          .slice(0, 2)}:${startTime.padStart(4, "0").slice(2, 4)}:00+01:00`,
        endDate: `${isoDate}T${(endTime || "1600")
          .padStart(4, "0")
          .slice(0, 2)}:${(endTime || "1600")
          .padStart(4, "0")
          .slice(2, 4)}:00+01:00`,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: flohmarkt.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: streetAddress,
            addressLocality: "Flensburg",
            postalCode: postalCode,
            addressRegion: "Schleswig-Holstein",
            addressCountry: "DE",
          },
        },
        organizer: {
          "@type": "Organization",
          name: flohmarkt.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: streetAddress,
            addressLocality: "Flensburg",
            postalCode: postalCode,
            addressRegion: "Schleswig-Holstein",
            addressCountry: "DE",
          },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: "0",
          priceCurrency: "EUR",
          validFrom: "2025-01-01",
        },
      };
    })
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://flensburg-flohmarkt.de/#website",
        url: "https://flensburg-flohmarkt.de/",
        name: "Flohmarkt Flensburg - Alle Termine 2025",
        description:
          "Übersicht aller Flohmarkt-Termine in Flensburg 2025. Aktuelle Daten für Citti-Park, Südermarkt, Förde Park, Exe und Holtex.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://flensburg-flohmarkt.de/?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        publisher: {
          "@type": "Organization",
          name: "Flohmarkt Flensburg",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://flensburg-flohmarkt.de/#webpage",
        url: "https://flensburg-flohmarkt.de/",
        name: "Flohmarkt Termine Flensburg 2025",
        description:
          "Alle Flohmarkt-Termine in Flensburg für 2025 auf einen Blick. Citti-Park, Südermarkt, Förde Park, Exe und Holtex mit aktuellen Zeiten und Adressen.",
        isPartOf: {
          "@id": "https://flensburg-flohmarkt.de/#website",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://flensburg-flohmarkt.de/header-img.jpg",
        },
        datePublished: "2025-01-01",
        dateModified: new Date().toISOString().split("T")[0],
      },
      ...events,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
