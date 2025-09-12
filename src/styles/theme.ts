export const theme = {
  colors: {
    primary: '#1d9cceff',
    primaryLight: '#72d8c7ff',

    accent: '#005bb1ff',
    accentLight: '#00ffeaff',

    backgroundDark: '#0b0a14',
    backgroundSpecial: '#0d0630',
    backgroundNeutral: '#2d2c3f',

    textLight: '#ffffff',
    textDark: '#161616',

    gray100: '#ffffffff',
    gray200: '#eaf6ffff',
    gray300: '#dfe5f7ff',
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
    titleSmall: "clamp(12px, 2vw, 2em)",
    titleMedium: "clamp(16px, 2.5vw, 3em)",
    titleLarge: "clamp(25px, 7vw, em)",

    text: "clamp(8px, 1vw, 2em)",
    textMedium: "clamp(10px, 1.5vw, 2.5em)",
    textBig: "clamp(16px, 3vw, 4em)",
  },
   breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    tv: "1500px"
  }
};