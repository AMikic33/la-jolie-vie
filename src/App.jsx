import './App.css';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Anfahrt from './components/Anfahrt.jsx';
import Impressum from './components/Impressum.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Gallery />
              <Services />
              <About />
              <Contact />
              <Anfahrt />
              <Footer />
            </>
          } />
          <Route path="/impressum" element={
            <>
              <Impressum />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
