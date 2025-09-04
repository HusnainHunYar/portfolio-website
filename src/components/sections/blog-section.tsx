'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50 transition-colors duration-300">
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>

                    <CardTitle className="group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="line-clamp-3 flex-1">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <motion.div
                      className="flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300"
                      whileHover={{ x: 4 }}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-0 transition-all duration-300" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open('/blog', '_blank')}
              className="gap-2"
            >
              View All Posts
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
