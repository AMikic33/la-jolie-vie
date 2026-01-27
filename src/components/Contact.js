import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Replace these with your actual EmailJS credentials
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000); // Clear message after 5 seconds
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
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
                <p>0163 421 1971</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h4>Öffnungszeiten</h4>
                <p>Montag-Freitag: 09:00 - 18:00 Uhr</p>
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
            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Wird gesendet...' : 'Termin anfragen'}
            </button>
            {status === 'success' && (
              <p style={{color: 'green', marginTop: '10px'}}>
                ✓ Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.
              </p>
            )}
            {status === 'error' && (
              <p style={{color: 'red', marginTop: '10px'}}>
                ✗ Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
