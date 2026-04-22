import { useRef } from 'react';
import { useLang, t } from '../lang';
import { useReveal } from '../hooks/useReveal';

// Distribute real clinic images across 3 columns
const COL1 = [
  'https://static.wixstatic.com/media/da1870_36f66643bd914f939ea4d9b01b2a52c2~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_816,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1364_JPG.jpg',
  'https://static.wixstatic.com/media/da1870_6dd7315fc75247a0b791327a37ffefc1~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ease%20your%20mind%20with%20our%20skilled%20doctors%20and%20state%20of%20the%20art%20equipment.jpg',
  'https://static.wixstatic.com/media/da1870_ff79faab0e2e41b48d5cf0786a489a14~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/We%20strictly%20follow%20the%20international%20guidlines%20regarding%20Infection%20control%20and%20Patient%20saf.jpg',
  'https://static.wixstatic.com/media/da1870_f6690e201ff84b28b55c202913efbc66f000.jpg/v1/fill/w_816,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/da1870_f6690e201ff84b28b55c202913efbc66f000.jpg',
];

const COL2 = [
  'https://static.wixstatic.com/media/da1870_1bc341fdeacc4a95911130397fa55959f000.jpg/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/da1870_1bc341fdeacc4a95911130397fa55959f000.jpg',
  'https://static.wixstatic.com/media/da1870_38e338b234294c5c9de3e495f344df1a~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/profile%20pic.jpg',
  'https://static.wixstatic.com/media/da1870_f43014edfd8c4b2c8de6a27aa7b9df99~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/We%20always%20provide%20the%20best%20medical%20tools%20to%20provide%20the%20best%20service%20to%20you__%D8%AF%D8%A7%D8%A6%D9%85%D8%A7%20%D9%86%D9%88%D9%81%D8%B1%20%D8%A3%D9%86.jpg',
  'https://static.wixstatic.com/media/da1870_20ab00ffc5b04c148eeb9816c3553278~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Your%20kids%20will%20actually%20ENJOY%20getting%20their%20teeth%20checked%20at%20crystal__%D8%A3%D8%B7%D9%81%D8%A7%D9%84%D9%83%D9%85%20%D8%B3%D9%8A%D8%B3%D8%AA%D9%85%D8%AA%D8%B9%D9%88%D9%86%20%D8%B9%D9%86.jpg',
];

const COL3 = [
  'https://static.wixstatic.com/media/da1870_ff79faab0e2e41b48d5cf0786a489a14~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/We%20strictly%20follow%20the%20international%20guidlines%20regarding%20Infection%20control%20and%20Patient%20saf.jpg',
  'https://static.wixstatic.com/media/da1870_36f66643bd914f939ea4d9b01b2a52c2~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_1364_JPG.jpg',
  'https://static.wixstatic.com/media/da1870_6dd7315fc75247a0b791327a37ffefc1~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ease%20your%20mind%20with%20our%20skilled%20doctors%20and%20state%20of%20the%20art%20equipment.jpg',
  'https://static.wixstatic.com/media/da1870_f6690e201ff84b28b55c202913efbc66f000.jpg/v1/fill/w_480,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/da1870_f6690e201ff84b28b55c202913efbc66f000.jpg',
];

// Triple each column so the -33.33% loop is always seamless
function GalleryCol({ images, reverse, speed }) {
  const tripled = [...images, ...images, ...images];
  return (
    <div className="gcol-outer">
      <div
        className="gcol-inner"
        style={{
          '--speed': `${speed}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {tripled.map((src, i) => (
          <img
            key={i}
            className="gcol-img"
            src={src}
            alt="Crystal Dental"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { lang } = useLang();
  const ref = useRef(null);
  const visible = useReveal(ref);

  return (
    <section className="gallery-section">
      <div className="gallery-header" ref={ref}>
        <span className={`section-label reveal${visible ? ' visible' : ''}`}>
          {t(lang, '// Our Space', '// مساحتنا')}
        </span>
        <h2 className={`section-heading reveal${visible ? ' visible' : ''}`} style={{ transitionDelay: '80ms', marginBottom: 0 }}>
          {t(lang, 'Step inside.', 'ادخل وانظر.')}
        </h2>
      </div>

      <div className="gcol-grid">
        <GalleryCol images={COL1} reverse={false} speed={22} />
        <GalleryCol images={COL2} reverse={true}  speed={28} />
        <GalleryCol images={COL3} reverse={false} speed={25} />
      </div>
    </section>
  );
}
