import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: 'Luxury Bath & Brush',
      price: '$45-75',
      description: 'Premium shampoo, conditioning treatment, blow dry, and brush out',
      icon: '🛁'
    },
    {
      id: 2,
      name: 'Full Grooming',
      price: '$65-120',
      description: 'Complete grooming including bath, haircut, nail trim, and ear cleaning',
      icon: '✂️'
    },
    {
      id: 3,
      name: 'Puppy Spa Day',
      price: '$55-85',
      description: 'Gentle introduction to grooming for puppies under 6 months',
      icon: '🐕'
    },
    {
      id: 4,
      name: 'Nail & Paw Care',
      price: '$25',
      description: 'Nail trimming, filing, and paw pad moisturizing treatment',
      icon: '💅'
    },
    {
      id: 5,
      name: 'Teeth Cleaning',
      price: '$30',
      description: 'Professional teeth brushing and fresh breath treatment',
      icon: '🦷'
    },
    {
      id: 6,
      name: 'De-shedding Treatment',
      price: '$40-70',
      description: 'Special treatment to reduce shedding and promote healthy coat',
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
