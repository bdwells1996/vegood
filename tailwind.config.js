// tailwind.config.js — VeGood Design System (NativeWind)
const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './App.{js,ts,tsx}'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // ── Primary (Green) ──────────────────────────
        primary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // ← Main brand color
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },

        // ── Neutral (Slate) ─────────────────────────
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },

        // ── Semantic ────────────────────────────────
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',

        // ── Surface (Light Mode) ────────────────────
        background: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          dark: '#0F172A',
          'dark-secondary': '#1E293B',
          'dark-tertiary': '#334155',
        },

        // ── Text ────────────────────────────────────
        content: {
          primary: '#0F172A',
          secondary: '#475569',
          tertiary: '#94A3B8',
          inverse: '#FFFFFF',
          'dark-primary': '#F8FAFC',
          'dark-secondary': '#E2E8F0',
          'dark-tertiary': '#CBD5E1',
          'dark-strong': '#475569',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      fontSize: {
        // Mobile-optimized type scale
        overline: ['11px', { lineHeight: '16px', letterSpacing: '0.08em' }],
        caption: ['12px', { lineHeight: '16px', letterSpacing: '0.02em' }],
        body: ['14px', { lineHeight: '20px' }],
        'body-lg': ['16px', { lineHeight: '24px' }],
        h3: ['18px', { lineHeight: '24px' }],
        h2: ['20px', { lineHeight: '28px' }],
        h1: ['24px', { lineHeight: '32px' }],
        display: ['30px', { lineHeight: '36px' }],
      },

      spacing: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        base: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
      },

      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        full: 9999,
      },

      borderWidth: {
        hairline: hairlineWidth(),
      },

      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'card-md': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'card-lg': '0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05)',
        button: '0 1px 2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const semanticUtilities = {
        // ── Text Color Utilities ────────────────────
        '.text-semantic-primary': {
          '@apply': 'text-content-primary dark:text-content-dark-primary',
        },
        '.text-semantic-secondary': {
          '@apply': 'text-content-secondary dark:text-content-dark-secondary',
        },
        '.text-semantic-tertiary': {
          '@apply': 'text-content-tertiary dark:text-content-dark-tertiary',
        },
        '.text-semantic-inverse': {
          '@apply': 'text-content-inverse dark:text-content-inverse',
        },

        // ── Background Utilities ────────────────────
        '.bg-semantic-primary': {
          '@apply': 'bg-background dark:bg-background-dark',
        },
        '.bg-semantic-secondary': {
          '@apply': 'bg-background-secondary dark:bg-background-dark-secondary',
        },
        '.bg-semantic-tertiary': {
          '@apply': 'bg-background-tertiary dark:bg-background-dark-tertiary',
        },

        // ── Placeholder Utilities ───────────────────
        '.placeholder-semantic': {
          '@apply': 'placeholder-content-tertiary dark:placeholder-content-dark-secondary',
        },

        // ── Border Utilities ───────────────────────
        '.border-semantic': {
          '@apply': 'border-neutral-200 dark:border-neutral-700',
        },

        // ── Logo Text Utilities ────────────────────
        '.logo-text-color': {
          color: 'rgb(20 83 45 / 1)', // primary-900 light
          '@media (prefers-color-scheme: dark)': {
            color: 'rgb(240 253 244 / 1)', // primary-50 dark
          },
        },
      };
      addUtilities(semanticUtilities);
    },
  ],
};
