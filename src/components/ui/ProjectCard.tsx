
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  category, 
  image, 
  link 
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative rounded-xl overflow-hidden bg-card text-card-foreground shadow-sm border border-border h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 ease-out",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-foreground/40 transition-opacity duration-300",
          isHovered ? "opacity-30" : "opacity-0"
        )} />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary text-primary-foreground">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-display font-medium mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        {link && (
          <a 
            href={link} 
            className="inline-flex items-center text-sm font-medium text-card-foreground hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project <ArrowUpRight size={16} className="ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
