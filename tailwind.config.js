module.exports = {
  purge: [],
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        mayas: {
          default: '#3d1472',
          'dark-60': '#4e1992',
          'dark-40': '#5d01b6',
          'dark-80': '#4c0096',
          'dark-20': '#b085e9',
          'hot-pink': '#ff4cc4',
          'hot-pink-dark': '#9d0169',
          'hot-pink-60': '#c360ac',
          'hot-pink-40': '#fe87d7',
          'hot-pink-20': '#f9add7',
          'light-default': '#a069e8',
          'light-80': '#ae6eff',
          'light-60': '#9661a3',
          'light-40': '#c9a3f9',
          'light-20': '#af7ef0',
          'sky-light': '#1172f4',
          'sky-dark': '#0b4491',
          navy: '#566dbc',
          'gray-dark': '#808080',
          'gray-light': '#d6d6d6',
          'green-dark': '#337e95',
          'green-light': '#69bac9',
        }
      },
      gridTemplateRows: {
        'grid-card': '50px 1fr 1fr'
      },
      gridTemplateColumns: {
        '1-3': 'auto 1fr'
      },
      fontSize: {
        default: '14px',
        md: '16px',
        lg: '18px',
        title: '32px'
      },
      lineHeight: {
        title: '1.8'
      },
      height: {
        fit: 'fit-content',
        '150': '150px'
      },
      width: {
        fit: 'fit-content',
        '150': '150px',
        '320': '320px'
      }
    },
    fontFamily: {
      display: [
        'Avenir',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      code: ['Courier']
    }
  },
  variants: {
    display: ['responsive'],
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}
