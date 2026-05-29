import React, { useState } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Programs from './components/Programs';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowDown, Play, Terminal } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Cinematic Loading Overlay */}
      <Loading onFinished={() => setIsLoading(false)} />

      {/* Main App Layout (mounts hidden/transparent until loading finishes) */}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Futuristic Grid Background Overlay across full site */}
        <div className="fixed inset-0 glow-dots pointer-events-none z-0"></div>

        {/* Global Navigation Header */}
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <header id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-academy-obsidian text-white pt-20">
          
          {/* Dynamic 3D WebGL Particle Canvas Core */}
          <Hero3D />

          {/* Holographic Digital Tech Grids */}
          <div className="absolute inset-0 tech-grid-bg opacity-30 z-0"></div>

          {/* Ambient Lighting Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-academy-obsidian/10 via-academy-obsidian/30 to-academy-obsidian z-0"></div>

          {/* Hero Content Layer */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center justify-center">
            
            {/* Top Security Token Badge */}
            <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-academy-mint/20 bg-academy-mint/5 backdrop-blur-md animate-pulse">
              <Terminal className="w-3.5 h-3.5 text-academy-mint" />
              <span className="text-[9px] font-bold font-mono tracking-[0.25em] text-emerald-100 uppercase">
                MA'HAD SYSTEM RUNNING // PPDB AJARAN 2026/2027
              </span>
            </div>

            {/* Academy Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.12em] font-satoshi uppercase mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              ASH-SHALIHIN
            </h1>

            {/* Academy Subtitle / Motto */}
            <p className="text-xs sm:text-sm md:text-base font-outfit font-medium tracking-[0.3em] text-academy-mint uppercase mb-8 max-w-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Membentuk Generasi Qur'ani, Berwawasan Global, & Menguasai Teknologi Imersif
            </p>

            {/* School Description Box (Glassmorphic) */}
            <div className="max-w-3xl px-8 py-6 rounded-2xl glass-dark-card border border-white/10 mb-12 shadow-2xl">
              <p className="text-xs sm:text-sm font-inter text-emerald-50/80 leading-relaxed font-medium">
                Pondok Pesantren Modern Ash-Shalihin menyelenggarakan pendidikan holistik bertaraf internasional bereputasi unggul. Kami mengintegrasikan kemurnian Aqidah Islam, hafalan Al-Qur'an (Tahfidz), kajian Kitab Salafiyah (Kitab Kuning), serta penguasaan Sains Terapan, Robotika, dan Kecerdasan Buatan (AI) demi kejayaan umat di era global.
              </p>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold font-outfit tracking-wider text-academy-obsidian bg-academy-mint hover:bg-white shadow-[0_4px_25px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] transition-all duration-300 btn-spotlight"
              >
                PENDAFTARAN SANTRI
              </button>
              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-bold font-outfit tracking-wider text-white border border-white/15 hover:border-academy-mint hover:bg-academy-mint/10 transition-all duration-300"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                ROADMAP MA'HAD
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <button
              onClick={() => scrollToSection('about')}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
            >
              <span className="text-[9px] font-mono tracking-widest uppercase">EKSPLORASI PROFIL</span>
              <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-1.5">
                <ArrowDown className="w-3 h-3 text-academy-mint animate-bounce" />
              </div>
            </button>
          </div>

          {/* Left Vertical Metadata specs */}
          <div className="absolute left-6 bottom-16 hidden xl:flex flex-col gap-3 opacity-20 text-[9px] font-mono tracking-wider text-white select-none text-left">
            <span>SECURE SHIELD: ON</span>
            <span>SHARIA SYSTEM: ACTIVE</span>
            <span>FRAME RATE: 60 FPS</span>
          </div>

          {/* Right Vertical Coordinates specs */}
          <div className="absolute right-6 bottom-16 hidden xl:flex flex-col gap-3 opacity-20 text-[9px] font-mono tracking-wider text-white select-none text-right">
            <span>LOC: MA'HAD_ASH_SHALIHIN</span>
            <span>SYS_VER: 2026.9.1</span>
            <span>LAT: 6.2238° S</span>
          </div>
        </header>

        {/* ================= CONTENT SECTIONS ================= */}
        <main className="relative z-10 shadow-2xl">
          <About />
          <Programs />
          <Achievements />
          <Gallery />
          <News />
          <Contact />
        </main>

        {/* ================= GLOBAL FOOTER ================= */}
        <Footer />
      </div>
    </>
  );
}
