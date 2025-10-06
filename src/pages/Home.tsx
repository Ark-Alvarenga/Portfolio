import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutMeSection from '../components/AboutMeSection';
import ProjectsSection from '../components/ProjectsSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;
