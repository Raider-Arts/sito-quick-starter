"use client";

import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "flowbite-react";
import {useState, useEffect} from "react";
import {FaFacebook, FaInstagram} from "react-icons/fa";

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

    const handleScrollToDownload = () => {
        const element = document.getElementById('download-section');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
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
                    className="snap-start min-h-screen flex flex-col items-center justify-center"
                    style={{
                        backgroundImage: `url(arts/environments/${currentBg}.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    <div
                        className="relative top-[10vh] pointer-events-none z-10 logo-bg">
                        <Image
                            src="/Aurora-Logo-Mankinds-Horizons_black.png"
                            alt="Aurora logo"
                            width={780}
                            height={780}
                            className="logo"
                        />
                    </div>
                    <div className="mt-auto mb-10">
                        <Button
                            onClick={handleScrollToDownload}
                            className="realative top-[-20vh] scroll-button"
                        >
                            Scarica il quickstarter
                        </Button>
                    </div>
                </motion.section>
            </AnimatePresence>
            <section
                className="snap-start h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
                <div className="w-full h-full grid grid-cols-2 flex-1">
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
                        <div className="flex-1 hero-text">
                            <blockquote className="opening-phrase">
                                "Come Definiamo l’umanità quando le intelligenze artificiali ci imitano alla perfezione
                                mentre noi dipendiamo sempre di più dalla tecnologia per vivere?"
                            </blockquote>
                            <p className="description">
                                Aurora: Mankind’s Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma
                                Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed
                                Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni,
                                mortali
                                pericoli, e paesaggi mozzafiato.
                            </p>
                            <p>
                                L’intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The
                                Expanse,
                                Tales From The Loop, ed Armored Core.
                            </p>
                            <p>
                                L’esperienza di gioco prende a piene mani dal design videoludico, implementando alberi
                                di
                                abilità, meccaniche per i veicoli, un sistema estremamente modulare per
                                l’equipaggiamento,
                                ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei
                                personaggi nella storia.
                            </p>
                            <p>
                                Puoi vedere l'intervista ad un nostro membro qua se vuoi più informazioni: <a
                                href="https://open.spotify.com/episode/4V849Hr6oGidtoHfgbodZW?si=411720d514034d01"
                                target="_blank" rel="noopener noreferrer">Spotify</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <Button
                        onClick={handleScrollToDownload}
                        className="realative top-[-10vh] scroll-button"
                    >
                        Scarica il quickstarter
                    </Button>
                </div>
            </section>
            {/*SECONDA SEZIONE*/}
            {/*<section className="snap-start min-h-screen flex items-center justify-center"*/}
            {/*         style={{*/}
            {/*             backgroundImage: 'url(arts/environments/Vithed.png)',*/}
            {/*             backgroundSize: 'cover',*/}
            {/*             backgroundPosition: 'center'*/}
            {/*         }}>*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="flex items-center gap-8">*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*TERZA SEZIONE*/}
            {/*<section className="snap-start min-h-screen flex items-center justify-center"*/}
            {/*         style={{*/}
            {/*             backgroundImage: 'url(arts/environments/Rike.png)',*/}
            {/*             backgroundSize: 'cover',*/}
            {/*             backgroundPosition: 'center'*/}
            {/*         }}>*/}
            {/*    <div className="container mx-auto px-6">*/}
            {/*        <div className="flex items-center gap-8">*/}
            {/*            <div className="flex-1 hero-text">*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*QUARTA SEZIONE*/}

            {/*<section*/}
            {/*    className="snap-start min-h-screen flex items-center justify-center bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white"*/}
            {/*    style={{*/}
            {/*        backgroundImage: 'url(arts/environments/Eurea.png)',*/}
            {/*        backgroundSize: 'cover',*/}
            {/*        backgroundPosition: 'center'*/}
            {/*    }}>*/}
            {/*    <div className="container mx-auto px-6 hero-text ">*/}
            {/*        */}
            {/*    </div>*/}
            {/*</section>*/}
            {/*QUINTA SEZIONE*/}
            <section
                className="snap-start min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white relative"
                style={{
                    backgroundImage: 'url(arts/characters/the_fight.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div id="download-section"
                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Button
                        onClick={handleDownload}
                        aria-label="Download the Quickstarter"
                        className="scroll-button font-azonix"
                    >
                        Scarica ora <br /> il Quickstarter
                    </Button>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 w-full bg-linear-to-t from-black/80 to-transparent pt-12 pb-20 fake-footer relative top-[32vh]">
                    <div className="container mx-auto px-6 grid grid-cols-2 gap-8">
                        <div className="flex flex-col items-center justify-center section-narrow ">
                            <h2 className="mb-4 font-azonix title-size">Chi Siamo</h2>
                            <p className="text-left font-typold">
                                Raider Arts è un collettivo indipendente formato da appassionati giocatori di ruolo,
                                artisti e scrittori uniti dal desiderio di dare vita alle loro idee.
                            </p>
                            <p className="text-left font-typold">
                                Per la creazione di Aurora Mankind's Horizon il team si è avvalso della collaborazione
                                di due artisti professionisti per la creazione delle illustrazioni presenti nel
                                Quickstarter.
                            </p>
                            <p className="text-left font-typold">
                                Nessuna IA è stata usata nella realizzazione dell'opera.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center section-narrow">
                            <h3 className="mb-4 font-azonix  title-size">Contattaci</h3>
                            <p className="text-center">
                                Mail: <a href="team@raiderarts.net" target="_blank"
                                         rel="noopener noreferrer">team@raiderarts.net</a>
                            </p>
                            <h3 className="mb-4 font-azonix title-size">Seguici sui Social</h3>
                            <p className="text-justify">
                                <a href="https://www.facebook.com/profile.php?id=61573023958779"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-block text-xl hover:text-blue-600 transition-colors">
                                    <FaFacebook/>
                                </a>
                                <span>Raider Arts</span>
                            </p>
                            <p className="text-center">
                                <a href="https://www.instagram.com/raiderarts0g/"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="inline-block text-xl hover:text-pink-500 transition-colors">
                                    <FaInstagram/>
                                </a>
                                <span>@raiderarts0g</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
