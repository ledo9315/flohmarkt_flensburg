import { useMemo } from "react";
import { getNextOverallTermin, getNextTermin } from "./utils";
import type { Flohmarkt } from "./types";

/**
 * Hook für den nächsten Gesamttermin
 */
export function useNextOverallTermin(flohmaerkte: Flohmarkt[]) {
  return useMemo(() => getNextOverallTermin(flohmaerkte), [flohmaerkte]);
}

/**
 * Hook für den nächsten Termin eines spezifischen Flohmarkts
 */
export function useNextTermin(flohmarkt: Flohmarkt) {
  return useMemo(() => getNextTermin(flohmarkt.termine), [flohmarkt.termine]);
}
