import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        glass: {
          white:  'rgba(255, 255, 255, 0.06)',
          border: 'rgba(255, 255, 255, 0.10)',
          hover:  'rgba(255, 255, 255, 0.09)',
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '20px',
      },
      keyframes: {
        'blob-pulse': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':       { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':       { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blob':    'blob-pulse 12s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':          'rgba(255,255,255,0.70)',
            '--tw-prose-headings':      '#ffffff',
            '--tw-prose-lead':          'rgba(255,255,255,0.60)',
            '--tw-prose-links':         '#22d3ee',
            '--tw-prose-bold':          '#ffffff',
            '--tw-prose-counters':      'rgba(255,255,255,0.40)',
            '--tw-prose-bullets':       'rgba(255,255,255,0.25)',
            '--tw-prose-hr':            'rgba(255,255,255,0.10)',
            '--tw-prose-quotes':        'rgba(255,255,255,0.60)',
            '--tw-prose-quote-borders': 'rgba(6,182,212,0.50)',
            '--tw-prose-captions':      'rgba(255,255,255,0.35)',
            '--tw-prose-code':          '#67e8f9',
            '--tw-prose-pre-code':      'rgba(255,255,255,0.85)',
            '--tw-prose-pre-bg':        'rgba(255,255,255,0.04)',
            '--tw-prose-th-borders':    'rgba(255,255,255,0.15)',
            '--tw-prose-td-borders':    'rgba(255,255,255,0.08)',
            'max-width': 'none',
          },
        },
      },
    },
  },
  plugins: [typography],
};
