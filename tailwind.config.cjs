import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      inherit: 'inherit'
    },
    extend: {
      backgroundImage: {
        pattern: `url('/pattern/pattern.webp')` // Background pattern from Toptal Subtle Patterns
      },
      keyframes: {
        fade: {
          from: { opacity: 0.2 },
          to: { opacity: 1 }
        },
        fadein: {
          from: { opacity: 0.2, transform: 'translateX(-5px)' },
          to: { opacity: 1, transform: 'translateX(0px)' }
        },
        fadeout: {
          from: { opacity: 0.2, transform: 'translateX(5px)' },
          to: { opacity: 1, transform: 'translateX(0px)' }
        }
      },
      animation: {
        fade: 'fade 0.75s ease-out',
        fadein: 'fadein 0.75s ease-out',
        fadeout: 'fadeout 0.75s ease-out'
      }
    }
  },
  variants: {
    extend: {
      colors: ['active']
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            }
          }
        },
        {
          values: theme('transitionDelay')
        }
      )
    })
  ]
}
