import { useRef } from 'react';
import { useLang, t } from '../lang';
import { useReveal } from '../hooks/useReveal';

const FACTS = [
  {
    en: { title: 'License #172a',         body: 'Fully licensed and regulated dental facility in Kuwait.' },
    ar: { title: 'ترخيص رقم 172a',        body: 'منشأة طبية أسنان مرخصة ومنظمة بالكامل في الكويت.' },
    accent: '#FF8B15',
  },
  {
    en: { title: 'Microscope Technology', body: 'Root canal treatments performed under magnification.' },
    ar: { title: 'تقنية المجهر',           body: 'علاجات جذور دقيقة تُجرى تحت التكبير.' },
    accent: '#E5197D',
  },
  {
    en: { title: 'Infection Control',     body: 'Strict international guidelines followed for patient safety.' },
    ar: { title: 'مكافحة العدوى',          body: 'نلتزم بصرامة بالإرشادات الدولية لسلامة المريض.' },
    accent: '#1976D2',
  },
  {
    en: { title: 'Child-Friendly',        body: 'Purpose-built to make young patients feel at ease.' },
    ar: { title: 'صديق للأطفال',           body: 'مصمم خصيصاً لجعل المرضى الصغار يشعرون بالراحة.' },
    accent: '#43A047',
  },
];

export default function About() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const ref = useRef(null);
  const visible = useReveal(ref);

  return (
    <section className="about" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="about-inner">
        <div className="about-left">
          <span className={`section-label reveal${visible ? ' visible' : ''}`} ref={ref}>
            {t(lang, '// Our Clinic', '// عيادتنا')}
          </span>
          <h2 className="about-h2">
            {t(lang, 'Where precision meets patient care.', 'حيث تلتقي الدقة برعاية المريض.')}
          </h2>
          <p className="about-body">
            {t(lang,
              'Crystal Dental Center is located on the 8th floor of Crystal Tower in Sharq, Kuwait. We combine state-of-the-art equipment with strict international infection control protocols to deliver safe, beautiful results every time.',
              'يقع مركز كريستال لطب الأسنان في الطابق الثامن من برج كريستال في الشرق، الكويت. نجمع بين أحدث المعدات وبروتوكولات مكافحة العدوى الدولية الصارمة لتقديم نتائج آمنة وجميلة في كل مرة.'
            )}
          </p>
        </div>

        <div className="about-facts">
          {FACTS.map((f, i) => {
            const info = isAr ? f.ar : f.en;
            return (
              <div key={i} className="fact-card" style={{ borderTopColor: f.accent }}>
                <div className="fact-title">{info.title}</div>
                <div className="fact-body">{info.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
