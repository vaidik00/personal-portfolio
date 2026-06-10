import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/siteData';
import { staggerParent, riseIn } from '../../utils/motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

/** 3D-tilt project card using Framer Motion spring physics */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 400, damping: 35,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 400, damping: 35,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={riseIn}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      data-cursor="interactive"
    >
      <motion.article
        className="project-card group h-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient follow-cursor glow */}
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            opacity: 0,
            background: `radial-gradient(200px circle at var(--gx, 50%) var(--gy, 50%), ${project.accent.includes('7b65') ? 'rgba(123,101,255,0.12)' : 'rgba(120,215,255,0.1)'}, transparent)`,
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'opacity 0.3s',
          }}
          className="group-hover:opacity-100"
        />

        {/* Mockup header */}
        <div
          className="project-mockup"
          style={{ backgroundImage: project.accent }}
          aria-hidden="true"
        >
          <div className="project-mockup-inner" style={{ transform: 'translateZ(20px)' }}>
            <div className="project-window-row">
              <span /> <span /> <span />
            </div>
            <div className="project-lines">
              <div /> <div /> <div />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6" style={{ position: 'relative', zIndex: 2 }}>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-soft-blue)]">
              {project.subtitle}
            </p>
            {project.tag === 'Freelance' && (
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#c9972d',
                  border: '1px solid rgba(201,151,45,0.45)',
                  borderRadius: '999px',
                  padding: '2px 8px',
                  background: 'rgba(201,151,45,0.08)',
                }}
              >
                Freelance
              </span>
            )}
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-black dark:text-white">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-1 text-xs text-black/55 dark:text-white/55">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <span style={{ color: 'var(--color-electric)', fontSize: '0.6rem' }}>◆</span>
                {f}
              </li>
            ))}
          </ul>

          {/* Tech badges — using shadcn Badge */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          {/* Action buttons — using shadcn Button */}
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.githubUrl && project.githubUrl !== '#' && (
              <Button asChild size="sm" variant="outline">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <FiGithub size={13} />
                  GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <Button asChild size="sm" variant="ghost">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <FiArrowUpRight size={13} />
                  Live Site
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionTitle
          eyebrow="Projects"
          title="Premium Product"
          highlight="Case Studies"
          description="A curated set of concept-to-production projects focused on real user problems and polished frontend execution."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
