import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'tomato': ['TomatoGrotesk', 'sans-serif'],
        'sans': ['TomatoGrotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom color palette based on provided HEX codes
        'primary': {
          'orange': '#fe4306',  // Orange
          'orange-rgb': 'rgb(254, 67, 6)',
        },
        'secondary': {
          'mid-grey': '#999da6',  // MidGrey  
          'mid-grey-rgb': 'rgb(153, 157, 166)',
        },
        'neutral': {
          'black': '#161616',     // Black
          'black-rgb': 'rgb(22, 22, 22)',
          'dark-grey': '#52555a', // DarkGrey
          'dark-grey-rgb': 'rgb(82, 85, 90)',
          'white': '#f2f4f7',     // White
          'white-rgb': 'rgb(242, 244, 247)',
        },
        // Semantic color mappings for easier use
        'brand': {
          'primary': '#fe4306',   // Orange as primary brand color
          'secondary': '#999da6', // MidGrey as secondary
          'accent': '#52555a',    // DarkGrey as accent
        },
        'text': {
          'primary': '#161616',   // Black for primary text
          'secondary': '#52555a', // DarkGrey for secondary text
          'muted': '#999da6',     // MidGrey for muted text
        },
        'bg': {
          'primary': '#f2f4f7',   // White for primary background
          'secondary': '#999da6', // MidGrey for secondary background
          'dark': '#161616',      // Black for dark background
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
