import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { personalInfo } from '../../data/siteData';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const progressState = { value: 0 };
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      },
    });

    timeline.to(progressState, {
      value: 100,
      duration: 2.1,
      ease: 'power2.out',
      onUpdate: () => setProgress(Math.round(progressState.value)),
    });

    timeline.to(
      '.preloader-word',
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.55,
      },
      0.12,
    );

    timeline.to(
      containerRef.current,
      {
        yPercent: -100,
        duration: 1.05,
        ease: 'power4.inOut',
      },
      '>-0.08',
    );

    return () => {
      document.body.style.overflow = '';
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="preloader-wrap">
      <div className="preloader-grid" aria-hidden="true" />
      <div className="preloader-glow" aria-hidden="true" />

      <div className="preloader-copy">
        <p className="preloader-label">
          {personalInfo.name}
        </p>
        <p className="preloader-count">{String(progress).padStart(2, '0')}</p>
        <div className="preloader-phrase">
          {['Curating', 'Motion', 'And', 'Storytelling'].map((word) => (
            <span key={word} className="preloader-word">
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="preloader-progress" style={{ width: `${progress}%` }} />
    </div>
  );
}
