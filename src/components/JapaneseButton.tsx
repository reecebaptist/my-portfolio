import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const MinimalButton = styled(motion.button)`
  background: transparent;
  color: black;
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  padding: 0.8rem 2rem;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease;
  margin-top: 2rem;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: black;
    transition: left 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: white;

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
  path? : string;
  onClick?: () => void;
  labelKey?: string;
  initial?: any;
  animate?: any;
  transition?: any;
}

export const JapaneseButton = ({ path, onClick, labelKey = 'view_works', initial,animate,transition }: JapaneseButtonProps) => {
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
      <NavLink to={path || ""}>
      {t(labelKey)} <FaArrowRight style={{ marginLeft: '0.5rem' }} />
      </NavLink>
    </MinimalButton>
  );
};


interface ButtonGroupProps {
    children: React.ReactNode;
  }
  
  export const ButtonGroup = ({ children }: ButtonGroupProps) => {
    return <ButtonContainer>{children}</ButtonContainer>;
  };