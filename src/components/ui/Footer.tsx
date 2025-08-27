'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const menuLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', label: 'Facebook', icon: Facebook },
    { href: '#', label: 'Instagram', icon: Instagram },
    { href: '#', label: 'LinkedIn', icon: Linkedin },
  ];

  return (
    <footer className="bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column - Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/logos/logo-white-horizantal.svg"
                  alt="SherHub Logo"
                  width={140}
                  height={35}
                  className="h-9 w-auto"
                />
              </Link>
              <p className="text-neutral-gray text-sm leading-relaxed max-w-sm">
                At SherHub, we transform abstract concepts into tangible achievements. Through inclusivity, innovation, and a fresh approach to ideas, we help you leave a lasting mark that endures through time.
              </p>
            </motion.div>

            {/* Center Column - Menu Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 lg:pl-8"
            >
              <h3 className="text-bg-primary font-medium text-lg">Menu</h3>
              <nav className="space-y-4">
                {menuLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-neutral-gray hover:text-brand-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Right Column - Contact & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-bg-primary font-medium text-lg">Contact Us</h3>
                <div className="space-y-3">
                  <Link 
                    href="mailto:info@sherhub.com"
                    className="flex items-center gap-3 text-neutral-gray hover:text-brand-primary transition-colors duration-200 text-sm group"
                  >
                    <Mail size={16} className="group-hover:scale-110 transition-transform duration-200" />
                    info@sherhub.com
                  </Link>
                  <Link 
                    href="tel:+9647711152005"
                    className="flex items-center gap-3 text-neutral-gray hover:text-brand-primary transition-colors duration-200 text-sm group"
                  >
                    <Phone size={16} className="group-hover:scale-110 transition-transform duration-200" />
                    +964 771 115 2005
                  </Link>
                </div>
              </div>

              {/* Social Networks */}
              <div className="space-y-4">
                <h3 className="text-bg-primary font-medium text-lg">Social Networks</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 text-neutral-gray hover:text-brand-primary transition-colors duration-200 text-sm group"
                    >
                      <social.icon 
                        size={16} 
                        className="group-hover:scale-110 transition-transform duration-200" 
                      />
                      {social.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="border-t-[0.3px] border-neutral-gray/20"></div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 text-left"
        >
          <p className="text-neutral-gray text-sm">
            © {new Date().getFullYear()} SherHub. All rights reserved. 
            <span className="mx-2">•</span>
            Beyond Ordinary.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;