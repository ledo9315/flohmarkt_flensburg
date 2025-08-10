export default function Header() {
  return (
    <header
      className="text-white shadow-lg relative overflow-hidden"
      style={{
        backgroundImage: "url('/header-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-primary/80" />

      <div className="container mx-auto px-4 py-36 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
              Flohmärkte in Flensburg
            </h1>
          </div>
          <p className="text-xl text-blue-100 drop-shadow-md">
            Alle Termine & Adressen 2025
          </p>
        </div>
      </div>
    </header>
  );
}
