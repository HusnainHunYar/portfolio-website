'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/animated-section';
import { skills } from '@/data/skills';
import { SkillCard } from '@/components/ui/skill-card';

const categories = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Databases',
  tools: 'Tools & DevOps',
  other: 'Other',
};

export function SkillsSection() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], categoryIndex) => (
              <AnimatedSection key={category} delay={categoryIndex * 0.2}>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-2 relative inline-block">
                      {categories[category as keyof typeof categories]}
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </h3>
                  </motion.div>

                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                      >
                        <SkillCard skill={skill} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </AnimatedSection>
            )
          )}
        </div>
      </div>
    </section>
  );
}
