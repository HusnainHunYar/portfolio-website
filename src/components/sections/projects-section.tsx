'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/data/projects';

const filters = ['All', 'Featured', 'Web Apps', 'Mobile', 'AI/ML'];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return project.featured;
    if (activeFilter === 'Web Apps')
      return project.technologies.some((tech) =>
        ['Next.js', 'React', 'Vue.js', 'Django'].includes(tech)
      );
    if (activeFilter === 'Mobile')
      return project.technologies.includes('React Native');
    if (activeFilter === 'AI/ML')
      return project.technologies.some((tech) =>
        ['OpenAI API', 'Python'].includes(tech)
      );
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and side projects
            </p>
          </div>
        </AnimatedSection>

        {/* Filter buttons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  layout: { duration: 0.3 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all projects button */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open('https://github.com/janedoe', '_blank')
              }
            >
              View All Projects on GitHub
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
