import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
      colors: {
        vectorvue: {
          background: '#090D27',
          surface: '#0D1436',
          surfaceElevated: '#121B45',
          border: '#202C66',
          primary: '#8A2BE2',
          primaryHover: '#7B26CB',
          electric: '#00FFF7',
          text: '#E0E0E0',
          textSecondary: '#A0A0A0'
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        muted: 'rgb(var(--surface) / <alpha-value>)',
        card: 'rgb(var(--surface) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surfaceElevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        hover: 'rgb(var(--surface-elevated) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primaryHover: 'rgb(var(--primary-hover) / <alpha-value>)',
        accent: 'rgb(var(--electric) / <alpha-value>)',
        electric: 'rgb(var(--electric) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 18px 38px -28px rgb(var(--electric) / 0.28), 0 12px 26px -24px rgb(0 0 0 / 0.7)',
        layered: 'inset 0 1px 0 rgb(255 255 255 / 0.04), 0 24px 52px -30px rgb(var(--primary) / 0.34), 0 12px 24px -24px rgb(0 0 0 / 0.75)',
        glow: '0 0 0 1px rgb(var(--border) / 0.7), 0 0 36px -22px rgb(var(--electric) / 0.42), 0 0 46px -24px rgb(var(--primary) / 0.38)'
      },
      backgroundImage: {
        'vectorvue-hero-glow':
          'radial-gradient(circle at 50% -20%, rgb(var(--primary) / 0.25), rgb(var(--electric) / 0.15), transparent 60%)',
        'vectorvue-surface':
          'linear-gradient(155deg, rgb(var(--surface-elevated) / 0.72) 0%, rgb(var(--surface) / 0.95) 55%, rgb(var(--surface) / 1) 100%)'
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
