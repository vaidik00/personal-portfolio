import { motion } from 'framer-motion';
import { riseIn } from '../../utils/motion';

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}) {
  const centered = align === 'center';

  return (
    <motion.div
      variants={riseIn}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">
        {title}{' '}
        {highlight ? (
          <span className="text-gradient">{highlight}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="section-description mt-5">{description}</p>
      ) : null}
    </motion.div>
  );
}
