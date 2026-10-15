import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Newspaper,
  X,
} from "lucide-react";

// Artikel berita bawaan Ma'had Ash-Shalihin dengan isi artikel lengkap (content)
const ARTICLES = [
  {
    id: 1,
    tag: "KEGIATAN PRAMUKA",
    date: "23-24 Mei, 2026",
    time: "4 Menit Baca",
    title: "Kegiatan PERSAMI Santri MTs dan MA Pondok Pesantren Ash-Shalihin",
    desc: "Pondok Pesantren Ash-Shalihin sukses menyelenggarakan kegiatan Perkemahan Sabtu Minggu (PERSAMI) untuk melatih kedisiplinan, kemandirian, dan kepemimpinan santri putra.",
    content:
      "Pondok Pesantren Ash-Shalihin sukses menyelenggarakan kegiatan Perkemahan Sabtu Minggu (PERSAMI) bagi seluruh santri putra tingkat MTs dan MA pada tanggal 23-24 Mei 2026. Kegiatan ini berlangsung di area perkemahan pesantren dengan penuh antusiasme dan kegembiraan dari para santri.\n\nKegiatan PERSAMI ini dirancang untuk melatih kemandirian, kedisiplinan, kerja sama tim, dan kepemimpinan para santri di luar kelas. Berbagai agenda kegiatan dilaksanakan, mulai dari pendirian tenda, latihan keterampilan baris-berbaris, pionering, hingga malam api unggun yang hangat dan penuh kebersamaan.\n\nKepala Madrasah mengungkapkan bahwa kegiatan pramuka seperti PERSAMI ini sangat penting untuk membentuk karakter santri yang tangguh, mandiri, dan siap mengabdi di masyarakat. Selain pembinaan mental, santri juga dibekali dengan materi keagamaan secara praktis di alam terbuka untuk menyeimbangkan antara wawasan umum dan spiritual.",
    img: "https://www.image2url.com/r2/default/images/1781244276699-bd3bcd1c-a3f8-40ef-9948-979dcb7dd185.webp",
  },
  {
    id: 2,
    tag: "Acara Tasyakuran Penamatan Santri Pondok Pesantren Ash-Shalihin Tingkat MI,MTs dan MA",
    date: "Mei 18, 2026",
    time: "5 Menit Baca",
    title: "Melahirkan 42 Penghafal Al-Qur'an 30 Juz Mutqin di Wisuda Ke-10",
    desc: "Ma'had Ash-Shalihin sukses mewisuda puluhan santri tahfidz yang berhasil melafalkan hafalan 30 juz sekali majelis (tasmi') di hadapan dewan syekh penguji internasional.",
    content:
      "Kebahagiaan dan rasa haru menyelimuti Aula Utama Ma'had Ash-Shalihin pada Wisuda Akbar ke-10 yang berlangsung khidmat. Pada tahun ajaran ini, Ma'had sukses melahirkan 42 wisudawan penghafal Al-Qur'an (hafiz) 30 juz dengan predikat mutqin.\n\nYang luar biasa, para santri wisudawan ini telah menuntaskan ujian Tasmi' Bil Ghaib—yaitu melafalkan keseluruhan 30 juz Al-Qur'an dalam satu majelis sekali duduk di hadapan para penguji. Dewan syekh penguji internasional yang dihadirkan langsung dari Timur Tengah memberikan apresiasi tinggi atas kualitas hafalan dan kefasihan tajwid para santri.\n\nDalam sambutannya, Pimpinan Ma'had menyampaikan bahwa keberhasilan ini bukan akhir dari perjuangan, melainkan awal dari tanggung jawab besar untuk mendakwahkan nilai-nilai Al-Qur'an di tengah masyarakat. Wisuda ditutup dengan penyerahan sanad hafalan dan beasiswa kuliah penuh bagi para lulusan terbaik.",
    img: "https://www.image2url.com/r2/default/images/1781244264229-11098134-f189-4547-9cfe-384e7e055528.webp",
  },
  {
    id: 3,
    tag: "INFORMASI PPDB",
    date: "Mei 01, 2026",
    time: "3 Menit Baca",
    title: "Penerimaan Santri Baru (PPDB) Ajaran 2026/2027 Resmi Dibuka",
    desc: "Gerbang pendidikan rabbani global kini terbuka. Pelajari tata cara seleksi administrasi, ujian lisan kitab kuning, jalur beasiswa khusus hafiz 30 juz, dan pendaftaran online di sini.",
    content:
      "Penerimaan Peserta Didik Baru (PPDB) Ma'had Ash-Shalihin tahun ajaran 2026/2027 telah resmi dibuka untuk umum. Pendaftaran dilakukan sepenuhnya secara daring melalui portal resmi ma'had guna memberikan kemudahan akses bagi calon santri dari seluruh penjuru tanah air.\n\nProses seleksi tahun ini dirancang komprehensif, mencakup tes potensi akademik, wawancara kepribadian, tes psikologi, serta ujian lisan membaca kitab kuning bagi tingkat lanjutan. Selain itu, tersedia jalur prestasi khusus (beasiswa penuh) bagi calon santri yang telah memiliki modal hafalan minimal 15 juz mutqin.\n\nBagi orang tua yang ingin mendaftarkan putra-putrinya, seluruh dokumen persyaratan administrasi seperti ijazah terakhir, kartu keluarga, dan surat rekomendasi harus diunggah sebelum tenggat waktu penutupan gelombang pertama. Informasi lengkap mengenai rincian biaya asrama, seragam, dan kurikulum pembelajaran dapat diunduh melalui tombol E-Brosur yang tersedia di halaman ini.",
    img: "https://www.image2url.com/r2/default/images/1781247411274-bb2a45e6-296e-4cba-9da8-a9e2ebc3bac7.png",
  },
];

export default function News() {
  // State untuk jumlah Suka/Like (menyimpan per ID berita)
  const [likes, setLikes] = useState({ 1: 56, 2: 78, 3: 145 });

  // State untuk melacak berita mana yang sedang dibuka di Lightbox/Modal
  const [activeNewsIndex, setActiveNewsIndex] = useState(null);

  // Keyboard navigation listener untuk Lightbox (Esc, Panah Kiri, Panah Kanan)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeNewsIndex !== null) {
        if (e.key === "ArrowLeft") {
          setActiveNewsIndex((prev) =>
            prev === 0 ? ARTICLES.length - 1 : prev - 1,
          );
        } else if (e.key === "ArrowRight") {
          setActiveNewsIndex((prev) =>
            prev === ARTICLES.length - 1 ? 0 : prev + 1,
          );
        } else if (e.key === "Escape") {
          setActiveNewsIndex(null);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeNewsIndex]);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
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
            Informasi Terkini &{" "}
            <span className="gradient-text-mint">Agenda Kegiatan</span>
          </h2>
          <p className="text-sm font-inter text-academy-obsidian/75 leading-relaxed">
            Semua artikel berita ditulis langsung pada source code, menjamin
            pemuatan halaman yang instan dan terhindar dari disrupsi database.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <div
              key={article.id}
              onClick={() => setActiveNewsIndex(index)}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-card border border-white/80 hover:border-academy-emerald/20 hover:shadow-premium-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
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
                  <span className="text-[9px] font-bold font-mono tracking-widest text-academy-emerald uppercase">
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

                <p className="text-xs font-inter text-academy-obsidian/75 leading-relaxed line-clamp-3">
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
                  Suka ({likes[article.id] || 0})
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
              <h4 className="text-xs font-bold font-outfit uppercase tracking-wider text-academy-obsidian">
                Butuh Panduan Pendaftaran Cetak?
              </h4>
              <p className="text-[11px] text-academy-obsidian/70 mt-0.5">
                Brosur kurikulum keislaman, rincian biaya pendaftaran, dan
                asrama santri telah siap diunduh.
              </p>
            </div>
          </div>
          <button className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold font-outfit tracking-wider text-white bg-academy-obsidian hover:bg-academy-emerald transition-all duration-300">
            Unduh E-Brosur PPDB
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. FULLSCREEN NEWS LIGHTBOX PORTAL                       */}
      {/* ======================================================== */}
      {activeNewsIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-academy-obsidian/90 backdrop-blur-xl p-4 select-none animate-fade-in"
          onClick={() => setActiveNewsIndex(null)}
        >
          {/* Main Modal Container */}
          <div
            className="bg-white/95 backdrop-blur-md border border-white/40 w-full max-w-3xl rounded-3xl shadow-premium-glow flex flex-col max-h-[85vh] overflow-hidden transform scale-100 transition-all duration-300 animate-scale-up"
            onClick={(e) => e.stopPropagation()} // halt bubbling
          >
            {/* Header / Cover Image */}
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-academy-obsidian select-none">
              <img
                src={ARTICLES[activeNewsIndex].img}
                alt={ARTICLES[activeNewsIndex].title}
                className="w-full h-full object-cover filter saturate-[0.9] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

              {/* Close Button */}
              <button
                onClick={() => setActiveNewsIndex(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-black/40 hover:bg-black/60 text-white/80 hover:text-white transition-all duration-300 border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badges on Cover */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <span className="text-[10px] font-bold font-mono tracking-widest text-academy-mint bg-academy-emerald/90 px-3 py-1 rounded-md text-white select-none uppercase">
                  {ARTICLES[activeNewsIndex].tag}
                </span>
                <span className="text-[10px] font-mono text-white/90 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-md border border-white/5 select-none">
                  <Calendar className="w-3.5 h-3.5 text-academy-mint" />
                  {ARTICLES[activeNewsIndex].date}
                </span>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 md:p-8 overflow-y-auto grow flex flex-col select-text">
              <div className="flex items-center gap-4 text-[10px] font-outfit text-academy-obsidian/45 uppercase tracking-wider mb-3">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-academy-emerald/75" />
                  {ARTICLES[activeNewsIndex].time}
                </span>
              </div>

              <h3 className="text-lg md:text-2xl font-extrabold font-satoshi text-academy-obsidian leading-snug mb-5 select-none">
                {ARTICLES[activeNewsIndex].title}
              </h3>

              <div className="text-xs md:text-sm font-inter text-academy-obsidian/80 leading-relaxed space-y-4 whitespace-pre-line text-justify grow pr-1">
                {ARTICLES[activeNewsIndex].content ||
                  ARTICLES[activeNewsIndex].desc}
              </div>
            </div>

            {/* Footer with Controls */}
            <div className="p-4 md:p-6 border-t border-academy-obsidian/5 flex justify-between items-center bg-academy-emerald/[0.02] select-none">
              {/* Interactive Like Button */}
              <button
                onClick={(e) => handleLike(ARTICLES[activeNewsIndex].id, e)}
                className="flex items-center gap-2 text-xs font-semibold font-outfit text-academy-obsidian/60 hover:text-academy-emerald transition-colors px-3 py-2 rounded-lg hover:bg-academy-emerald/5"
              >
                <MessageSquare className="w-4 h-4 text-academy-emerald" />
                Suka ({likes[ARTICLES[activeNewsIndex].id] || 0})
              </button>

              {/* Prev / Next Slide controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNewsIndex((prev) =>
                      prev === 0 ? ARTICLES.length - 1 : prev - 1,
                    );
                  }}
                  className="p-2 rounded-full border border-academy-obsidian/10 hover:border-academy-emerald/30 hover:bg-white text-academy-obsidian/75 hover:text-academy-emerald transition-all duration-300"
                  title="Berita Sebelumnya"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono font-bold text-academy-obsidian/55">
                  {activeNewsIndex + 1} / {ARTICLES.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveNewsIndex((prev) =>
                      prev === ARTICLES.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="p-2 rounded-full border border-academy-obsidian/10 hover:border-academy-emerald/30 hover:bg-white text-academy-obsidian/75 hover:text-academy-emerald transition-all duration-300"
                  title="Berita Berikutnya"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
      ========================================================================
      💡 PETUNJUK PENAMBAHAN BERITA SECARA PERMANEN (TANPA DATABASE)
      ========================================================================
      Jika Anda ingin menambahkan berita baru secara permanen di source code, 
      buka file ini dan salin templat objek di bawah ini lalu tempelkan di dalam 
      array 'ARTICLES' yang ada di baris 15-46:

      {
        id: 4, // Naikkan id dari id terakhir (misalnya 4, 5, 6, dst.)
        tag: 'KATEGORI ANDA',
        date: 'Mei 29, 2026', // Tanggal publikasi
        time: '3 Menit Baca', // Estimasi waktu baca
        title: 'Tulis Judul Berita Permanen di Sini',
        desc: 'Tulis deskripsi singkat untuk ditampilkan di card depan.',
        content: 'Tulis isi artikel berita secara lengkap dan mendalam di sini. Anda bisa menggunakan enter untuk baris baru.',
        img: 'https://images.unsplash.com/photo-... (atau URL gambar Anda sendiri)'
      },
      ========================================================================
      */}
    </section>
  );
}
