import React, { useEffect, useRef, useState } from 'react';

function importAll(r) {
  return r.keys().map(r);
}

export default function Gallery() {
  const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/i)).filter(
    (src) => !src.includes('hero')
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (images.length ? (i + 1) % images.length : 0));
  const prev = () => setIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0));

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
  };

  useEffect(() => {
    if (!images.length) return;
    resetTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev();
      else next();
      resetTimer();
    }
    touchStartX.current = null;
  }

  if (!images.length) return null;

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Diese Website befindet sich noch im Aufbau</h2>
        {/* <h2 className="section-title">Galerie</h2> */}

        <div
          className="carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-roledescription="carousel"
        >
          <button
            className="carousel-btn prev"
            onClick={() => {
              prev();
              resetTimer();
            }}
            aria-label="Zurück"
          >
            ‹
          </button>

          <div className="carousel-track">
            {images.map((src, i) => (
              <div
                className={`carousel-slide ${i === index ? 'active' : ''}`}
                key={i}
                aria-hidden={i !== index}
              >
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <button
            className="carousel-btn next"
            onClick={() => {
              next();
              resetTimer();
            }}
            aria-label="Weiter"
          >
            ›
          </button>

          <div className="carousel-indicators">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => {
                  setIndex(i);
                  resetTimer();
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <p className="gallery-tagline">Gepflegter Hund. Glücklicher Hund.</p>
      </div>
    </section>
  );
}
