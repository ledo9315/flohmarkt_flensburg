export interface Termin {
  datum: string;
  wochentag: string;
  zeiten: string;
}

export interface Flohmarkt {
  name: string;
  address: string;
  description: string;
  termine: Termin[];
}

export interface NextTerminInfo {
  datum: string;
  wochentag: string;
  zeiten: string;
  standort: string;
}
