import { useState, useEffect, useRef } from 'react';
import { RoseBranch } from './components/RoseBranch';
import './App.css';

// المسارات الديناميكية المتوافقة مع Vite و GitHub Pages
const DEFAULT_LOGO = `${import.meta.env.BASE_URL}ag-logo.png`;
const AUDIO_PATH = `${import.meta.env.BASE_URL}Music.mp3`;

function App() {
  const [showInvitation, setShowInvitation] = useState(false);

  // مرجع عنصر الصوت
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const weddingDate = new Date("2026-09-13T19:30:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const openInvitation = () => {
    setShowInvitation(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    // تشغيل الصوت فور الضغط للالتفاف على حظر المتصفح
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked by browser:", err);
      });
    }
  };

  return (
    <>
      {/* عنصر الصوت المتوافق محلياً وأونلاين */}
      <audio ref={audioRef} src={AUDIO_PATH} preload="auto" loop />

      {!showInvitation ? (
        <section className="welcome" id="welcome">
          {/* Logo A & G */}
          <div className="divider" style={{ cursor: 'default' }}>
            <img src={DEFAULT_LOGO} alt="Wedding Logo" className="ag-logo" />
          </div>

          <p className="small-title">بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ</p>

          {/* العنوان الرئيسي محاط بتقصيبتين كغصن ورد من اليمين واليسار */}
          <div className="title-branches-container">
            <RoseBranch side="right" size="md" />
            <h1>دعوة عقد قران</h1>
            <RoseBranch side="left" size="md" />
          </div>

          {/* أسماء العروسين محاطة بتقصيبتين كغصن ورد */}
          <div className="names-branches-container">
            <RoseBranch side="right" size="sm" />
            <div className="names">
              <span>محمد أنس</span>
              <b>&</b>
              <span>غالية</span>
            </div>
            <RoseBranch side="left" size="sm" />
          </div>

          <p className="welcome-date">13 • 09 • 2026</p>

          <button className="open-btn" onClick={openInvitation}>
            فتح الدعوة
            <span>♡</span>
          </button>
        </section>
      ) : (
        <main id="invitation" className="invitation">
          <section className="hero">
            <div className="ornament">✦</div>

            {/* الآية القرآنية محاطة بتقصيبتين عموديتين كغصني ورد مذهبين من اليمين واليسار */}
            <div className="quran-framed-wrapper">
              <RoseBranch side="right" variant="vertical" size="sm" />
              <p className="quran">
                ﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنْفُسِكُمْ
                أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم
                مَّوَدَّةً وَرَحْمَةً ﴾
              </p>
              <RoseBranch side="left" variant="vertical" size="sm" />
            </div>

            <p className="intro">بكل الحب والفرح</p>

            {/* العنوان محاط بتقصيبتين كغصن ورد */}
            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>نتشرف بدعوتكم</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <p className="intro">
              لمشاركتنا فرحتنا بمناسبة عقد قران
            </p>

            <div className="couple">
              <div>
                <span className="family">عائلة الحصني</span>
                <h3>المهندس</h3>
                <h4>محمد أنس محمد توفيق الحصني</h4>
              </div>

              <div className="heart">♥</div>

              <div>
                <span className="family">عائلة دادو</span>
                <h3>السيد هشام</h3>
                <h4>الأستاذة غالية</h4>
              </div>
            </div>

            {/* Logo */}
            <div className="divider" onClick={() => setShowLogoModal(true)} style={{ cursor: 'pointer' }} title="انقر لتغيير اللوغو">
              <img
                src={customLogo}
                alt="Wedding Logo"
                className="ag-logo"
              />
            </div>

            <p className="closing">
              حضوركم بيننا يزيد فرحتنا<br />
              ويجعل يومنا أجمل
            </p>
          </section>

          {/* التاريخ والوقت */}
          <section className="details">
            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>موعدنا</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <div className="date-box">
              <div className="date-number">13</div>

              <div className="date-info">
                <strong>أيلول / سبتمبر</strong>
                <span>2026</span>
                <small>يوم الأحد</small>
              </div>
            </div>

            <div className="time">
              <span className="clock-icon">◷</span>
              <div>
                <strong>الساعة السابعة والنصف مساءً</strong>
                <small>19:30</small>
              </div>
            </div>
          </section>

          {/* العد التنازلي */}
          <section className="countdown-section">
            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>باقي على فرحتنا</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <div className="countdown" id="countdown">
              <div className="counter">
                <strong>{countdown.days}</strong>
                <span>يوم</span>
              </div>

              <div className="counter">
                <strong>{countdown.hours}</strong>
                <span>ساعة</span>
              </div>

              <div className="counter">
                <strong>{countdown.minutes}</strong>
                <span>دقيقة</span>
              </div>

              <div className="counter">
                <strong>{countdown.seconds}</strong>
                <span>ثانية</span>
              </div>
            </div>
          </section>

          {/* الموقع */}
          <section className="location">
            <div className="location-icon">⌖</div>

            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>موقع الحفل</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <p>
              يسعدنا حضوركم ومشاركتنا أجمل لحظاتنا
            </p>

            <a
              className="map-btn"
              href="https://maps.google.com/maps?q=33.4311967%2C36.1942213&z=17&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              فتح الموقع على Google Maps
              <span>↗</span>
            </a>
          </section>

          {/* تأكيد الحضور */}
          <section className="rsvp">
            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>تأكيد الحضور</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <p>
              نتمنى تأكيد حضوركم مسبقًا،<br />
              شاكرين لكم محبتكم ومشاركتنا فرحتنا.
            </p>

            <div className="whatsapp-buttons">
              <a
                href="https://wa.me/963932246136?text=السلام%20عليكم،%20أود%20تأكيد%20حضوري%20لحفل%20عقد%20قران%20محمد%20أنس%20وغالية."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
              >
                <span>☏</span>
                تأكيد الحضور
                <small>والد العروس</small>
              </a>

              <a
                href="https://wa.me/963991056497?text=السلام%20عليكم،%20أود%20تأكيد%20حضوري%20لحفل%20عقد%20قران%20محمد%20أنس%20وغالية."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp secondary"
              >
                <span>☏</span>
                التواصل مع العريس
                <small>محمد أنس</small>
              </a>
            </div>
          </section>

          {/* النهاية */}
          <section className="ending">
            <div className="big-heart">♥</div>

            <div className="heading-framed">
              <RoseBranch side="right" size="sm" />
              <h2>فرحتنا بكم تكتمل</h2>
              <RoseBranch side="left" size="sm" />
            </div>

            <p>
              نتشرف بحضوركم ومشاركتكم<br />
              هذه المناسبة الغالية على قلوبنا
            </p>

            {/* Logo */}
            <div className="divider" onClick={() => setShowLogoModal(true)} style={{ cursor: 'pointer' }} title="انقر لتغيير اللوغو">
              <img src={customLogo} alt="Wedding Logo" className="ag-logo" />
            </div>

            <div className="heading-framed" style={{ marginTop: '10px' }}>
              <RoseBranch side="right" size="sm" />
              <p className="copyright" style={{ margin: 0 }}>
                محمد أنس & غالية
              </p>
              <RoseBranch side="left" size="sm" />
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default App;
