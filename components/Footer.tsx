import { Waves } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white py-8 mt-12 border-t-4 border-primary bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Waves className="h-6 w-6 text-white" />
            <span className="text-lg font-semibold">
              Flohmärkte in Flensburg
            </span>
            <Waves className="h-6 w-6 text-white" />
          </div>
          <p className="text-blue-200 mb-4">
            Alle Angaben ohne Gewähr. Bitte informiert euch vor Ort über
            aktuelle Termine.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-blue-200">
            <Link
              href="/impressum"
              className="hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <a
              href="mailto:leonid.domagalsky@gmail.com"
              className="hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
