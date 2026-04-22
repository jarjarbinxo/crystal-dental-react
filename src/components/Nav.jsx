import { useEffect, useState } from 'react';
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
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">
        <span className="logo-text">{t(lang, 'Crystal Dental', 'كريستال لطب الأسنان')}</span>
        <span className="logo-sub">{t(lang, 'Center · Kuwait', 'المركز · الكويت')}</span>
      </div>
      <button type="button" className="lang-btn" onClick={toggle}>
        {lang === 'en' ? 'عربي' : 'EN'}
      </button>
    </nav>
  );
}
