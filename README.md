# Portfolio Website

A modern, high-performance portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, dark/light mode toggle, and SEO optimization.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **3D Graphics**: Three.js integration for engaging visual elements
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Performance**: Lighthouse scores ≥ 90, lazy loading, and optimized images
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Contact Form**: Functional contact form with validation

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # React components
│   │   ├── 3d/                 # Three.js components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # Reusable UI components
│   ├── data/                   # Static data
│   │   ├── blog-posts.ts       # Blog post data
│   │   ├── projects.ts         # Project data
│   │   └── skills.ts           # Skills data
│   ├── lib/                    # Utility functions
│   │   ├── constants.ts        # App constants
│   │   ├── structured-data.ts  # SEO structured data
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript definitions
├── public/                     # Static assets
└── package.json                # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### Replace Dummy Data

#### 1. Personal Information

Edit `src/lib/constants.ts`:

```typescript
export const SITE_CONFIG = {
  name: 'Your Name', // Replace with your name
  title: 'Your Title', // Replace with your job title
  description: 'Your bio', // Replace with your description
  url: 'https://yoursite.com', // Replace with your domain
  // ... update all links
};
```

#### 2. About Section

Edit `src/components/sections/about-section.tsx`:

- Replace Lorem Ipsum paragraphs with your actual bio
- Update the Unsplash image URL with your headshot
- Modify the stats (years experience, projects, etc.)

#### 3. Skills

Edit `src/data/skills.ts`:

- Add/remove skills based on your expertise
- Update skill categories
- Customize skill icons

#### 4. Projects

Edit `src/data/projects.ts`:

- Replace dummy projects with your actual work
- Update project descriptions, technologies, and URLs
- Replace Unsplash images with your project screenshots

#### 5. Blog Posts

Edit `src/data/blog-posts.ts`:

- Add your actual blog posts
- Update titles, excerpts, and publication dates
- Link to your actual blog platform

#### 6. Contact Information

Edit `src/components/sections/contact-section.tsx`:

- Update contact details (email, phone, location)
- Configure the contact form endpoint
- Add your actual social media links

### Styling Customization

#### Colors & Theme

Edit `src/app/globals.css`:

```css
:root {
  --primary: #your-color; /* Primary brand color */
  --accent: #your-color; /* Accent color */
  /* ... customize other colors */
}
```

#### Fonts

Edit `src/app/layout.tsx`:

```typescript
// Replace with your preferred Google Fonts
const yourFont = Your_Font({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

### Animation Preferences

- Animations respect `prefers-reduced-motion` settings
- Customize animation durations in `src/lib/constants.ts`
- Modify Framer Motion variants in individual components

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Other Platforms

The app is a standard Next.js application and can be deployed to:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance Optimization

### Built-in Optimizations

- Next.js Image optimization
- Automatic code splitting
- Font optimization
- Bundle analysis with `@next/bundle-analyzer`

### Performance Monitoring

```bash
# Analyze bundle size
npm run build
npm run analyze

# Run Lighthouse audit
npm run lighthouse
```

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Three.js](https://threejs.org/) - 3D graphics
- [Lucide React](https://lucide.dev/) - Icon library
- [Unsplash](https://unsplash.com/) - Placeholder images

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: your-email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)

---

**Note**: This is a template portfolio. Remember to replace all placeholder content with your actual information before deploying to production.
