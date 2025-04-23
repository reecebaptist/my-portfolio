import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div<{ x: number; y: number }>`
  position: fixed;
  width: 20px;
  height: 20px;
  border: 1px solid '#1a1a1a';
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transition: transform 0.1s ease;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Cursor x={position.x} y={position.y} />;
};

export default CustomCursor;