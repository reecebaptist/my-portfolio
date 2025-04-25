import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const NavContainer = styled.nav<{ $overlay: boolean; $shadow: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  color: black;
  mix-blend-mode: normal;
  background-color: ${({ $overlay }) => ($overlay ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${({ $shadow }) => ($shadow ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const Logo = styled(NavLink)`
  font-family: 'Times New Roman', serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
  z-index: 110;
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 90;
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  pointer-events: none;
  
  & > * {
    pointer-events: auto;
  }
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center; 
`;


const MenuItem = styled(NavLink)`
  font-family: 'Helvetica', sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  color: inherit;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active::after {
    width: 100%;
  }
`;


const MobileMenuItem = styled(NavLink)`
  font-family: 'Helvetica', sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: 'black';
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: 'black';
    transform: scale(1.05);
  }
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  z-index: 110;
  color: inherit;
  padding: 0.5rem;
  display: none;
  position: relative;
  width: 30px;
  height: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerLine = styled(motion.span)`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: currentColor;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform-origin: center;
`;

const Navbar = () => {

  const {t} = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    handleScroll(); // run initially in case already scrolled
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Check if mobile on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu function
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  

  return (
    <>
      <NavContainer $overlay={!isMenuOpen} $shadow={!isMobile && isScrolled}>
        <Logo to="/" onClick={handleNavClick}>{t('navbar.portfolio')}</Logo>
        
        {isMobile && (
          <BurgerButton 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <BurgerLine
              animate={isMenuOpen ? {
                top: '50%',
                transform: 'translateY(-50%) rotate(45deg)'
              } : {
                top: '0%',
                transform: 'translateY(0) rotate(0deg)'
              }}
              transition={{ duration: 0.3 }}
            />
            <BurgerLine
              animate={isMenuOpen ? {
                opacity: 0
              } : {
                opacity: 1,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
              transition={{ duration: 0.1 }}
            />
            <BurgerLine
              animate={isMenuOpen ? {
                top: '50%',
                transform: 'translateY(-50%) rotate(-45deg)'
              } : {
                top: '100%',
                transform: 'translateY(-100%) rotate(0deg)'
              }}
              transition={{ duration: 0.3 }}
            />
          </BurgerButton>
        )}

{!isMobile && (
          <MenuItems>
          <MenuItem to="/about" onClick={handleNavClick} >
            {t('navbar.about')}
          </MenuItem>
          <MenuItem to="/work" onClick={handleNavClick} >
          {t('navbar.work')}
          </MenuItem>
          <MenuItem to="/skills" onClick={handleNavClick} >
          {t('navbar.skills')}
          </MenuItem>
          <MenuItem to="/contact" onClick={handleNavClick} >
          {t('navbar.contact')}
          </MenuItem>
          <LanguageSwitcher />
        </MenuItems>
        )}

      </NavContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
            <MobileMenu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MobileMenuItem to="/about" onClick={handleNavClick} >{t('navbar.about')}</MobileMenuItem>
              <MobileMenuItem to="/work" onClick={handleNavClick} > {t('navbar.work')}</MobileMenuItem>
              <MobileMenuItem to="/skills" onClick={handleNavClick} >{t('navbar.skills')}</MobileMenuItem>
              <MobileMenuItem to="/contact" onClick={handleNavClick} >{t('navbar.contact')}</MobileMenuItem>
              <LanguageSwitcher />
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;