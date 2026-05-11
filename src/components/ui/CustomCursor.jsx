import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const frameRef = useRef(0);
  const cursorRef = useRef({ x: 0, y: 0 });
  const glowRefPosition = useRef({ x: 0, y: 0 });
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isFinePointer) {
      return undefined;
    }

    const handleMove = (event) => {
      cursorRef.current = { x: event.clientX, y: event.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };

    const handlePointerState = (event) => {
      const isInteractive = Boolean(
        event.target.closest('a, button, input, textarea, [data-cursor="interactive"]'),
      );

      if (glowRef.current) {
        glowRef.current.classList.toggle('is-hovering', isInteractive);
      }
    };

    const animate = () => {
      glowRefPosition.current.x += (cursorRef.current.x - glowRefPosition.current.x) * 0.16;
      glowRefPosition.current.y += (cursorRef.current.y - glowRefPosition.current.y) * 0.16;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowRefPosition.current.x}px, ${glowRefPosition.current.y}px, 0)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handlePointerState);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handlePointerState);
    };
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
