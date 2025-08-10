import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FlohmarktCard from "./FlohmarktCard";
import { Flohmarkt } from "@/lib/types";

interface FlohmarktTabsProps {
  flohmaerkte: Flohmarkt[];
}

export default function FlohmarktTabs({ flohmaerkte }: FlohmarktTabsProps) {
  return (
    <Tabs defaultValue="Alle" className="w-full">
      <TabsList className="mx-auto bg-white border-2 border-primary mb-8 h-12">
        <TabsTrigger
          value="Alle"
          className="font-semibold data-[state=active]:text-white data-[state=active]:bg-primary cursor-pointer"
        >
          Alle
        </TabsTrigger>
        {flohmaerkte.map((flohmarkt) => (
          <TabsTrigger
            key={flohmarkt.name}
            value={flohmarkt.name}
            className="font-semibold data-[state=active]:text-white data-[state=active]:bg-primary cursor-pointer"
          >
            {flohmarkt.name}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="Alle" className="space-y-6">
        <div className="grid gap-6 grid-cols-1">
          {flohmaerkte.map((flohmarkt) => (
            <FlohmarktCard key={flohmarkt.name} flohmarkt={flohmarkt} />
          ))}
        </div>
      </TabsContent>

      {flohmaerkte.map((flohmarkt) => (
        <TabsContent
          key={flohmarkt.name}
          value={flohmarkt.name}
          className="space-y-6"
        >
          <div className="grid gap-6 grid-cols-1">
            <FlohmarktCard flohmarkt={flohmarkt} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
