import { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt:
      'Learn how to structure large React applications using TypeScript, focusing on maintainability, type safety, and developer experience.',
    publishedAt: '2024-01-15',
    readTime: 8,
    slug: 'building-scalable-react-applications-typescript',
  },
  {
    id: '2',
    title: 'The Future of Web Development: Server Components and Beyond',
    excerpt:
      'Exploring the latest trends in web development, including React Server Components, edge computing, and the evolution of full-stack frameworks.',
    publishedAt: '2024-01-08',
    readTime: 12,
    slug: 'future-web-development-server-components',
  },
  {
    id: '3',
    title: 'Optimizing Performance in Next.js Applications',
    excerpt:
      'A comprehensive guide to performance optimization techniques in Next.js, covering image optimization, code splitting, and Core Web Vitals.',
    publishedAt: '2024-01-01',
    readTime: 10,
    slug: 'optimizing-performance-nextjs-applications',
  },
];
