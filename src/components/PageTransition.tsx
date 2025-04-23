import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styled from 'styled-components';

const PageTransitionContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: '#f5f5f5';
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled(motion.div)`
  font-family: "'Times New Roman', 'Hiragino Mincho ProN', serif";
  font-size: 1.5rem;
`;

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      <PageTransitionContainer
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <LoadingText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
        >
          Loading...
        </LoadingText>
      </PageTransitionContainer>
      {children}
    </>
  );
};

export default PageTransition;