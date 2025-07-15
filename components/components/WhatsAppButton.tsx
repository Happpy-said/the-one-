"use client";

export default function WhatsAppButton() {
  const phone = "216XXXXXXXX"; // ← remplace par TON numéro WhatsApp sans +
  const message = encodeURIComponent("Bonjour, je suis intéressé par vos services CleanDrive.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      aria-label="Contact WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.25-1.6A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12a11.86 11.86 0 00-3.48-8.52zM12 22c-1.84 0-3.63-.47-5.22-1.36l-.37-.21-3.71.95.99-3.61-.24-.37A9.91 9.91 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.13-.13.29-.34.43-.51.14-.18.18-.3.27-.5.09-.18.05-.38-.02-.55-.07-.16-.61-1.47-.84-2-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.46.07-.7.34-.25.27-.97.95-.97 2.31s1 .67 1.14 1.41c.14.73.82 1.61 1.18 2.01.36.39 1.6 2.54 3.88 3.44.54.23.96.37 1.28.47.54.17 1.03.14 1.42.09.43-.06 1.31-.54 1.5-1.06.18-.51.18-.94.13-1.01-.05-.07-.22-.11-.48-.25z" />
      </svg>
    </a>
  );
}
