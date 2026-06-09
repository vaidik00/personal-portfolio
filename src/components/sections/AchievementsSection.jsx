import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { achievementsBoard } from '../../data/siteData';
import { staggerParent } from '../../utils/motion';

const CATEGORIES = ['All', 'Achievements', 'Certificates'];

export default function AchievementsSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Close modal and navigate back in history
  const closeImage = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Open modal: push a dummy history entry so back button can pop it
  const openImage = useCallback((image) => {
    setSelectedImage(image);
    window.history.pushState({ lightbox: true }, '');
  }, []);

  // Listen for the browser/mobile back button
  useEffect(() => {
    const handlePopState = (e) => {
      if (selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedImage]);

  const filteredItems = achievementsBoard.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );


  return (
    <section id="achievements" className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SectionTitle
          eyebrow="Achievements"
          title="Achievement"
          highlight="Board"
          description="A collection of certifications, hackathons, competitions, and milestones that reflect my growth as a developer and builder."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              data-cursor="interactive"
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                activeTab === tab
                  ? 'border-[var(--color-electric)] bg-[var(--color-electric)]/10 text-[var(--color-electric)] shadow-[0_0_15px_rgba(123,101,255,0.4)] dark:text-white'
                  : 'border-black/10 bg-white/5 text-black/70 hover:bg-black/5 hover:border-black/30 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10 dark:hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl glass-panel border border-black/10 hover:border-[var(--color-electric)]/50 hover:shadow-[0_0_30px_rgba(123,101,255,0.2)] dark:border-white/10 transition-all duration-500 will-change-transform"
                onClick={() => openImage(item.image)}
                data-cursor="interactive"
                whileHover={{ y: -5 }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5 dark:bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md border border-white/10 shadow-lg">
                    {item.category}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-6">
                    <span className="text-sm font-medium text-[var(--color-electric)] flex items-center gap-2 drop-shadow-md">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      View Credential
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-black dark:text-white">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center justify-between text-sm text-black/60 dark:text-white/60">
                    <span className="font-medium text-[var(--color-electric)]">{item.organization}</span>
                    <span className="font-medium bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md">{item.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeImage()}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Achievement Preview"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-[0_0_50px_rgba(123,101,255,0.4)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={() => closeImage()}
              data-cursor="interactive"
              className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all hover:bg-[var(--color-electric)] hover:shadow-[0_0_15px_rgba(123,101,255,0.5)] border border-white/10"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
