'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Monitor, Camera, Calendar, Printer, GraduationCap, MessageSquare } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';
import ReachOut from '@/components/sections/ReachOut';

const ServicesPage = () => {
  // Services data
  const services = [
    {
      title: "Integrated Digital Solutions",
      description: "Comprehensive digital marketing strategies that drive growth and engagement across all digital channels.",
      bullets: [
        "Comprehensive digital marketing strategies (advertising, social media management, SEO)",
        "Website and application development and management",
        "Digital campaign design and effectiveness measurement"
      ],
      icon: Monitor
    },
    {
      title: "Creative Production & Visual Content",
      description: "From concept to creation, we bring your vision to life through compelling visual storytelling.",
      bullets: [
        "Professional video production (documentaries, commercials, educational content)",
        "Branding and visual identity design",
        "Photography and graphic design services"
      ],
      icon: Camera
    },
    {
      title: "Event & Project Management",
      description: "Seamless event execution and project coordination that delivers memorable experiences.",
      bullets: [
        "Organizing events and conferences",
        "Logistics and hospitality coordination",
        "Presentation and pitch deck design"
      ],
      icon: Calendar
    },
    {
      title: "Printing & Technical Support",
      description: "High-quality print solutions with technical excellence that meets global standards.",
      bullets: [
        "High-quality printed materials (brochures, reports, marketing materials)",
        "Technical oversight to ensure compliance with required standards",
        "Design coordination for print and publication"
      ],
      icon: Printer
    },
    {
      title: "Consulting & Training",
      description: "Expert guidance and skill development programs that enhance organizational capabilities.",
      bullets: [
        "Designing and delivering training workshops in digital marketing, communication, and project management",
        "Organizational development consulting for efficiency enhancement",
        "Supporting international and local organizations with well-structured plans for improved performance"
      ],
      icon: GraduationCap
    },
    {
      title: "Corporate Communication Solutions",
      description: "Strategic communication that builds bridges and tells your story effectively.",
      bullets: [
        "Writing and editing reports, human-interest stories, and newsletters",
        "Developing internal and external communication strategies",
        "Crafting corporate messaging for organizations",
        "Global corporate communication strategies"
      ],
      icon: MessageSquare
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-12"
          >
            {/* Big Orange Headline */}
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-[8rem] font-medium"
              style={{ color: '#fe4306' }}
            >
              Our Services
            </h1>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mx-auto"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/crew.png"
                  alt="SherHub Creative Team at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
                At SherHub, we believe that delivering real value to our clients begins with a deep understanding of their needs and aspirations. Our services are designed to provide comprehensive solutions that achieve this and leave a lasting impact.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-neutral-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Header with icon and "OUR SERVICES" */}
            <div className="flex items-center gap-3">
              <Image
                src="/logos/black-orange-symbol.svg"
                alt="SherHub Symbol"
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <span className="text-md md:text-lg font-regular text-white/70">
                WHAT WE OFFER
              </span>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <SpotlightCard 
                    className="p-8 h-full"
                    spotlightColor="rgba(254, 67, 6, 0.35)"
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      {React.createElement(service.icon, {
                        size: 40,
                        className: "text-brand-primary",
                        strokeWidth: 1.5
                      })}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed group-hover:text-neutral-black transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3 text-white/70 group-hover:text-neutral-black transition-colors duration-300">
                          <span className="text-brand-primary mt-1 text-sm">•</span>
                          <span className="text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Marquee Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="whitespace-nowrap"
            >
              <span 
                className="text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-medium leading-none uppercase"
                style={{ color: '#fe4306' }}
              >
                our service <span className="text-black">* </span>our service <span className="text-black">* </span>our service <span className="text-black">* </span>our service <span className="text-black">* </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Philosophy Section */}
      <section className="relative py-16 md:py-24 bg-black overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8 lg:pr-8">
              
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div 
                  className="text-sm md:text-base font-medium tracking-wider uppercase mb-6"
                  style={{ color: '#999da6' }}
                >
                  OUR APPROACH
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight mb-8">
                  Our services are crafted to transform <span style={{ color: '#fe4306' }}>ideas</span> into impactful realities, spanning digital innovation, creative excellence, and strategic execution.
                </h2>
              </motion.div>

              {/* Two Column Text */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    From digital marketing strategies that drive engagement to creative productions that captivate audiences, we combine technical expertise with artistic vision to deliver solutions that exceed expectations and create lasting value.
                  </p>
                </motion.div>

                {/* Right Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    Whether it&apos;s organizing world-class events, developing comprehensive communication strategies, or providing specialized training, our integrated approach ensures every project receives the attention and expertise it deserves.
                  </p>
                </motion.div>

              </div>

              {/* Bottom Call-to-Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-white/10 mt-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                  <div className="space-y-1">
                    <p className="text-white text-lg font-medium">
                      Ready to bring your project to life?
                    </p>
                    <p className="text-white/80 text-lg">
                      Let&apos;s discuss how our services can help you achieve your goals.
                    </p>
                  </div>
                  <div className="text-left space-y-1">
                    <p className="text-white/60 text-sm">Get in touch</p>
                    <p className="text-white/60 text-sm">info@sherhub.com</p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Image with Animated Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl h-[500px] lg:h-[800px]"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/event.jpg"
                  alt="SherHub Services Partnership"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Animated Scrolling Text Overlay */}
              <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 15,
                      ease: "linear",
                    },
                  }}
                  className="whitespace-nowrap"
                >
                  <span 
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white opacity-80"
                    style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
                  >
                    FULL SERVICE AGENCY • FULL SERVICE AGENCY • FULL SERVICE AGENCY • 
                  </span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ReachOut Section */}
      <ReachOut />
    </div>
  );
};

export default ServicesPage;
