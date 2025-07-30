import Link from "next/link";

export default function Datenschutz() {
  return (
    <div className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">
              Datenschutzerklärung
            </h2>
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
                1. Datenschutz auf einen Blick
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>Allgemeine Hinweise:</strong> Die folgenden Hinweise
                  geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website
                  besuchen. Personenbezogene Daten sind alle Daten, mit denen
                  Sie persönlich identifiziert werden können.
                </p>
                <p>
                  <strong>Datenerfassung:</strong> Ein Teil der Daten wird
                  automatisch beim Besuch der Website durch das Hosting-System
                  erfasst. Das sind vor allem technische Daten (z. B.
                  Browsertyp, Betriebssystem, Uhrzeit des Seitenaufrufs,
                  IP-Adresse).
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">2. Hosting</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Externes Hosting über IONOS:</strong> Diese Website
                  wird bei IONOS SE, Elgendorfer Straße 57, 56410 Montabaur,
                  gehostet. IONOS erfasst beim Besuch der Website automatisch
                  verschiedene technische Daten (z. B. IP-Adresse,
                  Zugriffszeitpunkte, User Agent).
                </p>
                <p>
                  <strong>Weitere Informationen:</strong>
                  <a
                    href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                3. Verantwortliche Stelle
              </h3>
              <div className="space-y-1">
                <p>
                  <strong>Verantwortlich für die Datenverarbeitung:</strong>
                </p>
                <p>Leonid Domahalskyy</p>
                <p>Rude 13</p>
                <p>24941 Flensburg</p>
                <p>
                  <strong>Telefon:</strong> 01520 5892880
                </p>
                <p>
                  <strong>E-Mail:</strong> leonid.domagalsky@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">4. Ihre Rechte</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Widerruf Ihrer Einwilligung:</strong> Sie können eine
                  bereits erteilte Einwilligung zur Datenverarbeitung jederzeit
                  widerrufen.
                </p>
                <p>
                  <strong>Recht auf Widerspruch:</strong> Wenn die
                  Datenverarbeitung auf Art. 6 Abs. 1 lit. f DSGVO beruht, haben
                  Sie das Recht, aus Gründen, die sich aus Ihrer besonderen
                  Situation ergeben, Widerspruch einzulegen.
                </p>
                <p>
                  <strong>Beschwerderecht:</strong> Im Falle von
                  Datenschutzverstößen steht Ihnen ein Beschwerderecht bei einer
                  zuständigen Aufsichtsbehörde zu. In Schleswig-Holstein ist
                  dies:
                </p>
                <div className="ml-4">
                  <p>Unabhängiges Landeszentrum für Datenschutz (ULD)</p>
                  <p>Holstenstraße 98, 24103 Kiel</p>
                  <p>
                    <a
                      href="https://www.datenschutzzentrum.de/"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.datenschutzzentrum.de/
                    </a>
                  </p>
                </div>
                <p>
                  <strong>Auskunft, Löschung, Berichtigung:</strong> Sie haben
                  im Rahmen der geltenden gesetzlichen Bestimmungen das Recht
                  auf Auskunft, Berichtigung, Einschränkung und Löschung Ihrer
                  gespeicherten personenbezogenen Daten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
