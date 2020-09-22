module.exports = {
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js'
  ],
  theme: {
    darkSelector: '.dark-mode',
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    minHeight: {
      fit: 'fit-content',
      0: '0'
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
          'light-20': '#af7ef0',
          'sky-light': '#1172f4',
          'sky-dark': '#0b4491',
          navy: '#566dbc',
          'gray-dark': '#808080',
          'gray-light': '#d6d6d6',
          'green-dark': '#337e95',
          'green-light': '#69bac9'
        },
        violet: {
          50: '#FAF8FE',
          100: '#F6F0FD',
          200: '#E7DAF9',
          300: '#D9C3F6',
          400: '#BD96EF',
          500: '#A069E8',
          600: '#905FD1',
          700: '#603F8B',
          800: '#482F68',
          900: '#302046'
        },
        meteorite: {
          50: '#F5F3F8',
          100: '#ECE8F1',
          200: '#CFC4DC',
          300: '#B1A1C7',
          400: '#775B9C',
          500: '#3D1472',
          600: '#371267',
          700: '#250C44',
          800: '#1B0933',
          900: '#120622'
        },
        rose: {
          50: '#FFF6FC',
          100: '#FFEDF9',
          200: '#FFD2F0',
          300: '#FFB7E7',
          400: '#FF82D6',
          500: '#FF4CC4',
          600: '#E644B0',
          700: '#992E76',
          800: '#732258',
          900: '#4D173B'
        },
        eggplant: {
          50: '#FAF2F8',
          100: '#F5E6F0',
          200: '#E7C0DA',
          300: '#D899C3',
          400: '#BA4D96',
          500: '#9D0169',
          600: '#8D015F',
          700: '#5E013F',
          800: '#47002F',
          900: '#2F0020'
        }
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
        '150': '150px',
        '300': '300px'
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
