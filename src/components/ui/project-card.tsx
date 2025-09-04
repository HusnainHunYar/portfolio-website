'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden h-full flex flex-col">
      {/* Project image */}
      <div className="relative overflow-hidden">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Overlay with links */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
          initial={false}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Button>
        </motion.div>
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="group-hover:text-primary transition-colors duration-300">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
            className="flex-1 gap-2"
          >
            <Github className="h-4 w-4" />
            Code
          </Button>
          <Button
            size="sm"
            onClick={() => window.open(project.liveUrl, '_blank')}
            className="flex-1 gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Demo
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
