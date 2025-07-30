import { useMemo } from "react";
import { getNextOverallTermin, getNextTermin } from "./utils";
import type { FlohmaerkteData, Flohmarkt } from "./types";

/**
 * Hook für den nächsten Gesamttermin
 */
export function useNextOverallTermin(flohmaerkte: FlohmaerkteData) {
  return useMemo(
    () => getNextOverallTermin(flohmaerkte.regular, flohmaerkte.special),
    [flohmaerkte.regular, flohmaerkte.special]
  );
}

/**
 * Hook für den nächsten Termin eines spezifischen Flohmarkts
 */
export function useNextTermin(flohmarkt: Flohmarkt) {
  return useMemo(() => getNextTermin(flohmarkt.termine), [flohmarkt.termine]);
}
