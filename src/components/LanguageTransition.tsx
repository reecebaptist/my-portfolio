// components/LanguageTransition.tsx
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 999;
`;

const variants = {
  initial: { y: '-100%' },
  animate: { y: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { y: '100%', transition: { duration: 0.5, ease: 'easeInOut' } }
};

const LanguageTransition = ({ isVisible }: { isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <Overlay
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    )}
  </AnimatePresence>
);

export default LanguageTransition;
