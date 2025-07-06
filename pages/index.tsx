import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FrambonsLandingPage() {
  useEffect(() => {
    // Placeholder for loading 3D animations (e.g., Spline or Three.js)
  }, []);

  return (
    <div className="bg-[#1a1a1a] text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 bg-[#1a1a1a] z-50">
        <div className="flex items-center gap-4">
          <Image
            src="/frambons-logo.png"
            alt="Frambons Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </div>
        <Button className="bg-red-600 hover:bg-red-700">Compra Ahora</Button>
      </header>

      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black opacity-40" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Tu nuevo vicio favorito</h1>
          <p className="text-xl mb-6">
            Descubre Frambons — la mezcla perfecta de frambuesa y chocolate
          </p>
          <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-red-600 hover:bg-red-700">
            Compra Ahora
          </Button>
        </div>
      </section>
    </div>
  );
}
