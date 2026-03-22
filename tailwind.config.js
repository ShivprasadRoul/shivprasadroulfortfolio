/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#E8622A',
        turmeric: '#F0A500',
        indigo: {
          DEFAULT: '#2D3A8C',
          900: '#1a2260',
          800: '#2D3A8C',
          700: '#3d4fa8',
          600: '#4d63c4',
          500: '#6678d0',
          400: '#8090dc',
          300: '#99a8e8',
          200: '#b3bff4',
          100: '#ccd5f8',
          50: '#e6eafc',
        },
        ink: {
          DEFAULT: '#1A1A2E',
          light: '#252540',
          text: '#E8E4DC',
        },
        ivory: {
          DEFAULT: '#FAF7F2',
          text: '#2A2118',
        },
        clay: '#C4A882',
        leaf: '#3D6B4F',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'saffron-gradient': 'linear-gradient(135deg, #E8622A 0%, #F0A500 100%)',
        'ink-gradient': 'linear-gradient(180deg, #1A1A2E 0%, #252540 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      letterSpacing: {
        widest: '0.2em',
        'ultra-wide': '0.4em',
      },
    },
  },
  plugins: [],
}