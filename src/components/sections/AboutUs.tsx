'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-4 md:py-4 bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* First row container with icon and "ABOUT US" */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/black-orange-symbol.svg"
              alt="SherHub Symbol"
              width={24}
              height={24}
              className="w-10 h-10"
            />
            <span className="text-md md:text-lg font-regular text-neutral-gray">
              ABOUT US
            </span>
          </div>

          {/* Subheading container */}
          <div className="max-w-7xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-regular text-neutral-black leading-tight">
              SherHub was born from a clear and compelling idea: transforming abstract concepts into tangible achievements that their creators can take pride in, leaving a lasting mark that endures through time. From this vision, SherHub emerged as a creative force, drawing inspiration from the Kurdish word for &ldquo;lion,&rdquo; symbolizing strength, leadership, and courage, qualities that have been deeply ingrained in surrounding societies for millennia.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Parallax Image Container */}
      <div 
        ref={parallaxRef}
        className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mt-16 md:mt-24 transform-gpu"
      >
        <motion.div
          style={{ y: smoothY }}
          className="relative w-full h-[120%] -top-[20%] will-change-transform"
        >
          <Image
            src="/banner-01.jpg"
            alt="SherHub Vision"
            fill
            className="object-cover object-center scale-110 will-change-transform"
            sizes="100vw"
            priority={false}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGBkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyiwmg=XaHa"
          />
        </motion.div>
        
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};

export default AboutUs;
