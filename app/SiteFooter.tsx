const nav = [
  { href: "/#services", label: "שירותים" },
  { href: "/#areas", label: "אזורי שירות" },
  { href: "/#how", label: "איך זה עובד" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/#contact", label: "יצירת קשר" },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="/">
            <img className="site-logo" src="/assets/mialogo.png" alt="מיה הסעות" />
          </a>
          <p>הסעות פרטיות לכל יעד. נוסעים איתנו בכל דרך.</p>
        </div>
        <div>
          <h2>ניווט</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>יצירת קשר</h2>
          <ul>
            <li>
              <a href="tel:0536632777">053-6632777</a>
            </li>
            <li>
              <a href="https://wa.me/972536632777">וואטסאפ</a>
            </li>
            <li>שירות בכל הארץ, 24/7</li>
          </ul>
        </div>
        <div>
          <h2>מידע</h2>
          <ul>
            <li>
              <a href="/privacy">מדיניות פרטיות</a>
            </li>
            <li>
              <a href="/accessibility">הצהרת נגישות</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom-row">
          <span>© 2026 מיה הסעות. כל הזכויות שמורות.</span>
          <span>עוסק פטור/מורשה מס׳ [XXXXXXXX]</span>
        </div>
      </div>
    </footer>
  );
}
