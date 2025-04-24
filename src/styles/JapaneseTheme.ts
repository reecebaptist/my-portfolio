import { DefaultTheme } from 'styled-components';

export const JapaneseTheme: DefaultTheme = {
  colors: {
    primary: '#1a1a1a',
    secondary: '#f5f5f5',
    accent: '#8b4513', // Washi paper color
    paper: '#f8f4e9',
    ink: '#252525',

  },
  fonts: {
    serif: "'Times New Roman', 'Hiragino Mincho ProN', serif",
    sansSerif: "'Helvetica', 'Hiragino Sans', sans-serif",
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};