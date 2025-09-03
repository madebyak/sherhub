'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/logos/black-orange-symbol.svg"
                alt="SherHub Symbol"
                width={68}
                height={63}
                className="mx-auto"
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-medium text-white text-center"
            >
              Just Say Hello!
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="relative bg-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-neutral-black rounded-3xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="relative h-[600px] md:h-[700px]">
              <Image
                src="/crew-long-exposure.png"
                alt="Contact Hero Image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 991px) 728px, 940px"
              />
              <div className="absolute inset-0 bg-black/60" />
              
              {/* Contact Information Overlay */}
              <div className="absolute bottom-8 left-8 right-8 md:left-16 md:right-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  


                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-2xl md:text-3xl font-medium text-white">
                      Erbil, Kurdistan Region, Iraq
                    </p>
                  </motion.div>

                  {/* Email Contact */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
                      Email Us
                    </p>
                    <Link 
                      href="mailto:info@sherhub.com"
                      className="text-2xl md:text-3xl font-medium text-white hover:text-brand-primary transition-colors duration-300"
                    >
                      info@sherhub.com
                    </Link>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
                  Collaborated with renowned global brands.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-white/80 leading-relaxed">
                  Please feel free to contact us, and we will be in touch shortly. Together, we can determine if there is a mutual fit and explore potential opportunities for collaboration.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
                    Follow Us
                  </span>
                  <div className="flex-1 h-px bg-white/20" />
                </div>
                
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/SherHub0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 group">
                    <Facebook size={18} className="text-white group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                  <Link href="https://www.linkedin.com/company/sherhub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 group">
                    <Linkedin size={18} className="text-white group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                  <Link href="https://www.instagram.com/sherhub0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-black rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 group">
                    <Instagram size={18} className="text-white group-hover:scale-110 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-neutral-black/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter Your Message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all duration-300 resize-vertical"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group w-full px-8 py-4 bg-white rounded-full font-medium text-black transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-20 text-lg">
                    Submit Message
                  </span>
                  <div 
                    className="absolute inset-0 bg-brand-primary group-hover:translate-x-0"
                    style={{ 
                      transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform',
                      transition: 'transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)'
                    }}
                  />
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
