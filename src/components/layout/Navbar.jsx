import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from 'react-icons/fi';
import { navigationLinks, personalInfo } from '../../data/siteData';

function SocialIcon({ name }) {
  if (name === 'github') return <FiGithub />;
  if (name === 'linkedin') return <FiLinkedin />;
  return <FiMail />;
}

export default function Navbar({ isDark, onToggleTheme, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 16);
    updateScrollState();

    window.addEventListener('scroll', updateScrollState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  const handleNavigation = (hash) => {
    setMenuOpen(false);
    onNavigate(hash);
  };

  return (
    <>
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8"
      >
        <div className={`navbar-shell ${isScrolled ? 'is-scrolled' : ''}`}>
          <button
            type="button"
            className="font-display text-lg font-semibold tracking-tight text-gradient"
            onClick={() => handleNavigation('#home')}
            data-cursor="interactive"
          >
            VP
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigationLinks.slice(1).map((link) => (
              <button
                key={link.href}
                type="button"
                className="nav-link"
                onClick={() => handleNavigation(link.href)}
                data-cursor="interactive"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              {personalInfo.socialLinks.slice(0, 2).map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-mini"
                  aria-label={social.label}
                  data-cursor="interactive"
                >
                  <SocialIcon name={social.key} />
                </a>
              ))}
            </div>

            <button
              type="button"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              data-cursor="interactive"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              className="theme-toggle lg:hidden"
              onClick={() => setMenuOpen((currentValue) => !currentValue)}
              aria-label="Toggle menu"
              data-cursor="interactive"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-30 rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl dark:bg-black/70 md:inset-x-8 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className="rounded-2xl px-3 py-3 text-left text-sm font-medium tracking-wide text-white/85 transition-colors hover:bg-white/10"
                  data-cursor="interactive"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
