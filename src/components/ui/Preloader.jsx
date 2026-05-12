import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import SplitText from './SplitText';

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const [firstDone, setFirstDone] = useState(false);
  const [secondDone, setSecondDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (firstDone && secondDone) {
      setTimeout(() => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.05,
          ease: 'power4.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }, 600); // Small pause before exit animation starts
    }
  }, [firstDone, secondDone, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4f2ee] text-[#151823] dark:bg-[#090b12] dark:text-[#f1f3ff]"
    >
      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
        <SplitText
          text="There's A New Dev In Town!!"
          className="text-3xl sm:text-5xl font-semibold text-center"
          delay={40}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={() => setFirstDone(true)}
        />
        <SplitText
          text="Meet Vaidik"
          className="text-4xl sm:text-6xl font-bold text-center"
          delay={50}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={() => setSecondDone(true)}
        />
      </div>
    </div>
  );
}
