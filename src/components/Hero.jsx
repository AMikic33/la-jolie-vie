import { useState, useEffect } from "react";
import hero from "../img/hero.png";

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="hero">
      <img src={hero} alt="La Jolie Vie Premium Hundesalon München - Professionelle Hundepflege und Grooming Services" className="hero-img" />

      <nav className="navbar" aria-label="Hauptnavigation">
        {/* <div className="logo">La Jolie Vie</div> */}

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href="#gallery" onClick={() => setOpen(false)} title="Galerie unserer Hundepflege-Arbeiten">
              Galerie
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen(false)} title="Unsere Grooming Services und Preise">
              Leistungen
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)} title="Über La Jolie Vie Hundesalon">
              Über uns
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)} title="Kontakt und Terminvereinbarung">
              Kontakt
            </a>
          </li>
          <li>
            <a href="#anfahrt" onClick={() => setOpen(false)} title="Anfahrt zum Hundesalon in München">
              Anfahrt
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={`mobile-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
