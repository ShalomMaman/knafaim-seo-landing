import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "טרמינל כנפיים | מערכת חינוך חסידית פורצת דרך למוסדות",
  description:
    "מנוע הטיסה ליצירת מעטפת חינוכית-חסידית אולטימטיבית. מודל פורץ דרך להטמעת חסידות ויראת שמים בהתאמה אישית – חיבור בית-ספר-בית דרך גיימיפיקציה חכמה.",
  keywords: "טרמינל כנפיים, חינוך חסידי, גיימיפיקציה, מוסדות חינוך, תלמוד תורה, מערכת חינוך",
  openGraph: {
    title: "טרמינל כנפיים | מערכת חינוך חסידית פורצת דרך",
    description: "מנוע הטיסה ליצירת מעטפת חינוכית-חסידית אולטימטיבית",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <div className="app-container">
          <header className="main-header">
            <div className="header-content">
              <div className="logo">
                <span className="logo-icon">✈️</span>
                טרמינל כנפיים
              </div>
              <nav className="main-nav">
                <a href="#features">מערכות ופיתוחים</a>
                <a href="#methodology">השיטה שלנו</a>
                <a href="#pricing">מסלולי הטיסה</a>
                <a href="#contact" className="btn-primary">הצטרפו עכשיו</a>
              </nav>
              <button className="mobile-menu-toggle" aria-label="תפריט">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </header>
          <main>
            {children}
          </main>
          <footer className="main-footer">
            <div className="footer-content">
              <div className="footer-logo">✈️ טרמינל כנפיים</div>
              <p>המרכז החינוכי המתקדם ביותר למנהיגות חסידית</p>
              <div className="footer-links">
                <a href="#features">מערכות הליבה</a>
                <a href="#methodology">השיטה שלנו</a>
                <a href="#pricing">מסלולים ותמחור</a>
                <a href="#contact">צרו קשר</a>
              </div>
              <div className="footer-divider" />
              <p>© כל הזכויות שמורות {new Date().getFullYear()} | טרמינל כנפיים</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
