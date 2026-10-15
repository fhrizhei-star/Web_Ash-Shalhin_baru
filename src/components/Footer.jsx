import React from "react";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-academy-obsidian text-white border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-academy-emerald/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Logo */}
          <div className="md:col-span-4 space-y-4">
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-tr from-academy-emerald to-academy-mint shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <img
                  src="/img/Logo Ash.jpg"
                  alt="Logo Ash-Shalihin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold font-satoshi tracking-[0.15em] uppercase text-white">
                  ASH-SHALIHIN
                </span>
                <span className="text-[9px] font-outfit tracking-[0.25em] uppercase text-academy-mint -mt-0.5">
                  PESANTREN MODERN
                </span>
              </div>
            </button>
            <p className="text-xs font-inter text-white/50 leading-relaxed max-w-sm pt-2">
              Lembaga pendidikan Islam unggulan dwi-kurikulum yang memadukan
              kedalaman kajian Kitab Salafiyah klasik (Kitab Kuning), akselerasi
              Tahfidz Al-Qur'an mutqin, serta penguasaan ilmu pengetahuan dan
              teknologi modern.
            </p>
          </div>

          {/* Column 2: Akademik */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-outfit tracking-widest text-academy-mint uppercase">
              Program Ponpes
            </h4>
            <ul className="space-y-2 text-xs font-inter text-white/50">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Hafalan Al-Quran
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Activiti Sport
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Pramuka
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Bahasa & Kepemimpinan
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Fasilitas */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-outfit tracking-widest text-academy-mint uppercase">
              Lembaga
            </h4>
            <ul className="space-y-2 text-xs font-inter text-white/50">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Selayang Pandang
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Dewan Asatidzah & Masyayikh
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Khidmat Dakwah
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Pusat Karya Riset Santri
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Connect */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold font-outfit tracking-widest text-academy-mint uppercase">
              Social Connection
            </h4>
            <p className="text-xs font-inter text-white/50 leading-relaxed mb-4">
              Ikuti warta aktivitas harian ma'had dan tonton kajian fiqih
              syariah di media sosial kami.
            </p>
            <div className="flex gap-3">
              {/* YouTube */}
              <span className="w-9 h-9 rounded-full bg-white/5 hover:bg-academy-emerald flex items-center justify-center border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </span>
              {/* LinkedIn */}
              <span className="w-9 h-9 rounded-full bg-white/5 hover:bg-academy-emerald flex items-center justify-center border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              {/* Twitter */}
              <span className="w-9 h-9 rounded-full bg-white/5 hover:bg-academy-emerald flex items-center justify-center border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              {/* Github */}
              <span className="w-9 h-9 rounded-full bg-white/5 hover:bg-academy-emerald flex items-center justify-center border border-white/10 hover:border-transparent text-white/70 hover:text-white transition-all duration-300 cursor-pointer">
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-inter">
          <div>
            © 2026 Pondok Pesantren Modern Ash-Shalihin. Hak Cipta Dilindungi
            Undang-Undang.
          </div>
          <div className="flex gap-6 items-center">
            <span className="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-academy-mint" />
              Statik Tanpa Database
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Syarat & Ketentuan
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Kebijakan Privasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
