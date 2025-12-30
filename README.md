# Xpovio - Next.js Digital Agency Portfolio

This is a Next.js conversion of the Xpovio Digital Agency Creative Portfolio Template.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.scss       # Global styles
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Preloader.tsx
│   ├── MouseCursor.tsx
│   ├── ScrollToTop.tsx
│   └── ScriptLoader.tsx
├── public/                # Static assets
│   └── assets/           # Images, fonts, vendor files
└── main-file/            # Original HTML template (reference)

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript support
- ✅ Responsive design
- ✅ GSAP animations
- ✅ Slick carousel
- ✅ Custom cursor effects
- ✅ Smooth scrolling
- ✅ All original template features

## Available Pages

- `/` - Home page (Creative Agency)
- `/about-us` - About Us page
- `/our-services` - Services page
- `/service-single` - Service details
- `/our-projects` - Projects page
- `/project-single` - Project details
- `/blog` - Blog listing
- `/blog-single` - Blog post
- `/contact-us` - Contact page
- `/faq` - FAQ page
- `/portfolio` - Portfolio page
- `/our-teams` - Team page
- `/team-single` - Team member details
- `/client-feedback` - Testimonials
- `/our-story` - Our Story page
- `/404` - Error page

## Build for Production

```bash
npm run build
npm start
```

## Notes

- The original HTML template files are preserved in the `main-file/` directory for reference
- All assets have been copied to `public/assets/`
- JavaScript functionality is being converted to React hooks and components
- Some jQuery-dependent features may need additional conversion work

## License

This template is converted from the original Xpovio template by GramenTheme.

