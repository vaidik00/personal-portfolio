import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import {
  FiArrowDownRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiStar,
} from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';
import TiltedCard from '../ui/TiltedCard';
import { personalInfo } from '../../data/siteData';
import { riseIn, staggerParent } from '../../utils/motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import myPhoto from '../../assets/profile.jpg';
const HERO_IMAGE_SRC = myPhoto;

function SocialGlyph({ iconKey }) {
  if (iconKey === 'github') return <FiGithub size={17} />;
  if (iconKey === 'linkedin') return <FiLinkedin size={17} />;
  return <FiMail size={17} />;
}

export default function HeroSection({ onNavigate }) {
  const headingRef = useRef(null);
  const glowRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !headingRef.current) return undefined;

    const letters = headingRef.current.querySelectorAll('.hero-letter');
    const timeline = gsap.timeline();

    timeline.fromTo(
      letters,
      { y: 72, opacity: 0, rotateX: -75 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: 'power4.out', stagger: 0.04 },
    );

    const moveGlow = (event) => {
      if (!glowRef.current) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 36;
      const y = (event.clientY / window.innerHeight - 0.5) * 36;
      gsap.to(glowRef.current, { x, y, duration: 1.3, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', moveGlow, { passive: true });
    return () => {
      timeline.kill();
      window.removeEventListener('mousemove', moveGlow);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      className="section-shell relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div ref={glowRef} className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-overlay" data-parallax-layer aria-hidden="true" />

      {/* ── Main grid: text left, card right ── */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-[1fr_340px]">

        {/* LEFT — copy */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={riseIn} className="hero-pill">
            <FiStar />
            Learning. Building. Improving.
          </motion.p>

          <h1 ref={headingRef} className="hero-title mt-6">
            {personalInfo.name.split('').map((letter, index) => (
              <span key={`${letter}-${index}`} className="hero-letter">
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>

          <motion.p variants={riseIn} className="hero-tagline mt-6">
            {personalInfo.tagline}
          </motion.p>
          <motion.p variants={riseIn} className="hero-description mt-4">
            {personalInfo.bioShort}
          </motion.p>

          {/* Social chips (mobile/tablet only — hidden on lg since card takes the right) */}
          <motion.div
            variants={riseIn}
            className="mt-6 flex flex-wrap gap-2 lg:hidden"
          >
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="hero-social-chip"
                data-cursor="interactive"
              >
                <SocialGlyph iconKey={social.key} />
                <span>{social.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.div variants={riseIn} className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton onClick={() => onNavigate('#projects')}>
              Explore Projects <FiArrowDownRight />
            </MagneticButton>
            <MagneticButton
              href={personalInfo.socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              GitHub <FiGithub />
            </MagneticButton>
          </motion.div>

          <motion.div variants={riseIn} className="mt-10 flex flex-wrap gap-6">
            <div className="hero-stat">
              <p className="hero-stat-value">12+</p>
              <p className="hero-stat-label">Projects Crafted</p>
            </div>
            <div className="hero-stat">
              <p className="hero-stat-value">3</p>
              <p className="hero-stat-label">Flagship Products</p>
            </div>
            <div className="hero-stat">
              <p className="hero-stat-value">100%</p>
              <p className="hero-stat-label">Learning Momentum</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT — TiltedCard (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -12 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
          style={{ perspective: 1000 }}
        >
          <TiltedCard
            imageSrc={HERO_IMAGE_SRC}
            altText={`${personalInfo.name} — Frontend Developer`}
            captionText={`${personalInfo.name} · Frontend Dev`}
            containerHeight="360px"
            containerWidth="300px"
            imageHeight="320px"
            imageWidth="280px"
            rotateAmplitude={14}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem 1rem 1rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  borderRadius: '0 0 20px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '0.01em',
                  }}
                >
                  {personalInfo.name}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Frontend Developer
                </span>
              </div>
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
