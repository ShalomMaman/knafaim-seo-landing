'use client';

import "./globals.css";
import React, { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <html lang="he" dir="rtl">
      <head>
        <title>טרמינל כנפיים | מערכת חינוך חסידית פורצת דרך למוסדות</title>
        <meta name="description" content="מנוע הטיסה ליצירת מעטפת חינוכית-חסידית אולטימטיבית. מודל פורץ דרך להטמעת חסידות ויראת שמים בהתאמה אישית – חיבור בית-ספר-בית דרך גיימיפיקציה חכמה." />
        <meta name="keywords" content="טרמינל כנפיים, חינוך חסידי, גיימיפיקציה, מוסדות חינוך, תלמוד תורה, מערכת חינוך" />
        <meta property="og:title" content="טרמינל כנפיים | מערכת חינוך חסידית פורצת דרך" />
        <meta property="og:description" content="מנוע הטיסה ליצירת מעטפת חינוכית-חסידית אולטימטיבית" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="app-container">
          {/* HEADER */}
          <header className="main-header">
            <div className="header-content">
              <a href="#" className="logo">
                <span className="logo-icon">✈️</span>
                טרמינל כנפיים
              </a>
              <nav className="main-nav">
                <a href="#features">מערכות ופיתוחים</a>
                <a href="#methodology">השיטה שלנו</a>
                <a href="#pricing">מסלולי הטיסה</a>
                <a href="#contact" className="btn-primary">הצטרפו עכשיו</a>
              </nav>
              <button
                className={`mobile-menu-toggle${menuOpen ? ' open' : ''}`}
                aria-label="תפריט"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </header>

          {/* MOBILE MENU OVERLAY */}
          <div
            className={`mobile-overlay${menuOpen ? ' active' : ''}`}
            onClick={closeMenu}
          />

          {/* MOBILE DRAWER */}
          <nav className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
            <button className="drawer-close" onClick={closeMenu} aria-label="סגור תפריט">
              ✕
            </button>
            <div className="drawer-logo">✈️ טרמינל כנפיים</div>
            <div className="drawer-links">
              <a href="#features" onClick={closeMenu}>מערכות ופיתוחים</a>
              <a href="#methodology" onClick={closeMenu}>השיטה שלנו</a>
              <a href="#pricing" onClick={closeMenu}>מסלולי הטיסה</a>
              <a href="#contact" className="btn-primary drawer-cta" onClick={closeMenu}>
                הצטרפו עכשיו
              </a>
            </div>
          </nav>

          <main>{children}</main>

          {/* FOOTER */}
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
