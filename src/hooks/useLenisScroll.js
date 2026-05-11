import { useCallback, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useLenisScroll(enabled = true) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const lenis = new Lenis({
      // ─── Feel ──────────────────────────────────────────────────────────────
      // Lower duration = snappier response; 0.8–1.0 is the sweet spot
      // for "smooth but not laggy". 1.25 felt stiff/sluggish.
      duration: 0.9,

      // ─── Easing ────────────────────────────────────────────────────────────
      // expo-out: fast start, gentle deceleration → feels like butter
      easing: (t) => 1 - Math.pow(1 - t, 4),

      // ─── Wheel ─────────────────────────────────────────────────────────────
      smoothWheel: true,
      // >1.0 = each tick travels further → more responsive, less resistance
      wheelMultiplier: 1.2,

      // ─── Touch ─────────────────────────────────────────────────────────────
      smoothTouch: false,   // native touch scroll feels better on mobile
      syncTouch: false,
      touchMultiplier: 1.5,

      // ─── Orientation / Gestures ────────────────────────────────────────────
      orientation: 'vertical',
      gestureOrientation: 'vertical',

      // ─── Prevent scroll-fighting with fixed backgrounds ────────────────────
      prevent: (node) => node.closest('[data-lenis-prevent]') !== null,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    // Use Lenis's own RAF integration — cleaner than a manual loop
    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  const scrollTo = useCallback((target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    } else if (typeof target === 'string') {
      const section = document.querySelector(target);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return { scrollTo };
}
