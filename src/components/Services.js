import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Komplettpflege',
      price: [
        'XS (bis 5 kg) – ab 85 €',
        'S (5–10 kg) – ab 95 €',
        'M (10–20 kg) – ab 110 €',
        'L (20–30 kg) – ab 130 €',
        'XL (ab 30 kg) – ab 160 €'
      ],
      description: 'Waschen · Föhnen · Bürsten · Schneiden / Stylen inkl. Ohren-, Krallen- & Pfotenpflege',
      icon: '🐶🛁'
    },
    {
      id: 2,
      name: 'Pflege ohne Schneiden',
      price: [
        'XS (bis 5 kg) – ab 55 €',
        'S (5–10 kg) – ab 60 €',
        'M (10–20 kg) – ab 70 €',
        'L (20–30 kg) – ab 80 €',
        'XL (ab 30 kg) – ab 95 €'
      ],
      description: 'Der Hund wird gepflegt, aber nicht geschnitten.',
      icon: '🐕🫧'
    },
    {
      id: 3,
      name: 'Trimmen / Hand Stripping',
      price: [
        'XS (bis 5 kg) – ab 95 €',
        'S (5–10 kg) – ab 105 €',
        'M (10–20 kg) – ab 120 €',
        'L (20–30 kg) – ab 140 €',
        'XL (ab 30 kg) – ab 170 €',
      ],
      description: 'Abgestorbenes Fell wird per Hand entfernt, ohne das Fell zu schneiden.',
      icon: '✋🐾'
    },
    {
      id: 4,
      name: 'Zusatzleistungen',
      price: [
        "Krallen schneiden & feilen – 12 €",
        "Ohrenreinigung – 12 €",
        "Pfotenpflege – 15 €",
        "Mini-Pflege-Paket (Pfoten · Krallen · Ohren) – 35 €",
        "Hygienischer Schnitt – 10 €",
        "Entfilzen / intensives Entwirren (15 Min.) – 15 €",
        "Unterwolle entfernen (Deshedding) – ab 15 €",
      ],
      description: 'Ergänzende Leistungen, die optional zur Pflege hinzugebucht werden können.',
      icon: '➕✨'
    },
    {
      id: 5,
      name: 'Welpen – Sanfte Eingewöhnung',
      price: [
        'Kennenlern-Termin (15–20 Min) – 25 €',
        'Mini-Pflege für Welpen (30–40 Min) – 45 €',
        'Welpen-Pflege mit sanftem Bad (45–60 Min) – 55–60 €',
        'Hinweis: ab der 12. Lebenswoche. Dauer und Umfang werden dem Welpen individuell angepasst.',
      ],
      description: 'Die ersten Besuche beim Hundefriseur sind besonders wichtig. Wir nehmen uns Zeit für eine ruhige, sanfte und individuelle Eingewöhnung.',
      icon: '🐩🧸'
    },
    {
      id: 6,
      name: 'Senioren-Hunde',
      price: [
        'Senioren-Hunde benötigen besondere Aufmerksamkeit und eine einfühlsame Pflege.', 
        'Für Hunde ab 9Jahren bieten wir einen Seniorenrabatt von 10%.'
      ],
      description: 'Pflege mit besonderer Rücksicht',
      icon: '🦮❤️'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Leistungen</h2>
        <p className="section-subtitle services-subtitle">Ist der passende Service für Ihren Vierbeiner nicht dabei? Kontaktieren Sie uns gerne persönlich.</p>
        <div className="pricing-notice">
          <h3 className="section-subtitle">Wichtige Hinweise zur Preisgestaltung</h3>
          <p className="section-subtitle">Alle Preise sind Richtpreise und können je nach Fellzustand, Größe, Verhalten und tatsächlichem Zeitaufwand variieren. Der endgültige Preis wird nach persönlicher Einschätzung Ihres Hundes festgelegt.</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className="service-card-wrapper"
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className={`service-card-inner ${selectedService === service.id ? 'flipped' : ''}`}>
                <div className="service-card service-card-front">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-card service-card-back">
                  {Array.isArray(service.price) ? (
                    <div className="service-price-list">
                      {service.price.map((priceItem, index) => (
                        <p key={index} className="service-price-item">{priceItem}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="service-price-large">{service.price}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
