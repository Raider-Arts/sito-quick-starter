"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {Button} from "flowbite-react";

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
                        <blockquote className="opening-phrase">
                            "Come Definiamo l’umanità quando le intelligenze artificiali ci imitano alla perfezione
                            mentre noi dipendiamo sempre di più dalla tecnologia per vivere?"
                        </blockquote>

                        <Image
                            src="/Aurora-logo.png"
                            alt="Aurora logo"
                            width={260}
                            height={260}
                            className="logo"
                        />

                        <p className="description">
                            Aurora: Mankind’s Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma
                            Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed
                            Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni, mortali
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

                        <h2>Scopri Di Più:</h2>
                        <p>
                            L’intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The Expanse,
                            Tales From The Loop, ed Armored Core.
                        </p>
                        <p>
                            L’esperienza di gioco prende a piene mani dal design videoludico, implementando alberi di
                            abilità, meccaniche per i veicoli, un sistema estremamente modulare per l’equipaggiamento,
                            ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei
                            personaggi nella storia.
                        </p>
                        <p>
                            Puoi vedere l'intervista ad un nostro membro qua se vuoi più informazioni: <a
                            href="https://open.spotify.com/episode/4V849Hr6oGidtoHfgbodZW?si=411720d514034d01"
                            target="_blank" rel="noopener noreferrer">Spotify</a>
                        </p>

                        <h3>Oppure seguici sui Social:</h3>
                        <p>
                            Facebook: <a href="https://www.facebook.com/profile.php?id=61573023958779" target="_blank"
                                         rel="noopener noreferrer">Facebook</a><br/>
                            Instagram: <a href="https://www.instagram.com/raiderarts0g/" target="_blank"
                                          rel="noopener noreferrer">Instagram</a>
                        </p>

                        <h2>Il Team:</h2>
                        <p>
                            Il team è formato da un collettivo indipendente che si è avvalso della collaborazione di due
                            artisti professionisti per la creazione delle illustrazioni presenti nel prototipo. Nessuna
                            IA è stata usata nella realizzazione del Quickstarter.
                        </p>
                    </div>

                    {/*  <div className="hero-media">*/}
                    {/*    <Image*/}
                    {/*        src="/Aurora-logo.png"*/}
                    {/*        alt="Aurora logo"*/}
                    {/*        width={260}*/}
                    {/*        height={260}*/}
                    {/*        className="logo"*/}
                    {/*    />*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </main>
    );
}
