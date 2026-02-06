'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['/one.jpg', '/two.jpg', '/three.jpg', '/four.jpg', '/five.jpg'];

// Gaming & High-Tech Reveal Variants
const gamingStyles = [
  // 1. The Power Flash (Zoom out + Brightness)
  { 
    initial: { scale: 1.5, opacity: 0, filter: 'brightness(3) blur(20px)' }, 
    animate: { scale: 1, opacity: 0.5, filter: 'brightness(1) blur(0px)' } 
  },
  // 2. The Horizontal Scan (Wipe with a slight tilt)
  { 
    initial: { clipPath: 'inset(0% 100% 0% 0%)', x: 50 }, 
    animate: { clipPath: 'inset(0% 0% 0% 0%)', x: 0 } 
  },
  // 3. The Vertical Split (Opening like a shutter)
  { 
    initial: { clipPath: 'inset(50% 0% 50% 0%)', scale: 1.2 }, 
    animate: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } 
  },
  // 4. Kinetic Zoom (Fast zoom then slow Ken Burns)
  { 
    initial: { scale: 0.8, opacity: 0 }, 
    animate: { scale: 1, opacity: 0.5 } 
  }
];

export default function AutoCinematicCarousel() {
  const [current, setCurrent] = useState(0);
  const transitionAudio = useRef(null);

  useEffect(() => {
    transitionAudio.current = new Audio('/whoosh.mp3'); // Gaming transition sound hole best
    transitionAudio.current.volume = 0.2;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      transitionAudio.current?.play().catch(() => {});
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  const currentStyle = gamingStyles[current % gamingStyles.length];

  return (
    <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-[#010a07]">
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={currentStyle.initial}
          animate={{ 
            ...currentStyle.animate,
            transition: { 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1], // Expo Out (Fast start, smooth stop)
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: 'blur(10px)',
            transition: { duration: 0.8 } 
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Ken Burns effect layer separate jate reveal ar zoom clash na kore */}
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: 'linear' }}
            src={images[current]} 
            alt="BUCC" 
            className="w-full h-full object-cover object-top opacity-60" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Cyberpunk style scanline effect (Subtle) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] opacity-20" />

      {/* Heavy bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#010a07] via-transparent to-transparent opacity-95" />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center z-10 px-4 pb-20 md:pb-32">
        
        <motion.img
          key={`logo-${current}`}
          initial={{ opacity: 0, y: 20, filter: 'brightness(2)' }}
          animate={{ opacity: 1, y: 0, filter: 'brightness(1)' }}
          transition={{ duration: 0.8, type: "spring" }}
          src="../../../../public/BUCC Logo_20260111_171506_0000.png" 
          className="w-20 h-20 md:w-28 md:h-28 mb-6 drop-shadow-[0_0_30px_rgba(161,188,152,0.6)]"
        />

        {/* Cinematic Glitch Title Effect */}
        <motion.div
          key={`text-container-${current}`}
          initial={{ opacity: 0, skewX: 10 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic leading-none inline-block">
            BU <span className="text-[#A1BC98] relative">Career
              {/* Subtle Glow behind the text */}
              <span className="absolute inset-0 blur-2xl bg-[#A1BC98]/20 -z-10"></span>
            </span> Club
          </h1>
        </motion.div>
        
        <motion.p 
          key={`p-${current}`}
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-4 text-sm md:text-xl font-medium uppercase text-[#A1BC98]/80"
        >
          Build Skills • Build Career
        </motion.p>
      </div>

      {/* Futuristic Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
        <motion.div 
          key={current}
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="w-full h-full bg-gradient-to-r from-transparent via-[#A1BC98] to-transparent"
        />
      </div>
    </div>
  );
}