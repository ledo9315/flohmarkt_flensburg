import { Calendar, Clock, MapPin, Anchor } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SpecialTermin } from "@/lib/types";
import { isDateInPast } from "@/lib/utils";

interface SpecialTerminCardProps {
  termin: SpecialTermin;
}

export default function SpecialTerminCard({ termin }: SpecialTerminCardProps) {
  const isPast = isDateInPast(termin.datum);

  return (
    <Card
      className={`hover:shadow-xl transition-all duration-300 border-2 ${
        isPast
          ? "bg-gray-50 border-gray-300 opacity-60"
          : "bg-white border-primary"
      }`}
    >
      <CardHeader
        className={`rounded-t-md py-6 ${
          isPast ? "bg-gray-400 text-gray-600" : "text-white bg-primary"
        }`}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{termin.thema}</CardTitle>
          <Badge
            variant="secondary"
            className={`border-0 font-bold ${
              isPast ? "bg-gray-200 text-gray-600" : ""
            }`}
          >
            {termin.datum}
          </Badge>
        </div>
        <CardDescription className={isPast ? "text-gray-500" : "text-blue-200"}>
          Besonderer Flohmarkt-Termin
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-start gap-2">
          <MapPin
            className={`h-4 w-4 mt-1 flex-shrink-0 ${
              isPast ? "text-gray-400" : "text-primary"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              isPast ? "text-gray-400" : "text-primary"
            }`}
          >
            {termin.ort}
          </span>
        </div>

        <div
          className={`p-4 rounded-lg border-2 ${
            isPast ? "bg-gray-50 border-gray-300" : "bg-white border-primary"
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Anchor
              className={`h-4 w-4 ${isPast ? "text-gray-400" : "text-primary"}`}
            />
            <span
              className={`font-bold ${
                isPast ? "text-gray-400" : "text-primary"
              }`}
            >
              Termin
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm mb-1">
            <Calendar className={`h-4 w-4 ${isPast ? "text-gray-400" : ""}`} />
            <span className={`font-semibold ${isPast ? "text-gray-400" : ""}`}>
              {termin.datum} ({termin.wochentag})
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className={`h-4 w-4 ${isPast ? "text-gray-400" : ""}`} />
            <span className={`font-semibold ${isPast ? "text-gray-400" : ""}`}>
              {termin.zeiten}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
