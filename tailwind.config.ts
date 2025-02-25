import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        base: '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        h1: [
          '3rem',
          {
            lineHeight: '3rem',
            letterSpacing: '-0.012em',
            fontWeight: '800',
          },
        ],
        h2: [
          '1.875rem',
          {
            lineHeight: '2.25rem',
            letterSpacing: '-0.0075em',
            fontWeight: '600',
          },
        ],
        h3: [
          '1.5rem',
          {
            lineHeight: '2rem',
            letterSpacing: '-0.006em',
            fontWeight: '600',
          },
        ],
        h4: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '-0.005em',
            fontWeight: '600',
          },
        ],
        p: [
          '1rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        body: [
          '0.875rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
        'table-head': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            fontWeight: '700',
          },
        ],
        'table-item': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0em',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'appear-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'disappear-bottom': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s forwards',
        'fade-out': 'fade-out 0.5s forwards',
        'appear-up': 'appear-up 0.5s forwards',
        'disappear-bottom': 'disappear-bottom 0.5s forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
} satisfies Config
