import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function AvisPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInWhenVisible>
          <h1 className="text-4xl font-bold mb-8 text-center">Avis des clients</h1>
        </FadeInWhenVisible>

        <div className="space-y-8">
          <FadeInWhenVisible>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <p className="text-lg italic">"Service rapide, efficace et très professionnel."</p>
              <p className="text-right mt-2 font-semibold">– Ahmed B.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <p className="text-lg italic">"CleanDrive a transformé ma voiture ! Merci !"</p>
              <p className="text-right mt-2 font-semibold">– Leïla M.</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <p className="text-lg italic">"Je recommande à 100%. Très pratique à domicile."</p>
              <p className="text-right mt-2 font-semibold">– Sami T.</p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </main>
  );
}
