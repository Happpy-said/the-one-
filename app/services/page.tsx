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

        {/* ✅ BOUTON WHATSAPP ICI */}
        <FadeInWhenVisible>
          <div className="mt-10 flex justify-center">
            <a
              href="https://wa.me/21612345678" // ← Remplace par ton numéro réel
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-sm font-semibold shadow hover:bg-green-600 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.52 3.48a11.94 11.94 0 00-16.9 0 11.94 11.94 0 00-3.12 11.82L0 24l8.7-2.3a11.94 11.94 0 0011.82-3.12 11.94 11.94 0 000-16.9zM12 21.25a9.2 9.2 0 01-4.7-1.3l-.34-.2-5.17 1.37 1.38-5.06-.22-.35a9.25 9.25 0 1116.52-6.56 9.2 9.2 0 01-2.61 6.55 9.23 9.23 0 01-6.86 2.55zm5.04-6.7c-.28-.14-1.65-.82-1.9-.91-.25-.1-.43-.14-.6.14s-.69.91-.85 1.1-.31.2-.59.07a7.55 7.55 0 01-2.24-1.38 8.38 8.38 0 01-1.56-1.93c-.16-.28-.02-.43.12-.58.12-.11.28-.3.42-.46.14-.16.18-.28.27-.47.09-.18.05-.35 0-.49-.07-.14-.6-1.45-.83-2-.22-.53-.45-.45-.6-.46H8c-.16 0-.33 0-.5.24s-.65.8-.65 1.95.66 2.26.75 2.42c.09.16 1.3 2.07 3.16 2.91a10.72 10.72 0 001.1.4c.46.14.88.13 1.22.08.37-.05 1.14-.46 1.3-.91.17-.45.17-.84.12-.91-.05-.07-.25-.1-.52-.24z" />
              </svg>
              Réserver via WhatsApp
            </a>
          </div>
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
