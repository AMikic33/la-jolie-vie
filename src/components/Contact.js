export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const dogName = formData.get('dogName');
    const message = formData.get('message');
    
    const subject = encodeURIComponent(`Terminanfrage von ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `E-Mail: ${email}\n` +
      `Telefon: ${phone}\n` +
      `Name des Hundes: ${dogName}\n\n` +
      `Nachricht:\n${message}`
    );
    
    // window.location.href = `mailto:grooming.lajolie@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = `mailto:mikicosana@gmail.com?subject=${subject}&body=${body}`;

    
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Kontaktieren Sie uns</h2>
        <p className="section-subtitle">Wir würden Ihren kostbaren Vierbeiner gerne verwöhnen</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Besuchen Sie uns</h4>
                <p>Martin-Luther Str. 24, 81439 München</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Rufen Sie uns an</h4>
                <p>Kommt bald</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h4>Öffnungszeiten</h4>
                <p>Montag-Freitag: 09:00 -18:00 Uhr</p>
                <p>Samstag: Nach Vereinbarung</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>E-Mail</h4>
                <p>grooming.lajolie@gmail.com</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Ihr Name" required />
            <input type="email" name="email" placeholder="Ihre E-Mail" required />
            <input type="tel" name="phone" placeholder="Telefonnummer" required />
            <input type="text" name="dogName" placeholder="Name Ihres Hundes" required />
            <textarea name="message" placeholder="Erzählen Sie uns von Ihrem Vierbeiner und der gewünschten Leistung" rows="5" required></textarea>
            <button type="submit" className="submit-button">Termin anfragen</button>
          </form>
        </div>
      </div>
    </section>
  );
}
