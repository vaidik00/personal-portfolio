import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  className = '',
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 180, damping: 16, mass: 0.2 });
  const springY = useSpring(offsetY, { stiffness: 180, damping: 16, mass: 0.2 });

  const handleMove = (event) => {
    const elementBounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - elementBounds.left - elementBounds.width / 2;
    const y = event.clientY - elementBounds.top - elementBounds.height / 2;
    offsetX.set(x * 0.24);
    offsetY.set(y * 0.24);
  };

  const handleLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    style: { x: springX, y: springY },
    className: `magnetic-button ${variant === 'secondary' ? 'btn-secondary' : 'btn-primary'} ${className}`.trim(),
    'data-cursor': 'interactive',
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" {...sharedProps}>
      {children}
    </motion.button>
  );
}
