"use client";
import { useState, useEffect } from "react";

const translations = {
  fr: {
    contact: "Contact",
    phone: "Téléphone",
    hours: "Horaires",
    location: "Lieu",
    call: "Appeler",
    address: "Tunis, Tunisie",
    open: "Tous les jours de 8h à 20h",
  },
  en: {
    contact: "Contact",
    phone: "Phone",
    hours: "Hours",
    location: "Location",
    call: "Call",
    address: "Tunis, Tunisia",
    open: "Every day from 8 AM to 8 PM",
  },
  ar: {
    contact: "اتصل بنا",
    phone: "الهاتف",
    hours: "ساعات العمل",
    location: "الموقع",
    call: "اتصال",
    address: "تونس، تونس",
    open: "كل يوم من 8 صباحًا إلى 8 مساءً",
  },
};

export default function Footer() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];
  const phone = "216XXXXXXXX"; // ← Ton numéro ici

  return (
    <footer className="bg-black text-white py-8 border-t border-blue-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-blue-400 font-bold text-xl mb-2">{t.contact}</h2>
          <p>{t.phone}: <a href={`tel:+${phone}`} className="text-blue-300 hover:underline">{phone}</a></p>
        </div>
        <div>
          <h2 className="text-blue-400 font-bold text-xl mb-2">{t.hours}</h2>
          <p>{t.open}</p>
        </div>
        <div>
          <h2 className="text-blue-400 font-bold text-xl mb-2">{t.location}</h2>
          <p>{t.address}</p>
        </div>
      </div>
      <div className="text-center text-sm text-blue-500 mt-6">© {new Date().getFullYear()} CleanDrive. Tous droits réservés.</div>
    </footer>
  );
}
