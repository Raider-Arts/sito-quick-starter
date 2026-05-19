// 'use client'

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function QuickstarterDownloadPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const link = document.createElement("a");
//     link.href = "/api/download/quickstarter";
//     link.style.display = "none";

//     document.body.appendChild(link);
//     link.click();
//     link.remove();

//     const timer = setTimeout(() => {
//       if (window.history.length > 1) {
//         router.back();
//       } else {
//         router.replace("/");
//       }
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [router]);

//   return (
//     <main style={{ padding: 32 }}>
//       <p>Preparando il Download...</p>
//     </main>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuickstarterDownloadPage() {
  const router = useRouter();

  const startDownload = () => {
    const link = document.createElement("a");
    link.href = "/api/download/quickstarter";
    link.style.display = "none";

    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    startDownload();

    const timer = setTimeout(() => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.replace("/");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className="min-h-[100svh] bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white relative flex items-center justify-center px-5 overflow-hidden"
      style={{
        backgroundImage: "url(/arts/characters/the_fight.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <section className="relative z-10 w-full max-w-[680px] rounded-2xl border border-white/15 bg-black/55 px-6 py-8 text-center shadow-2xl backdrop-blur-sm sm:px-10 sm:py-12">
        <h1 className="font-azonix text-xl leading-snug sm:text-2xl md:text-3xl">
          Grazie per aver scaricato il Quickstarter
        </h1>

        <p className="font-typold mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
          Grazie per il supporto al nostro lavoro e per essere entrato nel mondo di{" "}
          <span className="font-bold text-white">Aurora: Mankind&apos;s Horizon</span>.
        </p>

        <p className="font-typold mt-4 text-sm text-white/65">
          Il download dovrebbe partire automaticamente. Verrai riportato alla pagina precedente tra pochi secondi.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.replace("/");
              }
            }}
            className="aurora-button font-azonix px-6 py-3 text-sm transition-transform duration-200 hover:scale-105"
          >
            Torna al sito
          </button>

          <button
            type="button"
            onClick={startDownload}
            className="font-typold rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm text-white/85 transition hover:bg-white/20"
          >
            Riavvia download
          </button>
        </div>
      </section>
    </main>
  );
}