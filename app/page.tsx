import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto text-center">

        <FadeInWhenVisible>
          <h1 className="text-5xl font-bold mb-6 text-blue-400">
            Bienvenue chez CleanDrive
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <p className="text-lg text-blue-200 mb-10">
            Lavage auto à domicile rapide, écologique et professionnel.
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Link
            href="/reservation"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition duration-300"
          >
            Réserver maintenant
          </Link>
        </FadeInWhenVisible>

        <div className="mt-20 grid gap-8 md:grid-cols-3 text-left">
          <FadeInWhenVisible>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-300 mb-2">Lavage Extérieur</h3>
              <p className="text-blue-100">À partir de 20 DT. Nettoyage complet de la carrosserie avec produits écologiques.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-300 mb-2">Lavage Intérieur</h3>
              <p className="text-blue-100">À partir de 25 DT. Aspiration, plastiques, vitres, désinfection.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-blue-300 mb-2">Pack Diamant Vapeur</h3>
              <p className="text-blue-100">À partir de 89 DT. Détail complet intérieur/extérieur + vapeur + parfum.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </main>
  );
}
