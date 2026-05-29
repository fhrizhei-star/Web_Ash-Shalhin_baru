import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Terminal, Shield, BookOpen } from 'lucide-react';

const BOOT_LOGS = [
  "SYNCHRONIZING SYARIAH KNOWLEDGE CORE...",
  "ESTABLISHING ARABIC LANGUAGE DATABASES...",
  "CALIBRATING QUR'ANIC AUDIO SPECTROGRAMS...",
  "COMPILING CUSTOM EMERALD SHADERS...",
  "LOADING KITAB KUNING DIGITAL LIBRARIES...",
  "INITIALIZING TAHFIDZ TRACKING METRICS...",
  "ESTABLISHING SECURE MA'HAD PROTOCOLS...",
  "ASH-SHALIHIN CORE ONLINE. ASSALAMUALAIKUM.",
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
            {/* Holographic Spinning Emblem */}
            <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-academy-mint/20 border-t-academy-mint animate-spin-slow h-24 w-24"></div>
              <div className="absolute inset-2 rounded-full border border-dashed border-academy-emerald/30 animate-spin h-20 w-20 [animation-direction:reverse]"></div>
              
              {/* Center Tech Core */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 bg-gradient-to-tr from-academy-emerald to-academy-mint rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <BookOpen className="w-6 h-6 text-white" />
              </motion.div>
            </div>

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
                  <Terminal className="w-3 h-3 text-academy-mint" /> System Boot
                </span>
                <span className="text-3xl font-light font-satoshi text-academy-mint tracking-wider">
                  {progress}<span className="text-sm font-outfit text-white/50">%</span>
                </span>
              </div>

              {/* Holographic Track */}
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-academy-emerald to-academy-mint shadow-[0_0_10px_#10b981]"
                  style={{ width: `${progress}%` }}
                ></motion.div>
              </div>
            </div>

            {/* Live Terminal Boot Log */}
            <div className="w-full bg-[#03130d] border border-white/5 rounded p-3 text-[10px] font-mono text-emerald-100/70 h-14 overflow-hidden flex items-start gap-2 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
              <span className="text-academy-mint select-none animate-pulse">{'>'}</span>
              <div className="flex flex-col justify-start">
                <span className="tracking-wide animate-fade-in">{currentLog}</span>
                <span className="text-[8px] text-white/30 uppercase tracking-widest mt-1">Status: OK</span>
              </div>
            </div>

            {/* Tech details */}
            <div className="mt-12 flex items-center gap-6 opacity-30 text-[9px] font-outfit tracking-widest uppercase">
              <div className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> Syariah Core</div>
              <div className="flex items-center gap-1"><Cpu className="w-3 h-3" /> WebGL 3D</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
