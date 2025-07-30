import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlohmarktCard from "./FlohmarktCard";
import SpecialTerminCard from "./SpecialTerminCard";
import type { FlohmaerkteData } from "@/lib/types";
import { TAB_VALUES } from "@/lib/constants";

interface FlohmarktTabsProps {
  flohmaerkte: FlohmaerkteData;
}

export default function FlohmarktTabs({ flohmaerkte }: FlohmarktTabsProps) {
  return (
    <Tabs defaultValue={TAB_VALUES.REGULAR} className="w-full">
      <TabsList className="mx-auto bg-white border-2 border-primary mb-8">
        <TabsTrigger
          value={TAB_VALUES.REGULAR}
          className="font-semibold data-[state=active]:text-white data-[state=active]:bg-primary"
        >
          Regelmäßige Flohmärkte
        </TabsTrigger>
        <TabsTrigger
          value={TAB_VALUES.SPECIAL}
          className="font-semibold data-[state=active]:text-white data-[state=active]:bg-primary"
        >
          Besondere Termine
        </TabsTrigger>
      </TabsList>

      <TabsContent value={TAB_VALUES.REGULAR} className="space-y-6">
        <div className="grid gap-6 grid-cols-1">
          {flohmaerkte.regular.map((flohmarkt, index) => (
            <FlohmarktCard key={index} flohmarkt={flohmarkt} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value={TAB_VALUES.SPECIAL} className="space-y-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {flohmaerkte.special.map((termin, index) => (
            <SpecialTerminCard key={index} termin={termin} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
