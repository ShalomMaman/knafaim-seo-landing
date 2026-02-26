'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    // Header scroll effect
    const header = document.querySelector('.main-header');
    const onScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || '0');
            const suffix = el.dataset.suffix || '';
            let current = 0;
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current).toLocaleString('he-IL') + suffix;
            }, 35);
            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((el) => counterObserver.observe(el));

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="container">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="hero">
        <div className="hero-particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>

        <div className="hero-badge">
          ✈️ &nbsp;מערכת חינוך חסידית פורצת דרך
        </div>

        <h1 className="text-gradient">
          טרמינל כנפיים
          <span className="hero-subtitle">מגדלים דור של טייסים בצבאות ה&apos;</span>
        </h1>

        <p>
          תרצו שילדיכם יקומו בבוקר עם ברק בעיניים ומשימה בלב?
          חוויית טיסה סוחפת שמחברת בין התלמיד, המחנך והבית.
        </p>

        <div className="hero-actions">
          <a href="#pricing" className="btn-primary btn-large">הצטרפו למסלול הטיסה</a>
          <a href="#features" className="btn-outline btn-large">גלו איך זה עובד</a>
        </div>

        <div className="hero-image-wrapper">
          <Image src="/images/hero-avatar.png" alt="טרמינל כנפיים - מערכת חינוך חסידית" width={800} height={800} priority className="hero-img-3d" />
        </div>

        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number" data-target="1200" data-suffix="+">0</div>
            <div className="stat-label">תלמידים פעילים</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="15" data-suffix="">0</div>
            <div className="stat-label">מוסדות חינוך</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="98" data-suffix="%">0</div>
            <div className="stat-label">שביעות רצון</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" data-target="50000" data-suffix="+">0</div>
            <div className="stat-label">מיילים שחולקו</div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHALLENGE SECTION */}
      {/* ============================================ */}
      <section id="challenge" className="section">
        <div className="split-section">
          <div className="split-image-wrapper reveal">
            <Image
              src="/images/truth-challenge.png"
              alt="אתגר האמת מול השקר"
              width={600}
              height={400}
              className="rounded-img"
            />
          </div>
          <div className="split-text-wrapper reveal reveal-delay-2">
            <h2 style={{ color: 'var(--navy)', fontSize: '2.2rem' }}>האתגר: <span className="text-gold">חינוך 360°</span> בעולם של שקר וכזב</h2>
            <p className="large-p">
              איך מעניקים לילד אמת בעולם רווי מסכים והסחות דעת?
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: '1.85' }}>
              חינוך חסידי אמיתי אינו מוגבל לשעות הלימודים.
              זוהי מציאות של 24/7 המחברת בין ציפיות הרבי, אנשי התלמוד תורה,
              והסביבה הביתית. בטרמינל כנפיים מצאנו את הדרך לגשר על הפער
              בין בית הספר לבית באמצעות טכנולוגיה רותמת ומשמעותית.
            </p>
            <ul className="challenge-list">
              <li><span className="check">✓</span> שותפות בית-ספר-בית</li>
              <li><span className="check">✓</span> חוויה של צמיחה אישית</li>
              <li><span className="check">✓</span> מערכת משחוק ומוטיבציה (Gamification)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES SECTION */}
      {/* ============================================ */}
      <section id="features" className="section">
        <div className="section-header reveal">
          <div className="section-divider" />
          <h2>מערכות הליבה של הטרמינל</h2>
          <p>
            כל מה שמוסד חינוכי צריך כדי להגביר מוטיבציה, לעקוב אחר הצלחות
            ולחבר את כל המעגלים סביב התלמיד: מורים, הורים והתלמיד עצמו.
          </p>
        </div>
        <div className="features-grid">
          {[
            {
              icon: '✈️',
              title: 'אווטאר דינמי ולוגיקת טיסה',
              desc: 'כל תלמיד הופך ל"טייס" עם דרכון ומיצוג חזותי מלא (מדים, דרגות ועיטורים) שמתעדכן אוטומטית בהתאם למדד ה"מיילים" (דלק) ומד ה"בטיחות". חוויה סוחפת שמייצרת משמעות.',
              delay: 1,
            },
            {
              icon: '🛰️',
              title: 'מגדל פיקוח (למחנך)',
              desc: 'אפליקציה חכמה למחנך המאפשרת "הענקת חותמות" (מיילים על הצטיינות) או "דיווח חריגה" (הורדת בטיחות) בזמן אמת. ניהול טקסי עליית דרגה (Check-In) וראדאר כיתתי חי.',
              delay: 2,
            },
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'צוות הקרקע (להורים)',
              desc: 'הוריהם של הטייסים שותפים מלאים בחוויה. הם יכולים להוסיף מיילים מתוך הבית ("חינוך ביתי") ולעדכן אירועי משמעת ו"בטיחות טיסה" הישר מהנייד.',
              delay: 3,
            },
            {
              icon: '💳',
              title: 'Login חכם וכניסת NFC',
              desc: 'תמיכה בטכנולוגיית כרטיסים חכמים לתלמידים, ממשק מתקדם ויזואלי בסגנון "טבלט תחנת עגינה" לכל כיתה, כולל גילוי כפילויות של כרטיסי טיסה במרווח אפס.',
              delay: 4,
            },
            {
              icon: '📊',
              title: 'דשבורד מנהל (מנהל הנמל)',
              desc: 'מערכת בקרה עליונה למנהלים: יצוא דוחות, מעקב אחרי אובדן גובה אצל טייסים הזקוקים לעזרה, התאמות תקנונים, וניהול הפרויקט כולו בקלות ובשקיפות.',
              delay: 5,
            },
            {
              icon: '🎁',
              title: 'Duty Free – חנות יעדים',
              desc: 'חלון המרה מתקדם בו התלמיד יוכל להמיר את "המיילים" שלו בפרסים, זכויות או יעדים נכספים, כולל מנגנון "חוק האיזון" שאינו מאפשר רכישות אם מד הבטיחות נמוך מדי.',
              delay: 6,
            },
          ].map((feature) => (
            <div key={feature.title} className={`feature-card reveal reveal-delay-${feature.delay}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* METHODOLOGY SECTION */}
      {/* ============================================ */}
      <section id="methodology" className="section">
        <div className="methodology-section">
          <div className="section-header reveal">
            <div className="section-divider" />
            <h2>האתגר והפתרון: חינוך 360°</h2>
            <p>
              פלטפורמה המגשרת על הפער בין בית הספר לבית, דרך מנגנון
              משחוק מתקדם ושותפות מלאה.
            </p>
          </div>

          <div className="methodology-grid">
            <div className="reveal">
              <h3>חינוך מסביב לשעון</h3>
              <p>
                חינוך חסידי אמיתי אינו מוגבל לשעות הלימודים.
                הפער הקריטי הוא כיצד המערכת החינוכית יכולה לחבר בין
                המתרחש במוסד לבין המתרחש בבית.
              </p>
              <ul className="challenge-list">
                <li><span className="check">✓</span> שותפות בית-ספר-בית</li>
                <li><span className="check">✓</span> חוויה של צמיחה אישית</li>
                <li><span className="check">✓</span> מערכת משחוק ומוטיבציה (Gamification)</li>
              </ul>
            </div>
            <div className="methodology-image reveal reveal-delay-2">
              <Image src="/images/education-challenge.png" alt="אתגר חינוך 360" width={600} height={500} className="rounded-img" />
            </div>
          </div>

          <div className="split-section" style={{marginBottom: '4rem'}}>
            <div className="split-text-wrapper reveal">
              <h3 className="text-gold" style={{fontSize: '2rem', marginBottom: '1rem'}}>צוות הקרקע: חיבור הורים מלא</h3>
              <p className="large-p">הוריהם של הטייסים שותפים מלאים בחוויה ובמשימה!</p>
              <p style={{color: "var(--gray)"}}>אפליקציית הורים ייעודית המאפשרת דיווח מהבית, מעקב אחר התקדמות הילד, ויצירת בסיס-אם תומך שמסונכרן לחלוטין עם המוסד החינוכי.</p>
            </div>
            <div className="split-image-wrapper reveal-scale">
              <Image src="/images/parents-guide.png" alt="מדריך הורים" width={600} height={400} className="rounded-img" />
            </div>
          </div>

          <div className="split-section reverse" style={{marginBottom: '4rem'}}>
            <div className="split-text-wrapper reveal">
              <h3 className="text-gold" style={{fontSize: '2rem', marginBottom: '1rem'}}>היעד הסופי: המראה לגאולה</h3>
              <p className="large-p">מטמיעים מטרה רוחנית עליונה בכל שלב</p>
              <p style={{color: "var(--gray)"}}>האתגר הגדול הוא לשמור על איזון אווירודינמי. טיסה מוצלחת נמדדת לא רק בצבירת מיילים אלא בבניית תלמיד חדור שליחות המוכוון אל הגאולה האמיתית והשלימה.</p>
            </div>
            <div className="split-image-wrapper reveal-scale reveal-delay-2">
              <Image src="/images/takeoff-geula.png" alt="אישור המראה" width={600} height={400} className="rounded-img" />
            </div>
          </div>

          {/* Flow diagram */}
          <div className="section-header reveal" style={{ marginTop: '4rem' }}>
            <div className="section-divider" />
            <h2>תרשים הזרימה של הטייס</h2>
            <p>
              היררכיה פיקודית המעניקה זרימת מידע חלקה והערכה דינמית.
              חוק האיזון האווירודינמי מבטיח שכל המערכות מסונכרנות.
            </p>
          </div>

          <div className="centered-image-wrapper reveal-scale">
            <Image
              src="/images/eagle-wings.png"
              alt="כנפי נשר"
              width={800}
              height={400}
              className="wings-image"
            />
          </div>

          <div className="roles-grid" style={{ marginTop: '3rem' }}>
            {[
              { icon: '👑', title: 'המצביא העליון', desc: 'החזון והפקודות. מטרת העל מכוונת לאורה ומובילה את היעד הראשי.' },
              { icon: '🏢', title: 'מנהל הנמל', desc: 'ארגון המשאבים ולוגיסטיקה כוללת. דואג להגבהת הסטנדרטים במוסד.' },
              { icon: '🗼', title: 'מגדל הפיקוח', desc: 'צוות ההוראה – מאשרים המראות ומנהלים את המרחב האווירי.' },
              { icon: '🛠️', title: 'צוות קרקע', desc: 'ההורים – אחראים לחיזוק התחזוקה מהבית ויצירת בסיס אם יציב.' },
              { icon: '👨‍✈️', title: 'הטייסים', desc: 'תלמידי המוסד – אלה המנווטים ומבצעים בפועל. צוברים דרגות ועולים מעלה.' },
            ].map((role, i) => (
              <div key={role.title} className={`role-item reveal reveal-delay-${i + 1}`}>
                <span className="role-icon">{role.icon}</span>
                <h4>{role.title}</h4>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GALLERY - PROTOCOL PAGES SHOWCASE */}
      {/* ============================================ */}
      <section className="section gallery-section">
        <div className="section-header reveal">
          <div className="section-divider" />
          <h2>הצצה לפרוטוקול הטיסה</h2>
          <p>גלו את עומק המערכת דרך פרוטוקול הטיסה המלא שלנו</p>
        </div>
        <div className="gallery-scroll">
          {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
            <div key={num} className="gallery-item">
              <img
                src={`/images/protocol/page_${num}.png`}
                alt={`פרוטוקול טיסה - עמוד ${num}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS / SOCIAL PROOF */}
      {/* ============================================ */}
      <section className="section">
        <div className="testimonials-section">
          <div className="section-header reveal">
            <div className="section-divider" />
            <h2>מה אומרים עלינו</h2>
            <p>מנהלים ומחנכים שכבר הפעילו את הטרמינל במוסדות שלהם</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card reveal reveal-delay-1">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">
                מאז שהכנסנו את טרמינל כנפיים, ראינו שינוי דרמטי במוטיבציה
                של התלמידים. הם מגיעים לבוקר עם אנרגיה שלא ראינו לפני כן.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍🏫</div>
                <div>
                  <div className="testimonial-name">הרב מ. כהן</div>
                  <div className="testimonial-role">מנהל ת&quot;ת, ירושלים</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal reveal-delay-2">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">
                החיבור בין הבית למוסד הוא פשוט מדהים. ההורים מרגישים חלק
                מהתהליך והילדים מקבלים חיזוק מכל הכיוונים.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩‍💼</div>
                <div>
                  <div className="testimonial-name">הרב ש. לוי</div>
                  <div className="testimonial-role">מחנך ראשי, בני ברק</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal reveal-delay-3">
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">
                כהורה, אני סוף סוף מרגיש שאני חלק מהחינוך של הילד גם במוסד.
                אפליקציית &quot;צוות הקרקע&quot; היא פשוט גאונית.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨</div>
                <div>
                  <div className="testimonial-name">יוסי ד.</div>
                  <div className="testimonial-role">הורה, כפר חב&quot;ד</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PRICING SECTION */}
      {/* ============================================ */}
      <section id="pricing" className="section">
        <div className="section-header reveal">
          <div className="section-divider" />
          <h2>הפעלת הטרמינל אצלכם: מסלולי שירות</h2>
          <p>בחרו את המסלול המתאים לגודל המוסד והחזון שלכם</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card reveal reveal-delay-1">
            <h3 className="pricing-tier">מסלול טייסת מקומית</h3>
            <p className="feature-desc">
              מתאים לכיתות בודדות או ארגונים קטנים המעוניינים להכניס
              את עולם התעופה לכיתה.
            </p>
            <div>
              <span className="pricing-currency">₪</span>
              <span className="pricing-amount">250</span>
              <span className="pricing-interval"> / לחודש</span>
            </div>
            <ul className="pricing-features">
              <li>עד 40 תלמידים (טייסים)</li>
              <li>מגדל פיקוח למחנך בודד</li>
              <li>פאנל תלמיד ואפסילון בסיסי</li>
              <li>תמיכה טכנית בשעות הפעילות</li>
            </ul>
            <a href="#contact" className="btn-outline">בחרו בטייסת המקומית</a>
          </div>

          <div className="pricing-card popular reveal reveal-delay-2">
            <div className="popular-badge">הנפוץ ביותר</div>
            <h3 className="pricing-tier text-gold">מסלול נמל תעופה</h3>
            <p className="feature-desc">
              החבילה המושלמת לשכבות גדולות ותלמוד-תורה, מותאם
              לעדכון בלייב ועבודה עם הורים.
            </p>
            <div>
              <span className="pricing-currency">₪</span>
              <span className="pricing-amount">790</span>
              <span className="pricing-interval"> / לחודש</span>
            </div>
            <ul className="pricing-features">
              <li>עד 250 תלמידים</li>
              <li>מרכז הורים מלא (אפליקציית צוות קרקע)</li>
              <li>כניסה מודולרית (Smart Login / PIN)</li>
              <li>מערכת Duty Free מובנית לייב</li>
              <li>הדרכות והטמעת מערכת למורים</li>
            </ul>
            <a href="#contact" className="btn-primary">הקימו נמל תעופה עכשיו</a>
          </div>

          <div className="pricing-card reveal reveal-delay-3">
            <h3 className="pricing-tier">מסלול לצי עולמי (פרימיום)</h3>
            <p className="feature-desc">
              למוסדות ענק ולרשתות המחפשות מיתוג אישי צמוד,
              כרטיסי NFC ומעטפת מקסימלית.
            </p>
            <div>
              <span className="pricing-currency">₪</span>
              <span className="pricing-amount">1490</span>
              <span className="pricing-interval"> / לחודש</span>
            </div>
            <ul className="pricing-features">
              <li>ללא הגבלת טייסים</li>
              <li>כניסות מתקדמות ע&quot;י כרטיסי NFC תמורת הקשה</li>
              <li>דשבורד מנהל משולב מתקדם והתאמת לוגו</li>
              <li>ניהול מלא של חוק האיזון ברמה המוסדית</li>
              <li>ליווי VIP לצוות ההנהלה 24/6</li>
            </ul>
            <a href="#contact" className="btn-outline">בקשו הצעת מחיר בהתאמה</a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section id="contact" className="cta-section">
        <div className="cta-content reveal-scale">
          <div className="section-divider" />
          <h2 className="text-gradient">מוכנים להמראה? 🚀</h2>
          <p>
            הצטרפו למהפכת החינוך החסידי. השאירו פרטים ונחזור אליכם
            עם טיסת אבטיפוס מותאמת אישית למוסד שלכם.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/972500000000" target="_blank" className="btn-primary btn-large" rel="noreferrer">
              📱 שלחו הודעה בוואטסאפ
            </a>
            <a href="mailto:info@knafayim.co.il" className="btn-outline btn-large">
              ✉️ שלחו אימייל
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
