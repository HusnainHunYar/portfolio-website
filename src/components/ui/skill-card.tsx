'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

// Simple Icons mapping - using CSS classes for icons
const iconMap: Record<string, string> = {
  react: '⚛️',
  nextdotjs: '▲',
  typescript: 'TS',
  nodedotjs: '🟢',
  python: '🐍',
  postgresql: '🐘',
  docker: '🐳',
  amazonwebservices: '☁️',
  git: '📝',
  tailwindcss: '🎨',
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="text-4xl mb-3"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          {iconMap[skill.icon] || '⚡'}
        </motion.div>

        {/* Skill name */}
        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
          {skill.name}
        </h4>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary/20 opacity-0 group-hover:opacity-100"
        initial={false}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
