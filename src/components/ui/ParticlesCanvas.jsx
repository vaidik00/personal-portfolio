import { useEffect, useRef } from 'react';

export default function ParticlesCanvas({ isDark, reducedMotion }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameId = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (reducedMotion) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      return () => window.removeEventListener('resize', resizeCanvas);
    }

    const particleCount = window.innerWidth > 1024 ? 90 : 48;
    const baseColor = isDark ? '120, 134, 255' : '93, 104, 255';
    const lineColor = isDark ? '120, 229, 255' : '88, 118, 224';
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: Math.random() * 1.4 + 0.5,
      alpha: Math.random() * 0.45 + 0.2,
    }));

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, particleIndex) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${baseColor}, ${particle.alpha})`;
        context.fill();

        for (let i = particleIndex + 1; i < particles.length; i += 1) {
          const peer = particles[i];
          const dx = particle.x - peer.x;
          const dy = particle.y - peer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(peer.x, peer.y);
            context.strokeStyle = `rgba(${lineColor}, ${(1 - distance / 110) * 0.16})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      });

      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isDark, reducedMotion]);

  return <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />;
}
