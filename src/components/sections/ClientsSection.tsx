'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoLoop from '@/components/ui/LogoLoop';

const ClientsSection = () => {
  // Client logos data with proper containment
  const clientLogos = [
    {
      src: "/clients/UNICEF_ForEveryChild_Cyan_Vertical_RGB__144ppiENG.png",
      alt: "UNICEF",
      title: "UNICEF"
    },
    {
      src: "/clients/logo Ridha Alwan AR.png",
      alt: "Ridha Alwan",
      title: "Ridha Alwan"
    },
    {
      src: "/clients/2.-Logo-Orange-Corners-Orange-White---without-tagline.png",
      alt: "Orange Corners",
      title: "Orange Corners"
    },
    {
      src: "/clients/Arabic Logo Organization Horizontal RGB Blue.png",
      alt: "Arabic Organization",
      title: "Arabic Organization"
    },
    {
      src: "/clients/Grofin 2.png",
      alt: "Grofin",
      title: "Grofin"
    },
    {
      src: "/clients/Asset 1@4x (002).png",
      alt: "Client Logo",
      title: "Client"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header with icon and "OUR CLIENTS" */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/black-orange-symbol.svg"
              alt="SherHub Symbol"
              width={24}
              height={24}
              className="w-10 h-10"
            />
            <span className="text-md md:text-lg font-regular text-neutral-gray">
              OUR CLIENTS
            </span>
          </div>

          {/* Logo Loop Container */}
          <div className="relative">
            <LogoLoop
              logos={clientLogos}
              speed={60}
              direction="left"
              logoHeight={64}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="#000000"
              scaleOnHover={false}
              ariaLabel="Our trusted clients"
              className="py-8"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
