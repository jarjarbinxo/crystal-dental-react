import SoftAurora from './lib/SoftAurora';
import BlurText from './lib/BlurText';
import FloatingMessages from './FloatingMessages';
import { useLang, t } from '../lang';

export default function Hero() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <section className="hero" dir={isAr ? 'rtl' : 'ltr'}>
      {/* SoftAurora WebGL background */}
      <div className="hero-aurora">
        <SoftAurora
          color1="#FFD6E8"
          color2="#B5C8FF"
          speed={0.35}
          brightness={0.42}
          scale={1.8}
          bandHeight={0.5}
          bandSpread={1.2}
          noiseFrequency={2.2}
          noiseAmplitude={0.9}
          enableMouseInteraction={true}
          mouseInfluence={0.18}
        />
      </div>

      {/* Floating WhatsApp testimonial bubbles */}
      <FloatingMessages />

      <div className="hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-badge">
          {t(lang, 'Crystal Tower, 8th Floor · Kuwait', 'برج كريستال، الطابق الثامن · الكويت')}
        </div>

        <h1 className="hero-h1" style={{ fontFamily: isAr ? "'Tajawal', sans-serif" : "'Cormorant Garamond', serif" }}>
          <BlurText
            text={t(lang, 'Beautiful Smiles,', 'ابتسامة تستحقها،')}
            className="hero-line-1"
            delay={120}
            animateBy="words"
            direction="bottom"
          />
          <BlurText
            text={t(lang, 'Crafted for You.', 'نصنعها لك.')}
            className="hero-line-2 grad-text"
            delay={120}
            animateBy="words"
            direction="bottom"
          />
        </h1>

        <div className="grad-line hero-divider" />

        <p className="hero-sub">
          {t(lang,
            'Expert dental care delivered with warmth — from routine checkups to advanced smile transformations. Your comfort is our priority.',
            'رعاية أسنان متخصصة بلمسة إنسانية — من الفحوصات الدورية إلى تحويلات الابتسامة المتقدمة. راحتك هي أولويتنا.'
          )}
        </p>

        <div className="hero-btns">
          <a href="tel:+96522970112" className="btn btn-phone">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            {t(lang, 'Call Now', 'اتصل الآن')}
          </a>
          <a href="https://reach.link/crystaldental" target="_blank" rel="noopener" className="btn btn-whatsapp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t(lang, 'WhatsApp', 'واتساب')}
          </a>
          <a href="https://www.google.com/maps/search/Crystal+Dental+Center+Ahmed+Aljaber+Street+Sharq+Kuwait" target="_blank" rel="noopener" className="btn btn-maps">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            {t(lang, 'Directions', 'الاتجاهات')}
          </a>
        </div>
      </div>
    </section>
  );
}
