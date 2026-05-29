import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Eye, X, ArrowLeft, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Semua Dokumentasi' },
  { id: 'academic', label: 'Riset & Kitab Kuning' },
  { id: 'facilities', label: 'Fasilitas Ma\'had' },
  { id: 'activities', label: 'Aktivitas Santri' },
  { id: 'sports', label: 'Olahraga Sunnah' }
];

const ITEMS = [
  {
    id: 1,
    cat: 'academic',
    title: 'Kajian Kitab Turats Interaktif',
    desc: 'Kajian fiqih muamalah terintegrasi dengan pemetaan logika hukum syariah berbasis mindmapping digital.',
    img: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    cat: 'facilities',
    title: 'Perpustakaan Kubah Klasik',
    desc: 'Perpustakaan pusat tiga lantai yang menggabungkan ribuan kitab kuning salafiyah dengan akses e-library dunia.',
    img: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    cat: 'activities',
    title: 'Klub Rekayasa Robotika Santri',
    desc: 'Santri mengalibrasi sensor navigasi inframerah dan sensor lintasan pada robot purwarupa otonom.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    cat: 'academic',
    title: 'Riset Herbal Thibbun Nabawi',
    desc: 'Santri melakukan isolasi senyawa aktif tanaman obat-obatan herbal berkhasiat tinggi di laboratorium biologi.',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    cat: 'activities',
    title: 'Debat Model United Nations',
    desc: 'Simulasi sidang umum PBB, delegasi santri memaparkan konsep keadilan iklim global berbasis etika Islam.',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    cat: 'facilities',
    title: 'Lab Dirgantara & Roket Air',
    desc: 'Santri merancang propulsi roket dan melakukan simulasi CFD untuk koefisien hambatan udara di asrama.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    cat: 'sports',
    title: 'Sunnah Archery (Panahan) Arena',
    desc: 'Latihan panahan rutin melatih akurasi, kekuatan mental, dan fokus membidik sasaran di area hijau pesantren.',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    cat: 'sports',
    title: 'Seni Kaligrafi & Melukis Islami',
    desc: 'Santri mengekspresikan kedalaman seni khat mushaf dan kaligrafi kontemporer pada galeri pameran.',
    img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCat === 'all' 
    ? ITEMS 
    : ITEMS.filter(item => item.cat === activeCat);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-[#F3F7F5] relative overflow-hidden tech-grid-bg">
      {/* Glow overlays */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-academy-mint/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-academy-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            DOKUMENTASI KAMPUS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Galeri Aktivitas & Pembelajaran <span className="gradient-text-mint">Santri</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Eksplorasi visual aktivitas keagamaan, riset teknologi di asrama pintar, kaligrafi seni, serta latihan olahraga berkuda dan memanah sunnah.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 border-b border-academy-obsidian/5 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-outfit tracking-wider transition-all duration-300 ${
                activeCat === cat.id
                  ? 'text-white bg-academy-obsidian shadow-md'
                  : 'text-academy-obsidian/70 hover:text-academy-emerald hover:bg-white/70'
              }`}
            >
              {cat.id === 'all' ? <ImageIcon className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" /> : null}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative rounded-2xl overflow-hidden shadow-premium-card aspect-[4/3] glass-card border border-white/60 cursor-pointer group"
            >
              {/* Image element */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.03] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Hover Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-academy-obsidian via-academy-obsidian/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                {/* Floating Cap Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-academy-mint text-white flex items-center justify-center shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Subtitle / tag */}
                <span className="text-[9px] font-bold font-mono tracking-[0.25em] text-academy-mint mb-1 uppercase">
                  {CATEGORIES.find(c => c.id === item.cat)?.label}
                </span>

                {/* Title */}
                <h4 className="text-white text-base font-bold font-satoshi leading-tight">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[10px] text-white/70 font-inter leading-relaxed mt-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 2. Fullscreen Lightbox Portal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-academy-obsidian/95 backdrop-blur-xl text-white select-none animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Control Header Bar */}
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 text-academy-mint" />
              <span className="text-xs font-bold font-satoshi tracking-widest text-white/80 uppercase">
                GALERI VISUAL MA'HAD ASH-SHALIHIN
              </span>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Slide Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/5"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Current Main Active Image Frame */}
          <div 
            className="max-w-4xl max-h-[70vh] w-full px-6 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} // halt bubbling
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-card">
              <img
                src={filteredItems[lightboxIndex].img}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[60vh] object-contain mx-auto"
              />
            </div>

            {/* Info details block */}
            <div className="text-center mt-6 max-w-xl space-y-2">
              <span className="text-[10px] font-bold font-mono tracking-widest text-academy-mint uppercase">
                {CATEGORIES.find(c => c.id === filteredItems[lightboxIndex].cat)?.label}
              </span>
              <h3 className="text-xl font-bold font-satoshi text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/60 font-inter leading-relaxed">
                {filteredItems[lightboxIndex].desc}
              </p>
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 border border-white/5"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Bottom Indicators */}
          <div className="absolute bottom-6 left-0 w-full text-center text-xs font-outfit text-white/50">
            Slide {lightboxIndex + 1} of {filteredItems.length}
          </div>

        </div>
      )}

    </section>
  );
}
