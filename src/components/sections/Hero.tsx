
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 pb-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                Senior Software Engineer
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
                Hello, I'm John Doe.
                <span className="block text-muted-foreground mt-2">
                  I craft digital experiences.
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                I'm a full-stack developer at Newswhip with a passion for creating
                elegant solutions through clean code. I also take on freelance projects
                in development, DevOps, and creative work.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#projects" 
                  className="button-hover inline-flex items-center justify-center rounded-lg bg-foreground text-background px-6 py-3 text-sm font-medium"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="button-hover inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium"
                >
                  Get in Touch <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent shadow-lg image-glow">
                <img
                  src="https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="John Doe"
                  className="w-full h-full object-cover opacity-100"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-primary rotate-12 animate-float" />
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-xl bg-accent -rotate-12 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
