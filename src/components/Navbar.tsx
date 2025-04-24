import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';
import { Trans } from 'react-i18next';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  mix-blend-mode: difference;
  color: white;
`;

const Logo = styled(NavLink)`
  font-family: 'Times New Roman', serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: inherit;
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

const Navbar = () => {
  return (
    <NavContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Logo to="/">Portfolio</Logo>
      <MenuItems>
        <MenuItem to="/about">
          <Trans i18nKey="navbar.about">About</Trans>
        </MenuItem>
        <MenuItem to="/work">
          <Trans i18nKey="navbar.works">Work</Trans>
        </MenuItem>
        <MenuItem to="/contact">
          <Trans i18nKey="navbar.contact">Contact</Trans>
        </MenuItem>
        <LanguageSwitcher />
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;