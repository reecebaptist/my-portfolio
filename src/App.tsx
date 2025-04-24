import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Works from './pages/Works';
// import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';
import './i18n'; // Add this import
import Work from './pages/Work';
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <div className="app">
      <CustomCursor />
      <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;