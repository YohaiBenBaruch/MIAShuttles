import type { Metadata } from "next";
import { SiteNav } from "../SiteNav";
import { SiteFooter } from "../SiteFooter";

export const metadata: Metadata = {
  title: "הצהרת נגישות - מיה הסעות",
  description: "הצהרת הנגישות של אתר מיה הסעות ודרכי פנייה בנושא נגישות.",
};

export default function AccessibilityPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">דלג לתוכן הראשי</a>
      <SiteNav />
      <main className="legal" id="main-content">
        <div className="wrap legal-inner">
          <p className="kicker">מיה הסעות</p>
          <h1>הצהרת נגישות</h1>
          <p className="legal-updated">עודכן בספטמבר 2026</p>
          <p>
            מיה הסעות פועלת להנגשת האתר לאנשים עם מוגבלות, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח–1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג–2013.
          </p>
          <p>האתר שואף לעמוד בדרישות תקן ישראלי ת״י 5568 ברמת AA.</p>
          <h2>מה קיים באתר</h2>
          <ul>
            <li>מבנה כותרות וניווט ברור</li>
            <li>אפשרות מעבר בין קישורים וכפתורים באמצעות המקלדת</li>
            <li>טקסט חלופי לתמונות המרכזיות</li>
            <li>קישור לדילוג אל התוכן הראשי</li>
          </ul>
          <h2>נתקלתם בקושי?</h2>
          <p>
            אם משהו באתר אינו נגיש, פנו אלינו בטלפון{" "}
            <a href="tel:0536632777">053-6632777</a>
            {" "}ונסייע בגישה למידע או לשירות.
          </p>
          <a className="legal-back" href="/">חזרה לעמוד הבית</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
