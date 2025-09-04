'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface SkillCardProps {
  skill: Skill;
}

// SVG Icons for skills
const IconComponent = ({ iconName }: { iconName: string }) => {
  const iconProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    className: 'w-12 h-12 mx-auto',
  };

  switch (iconName) {
    case 'react':
      return (
        <svg {...iconProps} fill="#61DAFB">
          <circle cx="12" cy="12" r="2" />
          <path
            d="M12,1C18.5,1 24,6.5 24,13C24,19.5 18.5,25 12,25C5.5,25 0,19.5 0,13C0,6.5 5.5,1 12,1ZM12,3C6.6,3 2,7.6 2,13C2,18.4 6.6,23 12,23C17.4,23 22,18.4 22,13C22,7.6 17.4,3 12,3Z"
            opacity="0.3"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case 'nextdotjs':
      return (
        <svg {...iconProps} fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.18 0 2.31-.21 3.36-.6L8.4 14.6V9.4h3.2v4.48l4.8 6.72c1.71-1.28 3-3.17 3.6-5.33V12c0-5.52-4.48-10-10-10z" />
        </svg>
      );
    case 'typescript':
      return (
        <svg {...iconProps} fill="#3178C6">
          <rect width="24" height="24" rx="2" fill="#3178C6" />
          <path
            d="M9.5 8.5h5v1.5h-1.75v6h-1.5v-6H9.5v-1.5zm4.5 2.5h1.5v1h1v1h-1v2.5c0 .28.22.5.5.5h.5v1h-.5c-.83 0-1.5-.67-1.5-1.5V13h-1v-1h1v-1z"
            fill="white"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg {...iconProps} fill="#F7DF1E">
          <rect width="24" height="24" rx="2" fill="#F7DF1E" />
          <path
            d="M7.5 14.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm6-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1z"
            fill="#000"
          />
        </svg>
      );
    case 'python':
      return (
        <svg {...iconProps} fill="#3776AB">
          <path d="M12 2C8.13 2 5 5.13 5 9v2c0 1.1.9 2 2 2h2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-5h2c1.1 0 2-.9 2-2V9c0-3.87-3.13-7-7-7zm-2 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      );
    case 'nodedotjs':
      return (
        <svg {...iconProps} fill="#339933">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM8 17.5l-4-2v-7l4-2 4 2v7l-4 2zm8 0l-4-2v-7l4-2 4 2v7l-4 2z" />
        </svg>
      );
    case 'django':
      return (
        <svg {...iconProps} fill="#092E20">
          <path d="M7 2h4v18c-2.21 0-4-1.79-4-4V2zm6 0h4v12c0 2.21-1.79 4-4 4V2z" />
          <rect x="7" y="6" width="2" height="8" fill="#092E20" />
          <rect x="15" y="6" width="2" height="8" fill="#092E20" />
        </svg>
      );
    case 'flask':
      return (
        <svg {...iconProps} fill="currentColor">
          <path d="M9 2v6L4 14h16L15 8V2H9zm2 2h2v4.17l3 4.83H8l3-4.83V4z" />
        </svg>
      );
    case 'postgresql':
      return (
        <svg {...iconProps} fill="#336791">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg {...iconProps} fill="#47A248">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg {...iconProps} fill="#4479A1">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v-.07zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    case 'docker':
      return (
        <svg {...iconProps} fill="#2496ED">
          <path d="M13.5 3h-3v2h3V3zm0 3h-3v2h3V6zm-4 0h-3v2h3V6zm-4 0H2.5v2h3V6zm8 0h-3v2h3V6zm0 3h-3v2h3V9zm-4 0h-3v2h3V9zm-4 0H2.5v2h3V9zm12 0h-3v2h3V9zm-4-6h-3v2h3V3z" />
        </svg>
      );
    case 'git':
      return (
        <svg {...iconProps} fill="#F05032">
          <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.828 0L9.257 4.184l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.284.169.407.29a1.537 1.537 0 0 1-2.174 2.173 1.537 1.537 0 0 1 0-2.173c.152-.15.322-.264.499-.334V9.725a1.529 1.529 0 0 1-.83-2.016l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.292 1.292 0 0 0 1.828 0l8.69-8.729a1.285 1.285 0 0 0 .031-1.856z" />
        </svg>
      );
    case 'tailwindcss':
      return (
        <svg {...iconProps} fill="#06B6D4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z" />
        </svg>
      );
    case 'html5':
      return (
        <svg {...iconProps} fill="#E34F26">
          <path d="M3.345 21.601L1.419 0h21.162l-1.928 21.597L11.987 24l-8.642-2.399zM17.277 8.564l-.227 2.543-.003.034H9.5l.18 2.016h7.138l-.544 6.086-.008.084-5.266 1.461-5.264-1.461-.36-4.031h2.578l.183 2.052 2.863.772.003-.001 2.865-.772.298-3.347H6.264l-.532-5.964-.006-.067h11.548l-.197 2.198z" />
        </svg>
      );
    case 'css3':
      return (
        <svg {...iconProps} fill="#1572B6">
          <path d="M3.345 21.601L1.419 0h21.162l-1.928 21.597L11.987 24l-8.642-2.399zM17.277 8.564l-.227 2.543-.003.034H9.5l.18 2.016h7.138l-.544 6.086-.008.084-5.266 1.461-5.264-1.461-.36-4.031h2.578l.183 2.052 2.863.772.003-.001 2.865-.772.298-3.347H6.264l-.532-5.964-.006-.067h11.548l-.197 2.198z" />
        </svg>
      );
    case 'amazonwebservices':
      return (
        <svg {...iconProps} fill="#FF9900">
          <path d="M6.914 14.123c0 .374.048.675.143.903.095.228.19.456.333.627.048.048.048.095.048.143 0 .095-.048.143-.143.19l-.475.333c-.095.048-.143.048-.19.048-.095 0-.143-.048-.19-.095-.143-.143-.238-.285-.333-.475-.095-.19-.143-.38-.143-.627 0-.713.333-1.045 1.045-1.045.19 0 .38.048.57.095v-.285c0-.57-.285-.855-.855-.855-.19 0-.38.048-.57.095-.19.048-.38.095-.57.143-.095.048-.143.048-.19.048-.095 0-.143-.095-.143-.19v-.285c0-.095.048-.143.095-.19.048-.048.095-.048.19-.095.19-.095.428-.143.713-.19.285-.048.57-.048.855-.048.665 0 1.14.143 1.473.475.285.333.428.808.428 1.426v1.901zm-3.325.57c.19 0 .38-.048.618-.095.238-.095.428-.285.57-.57.095-.19.143-.38.143-.618v-.285c-.143-.048-.285-.095-.475-.095-.19-.048-.38-.048-.57-.048-.38 0-.665.095-.855.285-.19.19-.285.475-.285.808 0 .333.095.57.285.713.19.19.475.285.57.285zm5.89.808c-.095 0-.19-.048-.238-.095-.048-.048-.095-.143-.143-.238l-1.568-5.225c-.048-.143-.048-.238-.048-.285 0-.143.095-.238.238-.238h.998c.095 0 .19.048.238.095.048.048.095.143.143.238l1.14 4.465 1.045-4.465c.048-.143.095-.19.143-.238.048-.048.143-.095.238-.095h.808c.095 0 .19.048.238.095.048.048.095.143.143.238l1.045 4.513 1.14-4.513c.048-.143.095-.19.143-.238.048-.048.143-.095.238-.095h.95c.143 0 .238.095.238.238 0 .048 0 .095-.048.143 0 .048-.048.095-.048.19l-1.568 5.225c-.048.143-.095.19-.143.238-.048.048-.143.095-.238.095h-.855c-.095 0-.19-.048-.238-.095-.048-.048-.095-.143-.143-.238l-1.045-4.37-1.045 4.37c-.048.143-.095.19-.143.238-.048.048-.143.095-.238.095h-.855zm9.31.19c-.428 0-.855-.048-1.235-.19-.38-.143-.665-.285-.808-.475-.095-.095-.143-.19-.143-.285v-.285c0-.095.048-.19.143-.19.048 0 .095 0 .143.048.048.048.095.048.19.095.238.095.475.143.713.19.238.048.475.048.713.048.38 0 .665-.095.855-.238.19-.143.285-.38.285-.665 0-.19-.095-.38-.238-.523-.143-.143-.428-.285-.808-.428l-1.14-.38c-.57-.19-.998-.475-1.235-.808-.238-.333-.38-.713-.38-1.14 0-.333.095-.618.238-.903.143-.285.333-.523.57-.713.238-.19.523-.333.855-.428.333-.095.665-.143 1.045-.143.19 0 .38.048.57.048.19.048.38.095.57.143.19.048.333.095.475.143.143.048.238.095.333.143.095.095.143.19.143.285v.285c0 .095-.048.19-.143.19-.048 0-.143-.048-.238-.095-.333-.143-.713-.238-1.14-.238-.333 0-.618.095-.808.238-.19.143-.285.38-.285.618 0 .19.095.38.285.523.19.143.523.285.95.428l1.14.38c.57.19.95.475 1.188.808.238.333.333.713.333 1.14 0 .333-.095.665-.238.95-.143.285-.333.523-.618.713-.238.19-.57.333-.903.428-.38.095-.713.143-1.14.143z" />
        </svg>
      );
    case 'github':
      return (
        <svg {...iconProps} fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      );
    case 'express':
      return (
        <svg {...iconProps} fill="currentColor">
          <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.978-2.667C.480 14.576-.618 12.618.002 11.576z" />
        </svg>
      );
    case 'visualstudiocode':
      return (
        <svg {...iconProps} fill="#007ACC">
          <path d="M17.5 0L6.774 2.683 2.683 6.774 0 17.5l2.683 10.726L6.774 32.317 17.5 35l10.726-2.683L32.317 28.226 35 17.5l-2.683-10.726L28.226 2.683 17.5 0zm0 7L28 17.5 17.5 28 7 17.5 17.5 7z" />
        </svg>
      );
    default:
      return (
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-lg">
          {iconName.charAt(0).toUpperCase()}
        </div>
      );
  }
};

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          className="mb-4 flex justify-center"
          whileHover={{
            rotate: [0, -5, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <IconComponent iconName={skill.icon} />
        </motion.div>

        {/* Skill name */}
        <motion.h4
          className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.h4>

        {/* Skill level indicator */}
        <motion.div
          className="mt-3 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '85%' }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary/30 opacity-0 group-hover:opacity-100"
        initial={false}
        whileHover={{
          scale: 1.02,
          borderColor: 'rgba(59, 130, 246, 0.5)',
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
