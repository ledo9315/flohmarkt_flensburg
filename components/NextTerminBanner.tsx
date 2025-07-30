import { Anchor, Calendar, Clock } from "lucide-react";
import type { NextTerminInfo } from "@/lib/types";

interface NextTerminBannerProps {
  nextTermin: NextTerminInfo;
}

export default function NextTerminBanner({
  nextTermin,
}: NextTerminBannerProps) {
  return (
    <div className="text-white py-12 shadow-lg border-b-4 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Anchor className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold">Nächster Flohmarkt</h2>
            <Anchor className="h-6 w-6 text-white" />
          </div>
          <div className="rounded-lg p-4 inline-block bg-white/10">
            <div className="text-xl font-bold mb-1">{nextTermin.standort}</div>
            <div className="flex items-center justify-center gap-4 text-blue-100">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {nextTermin.datum} ({nextTermin.wochentag})
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{nextTermin.zeiten}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
