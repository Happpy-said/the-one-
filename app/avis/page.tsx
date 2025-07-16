"use client";

import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const reviews = [
  {
    name: "Ahmed B.",
    text: "Service rapide et très professionnel. Ma voiture brille comme neuve !",
  },
  {
    name: "Sami K.",
    text: "Ponctuel, efficace, et super sympa. Je recommande fortement !",
  },
  {
    name: "Ines M.",
    text: "Très satisfaite du lavage complet, même les tapis sont comme neufs.",
  },
];

export default function AvisPage() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-black text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">Avis Clients</h1>
        </FadeInWhenVisible>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <FadeInWhenVisible key={index}>
              <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                <p className="text-blue-300 font-semibold mb-2">{review.name}</p>
                <p className="text-blue-100">{review.text}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
}
