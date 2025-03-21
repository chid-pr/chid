
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SplineSceneDemo } from '@/components/ui/spline-demo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Interactive3D = () => {
  useEffect(() => {
    // Set page title
    document.title = "Interactive 3D | John Doe";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="section-container">
            <div className="grid grid-cols-1 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center space-y-6 max-w-3xl mx-auto"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Interactive Experiences
                </span>
                
                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
                  Bring Your Ideas To Life With 3D
                </h1>
                
                <p className="text-lg text-muted-foreground">
                  Explore the power of interactive 3D design and development. Create immersive experiences
                  that captivate your audience and elevate your digital presence.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Button className="button-hover" variant="default" size="lg">
                    Get Started
                  </Button>
                  <Button className="button-hover" variant="outline" size="lg">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* 3D Demo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16"
            >
              <SplineSceneDemo />
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {[
                {
                  title: 'Interactive 3D Models',
                  description: 'Create interactive 3D models that users can explore from every angle.'
                },
                {
                  title: 'Web-Based Visualizations',
                  description: 'Build beautiful visualizations directly in the browser, no plugins required.'
                },
                {
                  title: 'Immersive Experiences',
                  description: 'Design memorable, immersive experiences that stand out from the crowd.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="p-6 rounded-xl bg-white shadow-sm border border-border"
                >
                  <h3 className="text-xl font-display font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Interactive3D;
