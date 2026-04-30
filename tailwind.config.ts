import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brandRed: '#E3221A',
        brandBlack: '#050505',
        softBlack: '#111111',
        lightBg: '#F7F7F7',
        darkText: '#1A1A1A'
      },
      boxShadow: {
        soft: '0 12px 28px rgba(26, 26, 26, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
