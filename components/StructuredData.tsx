"use client";

import { flohmaerkte } from "@/data/flohmaerkte";

export default function StructuredData() {
  // Nur zukünftige Events in strukturierte Daten umwandeln
  const today = new Date();
  const currentYear = today.getFullYear();

  const events = flohmaerkte.flatMap((flohmarkt) =>
    flohmarkt.termine
      .filter((termin) => {
        // Nur zukünftige Termine einschließen
        const [day, month] = termin.datum.split(".").map(Number);
        const eventDate = new Date(currentYear, month - 1, day);
        return eventDate >= today;
      })
      .map((termin) => {
        // Datum in ISO Format konvertieren
        const [day, month, year] = termin.datum.split(".");
        const isoDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
          2,
          "0"
        )}`;

        // Start- und Endzeit korrekt extrahieren und formatieren
        const timeRange = termin.zeiten.split(" – ");
        const startTimeStr = timeRange[0].replace(/\s*Uhr\s*/, "").trim();
        const endTimeStr =
          timeRange[1]?.replace(/\s*Uhr\s*/, "").trim() || "16:00";

        // Zeit in HH:MM Format sicherstellen
        const formatTime = (time: string) => {
          if (time.includes(":")) {
            return time.padStart(5, "0"); // "8:30" -> "08:30"
          } else {
            // Falls nur Stunden: "8" -> "08:00"
            return `${time.padStart(2, "0")}:00`;
          }
        };

        const startTime = formatTime(startTimeStr);
        const endTime = formatTime(endTimeStr);

        // Postleitzahl aus Adresse extrahieren
        const postalCode = flohmarkt.address.match(/\d{5}/)?.[0] || "24941";
        const streetAddress = flohmarkt.address.split(",")[0].trim();

        const eventId = `${flohmarkt.name
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-")}-${termin.datum.replace(/\./g, "-")}`;

        return {
          "@type": "Event",
          "@id": `https://flensburg-flohmarkt.de/#event-${eventId}`,
          name: `${flohmarkt.name} Flohmarkt am ${termin.datum}`,
          description: `${flohmarkt.description} - ${termin.wochentag}, ${termin.datum} von ${termin.zeiten}`,
          url: `https://flensburg-flohmarkt.de/#${eventId}`,
          image: "https://flensburg-flohmarkt.de/header-img.jpg",
          startDate: `${isoDate}T${startTime}:00+01:00`,
          endDate: `${isoDate}T${endTime}:00+01:00`,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            "@id": `https://flensburg-flohmarkt.de/#place-${flohmarkt.name
              .toLowerCase()
              .replace(/[^a-z0-9]/g, "-")}`,
            name: flohmarkt.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: streetAddress,
              addressLocality: "Flensburg",
              postalCode: postalCode,
              addressRegion: "Schleswig-Holstein",
              addressCountry: "DE",
            },
            geo:
              flohmarkt.name === "Citti-Park"
                ? {
                    "@type": "GeoCoordinates",
                    latitude: "54.7837",
                    longitude: "9.4360",
                  }
                : undefined,
          },
          performer: {
            "@type": "Organization",
            name: "Verschiedene Aussteller und Verkäufer",
          },
          organizer: {
            "@type": "Organization",
            name: `${flohmarkt.name} Veranstaltungsmanagement`,
            url:
              flohmarkt.name === "Citti-Park"
                ? "https://www.citti-park.de"
                : flohmarkt.name === "Förde Park"
                ? "https://www.foerde-park.de"
                : "https://flensburg-flohmarkt.de",
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
            name: "Kostenloser Eintritt",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            validFrom: `${isoDate}T06:00:00+01:00`,
            validThrough: `${isoDate}T23:59:00+01:00`,
            url: `https://flensburg-flohmarkt.de/#${eventId}`,
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
