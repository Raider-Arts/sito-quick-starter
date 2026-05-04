"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type HomeContent = {
  blockquote: string;
  gameDescription: string;
  inspirations: string;
  gameFeatures: string;
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
  const secondSectionRef = useRef(null);

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
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />
      <AnimatePresence mode="wait">
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center" style={{ padding: '10%', }}>
            <div className="flex-1 hero-text p-8">
              <blockquote className="opening-phrase font-typold">
                {content.blockquote}
              </blockquote>
              <p className="description font-typold">
                {content.gameDescription}
              </p>
              <p className="font-typold post-description" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                {content.inspirations}
              </p>
              <p className="font-typold post-description" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                {content.gameFeatures}
              </p>
              <p className="font-typold post-description font-bold" style={{ opacity: showPostDescriptions ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                {content.spotifyLink} <a
                  href={content.spotifyUrl}
                  target="_blank" rel="noopener noreferrer">Spotify</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <Button
            onClick={handleScrollToDownload}
            className="relative top-[-10vh] right-[-50vh] scroll-button"
          >
            {content.downloadButton}
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
            {content.downloadNowButton} <br /> {content.downloadTitle}
          </Button>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 w-full bg-linear-to-t from-black/80 to-transparent pt-12 pb-20 fake-footer relative top-[32vh]">
          <div className="container mx-auto px-6 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center section-narrow ">
              <h2 className="mb-4 font-azonix title-size">{content.aboutTitle}</h2>
              <p className="text-left font-typold">
                {content.aboutText1}
              </p>
              <p className="text-left font-typold">
                {content.aboutText2}
              </p>
              <p className="text-left font-typold">
                {content.aboutText3}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center section-narrow">
              <h3 className="mb-4 font-azonix  title-size">{content.contactTitle}</h3>
              <p className="text-center">
                {content.emailLabel} <a href={`mailto:${content.email}`} target="_blank"
                  rel="noopener noreferrer" className="text-blue-400">{content.email}</a>
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Componente Mobile (versione ottimizzata per dispositivi mobili)
function MobileHome({ content }) {
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
  const [currentBg, setCurrentBg] = useState('khorn');

  const characters = ['Androide', 'mercenario', 'pilota2', 'sintetico'];
  const [currentChar, setCurrentChar] = useState('Androide');

  const [showPostDescriptions, setShowPostDescriptions] = useState(false);
  const secondSectionRef = useRef(null);

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
      <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css' />

      {/* Sezione 1: Logo e bottone */}
      <section className="snap-start min-h-screen flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(arts/environments/${currentBg}.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <Image
            src="/Aurora-Logo-Mankinds-Horizons_black.png"
            alt="Aurora logo"
            width={300}
            height={300}
            className="mb-8"
          />
          <Button
            onClick={handleDownload}
            className="scroll-button text-sm"
          >
            {content.downloadButton}
          </Button>
        </div>
      </section>

      {/* Sezione 2: Personaggio e testo */}
      <section
        ref={secondSectionRef}
        className="snap-start min-h-screen bg-[#0a0a0a] flex flex-col">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <motion.img
              key={currentChar}
              src={`/arts/characters/${currentChar}.jpg`}
              alt={`${currentChar} character`}
              className="w-full h-64 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="max-w-full">
              <blockquote className="opening-phrase font-typold text-lg mb-4 text-center">
                {content.blockquote}
              </blockquote>
              <p className="description font-typold text-sm mb-4 leading-relaxed">
                {content.gameDescription}
              </p>
              <div className={`transition-opacity duration-500 ${showPostDescriptions ? 'opacity-100' : 'opacity-0'}`}>
                <p className="font-typold text-sm mb-4 leading-relaxed">
                  {content.inspirations}
                </p>
                <p className="font-typold text-sm mb-4 leading-relaxed">
                  {content.gameFeatures}
                </p>
                <p className="font-typold font-bold text-sm leading-relaxed">
                  {content.spotifyLink} <a
                    href={content.spotifyUrl}
                    target="_blank" rel="noopener noreferrer" className="text-blue-400">Spotify</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione 3: Download e footer */}
      <section className="snap-start min-h-screen bg-[#1B2735] text-white flex flex-col"
        style={{
          backgroundImage: 'url(arts/characters/the_fight.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="font-azonix text-2xl mb-6">{content.downloadTitle}</h2>
            <Button
              onClick={handleDownload}
              className="scroll-button font-azonix text-sm"
            >
              {content.downloadNowButton}
            </Button>
          </div>
        </div>
        <div className="bg-black/80 p-6">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <h3 className="font-azonix text-xl mb-4">{content.aboutTitle}</h3>
              <p className="font-typold text-sm leading-relaxed mb-4">
                {content.aboutText1}
              </p>
              <p className="font-typold text-sm leading-relaxed mb-4">
                {content.aboutText2}
              </p>
              <p className="font-typold text-sm leading-relaxed">
                {content.aboutText3}
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-azonix text-xl mb-4">{content.contactTitle}</h3>
              <p className="font-typold text-sm mb-4">
                {content.emailLabel} <a href={`mailto:${content.email}`} className="text-blue-400">{content.email}</a>
              </p>
              <h4 className="font-azonix text-lg mb-4">{content.socialTitle}</h4>
              <div className="flex justify-center space-x-6">
                <a href={content.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-400 transition-colors">
                  <FaFacebook />
                </a>
                <a href={content.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-400 transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // Oggetto centralizzato con tutti i testi della pagina
  const content = {
    // Testi della seconda sezione
    blockquote: "Come Definiamo l'umanità quando le intelligenze artificiali ci imitano alla perfezione mentre noi dipendiamo sempre di più dalla tecnologia per vivere?",
    gameDescription: "Aurora: Mankind's Horizon è un gioco di ruolo Sci-Fi il cui tema centrale è il Dilemma Uomo-Macchina. Crea un eroe da una delle 4 Origini: Umani, Potenziati, Sintetici, ed Androidi; e vai alla ricerca della risposta al dilemma, tra tremende cospirazioni, mortali pericoli, e paesaggi mozzafiato.",
    inspirations: "L'intera opera è ispirata da capolavori come Titanfall, Elysium, Star Citizen, The Expanse, Tales From The Loop, ed Armored Core.",
    gameFeatures: "L'esperienza di gioco prende a piene mani dal design videoludico, implementando alberi di abilità, meccaniche per i veicoli, un sistema estremamente modulare per l'equipaggiamento, ma mantenendo una focalizzazione narrativa per la creazione, crescita, ed evoluzione dei personaggi nella storia.",
    spotifyLink: "Puoi vedere l'intervista ad un nostro membro qua se vuoi più informazioni: ",
    spotifyUrl: "https://open.spotify.com/episode/4V849Hr6oGidtoHfgbodZW?si=411720d514034d01",

    // Testi dei bottoni
    downloadButton: "Scarica il quickstarter",
    downloadNowButton: "Scarica ora",
    downloadTitle: "Scarica il Quickstarter",

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

  return isMobile ? <MobileHome content={content} /> : <DesktopHome content={content} />;
}
