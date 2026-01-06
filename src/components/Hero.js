import placeholder from "../placeholder.jpeg";

export default function Hero() {
  return (
    <header className="hero">
      <img src={placeholder} alt="Hero background" className="hero-img" />
      <nav className="navbar">
        <div className="logo"></div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        {/* <h1 className="hero-title">Premium Dog Grooming</h1>
        <p className="hero-subtitle">Where Every Pup Receives Royal Treatment</p> */}
        <a href="#services" className="cta-button">Book Appointment</a>
      </div>
      <div className="hero-overlay"></div>
    </header>
  );
}
