import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Trophy,
  ArrowLeft,
  ArrowRight,
  Zap,
  BookOpen,
} from "lucide-react";
// atur tengahnya
const STATS = [
  { value: 240, suffix: "+", label: "Santri Terdaftar" },
  { value: 95, suffix: ".8%", label: "Diterima di Universitas." },
  { value: 8, suffix: "+", label: "Prestasi Akademik & Non-Akademik" },
];
// prestasi yang tercatat
const AWARDS = [
  {
    icon: Trophy,
    title: "Juara 3 Terbaik Baris Berbaris.",
    loc: "Kab.Gowa, 2023",
    desc: "Tim baris-berbaris santri Pondok Pesantren Ash-Shalihin berhasil meraih gelar Juara 3 Terbaik dalam perlombaan Lomba Keterampilan Baris-Berbaris (LKBB) tingkat Kabupaten Gowa tahun 2023.",
    badge: "Tingkat lokal",
  },
];

// Single Stats Counter Component (Smooth viewport counting with ease-out requestAnimationFrame)
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
      { threshold: 0.1 }, // Mulai animasi segera setelah tepi card masuk viewport
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    let startTimestamp = null;
    const duration = 2000; // Durasi animasi 2 detik untuk sentuhan premium

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Interpolasi Ease-Out Quad: memperlambat laju angka secara elegan menjelang akhir
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * value);

      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [active, value]);

  return (
    <div
      ref={elementRef}
      className="text-center p-8 glass-card rounded-3xl border border-white/80 hover:border-academy-emerald/20 hover:shadow-premium-glow transition-all duration-500 transform hover:-translate-y-1.5"
    >
      <h3 className="text-4xl md:text-5xl font-extrabold font-satoshi text-academy-emerald tracking-tight mb-2 select-none">
        {count}
        <span className="text-2xl md:text-3xl font-outfit text-academy-mint font-bold ml-0.5">
          {suffix}
        </span>
      </h3>
      <p className="text-[10px] md:text-xs font-bold font-outfit uppercase tracking-widest text-academy-obsidian/60 leading-relaxed select-none">
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
    <section
      id="achievements"
      className="py-24 bg-[#FAFDFB] relative overflow-hidden"
    >
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
            Jumlah Siswa & <span className="gradient-text-mint">Prestasi</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Mulai dari Prestasi Akademik, Keagamaan, dan Olahraga, Santri
            Ash-Shalihin terus mengukir prestasi gemilang.
          </p>
        </div>

        {/* 1. Dynamic Counters Grid (Centered 3-column grid for symmetry) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
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
              Kami memfasilitasi keikutsertaan santri dalam berbagai kompetisi.
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
                        ? "opacity-100 scale-100 translate-x-0 rotate-0 z-10 shadow-premium-glow-strong"
                        : "opacity-0 scale-90 translate-x-8 -rotate-1 z-0 pointer-events-none"
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
                        0{index + 1}{" "}
                        <span className="text-[10px] text-academy-obsidian/35">
                          / 0{AWARDS.length}
                        </span>
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
