import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, BookOpen } from 'lucide-react';

const BOOT_LOGS = [
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ...",
  "Menyucikan Niat & Meluruskan Orientasi Belajar...",
  "Membuka Gerbang Khazanah Keilmuan Islam...",
  "Mengkaji Ayat-ayat Kauniyah & Qur'aniyah...",
  "Menyelami Kedalaman Kitab Turats & Akhlak Mulia...",
  "Mengintegrasikan Syariah, Sains, & Teknologi Modern...",
  "Menyiapkan Generasi Rabbani Berwawasan Global...",
  "Ash-Shalihin Core Online. Assalamu'alaikum Warahmatullahi Wabarakatuh.",
];

export default function Loading({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [currentLog, setCurrentLog] = useState(BOOT_LOGS[0]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progressive percentage counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Realistic step speed variation
        const remaining = 100 - prev;
        const increment = Math.max(1, Math.floor(Math.random() * Math.min(15, remaining)));
        return prev + increment;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Sync boot logs with percentage progress
    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        const next = prev + 1;
        if (next < BOOT_LOGS.length) {
          setCurrentLog(BOOT_LOGS[next]);
          return next;
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 1800 / BOOT_LOGS.length);

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsDone(true);
        // Delay slightly for transition to complete
        setTimeout(() => {
          onFinished();
        }, 800);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-academy-obsidian text-white overflow-hidden tech-grid-bg"
        >
          {/* Subtle green ambient light glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-academy-emerald/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-academy-mint/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>

          <div className="relative z-10 w-full max-w-md px-6 flex flex-col items-center">
            {/* Holographic Spinning Rub el Hizb Emblem */}
            <div className="relative mb-8 w-28 h-28 flex items-center justify-center">
              {/* Outer Glow Mandala */}
              <div className="absolute inset-0 rounded-full bg-academy-emerald/10 blur-xl pointer-events-none animate-pulse-slow"></div>

              {/* Outer Star (Rub el Hizb Layer 1) - Rotates Clockwise */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                viewBox="0 0 100 100"
                className="absolute w-28 h-28 text-academy-mint/40 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
              >
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(0 50 50)" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 50 50)" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3,3" />
              </motion.svg>

              {/* Inner Star (Rub el Hizb Layer 2) - Rotates Counter-Clockwise */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                viewBox="0 0 100 100"
                className="absolute w-20 h-20 text-[#d4af37]/70 drop-shadow-[0_0_6px_rgba(212,175,55,0.4)]"
              >
                <rect x="27.5" y="27.5" width="45" height="45" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(0 50 50)" />
                <rect x="27.5" y="27.5" width="45" height="45" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(45 50 50)" />
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" />
              </motion.svg>

              {/* Center Core with pulsing gradient & Glowing Book Icon */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="relative z-10 w-12 h-12 bg-gradient-to-tr from-academy-emerald to-[#d4af37] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-[#d4af37]/30"
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
            </div>

            {/* Elegant Bismillah Calligraphy */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="text-center mb-3"
            >
              <span
                className="text-2xl sm:text-3xl font-medium tracking-wide text-[#d4af37] drop-shadow-[0_0_10px_rgba(212,175,55,0.25)]"
                style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </motion.div>

            {/* Academy Branding */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold font-satoshi tracking-[0.2em] text-white text-center mb-1 uppercase"
            >
              Ash-Shalihin
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[9px] font-outfit tracking-[0.3em] text-academy-mint text-center font-medium mb-12 uppercase"
            >
              Pondok Pesantren Modern
            </motion.p>

            {/* Percentage Indicator */}
            <div className="w-full relative mb-4">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[10px] font-outfit tracking-widest text-emerald-100/50 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#d4af37]" /> TAHAP MEMBACA
                </span>
                <span className="text-3xl font-light font-satoshi text-[#d4af37] tracking-wider">
                  {progress}<span className="text-sm font-outfit text-white/50">%</span>
                </span>
              </div>

              {/* Holographic Track */}
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-academy-emerald to-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                  style={{ width: `${progress}%` }}
                ></motion.div>
              </div>
            </div>

            {/* Live Terminal Boot Log */}
            <div className="w-full bg-[#020e0a] border border-[#d4af37]/15 rounded-lg p-3.5 text-[10px] font-mono text-emerald-100/80 h-16 overflow-hidden flex items-start gap-2.5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)]">
              <span className="text-[#d4af37] select-none animate-pulse">۞</span>
              <div className="flex flex-col justify-start w-full">
                <span className="tracking-wide animate-fade-in font-medium" style={{ fontFamily: currentLog.startsWith('بِ') ? "'Amiri', 'Noto Naskh Arabic', serif" : "inherit", fontSize: currentLog.startsWith('بِ') ? "12px" : "inherit" }}>{currentLog}</span>
                <span className="text-[7.5px] text-[#d4af37]/60 uppercase tracking-widest mt-1">PESANTREN MODERN ASH-SHALIHIN</span>
              </div>
            </div>

            {/* Tech details */}
            <div className="mt-12 flex items-center gap-6 opacity-40 text-[9px] font-outfit tracking-widest uppercase">
              <div className="flex items-center gap-1"><BookOpen className="w-3 h-3 text-[#d4af37]" /> THALABUL ILMI</div>
              <div className="flex items-center gap-1"><Cpu className="w-3 h-3 text-academy-mint" /> SYARIAH & TEKNOLOGI</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
