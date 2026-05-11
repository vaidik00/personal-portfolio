import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo } from '../../data/siteData';
import { riseIn, softScale, staggerParent } from '../../utils/motion';

function ContactField({ label, name, value, onChange, isTextArea = false }) {
  const FieldTag = isTextArea ? 'textarea' : 'input';

  return (
    <label className="floating-field">
      <FieldTag
        name={name}
        value={value}
        onChange={onChange}
        rows={isTextArea ? 5 : undefined}
        className="floating-input"
        placeholder=" "
        required
      />
      <span className="floating-label">{label}</span>
    </label>
  );
}

function SocialIcon({ keyName }) {
  if (keyName === 'github') return <FiGithub />;
  if (keyName === 'linkedin') return <FiLinkedin />;
  return <FiMail />;
}

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    setForm((currentForm) => ({ ...currentForm, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1100);
    });

    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });

    window.setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <section id="contact" className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Contact"
          title="Let&apos;s Build Something"
          highlight="Memorable"
          description="Whether it is a collaboration, internship opportunity, or product idea, I would love to connect."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.aside variants={riseIn} className="space-y-4">
            <article className="glass-panel rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
                Location
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-black dark:text-white">
                {personalInfo.location}
              </p>
            </article>

            <article className="glass-panel rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-2 inline-flex font-display text-lg font-semibold tracking-tight text-black transition-colors hover:text-black/70 dark:text-white dark:hover:text-white/70"
                data-cursor="interactive"
              >
                {personalInfo.email}
              </a>
            </article>

            <article className="glass-panel rounded-3xl p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {personalInfo.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-mini"
                    data-cursor="interactive"
                  >
                    <SocialIcon keyName={social.key} />
                    <span className="text-xs">{social.label}</span>
                  </a>
                ))}
              </div>
            </article>
          </motion.aside>

          <motion.form variants={softScale} className="glass-panel rounded-3xl p-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <ContactField label="Your Name" name="name" value={form.name} onChange={handleChange} />
              <ContactField label="Email Address" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="mt-4">
              <ContactField label="Subject" name="subject" value={form.subject} onChange={handleChange} />
            </div>
            <div className="mt-4">
              <ContactField
                label="Tell me about your idea"
                name="message"
                value={form.message}
                onChange={handleChange}
                isTextArea
              />
            </div>

            <button type="submit" className="btn-primary mt-5 w-full justify-center" disabled={submitting} data-cursor="interactive">
              {submitted ? (
                <>
                  <FiCheck />
                  Message Sent
                </>
              ) : submitting ? (
                <>
                  <FiSend className="animate-pulse" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
