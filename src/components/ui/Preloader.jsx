import { useRef, useEffect } from 'react';
import gsap from 'gsap';

/* ─── helpers ─────────────────────────────────────────────────── */
/** Turn a string into an array of <span> elements, one per char */
function splitToSpans(text, cls) {
  return text.split('').map((ch, i) => (
    <span
      key={i}
      className={cls}
      style={{
        display: 'inline-block',
        willChange: 'transform, opacity',
        /* whitespace chars still need width */
        ...(ch === ' ' ? { width: '0.35em' } : {}),
      }}
    >
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));
}

/* ─── component ───────────────────────────────────────────────── */
export default function Preloader({ onComplete }) {
  const wrapRef    = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const barRef     = useRef(null);
  const glowRef    = useRef(null);
  const onCompleteRef = useRef(onComplete);

  // keep ref fresh without causing re-renders
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const wrap  = wrapRef.current;
    const chars1 = line1Ref.current?.querySelectorAll('.pl-char') ?? [];
    const chars2 = line2Ref.current?.querySelectorAll('.pl-char') ?? [];
    const bar   = barRef.current;
    const glow  = glowRef.current;

    /* set initial states immediately — before first paint */
    gsap.set([chars1, chars2], { opacity: 0, y: 36, rotationX: -45 });
    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(glow, { opacity: 0, scale: 0.6 });

    const tl = gsap.timeline({
      onComplete: () => {
        /* slide the whole overlay upward */
        gsap.to(wrap, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.style.overflow = '';
            onCompleteRef.current?.();
          },
        });
      },
    });

    /* 1 — glow pulses in */
    tl.to(glow, { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' }, 0);

    /* 2 — progress bar fills */
    tl.to(bar, { scaleX: 1, duration: 1.6, ease: 'power2.inOut' }, 0.1);

    /* 3 — first line chars stagger in */
    tl.to(chars1, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.65,
      ease: 'power3.out',
      stagger: 0.028,
    }, 0.15);

    /* 4 — second line chars stagger in (starts just after first line) */
    tl.to(chars2, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.65,
      ease: 'power3.out',
      stagger: 0.032,
    }, 0.38);

    /* 5 — short pause so text is readable, then exit */
    tl.to({}, { duration: 0.55 });

    /* 6 — fade everything out together before slide-up */
    tl.to([chars1, chars2, glow], {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: 'power2.in',
      stagger: 0,
    });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={wrapRef}
      className="preloader-wrap"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* subtle grid */}
      <div className="preloader-grid" aria-hidden="true" />

      {/* ambient glow */}
      <div ref={glowRef} className="preloader-glow" aria-hidden="true" />

      {/* text content */}
      <div className="preloader-copy">
        {/* line 1 */}
        <p
          ref={line1Ref}
          className="text-3xl sm:text-5xl font-semibold text-center tracking-tight"
          style={{ perspective: '600px' }}
          aria-hidden="true"
        >
          {splitToSpans("There's A New Dev In Town!!", 'pl-char')}
        </p>

        {/* line 2 */}
        <p
          ref={line2Ref}
          className="mt-3 text-4xl sm:text-6xl font-bold text-center"
          style={{
            perspective: '600px',
            background: 'linear-gradient(120deg, #7b65ff, #78d7ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          aria-hidden="true"
        >
          {splitToSpans('Meet Vaidik', 'pl-char')}
        </p>

        {/* screen-reader only text */}
        <span className="sr-only">There&apos;s A New Dev In Town!! Meet Vaidik</span>
      </div>

      {/* progress bar */}
      <div
        ref={barRef}
        className="preloader-progress"
        style={{ width: '100%' }}
        aria-hidden="true"
      />
    </div>
  );
}
