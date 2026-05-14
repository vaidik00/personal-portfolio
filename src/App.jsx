import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useTheme from './hooks/useTheme';
import useLenisScroll from './hooks/useLenisScroll';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';
import Preloader from './components/ui/Preloader';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';

/* Heavy components — loaded lazily after preloader exits */
const SmoothCursor = lazy(() => import('./components/ui/SmoothCursor').then(m => ({ default: m.SmoothCursor })));
const HeroSection = lazy(() => import('./components/sections/HeroSection'));
const AboutSection = lazy(() => import('./components/sections/AboutSection'));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'));
const TimelineSection = lazy(() => import('./components/sections/TimelineSection'));
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));
const Footer = lazy(() => import('./components/layout/Footer'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const rootRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollTo } = useLenisScroll(isLoaded && !prefersReducedMotion);

  useEffect(() => {
    if (!isLoaded || prefersReducedMotion) {
      return undefined;
    }

    // Global GSAP effects for decorative parallax layers.
    const gsapContext = gsap.context(() => {
      const layers = gsap.utils.toArray('[data-parallax-layer]');
      layers.forEach((layer, index) => {
        gsap.to(layer, {
          yPercent: -8 - index * 3,
          ease: 'none',
          scrollTrigger: {
            trigger: layer.closest('section') ?? layer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      gsap.fromTo(
        '.storyline-progress',
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#journey',
            start: 'top 70%',
            end: 'bottom 65%',
            scrub: true,
          },
        },
      );
    }, rootRef);

    return () => gsapContext.revert();
  }, [isLoaded, prefersReducedMotion]);

  const handleNavigate = (target) => {
    scrollTo(target, { offset: -72, duration: 1.05 });
  };

  return (
    <div ref={rootRef} className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Cursor + Particles: mount only after preloader exits so they don't
          compete with the preloader animation for GPU/CPU budget */}
      <Suspense fallback={null}>
        {isLoaded && !prefersReducedMotion && <SmoothCursor />}
      </Suspense>

      <ScrollProgress />

      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} onNavigate={handleNavigate} />

      <Suspense fallback={null}>
        <main id="main-content" className="relative z-10 overflow-x-clip">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer onNavigate={handleNavigate} />
      </Suspense>
    </div>
  );
}
