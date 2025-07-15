// app/services/page.tsx

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const translations = {
  fr: {
    title: "Nos Services",
    services: [
      { name: "Lavage extérieur", price: "à partir de 20 DT" },
      { name: "Lavage intérieur", price: "à partir de 25 DT" },
      { name: "Lavage complet", price: "à partir de 40 DT" },
      { name: "Moquette / tapis", price: "selon la demande" },
      { name: "Pack diamant vapeur", price: "à partir de 89 DT" },
    ],
  },
  en: {
    title: "Our Services",
    services: [
      { name: "Exterior wash", price: "from 20 DT" },
      { name: "Interior wash", price: "from 25 DT" },
      { name: "Full wash", price: "from 40 DT" },
      { name: "Carpet / mats", price: "on request" },
      { name: "Steam diamond pack", price: "from 89 DT" },
    ],
  },
  ar: {
    title: "خدماتنا",
    services: [
      { name: "غسيل خارجي", price: "ابتداءً من 20 د.ت" },
      { name: "غسيل داخلي", price: "ابتداءً من 25 د.ت" },
      { name: "غسيل كامل", price: "ابتداءً من 40 د.ت" },
      { name: "سجاد / حصائر", price: "حسب الطلب" },
      { name: "باقة البخار الماسية", price: "ابتداءً من 89 د.ت" },
    ],
  },
};

export default function ServicesPage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">{t.title}</h1>
        <ul className="space-y-6">
          {t.services.map((service, index) => (
            <li
              key={index}
              className="bg-blue-950 bg-opacity-50 rounded-xl p-6 shadow-md flex justify-between items-center"
            >
              <span className="text-lg font-semibold">{service.name}</span>
              <span className="text-blue-400">{service.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
