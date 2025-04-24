import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const MinimalButton = styled(motion.button)`
  background: transparent;
  color: 111111;
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  margin-top: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: inherit;
    transition: all 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: inherit;
    
    &::before {
      left: 0;
    }
  }
`;

export const CVButton = styled(MinimalButton)`
  margin-top: 3rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

interface JapaneseButtonProps {
  onClick?: () => void;
  labelKey?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

export const JapaneseButton = ({ onClick, labelKey = 'view_works', initial,animate,transition }: JapaneseButtonProps) => {
  const { t } = useTranslation();
  
  return (
    <MinimalButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {t(labelKey)} <FaArrowRight style={{ marginLeft: '0.5rem' }} />
    </MinimalButton>
  );
};


interface ButtonGroupProps {
    children: React.ReactNode;
  }
  
  export const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return <ButtonContainer>{children}</ButtonContainer>;
  };