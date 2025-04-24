import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  level: number; // Between 0 and 100
  color?: string;
  height?: number;
  animated?: boolean;
}

const ProgressContainer = styled.div`
  width: 100%;
  background: 'gray';
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

const ProgressBar = styled(motion.div)<SkillProgressProps>`
  height: ${props => props.height || 2}px;
  background: ${props => props.color || props.color};
  border-radius: 4px;
  width: ${props => props.level}%;
`;

const SkillProgress = ({ level, color, height, animated = true }: SkillProgressProps) => {
  return (
    <ProgressContainer>
      <ProgressBar
        level={level}
        color={color}
        height={height}
        initial={animated ? { width: 0 } : undefined}
        animate={animated ? { width: `${level}%` } : undefined}
        transition={animated ? { duration: 1, delay: 0.3 } : undefined}
      />
    </ProgressContainer>
  );
};

export default SkillProgress;