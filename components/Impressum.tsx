import Link from "next/link";

export default function Impressum() {
  return (
    <div className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Impressum</h2>
            <Link
              href="/"
              className="text-primary hover:text-blue-600 transition-colors font-medium"
            >
              ← Zurück zur Startseite
            </Link>
          </div>

          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Angaben gemäß § 5 TMG
              </h3>
              <div className="space-y-1">
                <p>
                  <strong>Verantwortlich:</strong>
                </p>
                <p>Leonid Domahalskyy</p>
                <p>Rude 13</p>
                <p>24941 Flensburg</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Kontakt</h3>
              <div className="space-y-1">
                <p>
                  <strong>E-Mail:</strong> leonid.domagalsky@gmail.com
                </p>
                <p>
                  <strong>Telefon:</strong> 01520 5892880
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Haftungsausschluss</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Inhaltlich verantwortlich:</strong> Leonid
                  Domahalskyy, Rude 13, 24941 Flensburg
                </p>
                <p>
                  <strong>Haftung für Inhalte:</strong> Die Inhalte unserer
                  Seiten wurden mit größter Sorgfalt erstellt. Für die
                  Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
                  wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Haftung für Links:</strong> Unser Angebot enthält
                  Links zu externen Webseiten Dritter, auf deren Inhalte wir
                  keinen Einfluss haben. Deshalb können wir für diese fremden
                  Inhalte auch keine Gewähr übernehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
