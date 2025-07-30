import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Impressum from "@/components/Impressum";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="py-8">
        <Impressum />
      </main>
      <Footer />
    </div>
  );
}
