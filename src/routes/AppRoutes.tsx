import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import PageTransition from '../components/PageTransition';
import ScrollToTop from '../components/ScrollToTop';



const AppRoutes = () => {
  const location = useLocation();

  const [isTransitioning, setIsTransitioning] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Initial transition delay (match with animation duration)
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsTransitioning(false);
      }, 1000); // Page transition duration
      return () => clearTimeout(timer);
    }
  }, [location, currentPath]);

  return (
    <div className="app">
      <CustomCursor />
      <ScrollToTop />
      <PageTransition isVisible={isTransitioning} />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default AppRoutes;