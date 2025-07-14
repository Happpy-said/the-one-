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
    call_now: "Appeler maintenant",
    pricing_title: "Nos Tarifs"
  },
  en: {
    hero_title: "Mobile Car Wash",
    hero_desc: "Fast, convenient, professional — wherever you are.",
    name_label: "Full Name",
    date_label: "Preferred Date",
    service_label: "Service Type",
    time_label: "Time Slot",
    whatsapp_btn: "Book via WhatsApp",
    call_now: "Call now",
    pricing_title: "Our Prices"
  },
  ar: {
    hero_title: "غسيل سيارات متنقل",
    hero_desc: "سريع، عملي، احترافي — أينما كنت!",
    name_label: "الاسم الكامل",
    date_label: "التاريخ المطلوب",
    service_label: "نوع الخدمة",
    time_label: "الفترة الزمنية",
    whatsapp_btn: "احجز عبر واتساب",
    call_now: "اتصل الآن",
    pricing_title: "الأسعار"
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

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white px-4"
      style={{
        backgroundImage: "url('gp.jpg')",
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 fixed top-0 bg-black bg-opacity-70 backdrop-blur-sm z-10">
        <h1 className="text-xl font-bold">CleanDrive</h1>
        <div className="flex gap-4 items-center">
          <button onClick={() => setLang("fr")} className="hover:underline">FR</button>
          <button onClick={() => setLang("en")} className="hover:underline">EN</button>
          <button onClick={() => setLang("ar")} className="hover:underline">AR</button>
          <a href="tel:+21652552112" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 text-sm">
            {t.call_now}
          </a>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center mt-32 mb-10 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-4 drop-shadow">{t.hero_title}</h2>
        <p className="text-lg drop-shadow">{t.hero_desc}</p>
      </div>

      {/* Pricing */}
      <div className="bg-black bg-opacity-70 rounded-xl p-6 w-full max-w-2xl text-white mb-10 animate-fadeIn shadow-xl">
        <h3 className="text-2xl font-bold mb-4 text-center">{t.pricing_title}</h3>
        <ul className="space-y-2 text-center">
          <li>🚗 Lavage extérieur : à partir de 20 DT</li>
          <li>🧼 Lavage intérieur : à partir de 25 DT</li>
          <li>✨ Lavage complet : à partir de 40 DT</li>
          <li>🧽 Moquette / tapis : selon la demande</li>
          <li>💎 Pack diamant vapeur : à partir de 89 DT</li>
        </ul>
      </div>

      {/* Reservation form */}
      <div className="bg-black bg-opacity-60 rounded-xl p-6 w-full max-w-md animate-fadeIn shadow-lg">
        <div className="mb-4">
          <label className="block mb-1">{t.name_label}</label>
          <input id="name" type="text" className="w-full p-2 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">{t.date_label}</label>
          <input id="date" type="date" className="w-full p-2 rounded text-black" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">{t.service_label}</label>
          <select id="service" className="w-full p-2 rounded text-black">
            <option>Extérieur</option>
            <option>Intérieur</option>
            <option>Complet</option>
            <option>Moquette</option>
            <option>Pack diamant vapeur</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-1">{t.time_label}</label>
          <select id="slot" className="w-full p-2 rounded text-black">
            <option>Matin</option>
            <option>Après-midi</option>
            <option>Soir</option>
          </select>
        </div>
        <button
          onClick={sendToWhatsapp}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded font-bold"
        >
          {t.whatsapp_btn}
        </button>
      </div>
    </div>
  );
}
