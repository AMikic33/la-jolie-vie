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
      <img src={hero} alt="Hero background" className="hero-img" />

      <nav className="navbar">
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
            <a href="#gallery" onClick={() => setOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
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
