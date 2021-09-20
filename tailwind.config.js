module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      red: {
        light: '#FFE0E1',
        DEFAULT: '#ff0000',
      },
      black: {
        DEFAULT: '#2E2E2E',
      },
      grey: {
        dark: '#747474',
        light: '#EEEEEE',
      },
      peach: {
        DEFAULT: '#FCF5E8',
      },
    },
    extend: {
      margin: {
        '-half-screen': '50vw',
        '-half-width': '50%',
      },
      lineHeight: {
        12: '3rem',
      },
      width: {
        '1/3-vw': '33vw',
      },
      height: {
        '1/3-vw': '33vw',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [],
};
