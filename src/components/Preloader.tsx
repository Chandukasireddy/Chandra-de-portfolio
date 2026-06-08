import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import me from "../assets/img/me.webp";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);
  const [shouldExit, setShouldExit] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Detect theme on mount
  useEffect(() => {
    if (typeof document !== "undefined") {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    }
  }, []);

  // Monitor Font Loading
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.fonts.ready.then(() => {
        setFontsReady(true);
      }).catch(() => {
        setFontsReady(true); // Fallback if font API fails
      });
    } else {
      setFontsReady(true);
    }
  }, []);

  // Simulate progress bar count-up (duration 1800ms)
  useEffect(() => {
    const duration = 1800;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Check readiness criteria to trigger exit animation
  useEffect(() => {
    if (progress === 100 && fontsReady) {
      const exitTimer = setTimeout(() => {
        setShouldExit(true);
      }, 300); // Small delay for polish
      return () => clearTimeout(exitTimer);
    }
  }, [progress, fontsReady]);

  // Lock and unlock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!shouldExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05, 
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none transition-colors duration-300 ${
            theme === "dark" ? "bg-[#0c1220]" : "bg-[#ebebeb]"
          }`}
        >
          {/* Subtle glowing radial background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff6a3d]/10 to-[#9daaf2]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center gap-12 relative z-10">
            {/* Pulsing circular Avatar and Spinner */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              {/* Outer rotating color-gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-0 rounded-full border-t-4 border-r-4 border-b-4 border-l-4 border-transparent"
                style={{
                  borderTopColor: "#ff6a3d",
                  borderRightColor: "#9daaf2",
                  boxShadow: "0 0 20px rgba(255, 106, 61, 0.15)",
                }}
              />

              {/* Pulsing inner avatar glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#ff6a3d] to-[#9daaf2] opacity-20 blur-xl animate-pulse" />

              {/* Central profile picture */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 80, damping: 15 }}
                className={`absolute inset-2 rounded-full overflow-hidden border-2 border-white/10 flex items-center justify-center ${
                  theme === "dark" ? "bg-[#1a2238]" : "bg-white"
                }`}
              >
                <img
                  src={me}
                  alt="Chandu Profile"
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Welcoming animated typography */}
            <div className="text-center flex flex-col gap-4">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className={`text-4xl sm:text-5xl font-black tracking-wide font-sans ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Hi, Welcome to{" "}
                <span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a3d] to-[#9daaf2]"
                  style={{
                    textShadow: "0 0 30px rgba(255, 106, 61, 0.2)",
                  }}
                >
                  Chandu's World
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className={`text-[1.3rem] tracking-[0.25em] uppercase font-mono font-bold ${
                  theme === "dark" ? "text-white/60" : "text-black/60"
                }`}
              >
                Initializing Portfolio
              </motion.p>
            </div>

            {/* Progress indicator meter */}
            <div className="flex flex-col items-center gap-3 w-64 sm:w-80">
              <div className={`w-full h-[3px] rounded-full overflow-hidden relative ${
                theme === "dark" ? "bg-white/5" : "bg-black/5"
              }`}>
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ff6a3d] to-[#9daaf2]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className={`flex justify-between w-full font-mono text-[1.2rem] font-bold ${
                theme === "dark" ? "text-white/50" : "text-black/50"
              }`}>
                <span>LOADING</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
