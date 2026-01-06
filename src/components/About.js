export default function About() {
  return (
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
  );
}
