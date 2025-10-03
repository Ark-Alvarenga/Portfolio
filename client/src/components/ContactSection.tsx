import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ContactFormData } from '../types';
import { slideUpVariants, fadeInVariants } from '../utils/animations';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message sent successfully! (This is a demo - check console for data)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUpVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or collaboration opportunity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name" 
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                  required
                  data-testid="contact-name-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all" 
                  required
                  data-testid="contact-email-input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..." 
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" 
                  required
                  data-testid="contact-message-input"
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full px-6 py-3 font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent rounded-lg hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.98 }}
                data-testid="contact-submit-button"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          {/* Social Links & Info */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/Ark-Alvarenga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/80 transition-all group"
                  whileHover={{ x: 8 }}
                  data-testid="social-github"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">@Ark-Alvarenga</p>
                  </div>
                </motion.a>
                
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/archimedes-alvarenga-5314b2211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/80 transition-all group"
                  whileHover={{ x: 8 }}
                  data-testid="social-linkedin"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect with me</p>
                  </div>
                </motion.a>
                
                {/* Email */}
                <motion.a
                  href="mailto:arkalvarenga@gmail.com"
                  className="flex items-center gap-4 p-4 bg-secondary border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/80 transition-all group"
                  whileHover={{ x: 8 }}
                  data-testid="social-email"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">arkalvarenga@gmail.com</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
