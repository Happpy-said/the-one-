"use client";
import { useState, useEffect } from "react";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Link from "next/link";

const translations = {
  fr: {
    title: "Bienvenue chez CleanDrive",
    subtitle: "Lavage auto à domicile avec des produits et équipements professionnels.",
    button: "Réserver maintenant",
  },
  en: {
    title: "Welcome to CleanDrive",
    subtitle: "Mobile car wash with professional products and equipment.",
    button: "Book Now",
  },
  ar: {
    title: "مرحبًا بك في كلين درايف",
    subtitle: "غسيل سيارات متنقل باستخدام منتجات ومعدات احترافية.",
    button: "احجز الآن",
  },
};

export default function HomePage() {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) setLocale(lang);
  }, []);

  const t = translations[locale];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/bg.jpg')" }} // Assure-toi que /public/bg.jpg existe
    >
      <FadeInWhenVisible>
        <div className="bg-black/70 p-8 rounded-2xl shadow-lg max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">{t.title}</h1>
          <p className="text-lg md:text-xl text-blue-200 mb-6">{t.subtitle}</p>
          <Link
            href="https://wa.me/216XXXXXXXX" // ← remplace par ton numéro WhatsApp
            className="inline-block bg-blue-600 hover:bg
