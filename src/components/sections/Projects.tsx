
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectCardProps } from '../ui/ProjectCard';

// Sample project data
const projects: ProjectCardProps[] = [
  {
    id: '1',
    title: 'E-commerce Analytics Dashboard',
    description: 'A comprehensive analytics platform for online stores with real-time data visualization.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    id: '2',
    title: 'Cloud Migration Strategy',
    description: 'DevOps project to migrate legacy infrastructure to AWS with zero downtime.',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    id: '3',
    title: 'Tech Podcast Branding',
    description: 'Created visual identity and cover art for a technology podcast series.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    id: '4',
    title: 'Startup Marketing Video',
    description: 'Produced and edited a promotional video for a tech startup\'s product launch.',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '#'
  },
  {
    id: '5',
    title: 'Real Estate Mobile App',
    description: 'React Native application for browsing and booking property viewings.',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
    link: '#'
  },
  {
    id: '6',
    title: 'Conference Promotional Materials',
    description: 'Designed flyers, banners and social media assets for a tech conference.',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    link: '#'
  }
];

const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="projects" className="py-20 bg-primary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of work that showcases my skills across different domains.
            From full-stack development to design, here's what I've been working on.
          </motion.p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-foreground text-background'
                  : 'bg-background hover:bg-foreground/10'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
