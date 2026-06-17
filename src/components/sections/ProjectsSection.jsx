import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/siteData';
import { staggerParent, riseIn } from '../../utils/motion';

/** Testimonial grid-style project card with image background and hover effects */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={riseIn}
      transition={{ delay: index * 0.08 }}
      className="group relative flex flex-col justify-end overflow-hidden rounded-3xl bg-black/5 dark:bg-white/5"
      style={{ minHeight: '420px' }}
      data-cursor="interactive"
    >
      {/* Background Image with Hover Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <img 
          src={project.image} 
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'; }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 flex flex-col gap-3 h-full justify-end text-white">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-soft-blue)] drop-shadow-md">
              {project.subtitle}
            </span>
            {project.tag === 'Freelance' && (
              <span className="text-[0.65rem] font-bold tracking-widest uppercase text-[#c9972d] border border-[#c9972d]/50 bg-[#c9972d]/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
                Freelance
              </span>
            )}
          </div>
          
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
            {project.name}
          </h3>
          
          <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs font-medium px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white/90">
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 border border-white/5 text-white/70">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10"
            >
              <FiGithub size={15} />
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-electric)] hover:text-white transition-colors bg-[var(--color-electric)]/10 hover:bg-[var(--color-electric)]/40 px-4 py-2 rounded-xl backdrop-blur-md border border-[var(--color-electric)]/30 shadow-[0_0_15px_rgba(123,101,255,0.2)]"
            >
              <FiArrowUpRight size={15} />
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.article>
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
