/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#07040d',
          900: '#0d0817',
          800: '#140e24',
          700: '#1c1430',
        },
        purple: {
          950: '#1a0b2e',
          900: '#2d1b4e',
          800: '#3d2a6b',
          700: '#4c3a85',
          600: '#6b4dba',
          500: '#8b5cf6',
          400: '#a78bfa',
          300: '#c4b5fd',
          200: '#ddd6fe',
          100: '#ede9fe',
        },
        lavender: {
          100: '#f5f0ff',
          200: '#ebe0f7',
          300: '#d4c5f0',
          400: '#c9b8e8',
          500: '#b8a6e0',
        },
        accent: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#9333ea',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #2d1b4e 0%, #1a0b2e 50%, #0d0817 100%)',
        'gradient-hero': 'linear-gradient(160deg, #1a0b2e 0%, #2d1b4e 40%, #140e24 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(45,27,78,0.4) 0%, rgba(13,8,23,0.6) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
        'gradient-glow': 'radial-gradient(ellipse at top, rgba(139,92,246,0.15) 0%, transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
