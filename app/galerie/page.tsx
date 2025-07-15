"use client";
import { useState, useEffect } from "react";

const translations = {
  fr: {
    title: "Galerie Avant / Après",
    subtitle: "Voici quelques résultats de notre service de lavage CleanDrive.",
    before: "Avant",
    after: "Après",
  },
  en: {
    title: "Before / After Gallery",
    subtitle: "Here are some results from our CleanDrive wash service.",
    before: "Before",
    after: "After",
  },
  ar: {
    title: "قبل / بعد",
    subtitle: "بعض نتائج خدمة غسيل السيارات كلين درايف.",
    before: "قبل",
    after: "بعد",
  },
};

export default function GaleriePage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  const gallery = [
    { before: "/avant1.jpg", after: "/apres1.jpg" },
    { before: "/avant2.jpg", after: "/apres2.jpg" },
    { before: "/avant3.jpg", after: "/apres3.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">{t.title}</h1>
        <p className="text-blue-200 mb-10">{t.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-10">
          {gallery.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                  <img src={item.before} alt="Avant" className="w-full h-auto object-cover" />
                  <p className="text-center py-2 text-red-400 font-semibold">{t.before}</p>
                </div>
                <div className="w-full sm:w-1/2">
                  <img src={item.after} alt="Après" className="w-full h-auto object-cover" />
                  <p className="text-center py-2 text-green-400 font-semibold">{t.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
