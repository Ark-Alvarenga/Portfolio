import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { fadeInVariants, slideUpVariants } from '../utils/animations';
import ProfilePhoto from '@/components/ProfilePhoto';

const HeroSection: React.FC = () => {
  const scrollToSection = useScrollTo();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Gradient + SVG Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
          <motion.div variants={slideUpVariants} className="mb-8 flex justify-center">
            <ProfilePhoto />
          </motion.div>

          <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6" variants={slideUpVariants}>
            Archimedes Alvarenga
          </motion.h1>

          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 gradient-text px-2" variants={slideUpVariants}>
            Full-Stack Web Developer | React • Next.js • TypeScript • AWS
          </motion.h2>

          <motion.p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10" variants={slideUpVariants}>
            I build scalable, modern applications powered by React, Next.js, and cloud technologies.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={slideUpVariants}>
            <motion.button
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-primary-foreground bg-primary rounded-lg overflow-hidden transition-all"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0" whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} />
            </motion.button>

            <motion.button
              className="inline-flex items-center justify-center px-8 py-3 font-semibold text-foreground bg-secondary rounded-lg border border-border hover:bg-secondary/80 transition-all"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
