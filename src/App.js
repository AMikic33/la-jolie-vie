import './App.css';
import { useState } from 'react';

function App() {
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
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">La Jolie Vie</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Premium Dog Grooming</h1>
          <p className="hero-subtitle">Where Every Pup Receives Royal Treatment</p>
          <a href="#services" className="cta-button">Book Appointment</a>
        </div>
        <div className="hero-overlay"></div>
      </header>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Tailored grooming experiences for your beloved companion</p>
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

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About La Jolie Vie</h2>
              <p>
                For over 15 years, La Jolie Vie has been the premier destination for discerning pet parents 
                who want only the best for their furry family members. Our certified groomers are passionate 
                about creating a stress-free, luxurious experience for every dog that walks through our doors.
              </p>
              <p>
                We use only the finest organic, hypoallergenic products and maintain the highest standards 
                of cleanliness and safety. Your dog's comfort and well-being are our top priorities.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">🏆</span>
                  <span>Award-Winning Team</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌿</span>
                  <span>Organic Products</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💖</span>
                  <span>Gentle Care</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat">
                <h3>10k+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5★</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            <form className="contact-form">
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

      {/* Footer */}
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
    </div>
  );
}

export default App;
