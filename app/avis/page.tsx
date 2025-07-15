"use client";
import { useState, useEffect } from "react";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const translations = {
  fr: {
    title: "Avis Clients",
    subtitle: "Découvrez ce que nos clients pensent de CleanDrive.",
    reviews: [
      {
        name: "Karim B.",
        text: "Service impeccable ! Ma voiture n’a jamais été aussi propre.",
      },
      {
        name: "Fatma Z.",
        text: "Ponctuels, professionnels, et très aimables. Je recommande !",
      },
      {
        name: "Youssef M.",
        text: "Nettoyage vapeur au top, même les tapis sont comme neufs.",
      },
    ],
  },
  en: {
    title: "Customer Reviews",
    subtitle: "See what our clients say about CleanDrive.",
    reviews: [
      {
        name: "Karim B.",
        text: "Excellent service! My car has never been this clean.",
      },
      {
        name: "Fatma Z.",
        text: "On time, professional and friendly. I totally recommend!",
      },
      {
        name: "Youssef M.",
        text: "Steam cleaning was amazing. Even the carpets look new.",
      },
    ],
  },
  ar: {
    title: "آراء العملاء",
    subtitle: "اكتشف آراء عملائنا حول خدمات CleanDrive.",
    reviews: [
      {
        name: "كريم ب.",
        text: "خدمة ممتازة! سيارتي أصبحت نظيفة جداً.",
      },
      {
        name: "فاطمة ز.",
        text: "محترفون ودقيقون في المواعيد. أنصح بهم بشدة.",
      },
      {
        name: "يوسف م.",
        text: "تنظيف بالبخار رائع، حتى السجاد أصبح كالجديد.",
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
      <div className="max-w-4xl mx-auto text-center">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">{t.title}</h1>
          <p className="text-blue-200 mb-10">{t.subtitle}</p>
        </FadeInWhenVisible>

        <div className="grid gap-6 md:grid-cols-2">
          {t.reviews.map((review, idx) => (
            <FadeInWhenVisible key={idx}>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-left">
                <p className="text-lg text-blue-100 mb-2">“{review.text}”</p>
                <p className="text-sm text-blue-400 font-semibold text-right">– {review.name}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
}
