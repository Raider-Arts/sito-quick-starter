"use client";

import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";

export default function Home() {
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/quickstarter.pdf";
    link.download = "quickstarter.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-8 sm:p-20">
      <main className="flex flex-col items-center justify-center text-left">
        <Image
          src="/Aurora-logo.png"
          alt="Aurora logo"
          width={1080}
          height={300}
          priority
        />

        <div className="max-w-2xl mt-6 space-y-4 text-sm leading-relaxed">
          <p>
            What is Humanity? Can you answer? Even in a world in which AIs imitate
            us so perfectly, while we depend more and more on technology to
            survive?
          </p>

          <p>
            Brought to you by RaiderArts, an independent collective of artists,
            Aurora: Mankind’s Horizon is a Philosophical Narrative Sci‑Fi TTRPG,
            about finding an answer to the Human‑Machine Dilemma. We are looking
            for an Editor to complete and distribute this work, but in the
            meanwhile. <br/> The Quickstarter is free for everyone.
          </p>

          <p>Find the A.</p>

          <div className="mt-6">
            <Button onClick={handleDownload} aria-label="Download the Quickstarter">
              Download the Quickstarter
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
