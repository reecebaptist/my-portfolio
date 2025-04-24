import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TransitionOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const LoadingLine = styled(motion.div)`
  height: 2px;
  background: black;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

interface PageTransitionProps {
  isVisible: boolean;
}

const PageTransition = ({ isVisible }: PageTransitionProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <TransitionOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingLine
            initial={{ width: 0 }}
            animate={{
              width: "100%",
              transition: {
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1]
              }
            }}
          />
        </TransitionOverlay>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;