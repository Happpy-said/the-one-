import "../globals.css"; // adapte le chemin si nécessaire
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
