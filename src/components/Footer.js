export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>La Jolie Vie</h3>
            <p>Gepflegter Hund. Glücklicher Hund. </p>
          </div>
          <div className="footer-section">
            <h4>Schnelllinks</h4>
            <ul>
              <li><a href="#services">Leistungen</a></li>
              <li><a href="#about">Über uns</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Folgen Sie uns</h4>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
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
