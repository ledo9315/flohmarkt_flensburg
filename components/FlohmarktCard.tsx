import { Calendar, Clock, MapPin, Anchor } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Flohmarkt } from "@/lib/types";
import { useNextTermin } from "@/lib/hooks";
import { APP_CONFIG } from "@/lib/constants";
import { isDateInPast } from "@/lib/utils";

interface FlohmarktCardProps {
  flohmarkt: Flohmarkt;
}

export default function FlohmarktCard({ flohmarkt }: FlohmarktCardProps) {
  const naechsterTermin = useNextTermin(flohmarkt);

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-2 bg-white border-primary">
      <CardHeader className="text-white rounded-t-md bg-primary py-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{flohmarkt.name}</CardTitle>
          {naechsterTermin && (
            <Badge
              variant="secondary"
              className="border-0 font-bold text-primary bg-white"
            >
              {naechsterTermin.datum}
            </Badge>
          )}
        </div>
        <CardDescription className="text-blue-200">
          {flohmarkt.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-primary" />
          <span className="text-sm font-medium text-primary">
            {flohmarkt.address}
          </span>
        </div>

        {naechsterTermin && (
          <div className="p-4 rounded-lg border-2 bg-white border-primary w-full md:w-fit">
            <div className="flex items-center gap-2 mb-2">
              <Anchor className="h-4 w-4 text-primary" />
              <span className="font-bold text-primary">Nächster Termin</span>
            </div>
            <div className="flex items-center gap-2 text-sm mb-1">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">
                {naechsterTermin.datum} ({naechsterTermin.wochentag})
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-semibold text-primary">
                {naechsterTermin.zeiten}
              </span>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-bold border-b pb-1 text-primary">
            Alle Termine {APP_CONFIG.YEAR}:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 p-3 rounded border bg-secondary">
            {flohmarkt.termine.map((termin, idx) => {
              const isPast = isDateInPast(termin.datum);
              return (
                <article
                  key={idx}
                  className={`text-sm bg-white p-2 rounded border text-primary ${
                    isPast
                      ? "border-gray-300 bg-gray-50 text-gray-400 opacity-60"
                      : "border-primary"
                  }`}
                  itemScope
                  itemType="https://schema.org/Event"
                >
                  <time
                    itemProp="startDate"
                    dateTime={`2025-${termin.datum
                      .split(".")
                      .reverse()
                      .join("-")}T${termin.zeiten
                      .split(" – ")[0]
                      .replace(/[^0-9:]/g, "")
                      .padStart(5, "0")}:00+01:00`}
                    className={`font-medium ${isPast ? "text-gray-400" : ""}`}
                  >
                    {termin.datum}
                  </time>
                  <div className={isPast ? "text-gray-400" : ""}>
                    {termin.wochentag}
                  </div>
                  <div className={`text-xs ${isPast ? "text-gray-400" : ""}`}>
                    {termin.zeiten}
                  </div>

                  {/* Strukturierte Daten für Google */}
                  <meta
                    itemProp="name"
                    content={`${flohmarkt.name} Flohmarkt`}
                  />
                  <meta
                    itemProp="description"
                    content={`${flohmarkt.description} am ${termin.datum}`}
                  />
                  <meta
                    itemProp="endDate"
                    content={`2025-${termin.datum
                      .split(".")
                      .reverse()
                      .join("-")}T${(
                      termin.zeiten.split(" – ")[1]?.replace(/[^0-9:]/g, "") ||
                      "16:00"
                    ).padStart(5, "0")}:00+01:00`}
                  />
                  <meta
                    itemProp="eventStatus"
                    content="https://schema.org/EventScheduled"
                  />
                  <meta
                    itemProp="eventAttendanceMode"
                    content="https://schema.org/OfflineEventAttendanceMode"
                  />

                  {/* Ort-Informationen */}
                  <div
                    itemProp="location"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <meta itemProp="name" content={flohmarkt.name} />
                    <div
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <meta
                        itemProp="streetAddress"
                        content={flohmarkt.address.split(",")[0]}
                      />
                      <meta itemProp="addressLocality" content="Flensburg" />
                      <meta
                        itemProp="postalCode"
                        content={
                          flohmarkt.address.match(/\d{5}/)?.[0] || "24941"
                        }
                      />
                      <meta itemProp="addressCountry" content="DE" />
                    </div>
                  </div>

                  {/* Veranstalter */}
                  <div
                    itemProp="organizer"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <meta itemProp="name" content="Flohmarkt Flensburg" />
                    <meta
                      itemProp="url"
                      content="https://flensburg-flohmarkt.de"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
