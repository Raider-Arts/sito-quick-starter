"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logoAnimation from "./logo_anim.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

type HomeContent = {
  blockquote: string;
  secondPageTitle: string;
  secondPageDescription: string;
  // gameDescription: string;
  // inspirations: string;
  // gameFeatures: string;
  spotifyLink: string;
  spotifyUrl: string;

  downloadButton: string;
  downloadNowButton: string;
  downloadTitle: string;

  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;

  contactTitle: string;
  emailLabel: string;
  email: string;
  socialTitle: string;
  facebookName: string;
  instagramName: string;

  facebookUrl: string;
  instagramUrl: string;
};

type HomeProps = {
  content: HomeContent;
};

// Componente Desktop (versione attuale ottimizzata)
function DesktopHome({ content }: HomeProps) {

  const logoRef = useRef<LottieRefCurrentProps>(null);

  const handleLogoLoaded = () => {
    logoRef.current?.setSpeed(2); // 2 = double speed
  };

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgrounds = ['khorn', 'poven', 'rayhem'];
  const [currentBg, setCurrentBg] = useState('khorn');

  const characters = ['Androide', 'mercenario', 'pilota2', 'sintetico'];
  const [currentChar, setCurrentChar] = useState('Androide');

  const [showPostDescriptions, setShowPostDescriptions] = useState(false);
  const [showSecondaryDescription, setShowSecondaryDescription] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

  // useEffect(() => {
  //   const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting && !showPostDescriptions) {
  //         setTimeout(() => setShowPostDescriptions(true), 200);
  //         setTimeout(() => setShowSecondaryDescription(true), 1200);
  //       } else if (!entry.isIntersecting && showPostDescriptions) {
  //         setShowPostDescriptions(false);
  //         setShowSecondaryDescription(false);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.1
  //   });

  //   if (secondSectionRef.current) {
  //     observer.observe(secondSectionRef.current);
  //   }

  //   return () => {
  //     if (secondSectionRef.current) {
  //       observer.unobserve(secondSectionRef.current);
  //     }
  //   };
  // }, [showPostDescriptions]);
  useEffect(() => {
    const section = secondSectionRef.current;
    const root = mainRef.current;

    if (!section || !root) return;

    let timer1: ReturnType<typeof setTimeout> | null = null;
    let timer2: ReturnType<typeof setTimeout> | null = null;

    const clearTimers = () => {
      if (timer1) clearTimeout(timer1);
      if (timer2) clearTimeout(timer2);
      timer1 = null;
      timer2 = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.5) {
          clearTimers();

          timer1 = setTimeout(() => {
            setShowPostDescriptions(true);
          }, 200);

          timer2 = setTimeout(() => {
            setShowSecondaryDescription(true);
          }, 1200);
        } else {
          clearTimers();
          setShowPostDescriptions(false);
          setShowSecondaryDescription(false);
        }
      },
      {
        root,
        threshold: [0, 0.5, 1],
      }
    );

    observer.observe(section);

    return () => {
      clearTimers();
      observer.disconnect();
    };
  }, []);

  const [blackBg, setBlackBg] = useState(false);
  const [fadeSpeed, setFadeSpeed] = useState(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlackBg(true);
      setFadeSpeed(0.5);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      ref={mainRef}
      className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden"
    >
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
      <section className="snap-start min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">

        <div className="atmo-bg" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: fadeSpeed, ease: "easeInOut" }}
            className="absolute inset-0 z-5 pointer-events-none min-h-screen min-w-screen"
            style={{
              backgroundImage: `url('/arts/environments/${currentBg}.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Fade to black after 2 seconds */}
        <motion.div
          className="absolute inset-0 z-[2] bg-black pointer-events-none min-h-screen min-w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: blackBg ? 1 : 0 }}
          transition={{ duration: 15, ease: "easeInOut" }}
        />

        <div className="relative top-[20vh] pointer-events-none z-10 logo-bg">
          <Lottie
            lottieRef={logoRef}
            animationData={logoAnimation}
            loop={false}
            autoplay
            className="logo"
            onDOMLoaded={handleLogoLoaded}
            rendererSettings={{
              preserveAspectRatio: "xMidYMid meet",
            }}
          />
        </div>

        <div className="mt-auto mb-10 relative z-10">
          <button
            onClick={handleScrollToDownload}
            className="relative top-[-20vh] scroll-button aurora-button"
          >
            {content.downloadButton}
          </button>
        </div>
      </section>

      {/* <AnimatePresence mode="wait">
        <motion.section
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
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
              className="relative top-[-20vh] scroll-button"
            >
              {content.downloadButton}
            </Button>
          </div>
        </motion.section>
      </AnimatePresence> */}

      <div
        className="snap-start min-h-[100svh] lg:h-screen shrink-0 relative overflow-hidden"
        ref={secondSectionRef}
      >
        <AnimatePresence>
          <motion.section
            key={currentBg}
            className="min-h-[100svh] lg:h-screen w-full relative bg-cover bg-left lg:bg-auto lg:bg-left"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(arts/characters/${currentChar}_blur.jpeg)`,
            }}
          >
            <div className="absolute inset-0 z-[1] bg-linear-to-r from-black/60 via-black/45 to-black/85 lg:hidden" />

            <div className="absolute inset-0 z-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="hidden lg:block" />

              <div className="flex items-center justify-center px-5 py-20 sm:px-10 lg:p-[10%]">
                <div className="hero-text w-full max-w-[620px] rounded-2xl bg-black/35 p-5 text-center backdrop-blur-sm lg:max-w-none lg:bg-transparent lg:p-6 lg:text-left lg:backdrop-blur-0">
                  <h1
                    className="font-azonix mb-4"
                    style={{
                      fontSize: "clamp(1.6rem, 4.2vw, 2.25rem)",
                      lineHeight: "1.35",
                      marginBottom: "clamp(20px, 4vw, 32px)",
                    }}
                  >
                    {content.secondPageTitle}
                  </h1>

                  <blockquote
                    className="opening-phrase font-typold mx-auto lg:mx-0"
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                      lineHeight: "1.55",
                      marginBottom: "clamp(20px, 4vw, 32px)",
                      opacity: showPostDescriptions ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    {content.blockquote}
                  </blockquote>

                  <p
                    className="font-typold post-description"
                    style={{
                      opacity: showSecondaryDescription ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      fontSize: "clamp(1.05rem, 3vw, 1.6rem)",
                      lineHeight: "1.5",
                    }}
                  >
                    {content.secondPageDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[6vh] left-1/2 z-20 -translate-x-1/2 lg:bottom-[10vh] lg:left-3/4 lg:-translate-x-3/4">
              <button
                onClick={handleScrollToDownload}
                className="aurora-button cursor-pointer px-5 py-3 text-sm transition-transform duration-200 ease-in-out hover:scale-105 sm:text-base lg:px-8 lg:text-lg"
              >
                {content.downloadButton}
              </button>
            </div>

            <div className="fade-black hidden lg:block" />
          </motion.section>
        </AnimatePresence>
      </div>

      {/* <div className="snap-start h-screen shrink-0 relative overflow-hidden"
        ref={secondSectionRef}>
        <AnimatePresence>
          <motion.section
            // ref={secondSectionRef}
            key={currentBg}
            className="h-screen w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              backgroundImage: `url(arts/characters/${currentChar}_blur.jpeg)`,
              backgroundSize: "auto",
              backgroundPosition: "left center",
            }}
          >
            <div className="absolute inset-0 grid grid-cols-2 z-10">
              <div />

              <div className="flex items-center justify-center p-[10%]">
                <div className="flex-1 hero-text p-6">
                  <h1
                    className="font-azonix mb-4"
                    style={{
                      fontSize: "2.25rem",
                      lineHeight: "1.35",
                      marginBottom: "32px",
                    }}
                  >
                    {content.secondPageTitle}
                  </h1>

                  <blockquote
                    className="opening-phrase font-typold"
                    style={{
                      fontSize: "1.25rem",
                      lineHeight: "1.6",
                      marginBottom: "32px",
                      opacity: showPostDescriptions ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    {content.blockquote}
                  </blockquote>

                  <p
                    className="font-typold post-description"
                    style={{
                      opacity: showSecondaryDescription ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                      fontSize: "1.6rem",
                      lineHeight: "1.55",
                    }}
                  >
                    {content.secondPageDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-30 bottom-[10vh] left-3/4 -translate-x-3/4 z-20">
              <button
                onClick={handleScrollToDownload}
                className="cursor-pointer hover:scale-105 transition-transform ease-in-out duration-200 text-lg px-8 py-3 aurora-button"
              >
                {content.downloadButton}
              </button>
            </div>

            <div className="fade-black" />
          </motion.section>
        </AnimatePresence>
      </div> */}

      <section
        // flex flex-col items-center justify-center
        className="snap-start h-screen bg-linear-to-b from-[#1B2735] to-[#090A0F] text-white relative"
        style={{
          backgroundImage: 'url(arts/characters/the_fight.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        {/* <div id="download-section"
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleDownload}
            aria-label="Download the Quickstarter"
            className="scroll-button font-azonix aurora-button"
          >
            {content.downloadNowButton} <br /> {content.downloadTitle}
          </button>
        </div> */}
        <div
          id="download-section"
          className="absolute top-[20%] sm:top-[26%] md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <button
            onClick={handleDownload}
            aria-label="Download the Quickstarter"
            className="scroll-button font-azonix aurora-button text-sm sm:text-base md:text-lg px-5 py-3 sm:px-6 md:px-8"
          >
            {content.downloadNowButton} <br /> {content.downloadTitle}
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full bg-linear-to-t from-black/90 via-black/60 to-transparent px-4 pt-8 pb-6 md:px-8 md:pt-12 md:pb-10 fake-footer">
          <div
            className="container mx-auto flex flex-col gap-6 text-center md:grid md:grid-cols-[1.2fr_0.8fr] md:gap-10 md:text-left"
            style={{ textShadow: '0 0 10px #000000' }}
          >
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 font-azonix text-xl md:mb-4 md:text-2xl lg:text-3xl">
                {content.aboutTitle}
              </h2>

              <div className="space-y-2 font-typold text-xs leading-relaxed sm:text-sm md:text-base">
                <p>{content.aboutText1}</p>
                <p>{content.aboutText2}</p>
                <p>{content.aboutText3}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 md:items-start">
              <h3 className="font-azonix text-lg md:text-xl lg:text-2xl">
                {content.contactTitle}
              </h3>

              <p className="font-typold text-xs sm:text-sm md:text-base">
                {content.emailLabel}
                <a
                  href={`mailto:${content.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  {content.email}
                </a>
              </p>

              <h3 className="mt-1 font-azonix text-lg md:text-xl lg:text-2xl">
                {content.socialTitle}
              </h3>

              <div className="flex flex-col items-center gap-2 font-typold text-xs sm:text-sm md:items-start md:text-base">
                <a
                  href={content.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <FaFacebook className="text-lg md:text-xl" />
                  <span>{content.facebookName}</span>
                </a>

                <a
                  href={content.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram className="text-lg md:text-xl" />
                  <span>{content.instagramName}</span>
                </a>
              </div>

              <p className="font-typold text-xs font-bold sm:text-sm md:text-base">
                {content.spotifyLink}
                <a
                  className="font-azonix"
                  style={{
                    color: '#01b0ed',
                    fontWeight: 'bold',
                    marginLeft: '5px',
                    textShadow: '0 0 10px #000000'
                  }}
                  href={content.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QUI
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div
          className="w-full bg-linear-to-t from-black/80 to-transparent pt-12 pb-20 fake-footer absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-6 grid grid-cols-2 gap-8"
            style={{ textShadow: '0 0 10px #000000' }}>
            <div className="flex flex-col justify-center section-narrow ">
              <h2 className="ml-16 mb-4 font-azonix title-size">{content.aboutTitle}</h2>
              <p className="text-left font-typold">{content.aboutText1}</p>
              <p className="text-left font-typold">{content.aboutText2}</p>
              <p className="text-left font-typold">{content.aboutText3}</p>
            </div>
            <div className="flex flex-col items-center justify-center section-narrow">
              <h3 className="mb-4 font-azonix  title-size">{content.contactTitle}</h3>
              <p className="text-center">
                {content.emailLabel} <a href={`mailto:${content.email}`} target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400">{content.email}</a>
              </p>
              <h3 className="mb-4 font-azonix title-size">{content.socialTitle}</h3>
              <p className="text-justify">
                <a href={content.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xl hover:text-blue-600 transition-colors">
                  <FaFacebook />
                </a>
                <span>{content.facebookName}</span>
              </p>
              <p className="text-center">
                <a href={content.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xl hover:text-pink-500 transition-colors">
                  <FaInstagram />
                </a>
                <span>{content.instagramName}</span>
              </p>
              <p className="font-typold font-bold">
                {content.spotifyLink}
                <a
                  className='font-azonix'
                  style={{
                    color: '#01b0ed',
                    fontWeight: 'bold',
                    marginLeft: '5px',
                    textShadow: '0 0 10px #000000'
                  }}
                  href={content.spotifyUrl}
                  target="_blank" rel="noopener noreferrer">QUI</a>
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Oggetto centralizzato con tutti i testi della pagina
  const content = {
    // Testi della seconda sezione
    secondPageTitle: "LA DEFINIZIONE DI UMANITÀ NON SARÀ PIÙ LA STESSA",
    blockquote: "Come Definiamo l'umanità quando le intelligenze artificiali ci imitano alla perfezione mentre noi dipendiamo sempre di più dalla tecnologia per vivere?",
    secondPageDescription: "Avventurati per scoprire la risposta al Dilemma Uomo-Macchina nel nuovo gioco di ruolo sci-fi  Aurora: Mankind's Horizon.",
    // gameDescription: "Aurora: Mankind's Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni, mortali pericoli, e paesaggi mozzafiato.",
    // inspirations: "L'intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The Expanse, Tales From The Loop, ed Armored Core.",
    // gameFeatures: "L'esperienza di gioco prende a piene mani dal design videoludico, implementando alberi di abilità, meccaniche per i veicoli, un sistema estremamente modulare per l'equipaggiamento, ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei personaggi nella storia.",
    spotifyLink: "Se ti sei perso la nostra intervista, puoi ascoltarla ",
    spotifyUrl: "https://open.spotify.com/episode/4V849Hr6oGidtoHfgbodZW?si=411720d514034d01",

    // Testi dei bottoni
    downloadButton: "Scarica il quickstarter",
    downloadNowButton: "Scarica ora",
    downloadTitle: "Il Quickstarter",

    // Testi del footer
    aboutTitle: "Chi Siamo",
    aboutText1: "Raider Arts è un collettivo indipendente formato da appassionati giocatori di ruolo, artisti e scrittori uniti dal desiderio di dare vita alle loro idee.",
    aboutText2: "Per la creazione di Aurora Mankind's Horizon il team si è avvalso della collaborazione di due artisti professionisti per la creazione delle illustrazioni presenti nel Quickstarter.",
    aboutText3: "Nessuna IA è stata usata nella realizzazione dell'opera.",

    contactTitle: "Contattaci",
    emailLabel: "Mail: ",
    email: "team@raiderarts.net",
    socialTitle: "Seguici sui Social",
    facebookName: "Raider Arts",
    instagramName: "@raiderarts0g",

    // URL social
    facebookUrl: "https://www.facebook.com/profile.php?id=61573023958779",
    instagramUrl: "https://www.instagram.com/raiderarts0g/"
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Controlla inizialmente
    checkMobile();

    // Aggiungi listener per resize
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // return isMobile ? <MobileHome content={content} /> : <DesktopHome content={content} />;
  return <DesktopHome content={content} />;
}
