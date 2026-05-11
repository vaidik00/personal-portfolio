# Vaidik Patel - Luxury Developer Portfolio

A premium, cinematic portfolio website built with:

- React + Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis smooth scrolling

## Highlights

- Luxury dark/light UI with glassmorphism and subtle gradients
- Premium loading screen (GSAP)
- Dynamic cursor glow effect
- Animated particles background canvas
- Scroll progress indicator
- Scroll-triggered motion + section reveals
- Responsive storytelling layout
- SEO-friendly metadata
- Deploy-ready for Vercel

## Project Structure

```text
src/
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    sections/
      HeroSection.jsx
      AboutSection.jsx
      SkillsSection.jsx
      ProjectsSection.jsx
      TimelineSection.jsx
      AchievementsSection.jsx
      TestimonialsSection.jsx
      ContactSection.jsx
    ui/
      CustomCursor.jsx
      MagneticButton.jsx
      ParticlesCanvas.jsx
      Preloader.jsx
      ScrollProgress.jsx
      SectionTitle.jsx
  data/
    siteData.js
  hooks/
    useLenisScroll.js
    usePrefersReducedMotion.js
    useTheme.js
  utils/
    motion.js
  App.jsx
  index.css
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy

Deploy to Vercel directly:

```bash
npx vercel --prod
```
