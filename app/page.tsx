"use client";

import FadeInWhenVisible from "../components/FadeInWhenVisible";

export default function HomePage() {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen text-white">
      <div className="bg-black/70 min-h-screen px-4 sm:px-8 py-20 flex flex-col items-center justify-center text-center">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-6xl font-bold text-blue-400 mb-6">
            Bienvenue chez CleanDrive
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mb-8">
            Le lavage auto à domicile professionnel, rapide et sans stress. Prenez rendez-vous en un clic.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <a
            href="https://wa.me/216XXXXXXXX"
            target="_blank"
            className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
          >
            Réserver sur WhatsApp
          </a>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
