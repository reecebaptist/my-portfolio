import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

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
  // const { i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  // const [initialLanguageSet, setInitialLanguageSet] = useState(false);



//  // Handle language from URL on initial load
//  useEffect(() => {
//   if (initialLanguageSet) return;

//   const path = window.location.pathname;
//   if (path.includes('/jp/')) {
//     i18n.changeLanguage('ja').then(() => {
//       // Only remove /jp/ after language is fully loaded
//       const newPath = path.replace('/jp', '');
//       window.history.replaceState({}, '', newPath);
//       setInitialLanguageSet(true);
//     });
//   } else {
//     i18n.changeLanguage('en');
//     setInitialLanguageSet(true);
//   }
// }, [i18n, initialLanguageSet]);

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
          {/* Redirect /jp/* to /* while preserving the language */}
          <Route 
            path="/jp/*" 
            element={
              <Navigate 
                to={window.location.pathname.replace('/jp', '')} 
                replace 
              />
            } 
          />
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