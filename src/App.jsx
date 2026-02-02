import './App.css';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Anfahrt from './components/Anfahrt.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Contact />
      <Anfahrt />
      <Footer />
    </div>
  );
}

export default App;
