import { Info, MapPin, Clock } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Flohmärkte in Flensburg - Ihre Übersicht für 2025
        </h2>

        <div className="space-y-3 text-gray-700 grid grid-cols-1 md:grid-cols-3 gap-12 px-12">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Aktuelle Termine</h4>
              <p className="text-sm">
                Alle Flohmarkt-Termine in Flensburg für 2025 auf einen Blick.
                Von Citti-Park bis Südermarkt - wir haben alle Standorte.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Adressen & Wegbeschreibung</h4>
              <p className="text-sm">
                Vollständige Adressen und Beschreibungen aller Flohmärkte in
                Flensburg. Einfach zu finden und gut erreichbar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Öffnungszeiten</h4>
              <p className="text-sm">
                Genaue Öffnungszeiten für jeden Flohmarkt in Flensburg. Planen
                Sie Ihren Besuch optimal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
