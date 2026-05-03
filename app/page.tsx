"use client";

import Image from "next/image";
import {motion, AnimatePresence} from "framer-motion";
import {Button} from "flowbite-react";
import {useState, useEffect, useRef} from "react";
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
    const [currentBg, setCurrentBg] = useState('khorn'); // Valore fisso iniziale

    const characters = ['Androide', 'mercenario', 'pilota2', 'sintetico'  ];
    const [currentChar, setCurrentChar] = useState('Androide'); // Valore fisso iniziale

    const [showPostDescriptions, setShowPostDescriptions] = useState(false);
    const secondSectionRef = useRef(null);

    useEffect(() => {
        // Imposta valori casuali solo lato client
        setCurrentBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
        setCurrentChar(characters[Math.floor(Math.random() * characters.length)]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentChar(characters[Math.floor(Math.random() * characters.length)]);
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !showPostDescriptions) {
                    setTimeout(() => setShowPostDescriptions(true), 4000);
                } else if (!entry.isIntersecting && showPostDescriptions) {
                    setShowPostDescriptions(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        if (secondSectionRef.current) {
            observer.observe(secondSectionRef.current);
        }

        return () => {
            if (secondSectionRef.current) {
                observer.unobserve(secondSectionRef.current);
            }
        };
    }, [showPostDescriptions]);

    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
            <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'/>
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
                ref={secondSectionRef}
                className="snap-start h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
                <div className="w-full h-full grid grid-cols-2">
                    <div className="flex items-center justify-center w-full h-full">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentChar}
                                src={`/arts/characters/${currentChar}.jpg`}
                                alt={`${currentChar} character`}
                                className="h-full w-full object-cover"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5, ease: "easeInOut"}}
                            />
                        </AnimatePresence>
                    </div>
                    <div className="flex justify-center" style={{padding: '10%',}}>
                        <div className="flex-1 hero-text p-8">
                            <blockquote className="opening-phrase font-typold">
                                "Come Definiamo l’umanità quando le intelligenze artificiali ci imitano alla perfezione
                                mentre noi dipendiamo sempre di più dalla tecnologia per vivere?"
                            </blockquote>
                            <p className="description font-typold">
                                Aurora: Mankind’s Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma
                                Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed
                                Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni,
                                mortali
                                pericoli, e paesaggi mozzafiato.
                            </p>
                            <p className="font-typold post-description" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                                L’intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The
                                Expanse,
                                Tales From The Loop, ed Armored Core.
                            </p>
                            <p className="font-typold post-description" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                                L’esperienza di gioco prende a piene mani dal design videoludico, implementando alberi
                                di
                                abilità, meccaniche per i veicoli, un sistema estremamente modulare per
                                l’equipaggiamento,
                                ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei
                                personaggi nella storia.
                            </p>
                            <p className="font-typold post-description font-bold" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
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
                        className="realative top-[-10vh] right-[-50vh] scroll-button"
                    >
                        Scarica il quickstarter
                    </Button>
                </div>
            </section>
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
