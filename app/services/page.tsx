"use client";
import { useState, useEffect } from "react";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";

const translations = {
  fr: {
    title: "Nos Services",
    subtitle: "Découvrez nos services professionnels de lavage CleanDrive.",
    servicesList: [
      {
        title: "Lavage extérieur",
        description: "Nettoyage complet de la carrosserie avec des produits professionnels.",
      },
      {
        title: "Lavage intérieur",
        description: "Nettoyage en profondeur des sièges, tapis et surfaces intérieures.",
      },
      {
        title: "Lavage complet",
        description: "Lavage intérieur et extérieur pour un résultat impeccable.",
      },
      {
        title: "Pack diamant vapeur",
        description: "Nettoyage vapeur intensif pour éliminer toutes les saletés.",
      },
    ],
  },
  en: {
    title: "Our Services",
    subtitle: "Discover our professional CleanDrive wash services.",
    servicesList: [
      {
        title: "Exterior Wash",
        description: "Complete cleaning of the car body with professional products.",
      },
      {
        title: "Interior Wash",
        description: "Deep cleaning of seats, carpets, and interior surfaces.",
      },
      {
        title: "Full Wash",
        description: "Interior and exterior wash for a flawless result.",
      },
      {
        title: "Diamond Steam Pack",
        description: "Intensive steam cleaning to remove all dirt.",
      },
    ],
  },
  ar: {
    title: "خدماتنا",
    subtitle: "اكتشف خدمات غسيل السيارات الاحترافية من CleanDrive.",
    servicesList: [
      {
        title: "غسيل خارجي",
        description: "تنظيف كامل لهيكل السيارة بمنتجات احترافية.",
      },
      {
        title: "غسيل داخلي",
        description: "تنظيف عميق للمقاعد والسجاد والأسطح الداخلية.",
      },
      {
        title: "غسيل كامل",
        description: "غسيل داخلي وخارجي لنتيجة مثالية.",
      },
      {
        title: "باقة تنظيف بالبخار الماسية",
        description: "تنظيف بالبخار مكثف لإزالة جميع الأوساخ.",
      },
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
      <div className="max-w-4xl mx-auto text-center">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold mb-4 text-blue-400">{t.title}</h1>
          <p className="text-blue-200 mb-10">{t.subtitle}</p>
        </FadeInWhenVisible>

        <div className="space-y-8 text-left">
          {t.servicesList.map((service, index) => (
            <FadeInWhenVisible key={index}>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">{service.title}</h2>
                <p className="text-blue-100">{service.description}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </div>
  );
}
