import { motion } from 'motion/react';
import { useLang, t } from '../lang';

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

const factGrid = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const factItem = { hidden: { opacity: 0, scale: 0.94, y: 16 }, show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } };

export default function About() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <section className="about" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="about-inner">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: isAr ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="section-label">{t(lang, '// Our Clinic', '// عيادتنا')}</span>
          <h2 className="about-h2">
            {t(lang, 'Where precision meets patient care.', 'حيث تلتقي الدقة برعاية المريض.')}
          </h2>
          <p className="about-body">
            {t(lang,
              'Crystal Dental Center is located on the 8th floor of Crystal Tower in Sharq, Kuwait. We combine state-of-the-art equipment with strict international infection control protocols to deliver safe, beautiful results every time.',
              'يقع مركز كريستال لطب الأسنان في الطابق الثامن من برج كريستال في الشرق، الكويت. نجمع بين أحدث المعدات وبروتوكولات مكافحة العدوى الدولية الصارمة لتقديم نتائج آمنة وجميلة في كل مرة.'
            )}
          </p>
        </motion.div>

        <motion.div
          className="about-facts"
          variants={factGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FACTS.map((f, i) => {
            const info = isAr ? f.ar : f.en;
            return (
              <motion.div
                key={i}
                className="fact-card"
                style={{ borderTopColor: f.accent }}
                variants={factItem}
                whileHover={{ y: -5, boxShadow: '0 8px 28px rgba(0,0,0,0.09)' }}
              >
                <div className="fact-title">{info.title}</div>
                <div className="fact-body">{info.body}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
