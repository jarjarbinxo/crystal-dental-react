import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLang, t } from '../lang';

export default function Nav() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-logo">
        <span className="logo-text">{t(lang, 'Crystal Dental', 'كريستال لطب الأسنان')}</span>
        <span className="logo-sub">{t(lang, 'Center · Kuwait', 'المركز · الكويت')}</span>
      </div>
      <motion.button
        type="button"
        className="lang-btn"
        onClick={toggle}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.15 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={lang}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  );
}
