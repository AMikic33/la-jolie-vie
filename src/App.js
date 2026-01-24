import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Anfahrt from './components/Anfahrt';
import Footer from './components/Footer';

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
