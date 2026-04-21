// import { useState } from 'react';
import whatsappIcon from '../logo/whatsapp-icon.png';

export default function Contact() {

  return (
    <section id="contact" className="contact-section" aria-label="Kontakt und Terminvereinbarung">
      <div className="container">
        <h2 className="section-title">Kontaktieren Sie uns</h2>
        <p className="section-subtitle">Wir würden Ihren kostbaren Vierbeiner gerne verwöhnen</p>
        <p className="section-subtitle"><strong>Termine müssen 24 Stunden im Voraus abgesagt werden.
          Ansonsten können Gebühren anfallen, damit die Wirtschaftlichkeit des Unternehmens gewährleistet wird.</strong></p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Besuchen Sie uns</h4>
                <p>Martin-Luther Str. 24, 81539 München</p>
              </div>
            </div>
            <div className="contact-item">
              <img src={whatsappIcon} alt="WhatsApp" className="contact-icon-img" />
              <div>
                <h4>WhatsApp oder Telefon</h4>
                <p>0163 421 1971</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <div>
                <h4>Öffnungszeiten</h4>
                <p>Montag-Freitag: 09:00 - 18:00 Uhr</p>
                <p>Montag-Freitag ab 18:00 Uhr: Nach Vereinbarung</p>
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
          {/* <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            encType="multipart/form-data"
            className="contact-form" 
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Ihr Name" required />
            <input type="email" name="email" placeholder="Ihre E-Mail" required />
            <input type="tel" name="phone" placeholder="Telefonnummer" required />
            <input type="text" name="dogName" placeholder="Name Ihres Hundes" required />
            <textarea name="message" placeholder="Erzählen Sie uns von Ihrem Vierbeiner und der gewünschten Leistung" rows="5" required></textarea>
            <div className="file-upload-wrapper">
              <label htmlFor="photo" className="file-upload-label">
                📷 Foto Ihres Hundes hochladen
              </label>
              <input 
                type="file" 
                id="photo" 
                name="photo" 
                accept="image/*"
                className="file-upload-input"
              />
            </div>
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
          </form> */}
        </div>
      </div>
    </section>
  );
}
