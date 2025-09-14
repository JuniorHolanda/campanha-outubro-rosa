export const theme = {
  colors: {
    default1: '#0c0c0cff',
    default2: '#ffffff',

    //10%
    text: '#4e4b43ff',
    btn: '#e47846ff',
    btnHover: '#ee6628ff',
    btnActive: '#e66123ff',
    //30%
    medium1: '#ffc8fbff',
    medium2: ' #ff92c2ff',
    //60%
    background1: '#ffeef2ff',
    background2: '#ffe4f3ff',
  },

  spacing: {
    xs: '5px',
    sm: '10px',
    md: '30px',
    lg: '50px',
    xl: '150px',
  },

  fonts: {
    title: 'var(--font-title), sans-serif',
    text: 'var(--font-text), sans-serif',
  },

  fontSizes: {
    titleSmall: 'clamp(12px, 2vw, 2em)',
    titleMedium: 'clamp(16px, 2.5vw, 3em)',
    titleLarge: 'clamp(25px, 7vw, em)',

    text: 'clamp(8px, 1vw, 2em)',
    textMedium: 'clamp(10px, 1.5vw, 2.5em)',
    textBig: 'clamp(16px, 3vw, 4em)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    tv: '1500px',
  },
};
