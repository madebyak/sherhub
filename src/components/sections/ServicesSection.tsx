'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Monitor, Camera, Calendar, Printer, GraduationCap, MessageSquare } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const ServicesSection = () => {
  // Services data
  const services = [
    {
      title: "Integrated Digital Solutions",
      bullets: [
        "Comprehensive digital marketing strategies (advertising, social media management, SEO)",
        "Website and application development and management",
        "Digital campaign design and effectiveness measurement"
      ],
      icon: Monitor
    },
    {
      title: "Creative Production & Visual Content",
      bullets: [
        "Professional video production (documentaries, commercials, educational content)",
        "Branding and visual identity design",
        "Photography and graphic design services"
      ],
      icon: Camera
    },
    {
      title: "Event & Project Management",
      bullets: [
        "Organizing events and conferences",
        "Logistics and hospitality coordination",
        "Presentation and pitch deck design"
      ],
      icon: Calendar
    },
    {
      title: "Printing & Technical Support",
      bullets: [
        "High-quality printed materials (brochures, reports, marketing materials)",
        "Technical oversight to ensure compliance with required standards",
        "Design coordination for print and publication"
      ],
      icon: Printer
    },
    {
      title: "Consulting & Training",
      bullets: [
        "Designing and delivering training workshops in digital marketing, communication, and project management",
        "Organizational development consulting for efficiency enhancement",
        "Supporting international and local organizations with well-structured plans for improved performance"
      ],
      icon: GraduationCap
    },
    {
      title: "Corporate Communication Solutions",
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
    <section className="py-16 md:py-24 bg-black">
      {/* Horizontal separator line */}
      <div className="w-full border-t border-white/20 mb-16 md:mb-24"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
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
            <span className="text-md md:text-lg font-regular text-neutral-gray">
              OUR SERVICES
            </span>
          </div>

          {/* Subheading */}
          <div className="max-w-7xl">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-regular text-neutral-black leading-tight">
              At SherHub, we believe that delivering real value to our clients begins with a deep understanding of their needs and aspirations. Our services are designed to provide comprehensive solutions that achieve this and leave a lasting impact.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
                  className="p-8"
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
                  <h3 className="text-xl md:text-2xl font-medium text-bg-primary mb-6 group-hover:text-brand-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-neutral-gray group-hover:text-bg-primary transition-colors duration-300">
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
  );
};

export default ServicesSection;
