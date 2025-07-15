"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const translations = {
  fr: { home: "Accueil", services: "Nos Services", reviews: "Avis Clients", about: "À propos" },
  en: { home: "Home", services: "Our Services", reviews: "Reviews", about: "About" },
  ar: { home: "الرئيسية", services: "خدماتنا", reviews: "آراء العملاء", about: "من نحن" },
};

export default function Navbar() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "fr";
    setLocale(lang);
  }, []);

  const changeLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLocale(lang);
  };

  const t = translations[locale];

  return (
    <nav className="bg-black bg-opacity-90 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-blue-500 font-bold text-xl">
          <Link href="/">CleanDrive</Link>
        </div>

        <div className="hidden md:flex space-x-8 text-white font-semibold items-center">
          <Link href="/">{t.home}</Link>
          <Link href="/services">{t.services}</Link>
          <Link href="/avis">{t.reviews}</Link>
          <Link href="/a-propos">{t.about}</Link>

          {/* Sélecteur de langue par drapeaux */}
          <div className="flex space-x-2 ml-4">
            <button onClick={() => changeLang("fr")} title="Français">🇫🇷</button>
            <button onClick={() => changeLang("en")} title="English">🇬🇧</button>
            <button onClick={() => changeLang("ar")} title="العربية">🇹🇳</button>
          </div>
        </div>

        {/* Mobile menu à venir si besoin */}
      </div>
    </nav>
  );
}
