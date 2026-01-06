export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to pamper your precious pup</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p>123 Paw Street, Dogtown, CA 90210</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <p>(555) PAW-LIFE</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h4>Hours</h4>
                <p>Mon-Sat: 8am - 6pm</p>
                <p>Sunday: 10am - 4pm</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p>hello@lajolievie.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Dog's Name" required />
            <textarea placeholder="Tell us about your pup and preferred service" rows="5" required></textarea>
            <button type="submit" className="submit-button">Request Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}
