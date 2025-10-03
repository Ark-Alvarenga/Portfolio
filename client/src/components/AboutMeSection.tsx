import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { fadeInVariants, slideUpVariants } from '../utils/animations';

const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Archimedes Alvarenga" 
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </motion.div>
          
          {/* About Text */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
          >
            <h2 className="text-4xl sm:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a dedicated developer passionate about building modern and scalable applications. With over 3 years of experience in React, Next.js, TypeScript, Node.js, and AWS, I focus on creating interactive, user-friendly solutions that combine performance and innovation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I love challenges, creativity, and logic, and I'm especially excited about the potential of AI and Web3 to transform the way people use technology.
              </p>
            </div>
            
            {/* GitHub Button */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/Ark-Alvarenga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
                data-testid="github-link"
              >
                <Github className="w-5 h-5" />
                View GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
