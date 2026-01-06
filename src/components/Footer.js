export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>La Jolie Vie</h3>
            <p>Where every pup lives the beautiful life</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">TikTok</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 La Jolie Vie Dog Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
