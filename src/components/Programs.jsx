import React, { useRef, useState } from "react";
import {
  Rocket,
  Binary,
  BookOpen,
  Landmark,
  Award,
  Users,
  Layers,
  ShieldCheck,
} from "lucide-react";

const PROGRAMS = [
  {
    icon: BookOpen,
    tag: "Madrasah Ibtidaiyah",
    title: "Jenjang Pendidikan Dasar",
    desc: "Kelas Dasar Sampai Menengah Pertama",
    color: "from-emerald-600/20 to-emerald-400/10",
    iconColor: "text-academy-emerald",
    badge: "SD",
  },
  {
    icon: ShieldCheck,
    tag: "Madrasah Tsanawiyah",
    title: "Jenjang Pendidikan Menengah",
    desc: "Kelas Menengah Pertama",
    color: "from-emerald-600/20 to-emerald-400/10",
    iconColor: "text-academy-emerald",
    badge: "SMP",
  },
  {
    icon: Binary,
    tag: "Madrasah Aliyah",
    title: "Jenjang Pendidikan Menengah Atas",
    desc: "Kelas Menengah Atas",
    color: "from-emerald-600/20 to-emerald-400/10",
    iconColor: "text-academy-emerald",
    badge: "SMA",
  },
  {
    icon: Binary,
    tag: "Taman Bermain Anak",
    title: "Jenjang TK & PAUD",
    desc: "Kelas Taman Bermain Anak Usia Dini",
    color: "from-emerald-600/20 to-emerald-400/10",
    iconColor: "text-academy-emerald",
    badge: "PAUD",
  },
];

const EXTRAS = [
  { name: "PRAMUKA", cat: "Character Building" },
  { name: "PMR", cat: "Social" },
  { name: "Karate", cat: "Olahraga" },
  { name: "Funakoshi Ash-Sahilihn", cat: "Seni Diri" },
];

// Lightweight 3D Hover Card Component
function TiltCard({ program }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [spotlightStyle, setSpotlightStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Mouse coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Center coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt calculations (capped range)
    const rotateX = -((y - centerY) / centerY) * 10; // max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`,
      transition: "transform 0.1s ease-out",
    });

    // Cursor tracking radial glow spotlight
    setSpotlightStyle({
      opacity: 1,
      background: `radial-gradient(circle 200px at ${x}px ${y}px, rgba(16, 185, 129, 0.15), transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
      transition: "transform 0.5s ease-out",
    });
    setSpotlightStyle({ opacity: 0, transition: "opacity 0.5s ease" });
  };

  const IconComponent = program.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="relative flex flex-col justify-between p-8 rounded-3xl glass-card transition-all duration-300 border border-white/80 cursor-pointer h-full group"
    >
      {/* Radial Hover Spotlight Overlay */}
      <div
        style={spotlightStyle}
        className="absolute inset-0 rounded-3xl pointer-events-none"
      />

      <div>
        {/* Card Header & Badge */}
        <div className="flex justify-between items-start mb-6">
          <div
            className={`p-4 rounded-2xl bg-white shadow-[0_4px_20px_rgba(5,32,22,0.04)] border border-academy-obsidian/5 text-academy-obsidian group-hover:scale-110 group-hover:shadow-[0_4px_25px_rgba(16,185,129,0.18)] transition-all duration-500`}
          >
            <IconComponent
              className={`w-6 h-6 ${program.iconColor} animate-pulse-slow`}
            />
          </div>
          <span className="text-[9px] font-bold font-mono tracking-[0.2em] text-academy-emerald bg-academy-emerald/10 px-2.5 py-1 rounded-full uppercase">
            {program.badge}
          </span>
        </div>

        {/* Tag & Title */}
        <span className="text-[10px] font-bold font-outfit tracking-[0.3em] text-academy-emerald block mb-2 uppercase">
          {program.tag}
        </span>
        <h3 className="text-lg md:text-xl font-bold font-satoshi text-academy-obsidian leading-snug group-hover:text-academy-emerald transition-colors duration-300 mb-4">
          {program.title}
        </h3>

        {/* Desc */}
        <p className="text-xs font-inter text-academy-obsidian/75 leading-relaxed">
          {program.desc}
        </p>
      </div>

      {/* Decorative arrow link */}
      <div className="mt-8 flex items-center justify-between border-t border-academy-obsidian/5 pt-4">
        <span className="text-[10px] font-mono tracking-widest text-academy-obsidian/30 uppercase group-hover:text-academy-emerald transition-colors">
          LIHAT KURIKULUM
        </span>
        <div className="w-8 h-8 rounded-full border border-academy-obsidian/10 flex items-center justify-center text-academy-obsidian group-hover:border-academy-emerald group-hover:bg-academy-emerald group-hover:text-white transition-all duration-300">
          →
        </div>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-[#F3F7F5] relative overflow-hidden tech-grid-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-academy-emerald/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-academy-mint/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            PROGRAM AKADEMIK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Jenjang Pendididkan &{" "}
            <span className="gradient-text-mint">Program Unggulan</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Ash-Sahlihin menjadi sarana peningkatan sumber daya manusia yang
            unggul dalam bidang ilmu pengetahuan dan teknologi, berlandaskan
            nilai-nilai keislaman, serta mampu memberikan kontribusi positif
            bagi masyarakat.
          </p>
        </div>

        {/* 1. 3D Hover Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {PROGRAMS.map((prog, index) => (
            <TiltCard key={index} program={prog} />
          ))}
        </div>

        {/* 2. Kurikulum & Ekstrakurikuler Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Kurikulum Details */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-academy-emerald/10 text-academy-emerald">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-satoshi text-academy-obsidian">
                  Kerangka Kurikulum Unggulan
                </h3>
              </div>

              <p className="text-xs font-inter text-academy-obsidian/75 leading-relaxed mb-6">
                Kurikulum Berbasis Cinta (KBC) merupakan pendekatan pendidikan
                yang menempatkan cinta sebagai fondasi utama dalam proses
                pembelajaran. Melalui KBC, Ash-Shalihin berupaya menciptakan
                lingkungan belajar yang menyenangkan, menghargai potensi setiap
                peserta didik, serta membangun hubungan yang harmonis antara
                guru, siswa, dan orang tua. Kurikulum ini tidak hanya berfokus
                pada pencapaian akademik, tetapi juga pada pembentukan karakter,
                akhlak mulia, kepedulian sosial, dan kecintaan terhadap ilmu
                pengetahuan. Dengan pendekatan yang humanis dan berpusat pada
                peserta didik, KBC diharapkan mampu melahirkan generasi yang
                beriman, cerdas, berkarakter, dan siap menghadapi tantangan masa
                depan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/50 border border-white/60 flex items-start gap-3">
                  <Layers className="w-4 h-4 text-academy-emerald mt-1" />
                  <div>
                    <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">
                      KBC (Kurikulum Berbasis Cinta)
                    </h4>
                    <p className="text-[10px] text-academy-obsidian/70 mt-1">
                      Cinta, Akhlak, Karakter, Inovasi, Teknologi, Prestasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-academy-obsidian/5 pt-4 flex items-center justify-between">
              <span className="text-[9px] font-mono tracking-widest text-academy-obsidian/40 uppercase">
                * SELURUH KURIKULUM DIAKREDITASI PARIPURNA
              </span>
            </div>
          </div>

          {/* Ekstrakurikuler Showcase */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-white/80 flex flex-col justify-between bg-academy-emerald/[0.01]">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-academy-mint/10 text-academy-mint">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-satoshi text-academy-obsidian">
                  Ekstrakurikuler Unggulan
                </h3>
              </div>

              <p className="text-xs font-inter text-academy-obsidian/75 leading-relaxed mb-6">
                Mengasah minat bakat, kebugaran fisik sunnah, keterampilan
                berorganisasi, serta apresiasi seni islami santri.
              </p>

              <div className="space-y-3">
                {EXTRAS.map((ex, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 px-3 rounded-lg bg-white/30 hover:bg-white/60 transition-colors border border-white/40"
                  >
                    <span className="text-xs font-semibold text-academy-obsidian font-outfit">
                      {ex.name}
                    </span>
                    <span className="text-[9px] font-bold font-mono tracking-wider text-academy-emerald bg-academy-emerald/10 px-2 py-0.5 rounded uppercase">
                      {ex.cat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
