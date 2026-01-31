import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Komplettpflege',
    //   price: '45-75€',
      description: 'Waschen · Föhnen · Bürsten · Schneiden / Stylen inkl. Ohren-, Krallen- & Pfotenpflege',
      icon: '🐶🛁'
    },
    {
      id: 2,
      name: 'Pflege ohne Schneiden',
    //   price: '65-120€',
      description: 'Der Hund wird gepflegt, aber nicht geschnitten.',
      icon: '🐕🫧'
    },
    {
      id: 3,
      name: 'Trimmen / Hand Stripping',
    //   price: '55-85€',
      description: 'Abgestorbenes Fell wird per Hand entfernt, ohne das Fell zu schneiden.',
      icon: '✋🐾'
    },
    {
      id: 4,
      name: 'Zusatzleistungen',
    //   price: '25€',
      description: 'Ergänzende Leistungen, die optional zur Pflege hinzugebucht werden können.',
      icon: '➕✨'
    },
    {
      id: 5,
      name: 'Welpen – Sanfte Eingewöhnung',
    //   price: '30€',
      description: 'Spielerische, stressfreie Gewöhnung an die Fellpflege.',
      icon: '🐩🧸'
    },
    {
      id: 6,
      name: 'Senioren-Hunde',
    //   price: '40-70€',
      description: 'Für Hunde ab 9 Jahren bieten wir einen Seniorenrabatt von 10%',
      icon: '🦮❤️'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Leistungen</h2>
        <p className="section-subtitle" style={{ marginBottom: '4rem' }}>Ist der passende Service für Ihren Vierbeiner nicht dabei? Kontaktieren Sie uns gerne persönlich.</p>
        <div className="pricing-notice">
          <h3 className="section-subtitle">Wichtige Hinweise zur Preisgestaltung</h3>
          <p className="section-subtitle">Alle Preise sind Richtpreise und können je nach Fellzustand, Größe, Verhalten und tatsächlichem Zeitaufwand variieren. Der endgültige Preis wird nach persönlicher Einschätzung Ihres Hundes festgelegt.</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`service-card ${selectedService === service.id ? 'active' : ''}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p className="service-price">{service.price}</p>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
