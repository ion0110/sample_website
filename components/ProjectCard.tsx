import React from 'react';
import { Project } from '../types';
import { Button } from './Button';
import { ScrollReveal } from './ScrollReveal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <ScrollReveal className="group w-full block cursor-pointer" delay={index * 100}>
      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-gray-200 mb-6">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <Button href={project.link} className="!py-2 !px-4 !text-xs !bg-white !text-black border-none">View</Button>
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-2">
           <h3 className="font-display font-medium text-2xl text-black group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-gray-400">0{index + 1}</span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};