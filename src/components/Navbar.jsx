import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Profil', id: 'about' },
  { label: 'Program', id: 'programs' },
  { label: 'Prestasi', id: 'achievements' },
  { label: 'Galeri', id: 'gallery' },
  { label: 'Berita', id: 'news' },
  { label: 'Kontak', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll shrinking and scroll shadowing
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
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
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-3 glass-navbar shadow-md' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo & Brand */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-tr from-academy-emerald to-academy-mint shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <BookOpen className="w-5 h-5 text-white" />
              <div className="absolute inset-0 rounded-lg border border-white/20 animate-pulse"></div>
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold font-satoshi tracking-[0.15em] uppercase text-academy-obsidian group-hover:text-academy-emerald transition-colors duration-300">
                ASH-SHALIHIN
              </span>
              <span className="text-[9px] font-outfit tracking-[0.25em] uppercase text-academy-obsidian/50 -mt-0.5">
                PESANTREN MODERN
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 glass-card px-4 py-1.5 rounded-full border border-white/80">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium font-outfit tracking-wider transition-all duration-300 select-none ${
                  activeSection === item.id 
                    ? 'text-white' 
                    : 'text-academy-obsidian/70 hover:text-academy-emerald'
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-academy-emerald to-academy-mint rounded-full -z-10 shadow-[0_4px_12px_rgba(16,185,129,0.25)]"></div>
                )}
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action Button & Mobile Burger */}
          <div className="flex items-center gap-4">
            {/* Call to Action Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold font-outfit tracking-wider text-white bg-academy-obsidian hover:bg-academy-emerald hover:shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-300 border border-white/10 btn-spotlight"
            >
              Daftar PPDB
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-academy-obsidian/5 hover:bg-academy-obsidian/10 border border-academy-obsidian/10 text-academy-obsidian hover:text-academy-emerald transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`fixed inset-0 z-30 lg:hidden flex justify-end transition-all duration-500 ${
        mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop glass blur */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-academy-obsidian/20 backdrop-blur-sm"
        />

        {/* Floating Side Drawer Card */}
        <div className={`w-80 h-full bg-white/95 backdrop-blur-xl border-l border-academy-obsidian/10 shadow-2xl flex flex-col p-8 transition-transform duration-500 ease-[0.16,1,0.3,1] ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header gap */}
          <div className="h-16 flex items-center justify-between border-b border-academy-obsidian/5 mb-8">
            <span className="text-xs font-bold font-satoshi tracking-widest text-academy-obsidian">MENU EKSPLORASI</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-md hover:bg-academy-obsidian/5 text-academy-obsidian/50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3 grow">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold font-outfit tracking-wide text-left transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-white bg-gradient-to-r from-academy-emerald to-academy-mint shadow-[0_4px_15px_rgba(16,185,129,0.2)]' 
                    : 'text-academy-obsidian/70 hover:bg-academy-obsidian/5 hover:text-academy-emerald'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className={`text-[10px] font-mono opacity-50 ${activeSection === item.id ? 'text-white' : 'text-academy-emerald'}`}>
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Action CTA inside mobile drawer */}
          <div className="border-t border-academy-obsidian/5 pt-6 mt-auto">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold font-outfit tracking-wider text-white bg-academy-obsidian hover:bg-academy-emerald transition-all duration-300"
            >
              Daftar PPDB
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
