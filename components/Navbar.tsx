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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  return (
    <nav className="bg-black bg-opacity-90 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-blue-500 font-bold text-xl">
          <Link href="/">{locale === "ar" ? "CleanDrive" : "CleanDrive"}</Link>
        </div>
        <div className="hidden md:flex space-x-8 text-white font-semibold">
          <Link href="/">{t.home}</Link>
          <Link href="/services">{t.services}</Link>
          <Link href="/avis">{t.reviews}</Link>
          <Link href="/a-propos">{t.about}</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-4 text-white font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}>{t.home}</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>{t.services}</Link>
          <Link href="/avis" onClick={() => setMenuOpen(false)}>{t.reviews}</Link>
          <Link href="/a-propos" onClick={() => setMenuOpen(false)}>{t.about}</Link>
        </div>
      )}
    </nav>
  );
}
