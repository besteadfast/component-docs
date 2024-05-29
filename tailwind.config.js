/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.md', './components/**/*.vue'],
  theme: {
    extend: {},
    colors: {
      white: '#ffffff',
      black: '#000000',
      teal: {
        50: '#eef6f6',
        100: '#ddeeee',
        200: '#bbdedd',
        300: '#99cdcb',
        400: '#77bcba',
        500: '#55aaaa',
        600: '#4a9597',
        700: '#3f8084',
        800: '#346a71',
        900: '#29555e',
      },
      gold: {
        50: '#f9f6f1',
        100: '#f3eee3',
        200: '#e7ddc6',
        300: '#dacbaa',
        400: '#ceba8d',
        500: '#c2ab74',
        600: '#b19a67',
        700: '#a0895b',
        800: '#8f784e',
        900: '#7e6742',
      },
      gray: {
        50: '#f3f4f6',
        100: '#e8eaed',
        150: '#dfe2e5',
        200: '#c8ccd1',
        300: '#a9aeb5',
        400: '#899098',
        500: '#69727c',
        600: '#5a626c',
        700: '#4b535c',
        800: '#3c434c',
        900: '#2d333c',
      },
      'warm-gray': {
        50: '#f4f4f4',
        100: '#e6e6e5',
        150: '#dcdbdb',
        200: '#c2c2c1',
        300: '#a4a3a2',
        400: '#838281',
        500: '#676665',
        600: '#555453',
        700: '#464544',
        800: '#363635',
        900: '#242423',
      },
      'cool-gray': {
        50: '#f0f2f4',
        100: '#e2e5e9',
        150: '#d7dbe0',
        200: '#c2c6cc',
        300: '#9ca2aa',
        500: '#5b636c',
        600: '#4a5159',
        700: '#393f46',
        800: '#292d33',
        900: '#181b20',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    spacing: () => ({
      inherit: 'inherit',
      0: '0px',
      s1: '4px',
      s2: '8px',
      s3: '12px',
      s4: '16px',
      s5: '20px',
      s6: '24px',
      s7: '32px',
      s8: '40px',
      s9: '48px',
      s10: '64px',
      s11: '80px',
      s12: '96px',
      s13: '120px',
      s14: '160px',
      60: '60px',
      36: '36px',
      30: '30px',
      14: '14px',
      10: '10px',
      6: '6px',
      2: '2px',
      1: '1px',
    }),
  },
  plugins: [],
};
