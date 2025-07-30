import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Datenschutz from "@/components/Datenschutz";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />

      <main className="py-8">
        <Datenschutz />
      </main>

      <Footer />
    </div>
  );
}
