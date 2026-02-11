"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      <main className="container mx-auto px-6 py-12">
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
          <section className="aurora-wrapper">
            <motion.div
                className="aurora-layer"
                initial={{opacity: 0.6, scale: 0.95}}
                animate={{opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.02, 0.95]}}
                transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
                aria-hidden
            />

            <div className="hero-content">
              <div className="hero-text">
                <h1 id='title' className="text-4xl font-bold mb-4">
                  Benvenuto al Quick Starter
                </h1>
                <p className="text-lg mb-6">
                  Questo è un esempio di homepage che mostra il logo Aurora con un
                  effetto &lsquo;aurora-like&rsquo; creato con Framer Motion. Il testo
                  è allineato a sinistra come richiesto.
                </p>

                <div>
                  <Button
                      onClick={handleDownload}
                      aria-label="Download the Quickstarter"
                      color="purple"
                  >
                    Download the Quickstarter
                  </Button>
                </div>
              </div>

              <div className="hero-media">
                <Image
                    src="/Aurora-logo.png"
                    alt="Aurora logo"
                    width={260}
                    height={260}
                    className="logo"
                />
              </div>
            </div>
          </section>
      </main>
);
}
