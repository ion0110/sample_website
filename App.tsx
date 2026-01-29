import React from 'react';
import { PORTFOLIO_DATA } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { ScrollReveal } from './components/ScrollReveal';

const App: React.FC = () => {
  const content = PORTFOLIO_DATA;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      
      {/* Navigation - Floating Dock style for mobile, minimal top for desktop */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white">
        <a href="#" className="font-display font-bold text-xl tracking-tighter">
          {content.profile.name}
        </a>
        <div className="hidden md:flex gap-8">
          {['Works', 'Experience', 'About'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium hover:opacity-50 transition-opacity uppercase tracking-widest">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
        <div className="max-w-7xl w-full mx-auto">
          <ScrollReveal delay={0}>
             <p className="text-sm md:text-base mb-4 font-mono text-gray-500 uppercase tracking-widest">
                Based in Tokyo, Japan
             </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="font-display font-semibold text-[14vw] leading-[0.9] tracking-tighter text-black -ml-1 md:-ml-2">
              FRONTEND
            </h1>
          </ScrollReveal>
          
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <ScrollReveal delay={400} className="md:w-1/2">
               <h1 className="font-display font-semibold text-[14vw] leading-[0.9] tracking-tighter text-black -ml-1 md:-ml-2">
                ENGINEER
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={600} className="md:w-1/3 mt-8 md:mt-4 md:pt-4">
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {content.profile.bio}
              </p>
              <div className="flex gap-4 mt-8">
                 {content.profile.socials.map(s => (
                   <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-wider border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors">
                     {s.name}
                   </a>
                 ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-6 md:left-12 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
          </svg>
        </div>
      </section>

      {/* Marquee Skills */}
      <section className="py-8 border-y border-gray-200 bg-white overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap">
          {[...content.skills, ...content.skills, ...content.skills, ...content.skills].map((skill, i) => (
            <span key={i} className="text-4xl md:text-6xl font-display font-bold text-transparent text-outline px-8 uppercase">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="works" className="px-6 md:px-12 py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-24 flex items-end justify-between border-b border-gray-300 pb-8">
             <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight">Selected Works</h2>
             <span className="hidden md:block font-mono text-sm text-gray-500">(2022 — 2024)</span>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {content.projects.map((project, index) => (
              <div key={project.id} className={index % 2 === 1 ? "md:mt-32" : ""}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 md:px-12 py-32 bg-white">
        <div className="max-w-5xl mx-auto">
           <ScrollReveal className="mb-20">
             <h2 className="text-4xl md:text-5xl font-display font-medium mb-12">Experience</h2>
           </ScrollReveal>
           
           <div className="flex flex-col">
             {content.experience.map((exp, i) => (
               <ScrollReveal key={i} delay={i * 100}>
                 <div className="group border-t border-gray-200 py-12 md:py-16 hover:bg-gray-50 transition-colors -mx-6 px-6 md:-mx-12 md:px-12 cursor-default">
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                      <h3 className="text-2xl md:text-3xl font-display font-medium">{exp.company}</h3>
                      <span className="font-mono text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                      <div className="md:col-span-4 text-sm font-bold uppercase tracking-widest text-gray-400">
                        {exp.role}
                      </div>
                      <div className="md:col-span-8 text-gray-700 text-lg leading-relaxed">
                        {exp.description}
                      </div>
                    </div>
                 </div>
               </ScrollReveal>
             ))}
             <div className="border-t border-gray-200"></div>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="px-6 md:px-12 py-32 bg-[#111] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[10vw] font-display font-bold leading-none tracking-tighter mb-12">
              LET'S TALK
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 max-w-md leading-relaxed">
                Interested in working together? I'm always open to discussing new projects and opportunities.
              </p>
              <div className="mt-12">
                 <a href="mailto:example@email.com" className="inline-block border-b-2 border-white pb-2 text-2xl hover:text-gray-300 hover:border-gray-300 transition-colors">
                   hello@ion0110.dev
                 </a>
              </div>
            </ScrollReveal>
            
            <div className="flex flex-col justify-end">
               <div className="flex gap-8 mb-12">
                 {content.profile.socials.map(s => (
                   <a key={s.name} href={s.url} className="text-sm font-bold uppercase tracking-widest hover:text-gray-400 transition-colors">
                     {s.name}
                   </a>
                 ))}
               </div>
               <div className="text-gray-600 text-sm">
                 © {new Date().getFullYear()} ION0110. Designed & Built with intent.
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;