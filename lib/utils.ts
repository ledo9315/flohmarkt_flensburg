import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Termin, NextTerminInfo, Flohmarkt, SpecialTermin } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Konvertiert ein Datum im deutschen Format (DD.MM.YYYY) zu einem Date-Objekt
 */
export function parseGermanDate(dateString: string): Date {
  const [tag, monat, jahr] = dateString.split(".");
  return new Date(
    Number.parseInt(jahr),
    Number.parseInt(monat) - 1,
    Number.parseInt(tag)
  );
}

/**
 * Prüft, ob ein Datum in der Zukunft liegt
 */
export function isDateInFuture(dateString: string): boolean {
  const heute = new Date();
  const terminDatum = parseGermanDate(dateString);
  return terminDatum >= heute;
}

/**
 * Prüft, ob ein Datum in der Vergangenheit liegt
 */
export function isDateInPast(dateString: string): boolean {
  const heute = new Date();
  const terminDatum = parseGermanDate(dateString);
  return terminDatum < heute;
}

/**
 * Findet den nächsten Termin aus einer Liste von Terminen
 */
export function getNextTermin(termine: Termin[]): Termin | undefined {
  return termine.find((termin) => isDateInFuture(termin.datum));
}

/**
 * Sortiert Termine nach Datum (aufsteigend)
 */
export function sortTermineByDate<T extends { datum: string }>(
  termine: T[]
): T[] {
  return termine
    .filter((termin) => isDateInFuture(termin.datum))
    .sort((a, b) => {
      const datumA = parseGermanDate(a.datum);
      const datumB = parseGermanDate(b.datum);
      return datumA.getTime() - datumB.getTime();
    });
}

/**
 * Sammelt alle Termine aus regulären und speziellen Flohmärkten
 */
export function getAllTermine(
  regular: Flohmarkt[],
  special: SpecialTermin[]
): NextTerminInfo[] {
  const allTermine: NextTerminInfo[] = [];

  // Reguläre Flohmärkte
  regular.forEach((flohmarkt) => {
    flohmarkt.termine.forEach((termin) => {
      allTermine.push({
        datum: termin.datum,
        wochentag: termin.wochentag,
        zeiten: termin.zeiten,
        standort: flohmarkt.name,
      });
    });
  });

  // Spezielle Termine
  special.forEach((termin) => {
    allTermine.push({
      datum: termin.datum,
      wochentag: termin.wochentag,
      zeiten: termin.zeiten,
      standort: termin.thema,
    });
  });

  return allTermine;
}

/**
 * Findet den nächsten Gesamttermin aus allen Flohmärkten
 */
export function getNextOverallTermin(
  regular: Flohmarkt[],
  special: SpecialTermin[]
): NextTerminInfo | null {
  const allTermine = getAllTermine(regular, special);
  const sortedTermine = sortTermineByDate(allTermine);
  return sortedTermine[0] || null;
}
