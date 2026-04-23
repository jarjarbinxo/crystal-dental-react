import { motion } from 'motion/react';
import SpotlightCard from './lib/SpotlightCard';
import { useLang, t } from '../lang';

const SERVICES = [
  {
    num: '01',
    en: { name: 'Cosmetic Dentistry', desc: 'Veneers, smile design, and aesthetic treatments to give you the confidence you deserve.' },
    ar: { name: 'طب الأسنان التجميلي', desc: 'قشرة الأسنان وتصميم الابتسامة والعلاجات الجمالية لمنحك الثقة التي تستحقها.' },
    color: 'rgba(255,139,21,0.1)',
  },
  {
    num: '02',
    en: { name: 'Orthodontics', desc: 'Traditional braces and Invisalign clear aligners for a perfectly straight smile.' },
    ar: { name: 'تقويم الأسنان', desc: 'تقويم الأسنان التقليدي والمثبتات الشفافة لابتسامة مثالية الاستقامة.' },
    color: 'rgba(229,25,125,0.1)',
  },
  {
    num: '03',
    en: { name: 'Root Canal — One Visit', desc: 'Microscope-assisted root canal therapy completed in a single comfortable session.' },
    ar: { name: 'علاج العصب — جلسة واحدة', desc: 'علاج العصب بمساعدة المجهر يُنجز في جلسة واحدة مريحة.' },
    color: 'rgba(25,118,210,0.1)',
  },
  {
    num: '04',
    en: { name: "Children's Dentistry", desc: 'A welcoming child-friendly environment where kids actually enjoy their dental visits.' },
    ar: { name: 'طب أسنان الأطفال', desc: 'بيئة ترحيبية صديقة للأطفال حيث يستمتع الأطفال فعلاً بزيارات الطبيب.' },
    color: 'rgba(67,160,71,0.1)',
  },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Services() {
  const { lang } = useLang();

  return (
    <section className="services" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <motion.span
        className="section-label"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {t(lang, '// What We Do', '// ما نقدمه')}
      </motion.span>
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55, delay: 0.08 }}
      >
        {t(lang, 'Care for every smile in the family.', 'رعاية لكل ابتسامة في العائلة.')}
      </motion.h2>

      <motion.div
        className="services-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {SERVICES.map((s) => {
          const info = lang === 'en' ? s.en : s.ar;
          return (
            <motion.div key={s.num} variants={cardVariants} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <SpotlightCard spotlightColor={s.color}>
                <div className="service-num">{s.num}</div>
                <div className="service-name">{info.name}</div>
                <div className="service-desc">{info.desc}</div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
