import { useLang, t } from '../lang';

export default function Footer() {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  return (
    <footer dir={isAr ? 'rtl' : 'ltr'}>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo-text">{t(lang, 'Crystal Dental', 'كريستال لطب الأسنان')}</span>
          <span className="footer-logo-sub">{t(lang, 'Center · Kuwait', 'المركز · الكويت')}</span>
          <p className="footer-tagline">
            {t(lang,
              'State-of-the-art dental care at Crystal Tower, Sharq. Where beautiful smiles are crafted with precision.',
              'رعاية أسنان متطورة في برج كريستال، الشرق. حيث تُصنع الابتسامات الجميلة بدقة.'
            )}
          </p>
        </div>

        <div className="footer-col">
          <h4>{t(lang, 'Visit Us', 'زورونا')}</h4>
          <ul>
            <li>{t(lang, 'Crystal Tower, 8th Floor', 'برج كريستال، الطابق الثامن')}</li>
            <li>{t(lang, 'Ahmed Aljaber Street, Sharq', 'شارع أحمد الجابر، الشرق')}</li>
            <li>{t(lang, 'Block 1, Kuwait', 'قطعة 1، الكويت')}</li>
            <li><a href="tel:+96522970112">+965 2297 0112</a></li>
            <li><a href="tel:+96599012112">+965 9901 2112</a></li>
            <li><a href="mailto:info@crystal-dental-center.com">info@crystal-dental-center.com</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t(lang, 'Connect', 'تواصل')}</h4>
          <ul>
            <li><a href="https://reach.link/crystaldental" target="_blank" rel="noopener">WhatsApp / reach.link</a></li>
            <li><a href="https://instagram.com/crystal.dental.center" target="_blank" rel="noopener">@crystal.dental.center</a></li>
            <li><a href="https://www.google.com/maps/search/Crystal+Dental+Center+Kuwait+Sharq" target="_blank" rel="noopener">{t(lang, 'Google Maps', 'خرائط جوجل')}</a></li>
            <li>{t(lang, 'License #172a', 'ترخيص رقم 172a')}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t(lang, '© 2024 Crystal Dental Center. All rights reserved.', '© 2024 مركز كريستال لطب الأسنان. جميع الحقوق محفوظة.')}</span>
        <span>{t(lang, 'Kuwait · License #172a', 'الكويت · ترخيص رقم 172a')}</span>
      </div>
    </footer>
  );
}
