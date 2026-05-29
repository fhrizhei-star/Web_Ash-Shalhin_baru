import React, { useState, useEffect, useRef } from 'react';
import { Award, Trophy, ArrowLeft, ArrowRight, Zap, BookOpen } from 'lucide-react';

const STATS = [
  { value: 345, suffix: '+', label: 'Hafiz & Hafizah 30 Juz' },
  { value: 95, suffix: '.8%', label: 'Diterima di Al-Azhar, Madinah & PTN Top' },
  { value: 28, suffix: '+', label: 'Paten Riset & Kitab Digital Terbit' },
  { value: 15, suffix: 'K+', label: 'Alumni Mengabdi Global' }
];

const AWARDS = [
  {
    icon: Trophy,
    title: 'Juara 1 International Qur\'anic Coding Contest 2025',
    loc: 'Kuala Lumpur, Malaysia',
    desc: 'Tim robotika santri kami memenangkan medali emas utama dalam pengembangan aplikasi deteksi kesalahan tajwid berbasis kecerdasan buatan (AI) real-time.',
    badge: 'Tingkat Global'
  },
  {
    icon: BookOpen,
    title: 'Medali Emas Harvard Model UN 2024 (Representasi Etika Islam)',
    loc: 'Boston, Amerika Serikat',
    desc: 'Santri Ash-Shalihin menyabet penghargaan Best Delegate dengan mengusung proposal resolusi krisis ekologi berdasarkan nilai maqashid syariah.',
    badge: 'Tingkat Global'
  },
  {
    icon: Zap,
    title: 'Juara 1 World Robotics Olympiad 2025',
    loc: 'Munich, Jerman',
    desc: 'Santri kami mendesain sensor rintangan otonom drone pemadam kebakaran hutan, meraih peringkat teratas dari total 80 delegasi mancanegara.',
    badge: 'Asia Pasifik'
  },
  {
    icon: Award,
    title: 'Juara Umum Musabaqah Tilawatil Qur\'an (MTQ) Nasional 2025',
    loc: 'Jakarta, Indonesia',
    desc: 'Pesantren Ash-Shalihin dinobatkan sebagai Juara Umum Nasional dalam kategori Hifzhil Qur\'an 30 Juz dan Tafsir Bahasa Arab.',
    badge: 'Tingkat Nasional'
  }
];

// Single Stats Counter Component (Smooth viewport counting)
function Counter({ value, suffix, label }) {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 1500; // 1.5s
    const stepTime = 30; // 30ms
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(value / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <div ref={elementRef} className="text-center p-6 glass-card rounded-2xl border border-white/80">
      <h3 className="text-3xl md:text-5xl font-extrabold font-satoshi text-academy-emerald tracking-tight mb-2">
        {count}
        <span className="text-2xl md:text-3xl font-outfit text-academy-mint font-bold">{suffix}</span>
      </h3>
      <p className="text-[10px] md:text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian/60">
        {label}
      </p>
    </div>
  );
}

export default function Achievements() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handlePrev = () => {
    setSliderIndex((prev) => (prev === 0 ? AWARDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSliderIndex((prev) => (prev === AWARDS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="achievements" className="py-24 bg-[#FAFDFB] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-academy-emerald/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-academy-mint/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            PRESTASI & PRESTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Rekam Jejak Keunggulan Santri di <span className="gradient-text-mint">Kancah Global</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Mulai dari mimbar tilawah Al-Qur'an internasional hingga olimpiade riset sains robotika, santri Ash-Shalihin terus mengukir prestasi gemilang.
          </p>
        </div>

        {/* 1. Dynamic Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {STATS.map((stat, index) => (
            <Counter 
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* 2. Interactive Trophy Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Description & Trophy Icon */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-academy-emerald/10 flex items-center justify-center text-academy-emerald shadow-inner border border-academy-emerald/20 animate-bounce [animation-duration:3s]">
              <Trophy className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-outfit uppercase tracking-[0.35em] text-academy-emerald font-bold block">
              TROPHY SHOWCASE
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-satoshi text-academy-obsidian leading-snug">
              Mengapresiasi Dedikasi Santri, Menginspirasi Peradaban
            </h3>
            <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
              Kami memfasilitasi keikutsertaan santri dalam berbagai kompetisi ilmiah dan keagamaan dunia dengan pendampingan intensif dari dewan asatidzah bergelar Doktor dan pakar sains terkemuka.
            </p>

            {/* Slider Manual Controls */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-academy-obsidian/10 flex items-center justify-center text-academy-obsidian hover:border-academy-emerald hover:bg-academy-emerald/10 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-academy-obsidian/10 flex items-center justify-center text-academy-obsidian hover:border-academy-emerald hover:bg-academy-emerald/10 transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Block: Active Award Card */}
          <div className="lg:col-span-7">
            <div className="relative h-[340px] sm:h-[300px] w-full perspective-1000">
              
              {/* Loop render and animate with opacity-3d absolute positions */}
              {AWARDS.map((award, index) => {
                const isActive = index === sliderIndex;
                const AwardIconComponent = award.icon;

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full p-8 sm:p-10 rounded-3xl glass-card border border-white/80 flex flex-col justify-between transition-all duration-700 ease-[0.16,1,0.3,1] ${
                      isActive 
                        ? 'opacity-100 scale-100 translate-x-0 rotate-0 z-10 shadow-premium-glow-strong' 
                        : 'opacity-0 scale-90 translate-x-8 -rotate-1 z-0 pointer-events-none'
                    }`}
                  >
                    <div>
                      {/* Badge / Metadata */}
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] font-bold font-mono tracking-widest text-academy-emerald bg-academy-emerald/10 px-3 py-1 rounded-full uppercase">
                          {award.badge}
                        </span>
                        <span className="text-[10px] font-outfit uppercase tracking-widest text-academy-obsidian/50 font-semibold">
                          {award.loc}
                        </span>
                      </div>

                      {/* Header block */}
                      <div className="flex gap-4 items-start mb-4">
                        <div className="p-3 rounded-2xl bg-white border border-academy-emerald/10 text-academy-emerald shadow-sm shrink-0">
                          <AwardIconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-base sm:text-lg md:text-xl font-bold font-satoshi text-academy-obsidian leading-snug">
                          {award.title}
                        </h4>
                      </div>

                      {/* Detail Text */}
                      <p className="text-xs sm:text-sm font-inter text-academy-obsidian/75 leading-relaxed pl-1">
                        {award.desc}
                      </p>
                    </div>

                    {/* Footer progress indicator inside card */}
                    <div className="flex justify-between items-center border-t border-academy-obsidian/5 pt-4">
                      <span className="text-[9px] font-mono tracking-widest text-academy-obsidian/30 uppercase">
                        // RECORD ID: ASH_PRE_00{index + 1}
                      </span>
                      <span className="text-xs font-bold font-outfit text-academy-emerald">
                        0{index + 1} <span className="text-[10px] text-academy-obsidian/35">/ 0{AWARDS.length}</span>
                      </span>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
