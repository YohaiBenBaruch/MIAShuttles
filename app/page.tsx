import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ServicesCarousel } from "./ServicesCarousel";

const pointItems = [
  {
    tone: "mark-blue",
    title: "זמינות 24/7",
    text: "בכל שעה, בכל יום",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>
    ),
  },
  {
    tone: "mark-orange",
    title: "נהגים מקצועיים",
    text: "מנוסים, אדיבים ובטוחים",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 19c.6-3.2 3.2-5 7-5s6.4 1.8 7 5"/></svg>
    ),
  },
  {
    tone: "mark-blue",
    title: "נסיעה בטוחה",
    text: "מגיעים בזמן, בראש שקט",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 3v6c0 4.2-2.8 7.2-7 8-4.2-.8-7-3.8-7-8V6l7-3z"/></svg>
    ),
  },
  {
    tone: "mark-orange",
    title: "בכל הארץ",
    text: "משדה התעופה ועד הדלת",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z"/><circle cx="12" cy="11" r="2"/></svg>
    ),
  },
  {
    tone: "mark-blue",
    title: "נתב״ג",
    text: "איסוף והחזרה לטיסות",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 15.1v-1.5L14 9.6V4.7a1.55 1.55 0 0 0-3.1 0v4.9L3.5 13.6v1.5l7.4-2.3v4.4l-2.1 1.3v1.3l3.7-.9 3.7.9v-1.3l-2.1-1.3v-4.4l6.4 2.3z"/></svg>
    ),
  },
  {
    tone: "mark-orange",
    title: "אירועים",
    text: "חתונות, אורחים ואירועים",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/></svg>
    ),
  },
  {
    tone: "mark-blue",
    title: "הסעות עובדים",
    text: "קבוע לצוותים ולחברות",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"/></svg>
    ),
  },
  {
    tone: "mark-orange",
    title: "נסיעה נוחה",
    text: "שקט, מרווח ורגוע",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/><path d="M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"/><path d="M8 19v1.5M16 19v1.5"/></svg>
    ),
  },
];

function PointsCopy({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="points-copy" aria-hidden={hidden || undefined}>
      {pointItems.map((item) => (
        <li key={item.title}>
          <span className={`mark ${item.tone}`} aria-hidden="true">{item.icon}</span>
          <div>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const areaItems = [
  {
    title: "נתב״ג",
    text: "איסוף והחזרה לטיסות, בלי לחץ של חניה ופקקים.",
    tone: "blue",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.2 15.4v-1.6L13.4 9.2V4.2a1.45 1.45 0 0 0-2.9 0v5L2.8 13.8v1.6l7.7-2.4v4.6l-2.2 1.4v1.4l3.7-1 3.7 1v-1.4l-2.2-1.4v-4.6l7.7 2.4z" />
      </svg>
    ),
  },
  {
    title: "גוש דן והמרכז",
    text: "הסעות בעיר ובין הערים במרכז, לכל שעה.",
    tone: "orange",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 21.2s6.4-5.5 6.4-10.6a6.4 6.4 0 1 0-12.8 0c0 5.1 6.4 10.6 6.4 10.6z" />
        <circle cx="12" cy="10.6" r="2.3" fill="#ffffff" />
      </svg>
    ),
  },
  {
    title: "ירושלים",
    text: "נסיעות נוחות לעיר, לאירועים ולפגישות.",
    tone: "blue",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 20.5h17" />
        <path d="M5.5 20.5V11h3.2v9.5" />
        <path d="M15.3 20.5V11H18.5v9.5" />
        <path d="M8.7 20.5V12h6.6v8.5" />
        <path d="M8.7 12c0-2.8 3.3-5 3.3-5s3.3 2.2 3.3 5" />
        <path d="M12 7.2V4.2" />
        <path d="M10.6 5.3h2.8" />
      </svg>
    ),
  },
  {
    title: "צפון הארץ",
    text: "הסעות ארוכות לצפון, בנוחות ובראש שקט.",
    tone: "orange",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 21.2s6.4-5.5 6.4-10.6a6.4 6.4 0 1 0-12.8 0c0 5.1 6.4 10.6 6.4 10.6z" />
        <circle cx="12" cy="10.6" r="2.3" fill="#ffffff" />
      </svg>
    ),
  },
  {
    title: "דרום הארץ",
    text: "מגיעים גם דרומה - לעבודה, לאירוע או הביתה.",
    tone: "blue",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="currentColor" aria-hidden="true">
        <rect x="16.3" y="18.5" width="3.4" height="13" rx="1.5" />
        <g transform="translate(18 18)">
          <ellipse cx="0" cy="-8" rx="2.15" ry="7.4" />
          <ellipse cx="0" cy="-7.2" rx="2.15" ry="6.6" transform="rotate(46)" />
          <ellipse cx="0" cy="-7.2" rx="2.15" ry="6.6" transform="rotate(-46)" />
          <ellipse cx="0" cy="-6.2" rx="2.2" ry="6.1" transform="rotate(90)" />
          <ellipse cx="0" cy="-6.2" rx="2.2" ry="6.1" transform="rotate(-90)" />
        </g>
      </svg>
    ),
  },
  {
    title: "בין־עירוני",
    text: "כל יעד בארץ, לפי השעה שנוחה לכם.",
    tone: "orange",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#fde8dc" />
        <path d="M17 19.5c3.2 2.2 5.4 5.2 7.2 9.2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeDasharray="1.3 2.5" />
        <path fill="currentColor" d="M15.2 18.4s3.5-3 3.5-5.7a3.5 3.5 0 1 0-7 0c0 2.7 3.5 5.7 3.5 5.7z" />
        <circle cx="15.2" cy="12.6" r="1.25" fill="#ffffff" />
        <path fill="currentColor" d="M31 38.2s6-5.1 6-9.8a6 6 0 1 0-12 0c0 4.7 6 9.8 6 9.8z" />
        <circle cx="31" cy="28.2" r="2.15" fill="#ffffff" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">דלג לתוכן הראשי</a>
      <SiteNav />

      <section className="hero" id="main-content">
        <div className="hero-copy">
          <div className="hero-copy-inner">
            <svg className="hero-scene" viewBox="0 0 86 48" fill="none" aria-hidden="true">
              <path d="M2 36C16 34 30 26 44 26C54 26 62 24.5 68 20.5" stroke="#7eabcf" strokeWidth="1.8" strokeDasharray="1.6 3.6" strokeLinecap="round" />
              <path fill="#e4570e" d="M68 20.5s6.2-7 6.2-12.2a6.2 6.2 0 1 0-12.4 0c0 5.2 6.2 12.2 6.2 12.2z" />
              <circle cx="68" cy="8.4" r="2.2" fill="#ffffff" />
            </svg>
            <p className="kicker">הסעות פרטיות בכל הארץ</p>
            <h1 className="hero-title">
              נוסעים בנוחות.
              <br />
              <span>מגיעים בזמן.</span>
            </h1>
            <p className="lede">הסעות פרטיות לכל יעד - שדה תעופה, אירועים, עובדים ונסיעות.</p>
            <p className="hero-line">להגיע בזמן, להגיע בטוח. זה מיה הסעות.</p>
            <div className="hero-cta-row">
              <a className="btn btn-orange" href="tel:0536632777"><PhoneIcon />התקשרו עכשיו</a>
              <a className="btn btn-blue" href="https://wa.me/972536632777"><WhatsAppIcon />וואטסאפ</a>
            </div>
          </div>
        </div>
        <div className="hero-media">
          <img className="hero-photo" src="/assets/hero-drive.png" alt="רכב מיה הסעות בדרך לנתב״ג" />
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/hero-drive.png"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/assets/hero-van.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="points" aria-label="למה מיה הסעות">
        <div className="points-viewport">
          <div className="points-track">
            <PointsCopy />
            <PointsCopy hidden />
          </div>
        </div>
      </div>

      <section className="band band-services" id="services">
        <svg className="services-flight" viewBox="0 0 840 220" fill="none" aria-hidden="true">
          <path d="M0 154C160 166 340 148 520 138C620 130 660 126 690 132" stroke="#8eafd0" strokeWidth="2.8" strokeDasharray="2.4 8" strokeLinecap="round" />
          <g transform="translate(668 42) rotate(-8) scale(0.68)" fill="none" stroke="#1d63c9" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="104" cy="124" rx="86" ry="6" fill="#d5e3f2" stroke="none" />
            <path fill="#ffffff" d="M18 36h128c16 0 24 6 34 18l24 30c6 8 2 16-8 18H30c-12 0-18-7-18-18V50c0-9 6-14 6-14z" />
            <rect x="28" y="46" width="30" height="36" rx="5" fill="#e8f1fc" />
            <rect x="66" y="46" width="30" height="36" rx="5" fill="#e8f1fc" />
            <rect x="104" y="46" width="30" height="36" rx="5" fill="#e8f1fc" />
            <path fill="#e8f1fc" d="M142 46h22c8 0 13 5 18 12l12 18H142V46z" />
            <path d="M156 88h16" />
            <path d="M48 108h112" />
            <circle cx="52" cy="108" r="18" fill="#ffffff" />
            <circle cx="52" cy="108" r="7" />
            <circle cx="164" cy="108" r="18" fill="#ffffff" />
            <circle cx="164" cy="108" r="7" />
          </g>
        </svg>
        <div className="wrap">
          <div className="section-head services-head">
            <p className="kicker">השירותים</p>
            <h2>הסעה שמתאימה בדיוק לכם</h2>
            <p className="services-sub">פתרונות הסעה מקצועיים, בטוחים ונוחים לכל צורך</p>
          </div>
          <ServicesCarousel>
            <article className="card card-warm">
              <span className="card-icon card-icon-orange" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 15h18"/><path d="M5 15l1.6-4.4A2 2 0 0 1 8.5 9h7a2 2 0 0 1 1.9 1.6L19 15"/><path d="M5 15v1.5A1.5 1.5 0 0 0 6.5 18H8a1.5 1.5 0 0 0 1.5-1.5V15"/><path d="M14.5 15v1.5A1.5 1.5 0 0 0 16 18h1.5a1.5 1.5 0 0 0 1.5-1.5V15"/><circle cx="7.2" cy="15.2" r="1.15"/><circle cx="16.8" cy="15.2" r="1.15"/></svg>
              </span>
              <h3>הסעה פרטית</h3>
              <p>נסיעה נוחה ואישית לכל יעד, בכל שעה ובכל מרחק.</p>
              <a className="card-more card-more-orange" href="#contact" aria-label="לפרטים נוספים על הסעה פרטית">
                <span>לפרטים נוספים</span>
                <span className="more-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6"/><path d="M11 7l-5 5 5 5"/></svg></span>
              </a>
            </article>
            <article className="card">
              <span className="card-icon card-icon-blue" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5.6A1.6 1.6 0 0 1 9.6 4h4.8A1.6 1.6 0 0 1 16 5.6V7"/><path d="M3 12h18"/></svg>
              </span>
              <h3>הסעות עובדים</h3>
              <p>פתרונות הסעה קבועים וגמישים לעובדים, צוותים וחברות.</p>
              <a className="card-more card-more-blue" href="#contact" aria-label="לפרטים נוספים על הסעות עובדים">
                <span>לפרטים נוספים</span>
                <span className="more-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6"/><path d="M11 7l-5 5 5 5"/></svg></span>
              </a>
            </article>
            <article className="card">
              <span className="card-icon card-icon-orange" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19.4S5.8 15.4 5.8 10.6A3.5 3.5 0 0 1 12 8.2a3.5 3.5 0 0 1 6.2 2.4c0 4.8-6.2 8.8-6.2 8.8z"/></svg>
              </span>
              <h3>אירועים וחתונות</h3>
              <p>מסיעים אתכם ואת האורחים בבטחה ובנוחות לכל אירוע.</p>
              <a className="card-more card-more-orange" href="#contact" aria-label="לפרטים נוספים על אירועים וחתונות">
                <span>לפרטים נוספים</span>
                <span className="more-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6"/><path d="M11 7l-5 5 5 5"/></svg></span>
              </a>
            </article>
            <article className="card">
              <span className="card-icon card-icon-blue" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 15.1v-1.5L14 9.6V4.7a1.55 1.55 0 0 0-3.1 0v4.9L3.5 13.6v1.5l7.4-2.3v4.4l-2.1 1.3v1.3l3.7-.9 3.7.9v-1.3l-2.1-1.3v-4.4l6.4 2.3z"/></svg>
              </span>
              <h3>שדה התעופה</h3>
              <p>איסוף והחזרה לנתב״ג בזמן, בנוחות וללא לחץ מיותר.</p>
              <a className="card-more card-more-blue" href="#contact" aria-label="לפרטים נוספים על שדה התעופה">
                <span>לפרטים נוספים</span>
                <span className="more-arrow" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H6"/><path d="M11 7l-5 5 5 5"/></svg></span>
              </a>
            </article>
          </ServicesCarousel>
        </div>
      </section>

      <section className="band band-areas" id="areas">
        <div className="wrap">
          <div className="section-head areas-head">
            <p className="kicker">אזורי שירות</p>
            <h2>מסיעים בכל רחבי הארץ</h2>
            <p>משדה התעופה ועד הדלת - אוספים אתכם מכל מקום ומגיעים ליעד בזמן.</p>
          </div>
          <div className="area-grid">
            {areaItems.map((item) => (
              <a className="area-card" href="#contact" key={item.title}>
                <span className={`area-icon area-icon-${item.tone}`}>{item.icon}</span>
                <span className="area-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </span>
                <span className="area-arrow" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-how" id="how">
        <div className="wrap how-wrap">
          <div className="section-head how-head">
            <p className="kicker">איך זה עובד</p>
            <h2>שלושה צעדים ואתם בדרך</h2>
          </div>
        </div>
        <div className="road-stage">
          <svg className="how-road" viewBox="0 0 1600 300" preserveAspectRatio="none" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" d="M-30 168 C 180 146, 360 190, 560 160 C 820 122, 980 188, 1240 158 C 1420 138, 1520 118, 1630 48" fill="none" stroke="#EEF5FC" strokeWidth="72" strokeLinecap="round" />
            <path vectorEffect="non-scaling-stroke" d="M-30 168 C 180 146, 360 190, 560 160 C 820 122, 980 188, 1240 158 C 1420 138, 1520 118, 1630 48" fill="none" stroke="#E7F1FB" strokeWidth="34" strokeLinecap="round" />
            <path vectorEffect="non-scaling-stroke" d="M-30 168 C 180 146, 360 190, 560 160 C 820 122, 980 188, 1240 158 C 1420 138, 1520 118, 1630 48" fill="none" stroke="#A9CBEA" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="6 11" opacity="0.6" />
          </svg>
          <div className="wrap how-wrap">
            <div className="steps-wrap">
              <span className="how-dot how-dot-1" aria-hidden="true" />
              <span className="how-dot how-dot-2" aria-hidden="true" />
              <ol className="steps">
                <li>
                  <span className="step-no">1</span>
                  <div className="step-card">
                    <span className="step-icon step-icon-orange" aria-hidden="true">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <h3>מתקשרים או שולחים וואטסאפ</h3>
                    <p>פשוט יוצרים קשר בטלפון 053-6632777.</p>
                  </div>
                </li>
                <li>
                  <span className="step-no">2</span>
                  <div className="step-card">
                    <span className="step-icon step-icon-navy" aria-hidden="true">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </span>
                    <h3>קובעים יעד ותאריך</h3>
                    <p>מתאימים לכם את השעה, היעד וסוג הרכב.</p>
                  </div>
                </li>
                <li>
                  <span className="step-no">3</span>
                  <div className="step-card">
                    <span className="step-icon step-icon-orange" aria-hidden="true">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                        <circle cx="7" cy="17" r="2" />
                        <path d="M9 17h6" />
                        <circle cx="17" cy="17" r="2" />
                      </svg>
                    </span>
                    <h3>יוצאים לדרך</h3>
                    <p>מגיעים ליעד בזמן, בראש שקט.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="band band-faq" id="faq">
        <svg className="faq-scene" viewBox="0 0 520 820" preserveAspectRatio="xMinYMin meet" fill="none" aria-hidden="true">
          <path d="M-30 250C70 268 150 230 268 168" stroke="#c5d6e8" strokeWidth="2.4" strokeDasharray="2.2 9" strokeLinecap="round" />
          <path d="M268 168C360 250 410 340 330 450C240 575 90 560 175 670C245 760 150 800 40 790" stroke="#c5d6e8" strokeWidth="2.4" strokeDasharray="2.2 9" strokeLinecap="round" />
          <path fill="#f08a3c" d="M268 176s20-22 20-40a20 20 0 1 0-40 0c0 18 20 40 20 40z" />
          <circle cx="268" cy="136" r="7.5" fill="#ffffff" />
        </svg>
        <div className="wrap faq-layout">
          <div className="section-head faq-head">
            <p className="kicker">שאלות נפוצות</p>
            <h2>לפני שיוצאים לדרך</h2>
          </div>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                <span>איך קובעים הסעה?</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>מתקשרים ל־053-6632777 או שולחים הודעה בוואטסאפ. אומרים לאן, מתי וכמה נוסעים - וסוגרים את הנסיעה.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span>האם אתם זמינים גם בלילה?</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>כן. השירות זמין 24 שעות ביממה, בכל יום, כולל טיסות מוקדמות והחזרות מאוחרות.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span>יש הסעות לשדה התעופה?</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>כן. אוספים אתכם מהבית לנתב״ג ומחזירים אתכם מהטיסה, בזמן ובלי דאגות חניה.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span>איך נקבע המחיר?</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>המחיר נקבע לפי היעד, השעה ומספר הנוסעים. מתאימים לכם הצעה ברורה לפני הנסיעה, בלי הפתעות.</p>
            </details>
            <details className="faq-item">
              <summary>
                <span>לאילו יעדים אפשר להזמין?</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>לכל יעד בארץ - שדה תעופה, אירוע, הסעת עובדים או נסיעה פרטית. אומרים את הכתובת, ואנחנו מגיעים.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-split">
          <div className="contact-copy">
            <p className="kicker">יצירת קשר</p>
            <h2>מוכנים לנסוע?</h2>
            <p className="contact-lead">התקשרו עכשיו ונתאים לכם את ההסעה - לכל יעד, בכל שעה.</p>
            <ul className="chips">
              <li>נתב״ג</li>
              <li>אירועים</li>
              <li>עובדים</li>
              <li>כל יעד</li>
            </ul>
          </div>
          <div className="contact-aside">
            <div className="contact-call">
              <p className="contact-card-title">התקשרו אלינו</p>
              <a className="contact-phone" href="tel:0536632777">
                <span className="contact-number" dir="ltr">053-6632777</span>
              </a>
            </div>
            <div className="contact-actions">
              <a className="btn btn-orange" href="tel:0536632777"><PhoneIcon />התקשרו עכשיו</a>
              <a className="btn btn-line" href="https://wa.me/972536632777"><WhatsAppIcon />וואטסאפ</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
