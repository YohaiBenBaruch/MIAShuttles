const links = [
  { href: "/#services", label: "שירותים" },
  { href: "/#areas", label: "אזורי שירות" },
  { href: "/#how", label: "איך זה עובד" },
  { href: "/#faq", label: "שאלות נפוצות" },
  { href: "/#contact", label: "יצירת קשר" },
];

export function SiteNav() {
  return (
    <div className="nav-bar">
      <div className="nav-inner">
        <a href="/" aria-label="מיה הסעות - לעמוד הבית">
          <img className="site-logo" src="/assets/mialogo.png" alt="" />
        </a>
        <nav className="nav-links" aria-label="תפריט ראשי">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a href="tel:0536632777" className="btn btn-orange nav-phone" aria-label="התקשרו 053-6632777">
            <svg className="nav-phone-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="nav-phone-text">053-6632777</span>
            <span className="nav-phone-short">חייגו</span>
          </a>
        </div>
      </div>
    </div>
  );
}
