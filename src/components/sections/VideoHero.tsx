'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const VideoHero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-neutral-black/30" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-normal leading-tight mb-6
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       tracking-wide"
          >
            BEYOND ORDINARY
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/90 font-normal leading-relaxed mb-12
                       text-base sm:text-lg md:text-xl lg:text-2xl
                       max-w-4xl mx-auto"
          >
            At SherHub, we turn abstract ideas into tangible realities and
            achievements that do not only embody the original idea but also go beyond it.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={scrollToNext}
            className="group inline-flex items-center gap-3 px-8 py-4 
                       border-2 border-white text-white
                       rounded-full font-medium text-lg
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-neutral-black
                       focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span>Start Exploring</span>
            <ChevronDown 
              className="h-5 w-5 transition-colors duration-300 
                         group-hover:text-neutral-black" 
            />
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoHero;
