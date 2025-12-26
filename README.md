# TechVishwa - Digital Agency Website

A modern, premium digital agency website built with React Router v7, TypeScript, and modern web technologies.

## Features

- 🎨 Modern design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🎭 Professional illustrations and imagery
- 💫 Interactive elements with scroll animations
- 📧 Integrated WhatsApp contact functionality

## Tech Stack

- **React 19** - Modern React with latest features
- **React Router v7** - File-based routing and SSR
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **Lucide React** - Modern icon system
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm start
```

## Deployment to Vercel (FREE Plan)

This project is fully configured to work on Vercel's free tier with SSR enabled.

### Quick Deploy (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React Router v7
   - Click "Deploy"

### Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### What Vercel Will Use

- **Build Command**: `npm run build`
- **Output Directory**: Auto-detected by React Router v7
- **Install Command**: `npm install`
- **Framework**: React Router v7 (auto-detected)

### Vercel FREE Tier Features

- ✅ Serverless Functions (for SSR)
- ✅ Global Edge Network CDN
- ✅ Automatic HTTPS/SSL
- ✅ Preview deployments for every commit
- ✅ Custom domains
- ✅ All within FREE tier limits

### Environment Variables

No environment variables are required for basic deployment.

### Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Project Structure

```
├── app/
│   ├── components/        # Reusable components
│   │   ├── ui/           # UI component library
│   │   ├── header.tsx    # Site header
│   │   └── footer.tsx    # Site footer
│   ├── routes/           # Page routes
│   │   ├── home.tsx      # Homepage
│   │   ├── services.tsx  # Services page
│   │   ├── stories.tsx   # Success stories
│   │   ├── about.tsx     # About us
│   │   └── contact.tsx   # Contact page
│   ├── styles/           # Global styles
│   │   ├── theme.css     # Theme variables
│   │   ├── animations.css # Animation styles
│   │   └── global.css    # Global styles
│   └── root.tsx          # Root layout
├── public/               # Static assets
└── vercel.json          # Vercel configuration
```

## Features by Page

### Home
- Hero section with gradient background
- Service highlights
- Statistics showcase
- Client testimonials
- CTA sections

### Services
- Comprehensive service catalog
- Service cards with imagery
- Pricing information
- Feature comparisons

### Stories
- Client success stories
- Case studies
- Results and metrics
- Client testimonials

### About
- Company overview
- Team introduction
- Office locations
- Company values

### Contact
- Contact form
- WhatsApp integration
- Office locations
- Contact information

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- SEO Optimized

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - TechVishwa

## Support

For support, email contact@techvishwa.com or message us on WhatsApp.
