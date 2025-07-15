// app/avis/page.tsx

"use client";
import { useEffect, useState } from "react";

const translations = {
  fr: {
    title: "Avis Clients",
    reviews: [
      {
        name: "Sami B.",
        text: "Service impeccable, ma voiture n’a jamais été aussi propre !",
      },
      {
        name: "Leïla T.",
        text: "Ponctuels, efficaces et très professionnels. Je recommande.",
      },
      {
        name: "Yassine M.",
        text: "Le pack vapeur est top, j’étais bluffé par le résultat !",
      },
    ],
  },
  en: {
    title: "Customer Reviews",
    reviews: [
      {
        name: "Sami B.",
        text: "Impeccable service, my car has never been this clean!",
      },
      {
        name: "Leïla T.",
        text: "Punctual, efficient and very professional. Highly recommended.",
      },
      {
        name: "Yassine M.",
        text: "The steam pack is amazing, I was impressed by the result!",
      },
    ],
  },
  ar: {
    title: "آراء العملاء",
    reviews: [
      {
        name: "سامي ب.",
        text: "خدمة ممتازة، لم أرَ سيارتي بهذا النظافة من قبل!",
      },
      {
        name: "ليلى ت.",
        text: "دقيقون وفعّالون ومحترفون. أنصح بهم بشدة.",
      },
      {
        name: "ياسين م.",
        text: "باقة البخار رائعة، كانت النتيجة مدهشة!",
      },
    ],
  },
};

export default function AvisPage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">{t.title}</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {t.reviews.map((review, i) => (
            <div
              key={i}
              className="bg-blue-950 bg-opacity-50 rounded-xl p-6 shadow-md"
            >
              <p className="text-blue-200 mb-4 italic">“{review.text}”</p>
              <p className="text-right text-blue-400 font-semibold">– {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
