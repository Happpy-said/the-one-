"use client";
import { useEffect, useState } from "react";

const translations = {
  fr: {
    title: "Contactez-nous",
    description: "N'hésitez pas à nous écrire ou à nous appeler pour réserver ou poser vos questions.",
    whatsapp: "Discuter sur WhatsApp",
    call: "Appeler maintenant",
  },
  en: {
    title: "Contact Us",
    description: "Feel free to write us or call us to book or ask any questions.",
    whatsapp: "Chat on WhatsApp",
    call: "Call Now",
  },
  ar: {
    title: "اتصل بنا",
    description: "لا تتردد في مراسلتنا أو الاتصال بنا للحجز أو لطرح أي سؤال.",
    whatsapp: "تواصل عبر واتساب",
    call: "اتصل الآن",
  },
};

export default function ContactPage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];
  const phone = "216XXXXXXXX"; // ← ton numéro ici sans +

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-black text-white p-8 flex items-center justify-center">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-400">{t.title}</h1>
        <p className="text-blue-200">{t.description}</p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
          >
            {t.whatsapp}
          </a>
          <a
            href={`tel:+${phone}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow"
          >
            {t.call}
          </a>
        </div>
      </div>
    </div>
  );
}
