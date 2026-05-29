import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, MessageSquare, Newspaper } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    tag: 'TEKNOLOGI ISLAM',
    date: 'Mei 26, 2026',
    time: '4 Menit Baca',
    title: 'Santri Ash-Shalihin Rilis Aplikasi AI Koreksi Tajwid Real-Time',
    desc: 'Tim santri rekayasa algoritma cerdas sukses merancang modul Convolutional Neural Network (CNN) untuk mendeteksi kebenaran makharijul huruf secara imersif dan instan berbasis suara.',
    img: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    tag: 'WISUDA AKBAR',
    date: 'Mei 18, 2026',
    time: '5 Menit Baca',
    title: 'Melahirkan 42 Penghafal Al-Qur\'an 30 Juz Mutqin di Wisuda Ke-10',
    desc: 'Ma\'had Ash-Shalihin sukses mewisuda puluhan santri tahfidz yang berhasil melafalkan hafalan 30 juz sekali majelis (tasmi\') di hadapan dewan syekh penguji internasional.',
    img: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    tag: 'INFORMASI PPDB',
    date: 'Mei 01, 2026',
    time: '3 Menit Baca',
    title: 'Penerimaan Santri Baru (PPDB) Ajaran 2026/2027 Resmi Dibuka',
    desc: 'Gerbang pendidikan rabbani global kini terbuka. Pelajari tata cara seleksi administrasi, ujian lisan kitab kuning, jalur beasiswa khusus hafiz 30 juz, dan pendaftaran online di sini.',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80'
  }
];

export default function News() {
  const [likes, setLikes] = useState({ 1: 56, 2: 78, 3: 145 });

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <section id="news" className="py-24 bg-[#FAFDFB] relative overflow-hidden">
      {/* Background ambient overlays */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-academy-emerald/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[350px] h-[350px] bg-academy-mint/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] text-academy-emerald font-semibold uppercase bg-academy-emerald/10 px-3 py-1 rounded-full">
            KABAR & WARTA MA'HAD
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-satoshi mt-4 mb-6 text-academy-obsidian">
            Informasi Terkini & <span className="gradient-text-mint">Agenda Kegiatan</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Semua artikel berita ditulis langsung pada source code, menjamin pemuatan halaman yang instan dan terhindar dari disrupsi database.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <div
              key={article.id}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-card border border-white/80 hover:border-academy-emerald/20 hover:shadow-premium-glow transition-all duration-500 hover:-translate-y-2"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover filter saturate-[0.8] contrast-[1.05] transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                />
                
                {/* Floating Date Tag */}
                <div className="absolute bottom-4 left-4 glass-dark-card py-1.5 px-3 rounded-lg border border-white/10 text-white flex items-center gap-1.5 text-[9px] font-bold font-mono tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-academy-mint" />
                  {article.date}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[9px] font-bold font-mono tracking-widest text-academy-emerald">
                    {article.tag}
                  </span>
                  <span className="text-[9px] font-outfit tracking-wider text-academy-obsidian/45 uppercase flex items-center gap-1">
                    <Clock className="w-3 h-3 text-academy-emerald/75" />
                    {article.time}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold font-satoshi text-academy-obsidian leading-snug group-hover:text-academy-emerald transition-colors duration-300 mb-3">
                  {article.title}
                </h3>

                <p className="text-xs font-inter text-academy-obsidian/75 leading-relaxed">
                  {article.desc}
                </p>
              </div>

              {/* Card Footer controls */}
              <div className="p-6 border-t border-academy-obsidian/5 flex justify-between items-center bg-academy-emerald/[0.01]">
                {/* Interactive Likes counts */}
                <button
                  onClick={(e) => handleLike(article.id, e)}
                  className="flex items-center gap-1.5 text-[10px] font-semibold font-outfit text-academy-obsidian/50 hover:text-academy-emerald transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-academy-emerald" />
                  Suka ({likes[article.id]})
                </button>

                {/* Read Full Button */}
                <button className="flex items-center gap-1 text-[10px] font-bold font-mono tracking-wider text-academy-emerald group-hover:text-academy-mint transition-colors">
                  LIHAT DETAIL
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Information Callout */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-xl bg-academy-emerald/10 text-academy-emerald shrink-0">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">Butuh Panduan Pendaftaran Cetak?</h4>
              <p className="text-[11px] text-academy-obsidian/70 mt-0.5">Brosur kurikulum keislaman, rincian biaya pendaftaran, dan asrama santri telah siap diunduh.</p>
            </div>
          </div>
          <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold font-outfit tracking-wider text-white bg-academy-obsidian hover:bg-academy-emerald transition-all duration-300">
            Unduh E-Brosur PPDB
          </button>
        </div>

      </div>
    </section>
  );
}
