import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    imageUrl:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/task-manager',
    liveUrl: 'https://taskmanager-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Sass'],
    imageUrl:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description:
      'Analytics dashboard for social media metrics with data visualization, automated reporting, and performance insights.',
    technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/social-analytics',
    liveUrl: 'https://analytics-demo.vercel.app',
    featured: false,
  },
  {
    id: '5',
    title: 'Fitness Tracking App',
    description:
      'Mobile-first fitness application with workout tracking, progress visualization, and social features for motivation.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    imageUrl:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/fitness-tracker',
    liveUrl: 'https://fitness-app-demo.vercel.app',
    featured: true,
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool with multiple templates, SEO optimization, and collaborative editing features.',
    technologies: [
      'Next.js',
      'OpenAI API',
      'Prisma',
      'Supabase',
      'Framer Motion',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    githubUrl: 'https://github.com/janedoe/ai-content-generator',
    liveUrl: 'https://ai-content-demo.vercel.app',
    featured: false,
  },
];
