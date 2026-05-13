import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useTheme from './hooks/useTheme';
import useLenisScroll from './hooks/useLenisScroll';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';
import Preloader from './components/ui/Preloader';
import { SmoothCursor } from './components/ui/SmoothCursor';
import ParticlesCanvas from './components/ui/ParticlesCanvas';
import ScrollProgress from './components/ui/ScrollProgress';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TimelineSection from './components/sections/TimelineSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

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

      {!prefersReducedMotion && (
        <SmoothCursor />
      )}
      <ParticlesCanvas isDark={isDark} reducedMotion={prefersReducedMotion} />
      <ScrollProgress />

      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      <Navbar isDark={isDark} onToggleTheme={toggleTheme} onNavigate={handleNavigate} />

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
    </div>
  );
}
