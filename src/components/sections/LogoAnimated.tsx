'use client';

import { motion } from 'framer-motion';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';

const LogoAnimated = () => {
  return (
    <section className="hidden md:block py-2 bg-[#000000]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center w-full"
      >
        <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full">
          <TextHoverEffect 
            text="SHERHUB" 
            duration={0.4}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LogoAnimated;
