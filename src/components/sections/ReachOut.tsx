'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ReachOut = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex items-center justify-center bg-black min-h-[400px] lg:min-h-auto"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/left-contact.png"
              alt="Contact Background"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 lg:p-16 max-w-lg w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
                have a project in mind?
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Just Say Hello */}
              <div className="space-y-4">
                <p className="text-lg text-white/80 font-medium">
                  just say hello!
                </p>
                <Link 
                  href="mailto:info@sherhub.com" 
                  className="block border border-white/30 rounded-lg p-3 md:p-4 hover:border-brand-primary transition-all duration-300 group"
                >
                  <span className="text-xl md:text-2xl lg:text-3xl font-medium text-white group-hover:text-brand-primary transition-colors duration-300 break-all">
                    info@sherhub.com
                  </span>
                </Link>
              </div>


            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex items-center justify-center bg-black min-h-[400px] lg:min-h-auto"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/business-handshake.png"
              alt="Business Partnership"
              fill
              className="object-cover opacity-70"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 lg:p-16 max-w-lg w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-tight">
                Looking to hire an agency?
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group px-8 py-4 bg-black rounded-full font-medium text-white transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-20 text-lg">
                    Let&apos;s talk to experts
                  </span>
                  <div 
                    className="absolute inset-0 bg-orange group-hover:translate-x-0"
                    style={{ 
                      transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform',
                      transition: 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)'
                    }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ReachOut;