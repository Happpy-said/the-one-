"use client";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Nos Services</h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <ul className="space-y-6 text-lg">
            <li>
              <span className="text-blue-300 font-semibold">Lavage extérieur :</span> à partir de 20 DT
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Lavage intérieur :</span> à partir de 25 DT
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Lavage complet :</span> à partir de 40 DT
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Nettoyage moquette / tapis :</span> selon la demande
            </li>
            <li>
              <span className="text-blue-300 font-semibold">Pack diamant vapeur :</span> à partir de 89 DT
            </li>
          </ul>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="mt-10 text-center text-blue-200">
            Tous nos services utilisent des produits professionnels et du matériel de qualité pour un résultat optimal.
          </p>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
