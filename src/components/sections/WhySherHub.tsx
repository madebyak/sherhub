'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, Search, Users } from 'lucide-react';

const WhySherHub = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Responsive horizontal parallax effect
  // Mobile: appears earlier and stays visible longer
  // Desktop: original animation
  const startPosition = isMobile ? "20%" : "80%";
  const endPosition = isMobile ? "-60%" : "-100%";
  
  const x = useTransform(scrollYProgress, [0, 1], [startPosition, endPosition]);
  const smoothX = useSpring(x, {
    stiffness: 60,
    damping: 40,
    restDelta: 0.001,
    // Custom easing curve similar to easeInOutQuint
    bounce: 0
  });

  const points = [
    {
      title: "Your story starts with us",
      description: "We listen closely to your needs, dive into your ideas, and design solutions tailored specifically for you, ensuring your goals are achieved and your impact is realized.",
      icon: Heart,
      color: "from-brand-primary to-brand-accent"
    },
    {
      title: "Every detail matters",
      description: "No detail is too small or too big. We examine each element, recognize its value, handle it with precision, and give it the attention it deserves.",
      icon: Search,
      color: "from-brand-accent to-brand-primary"
    },
    {
      title: "We stay with you",
      description: "We believe in long-term partnerships—our work does not end with project delivery. It is an ongoing journey, ensuring that the intended results are met, the impact is seen, and success is celebrated together.",
      icon: Users,
      color: "from-brand-primary to-brand-accent"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-black overflow-hidden">
      {/* Horizontal separator line */}
      <div className="w-full border-t border-white/20 mb-16 md:mb-24"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parallax Headline */}
        <div className="relative h-32 md:h-40 lg:h-48 mb-16 md:mb-24 overflow-hidden">
          <motion.h2
            style={{ 
              x: smoothX,
              color: '#fe4306' // Direct orange color to ensure it displays
            }}
            className="absolute whitespace-nowrap text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold will-change-transform"
          >
            Why SherHub Why SherHub Why SherHub Why SherHub
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Subheading */}
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-regular text-white leading-tight">
              In a world where companies and ideas often blend into repetition, we at SherHub thrive on standing out! Through inclusivity, innovation, and a fresh approach to ideas, we showcase why we are the right choice for you:
            </p>
          </div>

          {/* Points Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Background gradient blur */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Main card */}
                <div className="relative bg-neutral-black/60 backdrop-blur-md rounded-3xl p-8 border border-neutral-gray/20 hover:border-neutral-gray/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} p-4 shadow-xl`}>
                      <point.icon 
                        size={32} 
                        className="text-white" 
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-brand-primary transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {point.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${point.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySherHub;
