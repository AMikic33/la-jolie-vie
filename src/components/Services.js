import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Luxusbad & Bürsten',
    //   price: '45-75€',
      description: 'Premium-Shampoo, Pflegebehandlung, Föhnen und Ausbürsten',
      icon: '🛁'
    },
    {
      id: 2,
      name: 'Vollständige Fellpflege',
    //   price: '65-120€',
      description: 'Komplette Pflege inkl. Bad, Haarschnitt, Krallenpflege und Ohrenreinigung',
      icon: '✂️'
    },
    {
      id: 3,
      name: 'Welpen Spa-Tag',
    //   price: '55-85€',
      description: 'Sanfte Einführung in die Pflege für Welpen unter 6 Monaten',
      icon: '🐕'
    },
    {
      id: 4,
      name: 'Krallen- & Pfotenpflege',
    //   price: '25€',
      description: 'Krallenschneiden, Feilen und Pfotenballen-Feuchtigkeitsbehandlung',
      icon: '💅'
    },
    {
      id: 5,
      name: 'Zahnreinigung',
    //   price: '30€',
      description: 'Professionelles Zähneputzen und Frischer-Atem-Behandlung',
      icon: '🦷'
    },
    {
      id: 6,
      name: 'Enthaarungs-Behandlung',
    //   price: '40-70€',
      description: 'Spezialbehandlung zur Reduzierung des Haarens und für gesundes Fell',
      icon: '🌟'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Leistungen</h2>
        <p className="section-subtitle">Ist der passende Service für Ihren Vierbeiner nicht dabei? Kontaktieren Sie uns gerne persönlich.</p>
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
