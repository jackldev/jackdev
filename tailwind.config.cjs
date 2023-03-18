/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      '4xl': '3840px', // 4k: 3840x2160
      '3xl': '2560px', // wide: 2560x1440
      '2xl': '1830px', // full: 1830x992
      xl: '1300px', // laptop: 1300x720
      lg: '1200px', // land L: 1200x568
      md: '992px', // desktop: 992x512
      sm: '900px', // land M: 900x430
      xs: '720px', // tablet: 720x415
      '2xs': '600px', // land S: 600x360
      '3xs': '385px', // smart: 385x720
      '4xs': '320px', // phone: 320x600
      wrapper: '1300px',

      '3xlx': { max: '2560px' },
      '2xlx': { max: '1830px' },
      xlx: { max: '1300px' },
      lgx: { max: '1200px' },
      mdx: { max: '992px' },
      smx: { max: '900px' },
      xsx: { max: '720px' },
      '2xsx': { max: '600px' },
      '3xsx': { max: '385px' },
      '4xsx': { max: '320px' },
      top: { max: '1440px' },
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',

      white: '#e6edef',
      bgwhite: '#F9F9F9',
      lightwhite: '#e6edefaa',
      black: '#000705',
      darkblack: '#000000',
      gray: '#ededed',
      lightgray: '#efefef',
      darkgray: '#4c464d95',
      red: '#dc3546',
      green: '#379530',
      teal: "#1D93B1"
    },
    fontFamily: {
      inherit: 'inherit',
      main: ['Oswald', 'serif'],
    },
    fontSize: {
      none: '0',
      inherit: 'inherit',
      root: '62.5%',

      h1: 'clamp(3.6rem, 6.5vw, 6.5rem)',
      h2: 'clamp(3.4rem, 4vw, 4rem)',
      h3: 'clamp(2.75rem, 3vw, 3rem)',
      error: 'clamp(10rem, 14vw, 14rem)',

      xs: '1.2rem',
      sm: '1.3rem',
      base: '1.4rem',
      lg: '1.5rem',
      xl: '1.7rem',
      '2xl': '2rem',
      '3xl': '2.75rem',
      '4xl': '4rem',
      '5xl': '5rem',
    },
    flex: {
      initial: '1 0 auto'
    },
    extend: {
      backgroundImage: {
        pattern: `url('/pattern/pattern.webp')` // Background pattern from Toptal Subtle Patterns
      },
      margin: {
        auto: 'auto'
      },
      padding: {
        auto: 'auto'
      },
      lineHeight: {
        inherit: 'inherit',
        initial: 'initial'
      },
      gridTemplateColumns: {
        1: '1fr',
        2: 'repeat(auto-fit, minmax(45%, 1fr))',
        3: 'repeat(auto-fit, minmax(28%, 1fr))',
      },
      keyframes: {
        fadein: {
          from: { opacity: 0.2, transform: 'translateX(5px)' },
          to: { opacity: 1, transform: 'translateX(0px)' }
        },
        fadeout: {
          from: { opacity: 0.2, transform: 'translateX(5px)' },
          to: { opacity: 1, transform: 'translateX(0px)' }
        }
      },
      animation: {
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
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')]
}
