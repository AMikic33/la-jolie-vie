import instagramLogo from '../logo/instagram-logo.png';
import facebookLogo from '../logo/facebook-logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>La Jolie Vie</h3>
            <p>Gepflegter Hund. Glücklicher Hund. </p>
          </div>
          <div className="footer-section">
            <h4>Schnelllinks</h4>
            <nav aria-label="Footer Navigation">
              <ul>
                <li><a href="#services" title="Zu unseren Leistungen">Leistungen</a></li>
                <li><a href="#about" title="Über uns">Über uns</a></li>
                <li><a href="#contact" title="Kontakt">Kontakt</a></li>
                <li><Link to="/impressum" title="Impressum">Impressum</Link></li>
                <li><Link to="/datenschutz" title="Datenschutzerklärung">Datenschutz</Link></li>
              </ul>
            </nav>
          </div>
          <div className="footer-section">
            <h4>Folgen Sie uns</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/la.jolie.vie_grooming?utm_source=qr&igsh=NWJiaTkwaTMwZ29q" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramLogo} alt="Instagram" className="social-icon instagram-icon" />
              </a>
              <a href="https://www.facebook.com/share/17mVrKLv3G/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookLogo} alt="Facebook" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 La Jolie Vie Hundesalon. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
