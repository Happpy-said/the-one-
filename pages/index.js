import { useState } from "react";

const translations = {
  fr: {
    hero_title: "Lavage auto à domicile",
    hero_desc: "Rapide, pratique, professionnel — où que vous soyez !",
    name_label: "Nom complet",
    date_label: "Date souhaitée",
    service_label: "Type de service",
    time_label: "Créneau horaire",
    whatsapp_btn: "Réserver via WhatsApp",
    call_now: "Appeler maintenant"
  },
  en: {
    hero_title: "Mobile Car Wash",
    hero_desc: "Fast, convenient, professional — wherever you are.",
    name_label: "Full Name",
    date_label: "Preferred Date",
    service_label: "Service Type",
    time_label: "Time Slot",
    whatsapp_btn: "Book via WhatsApp",
    call_now: "Call now"
  },
  ar: {
    hero_title: "غسيل سيارات متنقل",
    hero_desc: "سريع، عملي، احترافي — أينما كنت!",
    name_label: "الاسم الكامل",
    date_label: "التاريخ المطلوب",
    service_label: "نوع الخدمة",
    time_label: "الفترة الزمنية",
    whatsapp_btn: "احجز عبر واتساب",
    call_now: "اتصل الآن"
  },
};

export default function Home() {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  const sendToWhatsapp = () => {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const service = document.getElementById("service").value;
    const slot = document.getElementById("slot").value;

    if (!name || !date || !service || !slot) {
      alert(
        lang === "fr"
          ? "Veuillez remplir tous les champs."
          : lang === "en"
          ? "Please fill all fields."
          : "يرجى ملء جميع الحقول."
      );
      return;
    }

    const msg =
      (lang === "ar"
        ? "مرحبًا، أود حجز غسيل مع CleanDrive.\n"
        : "Bonjour, je souhaite réserver un lavage CleanDrive.\n") +
      `${t.name_label}: ${name}\n${t.date_label}: ${date}\n${t.service_label}: ${service}\n${t.time_label}: ${slot}`;

    const url = "https://wa.me/21652552112?text=" + encodeURIComponent(msg);
    window.open(url, "_blank");
  };
