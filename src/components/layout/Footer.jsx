import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { navigationLinks, personalInfo } from '../../data/siteData';

function SocialIcon({ iconKey }) {
  if (iconKey === 'github') return <FiGithub />;
  if (iconKey === 'linkedin') return <FiLinkedin />;
  return <FiMail />;
}

export default function Footer({ onNavigate }) {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-white/55 px-4 py-14 backdrop-blur-xl dark:border-white/10 dark:bg-black/40 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight text-gradient">
            Vaidik Patel
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/65 dark:text-white/65">
            Building story-driven digital experiences with smooth motion, clean architecture,
            and user-first thinking.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40 dark:text-white/45">
            Quick Navigation
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => onNavigate(link.href)}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium tracking-wide text-black/75 transition-colors hover:border-black/20 hover:text-black dark:border-white/15 dark:bg-white/5 dark:text-white/75 dark:hover:border-white/35 dark:hover:text-white"
                data-cursor="interactive"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/40 dark:text-white/45">
            Connect
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {personalInfo.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                data-cursor="interactive"
              >
                <SocialIcon iconKey={social.key} />
                {social.label}
                <FiArrowUpRight size={14} />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm text-black/60 dark:text-white/60">{personalInfo.email}</p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/50 dark:border-white/10 dark:text-white/45">
        <p>© {new Date().getFullYear()} Vaidik Patel. All rights reserved.</p>
        <p>Crafted with React, Tailwind, Framer Motion, GSAP, and Lenis.</p>
      </div>
    </footer>
  );
}
