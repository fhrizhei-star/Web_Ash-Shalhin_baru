import React, { useState } from 'react';
import { ShieldCheck, Target, Compass, Calendar, BookOpen } from 'lucide-react';

const TABS = [
  {
    id: 'vision',
    label: 'Visi Ma\'had',
    icon: Target,
    content: "Menjadi episentrum pendidikan Islam terkemuka di dunia yang mengintegrasikan keluhuran akhlakul karimah, ketajaman intelektual syariah, dan mastery sains-teknologi imersif untuk melahirkan generasi ulama intelek dan teknokrat Qur'ani.",
    bullets: [
      "Mengintegrasikan kurikulum salafiyah klasik dengan teknologi AI & VR.",
      "Membina santri yang fasih berbahasa Arab dan Inggris secara aktif.",
      "Menumbuhkan jiwa kepemimpinan global yang berlandaskan khidmat kemanusiaan."
    ]
  },
  {
    id: 'mission',
    label: 'Misi Ma\'had',
    icon: ShieldCheck,
    content: "Menyelenggarakan proses tarbiyah (pendidikan) dan dakwah transformatif yang merangsang kemampuan berpikir kritis, penguasaan ilmu alat agama, serta inovasi sains tingkat tinggi demi kejayaan Islam (Izzul Islam wal Muslimin).",
    bullets: [
      "Menyediakan asrama pintar dan laboratorium riset digital tercanggih.",
      "Mengoptimalkan hafalan Al-Qur'an 30 Juz mutqin beserta pemahamannya.",
      "Membangun kolaborasi strategis dengan Universitas Timur Tengah & Ivy League."
    ]
  },
  {
    id: 'values',
    label: 'Pilar SHALIH',
    icon: Compass,
    content: "Komunitas akademik Ash-Shalihin mendasarkan seluruh gerak langkah perjuangannya pada enam pilar karakter utama (SHALIH):",
    bullets: [
      "Sincere (Ikhlas): Meluruskan niat beribadah semata-mata karena Allah.",
      "Humble (Tawadhu): Tetap rendah hati atas segala ilmu dan pencapaian.",
      "Active (Harokah): Dinamis, produktif, dan tangguh berkontribusi bagi masyarakat.",
      "Logical & Innovative (Aqli): Menguasai logika sains dan inovasi teknologi.",
      "Honor & Empathy (Adab): Menjunjung tinggi kesantunan sosial dan akhlak mulia."
    ]
  }
];

const TIMELINE = [
  { year: '2012', title: 'Fondasi Ma\'had', desc: 'Didirikan sebagai pesantren riset Islam modern dengan 50 santri perdana.' },
  { year: '2016', title: 'Akselerasi Kurikulum', desc: 'Meraih akreditasi kurikulum nasional terpadu dan kualifikasi internasional.' },
  { year: '2020', title: 'Digital Smart Campus', desc: 'Merampungkan kompleks asrama pintar terintegrasi energi terbarukan solar sel.' },
  { year: '2024', title: 'Islamic Tech Hub', desc: 'Bekerja sama dengan universitas Timur Tengah meluncurkan lab keislaman digital.' },
  { year: '2026', title: 'Santri Imersif 3D', desc: 'Meluncurkan portal portal 3D imersif Ash-Shalihin untuk pembelajaran global.' }
];

export default function About() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#FAFDFB]">
      {/* Background glow ornaments */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-academy-mint/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-academy-emerald/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            PROFIL MA'HAD
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Membina Akhlakul Karimah & <span className="gradient-text-mint">Mempersiapkan Pemimpin Masa Depan</span>
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-academy-emerald to-academy-mint mx-auto"></div>
        </div>

        {/* 1. History & Vision/Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">

          {/* Left Block: Sejarah & Deskripsi */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold font-satoshi text-academy-obsidian">
              Selayang Pandang Ash-Shalihin
            </h3>
            <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
              Dilahirkan di bawah naungan Yayasan Pendidikan Islam Ash-Shalihin pada tahun 2012, **Pondok Pesantren Modern Ash-Shalihin** dirancang khusus untuk mencetak generasi muslim yang unggul secara spiritual dan mahir secara digital. Kami meyakini bahwa Islam adalah agama ilmu dan kemajuan peradaban.
            </p>
            <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
              Melalui perpaduan dwi-kurikulum—Kajian Kitab Turats (Salafiyah) klasik serta kurikulum sains modern bertaraf internasional—kami mendidik para santri untuk tidak hanya fasih melafalkan ayat suci, melainkan mampu meriset dan melahirkan terobosan teknologi demi menjawab tantangan peradaban zaman.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-academy-obsidian/5">
              <div>
                <h4 className="text-2xl font-bold font-satoshi text-academy-emerald">2006</h4>
                <p className="text-[10px] font-outfit uppercase tracking-widest text-academy-obsidian/50 mt-1">Tahun Berdiri</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-satoshi text-academy-emerald">B</h4>
                <p className="text-[10px] font-outfit uppercase tracking-widest text-academy-obsidian/50 mt-1">Akreditasi</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold font-satoshi text-academy-emerald">96%</h4>
                <p className="text-[10px] font-outfit uppercase tracking-widest text-academy-obsidian/50 mt-1">Lulusan Melanjutkan</p>
              </div>
            </div>
          </div>

          {/* Right Block: Interactive Visi Misi Tabs */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl relative overflow-hidden">
            {/* Tabs Buttons */}
            <div className="flex border-b border-academy-obsidian/5 mb-8 gap-2 pb-2 overflow-x-auto">
              {TABS.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-outfit tracking-wider transition-all duration-300 ${activeTab === tab.id
                        ? 'text-white bg-gradient-to-r from-academy-emerald to-academy-mint shadow-md'
                        : 'text-academy-obsidian/60 hover:text-academy-emerald hover:bg-academy-emerald/5'
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab content panel */}
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <p className="text-sm font-inter text-academy-obsidian/80 leading-relaxed font-medium mb-6">
                  {TABS.find((t) => t.id === activeTab)?.content}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {TABS.find((t) => t.id === activeTab)?.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-academy-obsidian/75">
                      <div className="w-1.5 h-1.5 rounded-full bg-academy-mint mt-1.5 shrink-0"></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Tech Stamp */}
              <div className="flex justify-end mt-6 opacity-30 text-[9px] font-mono tracking-widest text-academy-obsidian">
                // SECURE_TOKEN://ASH_VIS_MIS
              </div>
            </div>
          </div>

        </div>

        {/* 2. Sambutan Mudirul Ma\'had */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 py-12 border-t border-b border-academy-obsidian/5 bg-academy-emerald/[0.01]">

          {/* Portrait frame with tech elements */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Floating borders */}
              <div className="absolute -inset-3 rounded-3xl border border-academy-mint/20 pointer-events-none group-hover:border-academy-mint/45 transition-colors duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-academy-emerald to-academy-mint rounded-3xl opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Portrait Canvas Image */}
              <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl glass-card flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="KH. Ahmad Shalihin, Lc., M.A."
                  className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />

                {/* Lower Badge Info */}
                <div className="absolute bottom-4 left-4 right-4 glass-dark-card p-3 rounded-xl border border-white/10 text-white flex flex-col text-center">
                  <span className="text-xs font-bold font-satoshi tracking-wider">KH. Ahmad Shalihin, Lc., M.A.</span>
                  <span className="text-[9px] font-outfit uppercase tracking-widest text-academy-mint mt-0.5">Pimpinan Pondok (Mudir)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Greeting text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-outfit uppercase tracking-[0.35em] text-academy-emerald font-bold">
              SAMBUTAN MUDIRUL MA'HAD
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold font-satoshi text-academy-obsidian">
              "Kedalaman Spiritual Agama & Penguasaan Teknologi Mutakhir"
            </h3>

            <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed italic">
              "Assalamu'alaikum Warahmatullahi Wabarakatuh. Selamat datang di gerbang masa depan umat Islam. Di Pondok Pesantren Ash-Shalihin, kami mendidik santri untuk tidak sekadar menghafalkan teks suci dan kitab salaf, melainkan mengejawantahkan dan meriset rahasia sains di dalamnya melalui kacamata teknologi modern."
            </p>
            <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
              Melalui lingkungan asrama pintar yang kondusif, kurikulum terintegrasi, dan kecanggihan laboratorium imersif, kami berkomitmen mencetak kader ulama masa depan yang tidak hanya tafaqquh fid-din (paham ilmu agama secara mendalam) namun juga cakap riset sains terapan. Mari bergabung mengukir kemuliaan dakwah digital.
            </p>

            {/* Signature font sign */}
            <div className="pt-4 flex flex-col items-start gap-1">
              <span className="font-serif text-2xl italic tracking-wide text-academy-obsidian/85 select-none font-semibold">
                Ahmad Shalihin
              </span>
              <div className="h-[1px] w-28 bg-academy-emerald"></div>
              <span className="text-[9px] font-outfit tracking-widest text-academy-obsidian/45 uppercase mt-1">
                Lc., M.A. in Sharia & Science Integration
              </span>
            </div>
          </div>

        </div>

        {/* 3. Interactive Milestone Timeline */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold font-satoshi text-academy-obsidian">
              Milestone & Perjalanan Dakwah
            </h3>
            <p className="text-xs font-inter text-academy-obsidian/60 mt-2">
              Klik tahun untuk melihat fase keemasan pertumbuhan pesantren kami
            </p>
          </div>

          {/* Timeline Scrollable Track */}
          <div className="relative pt-6">
            {/* Timeline connector horizontal line */}
            <div className="absolute top-[42px] left-0 right-0 h-[2px] bg-academy-emerald/10 z-0"></div>

            {/* Timelines Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-white/80 hover:border-academy-emerald/30 hover:shadow-premium-glow transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Glowing Year Node */}
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-academy-mint flex items-center justify-center shadow-md mb-4 group-hover:scale-110 group-hover:bg-academy-mint text-academy-mint group-hover:text-white transition-all duration-300 z-10">
                    <BookOpen className="w-4 h-4" />
                  </div>

                  {/* Year Tag */}
                  <span className="text-lg font-bold font-satoshi text-academy-emerald tracking-wide">
                    {item.year}
                  </span>

                  {/* Milestone Title */}
                  <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian mt-2 mb-1 group-hover:text-academy-emerald transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11px] font-inter text-academy-obsidian/75 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
