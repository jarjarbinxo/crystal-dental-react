import { useRef } from 'react';
import SpotlightCard from './lib/SpotlightCard';
import { useLang, t } from '../lang';
import { useReveal } from '../hooks/useReveal';

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

function ServiceCard({ service, delay }) {
  const ref = useRef(null);
  const visible = useReveal(ref);
  const { lang } = useLang();
  const info = lang === 'en' ? service.en : service.ar;

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <SpotlightCard spotlightColor={service.color}>
        <div className="service-num">{service.num}</div>
        <div className="service-name">{info.name}</div>
        <div className="service-desc">{info.desc}</div>
      </SpotlightCard>
    </div>
  );
}

export default function Services() {
  const { lang } = useLang();
  const ref = useRef(null);
  const visible = useReveal(ref);

  return (
    <section className="services" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <span className={`section-label reveal${visible ? ' visible' : ''}`} ref={ref}>
        {t(lang, '// What We Do', '// ما نقدمه')}
      </span>
      <h2 className="section-heading">
        {t(lang, 'Care for every smile in the family.', 'رعاية لكل ابتسامة في العائلة.')}
      </h2>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.num} service={s} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
