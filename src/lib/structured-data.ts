import { SITE_CONFIG } from './constants';

export const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_CONFIG.name,
  jobTitle: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  image: SITE_CONFIG.ogImage,
  sameAs: [
    SITE_CONFIG.links.github,
    SITE_CONFIG.links.linkedin,
    SITE_CONFIG.links.twitter,
  ],
  knowsAbout: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'Web Development',
    'Full-Stack Development',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'University of Technology',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
};

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${SITE_CONFIG.name} - Portfolio`,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  author: {
    '@type': 'Person',
    name: SITE_CONFIG.name,
  },
  inLanguage: 'en-US',
};
