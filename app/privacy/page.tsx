import type { Metadata } from "next";
import { SiteNav } from "../SiteNav";
import { SiteFooter } from "../SiteFooter";

export const metadata: Metadata = {
  title: "מדיניות פרטיות - מיה הסעות",
  description: "מדיניות הפרטיות של אתר מיה הסעות. האתר אינו אוסף מידע אישי באמצעות טפסים.",
};

export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">דלג לתוכן הראשי</a>
      <SiteNav />
      <main className="legal" id="main-content">
        <div className="wrap legal-inner">
          <p className="kicker">מיה הסעות</p>
          <h1>מדיניות פרטיות</h1>
          <p className="legal-updated">עודכן בספטמבר 2026</p>
          <p>אתר זה אינו אוסף ואינו שומר מידע אישי באמצעות טפסים. אין באתר טופסי יצירת קשר או הזנה של פרטים.</p>
          <p>
            לחיצה על כפתורי הטלפון או הוואטסאפ פותחת שיחה ישירות במכשיר של המבקר מול הטלפון או הוואטסאפ של העסק. מספר הטלפון או השם אינם נשלחים דרך שרת צד שלישי של האתר.
          </p>
          <p>ספק האחסון (Vercel) עשוי לשמור יומני גישה אוטומטיים של השרת לצורכי אבטחה וביצועים בלבד.</p>
          <p>
            לשאלות בנושא פרטיות ניתן לפנות ל־[שם העסק/בעל השליטה] בטלפון{" "}
            <a href="tel:0536632777">053-6632777</a>.
          </p>
          <a className="legal-back" href="/">חזרה לעמוד הבית</a>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
