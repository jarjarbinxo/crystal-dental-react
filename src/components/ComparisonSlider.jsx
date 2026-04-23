import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useLang, t } from '../lang';

export default function ComparisonSlider() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const compRef   = useRef(null);
  const wrapRef   = useRef(null);
  const handleRef = useRef(null);

  const dragging = useRef(false);
  const target   = useRef(50);
  const current  = useRef(50);
  const rafId    = useRef(null);

  useEffect(() => {
    const comp = compRef.current;
    const wrap = wrapRef.current;
    const handle = handleRef.current;
    if (!comp) return;

    function getPercent(e) {
      const touch = e.touches ? e.touches[0] : e;
      const rect  = comp.getBoundingClientRect();
      return Math.min(Math.max(((touch.clientX - rect.left) / rect.width) * 100, 1), 99);
    }

    function render() {
      current.current += (target.current - current.current) * 0.12;
      if (wrap) wrap.style.width = current.current + '%';
      if (handle) handle.style.left = current.current + '%';
      if (dragging.current || Math.abs(target.current - current.current) > 0.05) {
        rafId.current = requestAnimationFrame(render);
      } else {
        rafId.current = null;
      }
    }

    function start(e) { dragging.current = true; target.current = getPercent(e); if (!rafId.current) rafId.current = requestAnimationFrame(render); }
    function move(e)  { if (dragging.current) { target.current = getPercent(e); if (!rafId.current) rafId.current = requestAnimationFrame(render); } }
    function stop()   { dragging.current = false; }

    comp.addEventListener('mousedown',  start);
    comp.addEventListener('touchstart', start, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup',   stop);
    window.addEventListener('touchend',  stop);

    rafId.current = requestAnimationFrame(render);

    return () => {
      comp.removeEventListener('mousedown',  start);
      comp.removeEventListener('touchstart', start);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup',   stop);
      window.removeEventListener('touchend',  stop);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section className="comparison-section" dir={isAr ? 'rtl' : 'ltr'}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {t(lang, '// Teeth Whitening', '// تبييض الأسنان')}
      </motion.span>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        {t(lang, 'See the transformation.', 'شاهد التحول.')}
      </motion.h2>
      <motion.p
        className="hero-sub"
        style={{ maxWidth: 440, marginBottom: 40 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.16 }}
      >
        {t(lang,
          'Drag the slider to see the difference professional whitening makes.',
          'اسحب المنزلق لترى الفرق الذي يحدثه التبييض الاحترافي.'
        )}
      </motion.p>

      <motion.div
        className="comparison-wrap"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, delay: 0.22 }}
      >
        <div className="comparison-container" ref={compRef}>
          {/* after = background (right), before = clip layer (left) so convention is always Before-left After-right */}
          <img className="comp-before" src="/after-teeth.jpg" alt="After whitening" draggable="false"/>
          <div className="comp-after-wrap" ref={wrapRef}>
            <img
              className="comp-after"
              src="/before-teeth.jpg"
              alt="Before whitening"
              draggable="false"
              style={{ width: compRef.current?.offsetWidth || '100%' }}
            />
          </div>
          <div className="comp-handle" ref={handleRef}>
            <div className="comp-knob">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2">
                <path d="M9 18l-6-6 6-6M15 6l6 6-6 6"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="comp-labels">
          <span className="comp-label">
            <span className="comp-dot before" />
            {t(lang, 'Before', 'قبل')}
          </span>
          <span className="comp-label">
            {t(lang, 'After', 'بعد')}
            <span className="comp-dot after" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
