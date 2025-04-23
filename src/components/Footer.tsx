import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  padding: 2rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      © {new Date().getFullYear()} My Portfolio. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;