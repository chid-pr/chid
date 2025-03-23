
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import ContactForm from '@/components/sections/ContactForm';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "John Doe | Portfolio";
  }, []);
  
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-grow"
        >
          <Hero />
          <Projects />
          
          {/* Services Section Placeholder */}
          <section id="services" className="py-20">
            <div className="section-container text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-4">
                My Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                How I Can Help You
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                I offer a range of services to help businesses and individuals create
                exceptional digital experiences. Let's work together on your next project.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service cards would go here */}
                <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                  <h3 className="text-xl font-display font-medium mb-3">
                    Web Development
                  </h3>
                  <p className="text-muted-foreground">
                    Custom websites and web applications built with modern technologies.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                  <h3 className="text-xl font-display font-medium mb-3">
                    DevOps Consulting
                  </h3>
                  <p className="text-muted-foreground">
                    Cloud infrastructure, CI/CD pipelines, and deployment strategies.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white shadow-sm border border-border">
                  <h3 className="text-xl font-display font-medium mb-3">
                    Creative Services
                  </h3>
                  <p className="text-muted-foreground">
                    Design, video production, and marketing materials for your brand.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* About Section Placeholder */}
          <section id="about" className="py-20 bg-primary/20">
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-4">
                    About Me
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
                    My Journey
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a senior software engineer with over 8 years of experience in building
                      web applications and services. Currently, I work at Newswhip where I help
                      develop solutions that analyze and track content across the web.
                    </p>
                    <p>
                      Outside of my full-time role, I enjoy working on freelance projects that 
                      allow me to explore different technologies and creative disciplines. From
                      DevOps to design, I love the variety and challenges that come with each
                      new project.
                    </p>
                    <p>
                      When I'm not coding, you'll find me hiking, reading, or experimenting
                      with new recipes in the kitchen.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative max-w-md">
                    <img 
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80" 
                      alt="John Doe" 
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-accent -rotate-12 animate-float" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <ContactForm />
        </motion.main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
