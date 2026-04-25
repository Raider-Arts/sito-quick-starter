"use client";

import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "flowbite-react";
import {useState, useEffect} from "react";

export default function Home() {
    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = "/Aurora Mankinds Horizon - Quickstarter.pdf";
        link.download = "Aurora Mankinds Horizon - Quickstarter.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
    };

    const backgrounds = ['khorn', 'poven', 'rayhem'];
    const [currentBg, setCurrentBg] = useState(backgrounds[Math.floor(Math.random() * backgrounds.length)]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
            {/*<div id='stars'></div>*/}
            {/*<div id='stars2'></div>*/}
            {/*<div id='stars3'></div>*/}
            <AnimatePresence mode="wait">
                <motion.section
                    key={currentBg}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="snap-start min-h-screen flex items-center justify-center"
                    style={{
                        backgroundImage: `url(arts/environments/${currentBg}.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div
                        className="relative left-1/4 transform -translate-x-1/2 top-[-25vh] pointer-events-none z-10 logo-bg">
                        <Image
                            src="/Aurora-Logo-Mankinds-Horizons_black.png"
                            alt="Aurora logo"
                            width={850}
                            height={850}
                            className="logo"
                        />
                    </div>
                </motion.section>
            </AnimatePresence>
            <section className="snap-start h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
                <div className="w-full h-full grid grid-cols-2">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/arts/characters/Androide.jpg"
                            alt="Androide character"
                            width={300}
                            height={600}
                            className="h-screen w-auto object-contain"
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/arts/origins/androide.png"
                            alt="Androide origin"
                            width={300}
                            height={300}
                            className="h-screen w-auto object-contain"
                        />
                    </div>
                </div>
            </section>
            {/*SECONDA SEZIONE*/}
            <section className="snap-start min-h-screen flex items-center justify-center"
                     style={{
                         backgroundImage: 'url(arts/environments/Vithed.png)',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-8">
                        <div className="flex-1 hero-text">
                            <blockquote className="opening-phrase">
                                "Come Definiamo l’umanità quando le intelligenze artificiali ci imitano alla perfezione
                                mentre noi dipendiamo sempre di più dalla tecnologia per vivere?"
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/*TERZA SEZIONE*/}
            <section className="snap-start min-h-screen flex items-center justify-center"
                     style={{
                         backgroundImage: 'url(arts/environments/Rike.png)',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                     }}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-8">
                        <div className="flex-1 hero-text">
                            <p className="description">
                                Aurora: Mankind’s Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma
                                Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed
                                Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni,
                                mortali
                                pericoli, e paesaggi mozzafiato.
                            </p>
                            <div className="quickstarter-link">
                                <Button
                                    onClick={handleDownload}
                                    aria-label="Download the Quickstarter"
                                    className={"download-button"}
                                >
                                    Download the Quickstarter
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*QUARTA SEZIONE*/}

            <section
                className="snap-start min-h-screen flex items-center justify-center bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white"
                style={{
                    backgroundImage: 'url(arts/environments/Eurea.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="container mx-auto px-6 hero-text ">
                    <p className="text-quarta-sezione" >
                        L’intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The Expanse,
                        Tales From The Loop, ed Armored Core.
                    </p>
                    <p className="text-quarta-sezione">
                        L’esperienza di gioco prende a piene mani dal design videoludico, implementando alberi di
                        abilità, meccaniche per i veicoli, un sistema estremamente modulare per l’equipaggiamento,
                        ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei
                        personaggi nella storia.
                    </p>
                    <p className="text-quarta-sezione">
                        Puoi vedere l'intervista ad un nostro membro qua se vuoi più informazioni: <a
                        href="https://open.spotify.com/episode/4V849Hr6oGidtoHfgbodZW?si=411720d514034d01"
                        target="_blank" rel="noopener noreferrer">Spotify</a>
                    </p>

                    <h3 className="text-quarta-sezione">Oppure seguici sui Social:</h3>
                    <p className="text-quarta-sezione">
                        Facebook: <a href="https://www.facebook.com/profile.php?id=61573023958779" target="_blank"
                                     rel="noopener noreferrer">Facebook</a><br/>
                        Instagram: <a href="https://www.instagram.com/raiderarts0g/" target="_blank"
                                      rel="noopener noreferrer">Instagram</a>
                    </p>
                </div>
            </section>
            {/*QUINTA SEZIONE*/}
            <section
                className="snap-start min-h-screen flex items-center justify-center bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white"
                style={{
                    backgroundImage: 'url(arts/environments/Loyd.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div className="container mx-auto px-6 hero-text ">
                    <h2 className="text-quinta-sezione">Il Team:</h2>
                    <p className="text-quinta-sezione">
                        Il team è formato da un collettivo indipendente che si è avvalso della collaborazione di due
                        artisti professionisti per la creazione delle illustrazioni presenti nel prototipo. Nessuna
                        IA è stata usata nella realizzazione del Quickstarter.
                    </p>
                </div>
            </section>
        </main>
    );
}
