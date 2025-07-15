// app/a-propos/page.tsx

"use client";
import { useState, useEffect } from "react";

const translations = {
  fr: {
    title: "À propos de CleanDrive",
    content: `CleanDrive est un service de lavage auto à domicile qui met la qualité au cœur de chaque intervention.
Nous utilisons des équipements professionnels (aspirateurs injecteurs-extracteurs, nettoyeurs vapeur, produits haut de gamme...) pour garantir un résultat irréprochable.
Propreté, efficacité et satisfaction client sont nos priorités.`,
  },
  en: {
    title: "About CleanDrive",
    content: `CleanDrive is a mobile car wash service where quality is our top priority.
We use professional equipment (wet vacuum extractors, steam cleaners, premium products...) to deliver spotless results.
Cleanliness, efficiency, and customer satisfaction are at the heart of our mission.`,
  },
  ar: {
    title: "من نحن",
    content: `كلين درايف هي خدمة غسيل سيارات متنقلة تضع الجودة في المقام الأول.
نستخدم معدات احترافية (مكانس بالاستخراج، أجهزة بخار، منتجات عالية الجودة...) لضمان نتائج مثالية.
النظافة والفعالية ورضا العملاء هي أولوياتنا.`,
  },
};

export default function AProposPage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{t.title}</h1>
        <p className="text-lg text-blue-100 leading-relaxed whitespace-pre-line">
          {t.content}
        </p>
      </div>
    </div>
  );
}
