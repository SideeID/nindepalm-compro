/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#FFF8EF', 100: '#FEF0D8', 200: '#FDD9A8', 300: '#FABB6A',
          400: '#F59A2E', 500: '#D97706', 600: '#B45309', 700: '#92400E',
          800: '#6B2D09', 900: '#451A03', 950: '#1C0A00',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs':   ['0.625rem', { lineHeight: '1rem' }],
        'sm':   ['0.8rem',   { lineHeight: '1.25rem' }],
        'base': ['1rem',     { lineHeight: '1.618rem' }],
        'lg':   ['1.25rem',  { lineHeight: '2rem' }],
        'xl':   ['1.625rem', { lineHeight: '2.5rem' }],
        '2xl':  ['2.625rem', { lineHeight: '3.25rem' }],
        '3xl':  ['4.25rem',  { lineHeight: '5rem' }],
        '4xl':  ['6.875rem', { lineHeight: '7.75rem' }],
      },
      spacing: {
        '1':'8px','2':'16px','3':'24px','4':'32px','5':'40px',
        '6':'48px','7':'56px','8':'64px','9':'72px','10':'80px',
        '12':'96px','14':'112px','16':'128px','20':'160px','24':'192px',
      },
      borderRadius: {
        'none':'0px','sm':'4px',DEFAULT:'8px','md':'8px',
        'lg':'8px','xl':'8px','full':'9999px',
      },
      maxWidth: { 'container': '1200px' },
    },
  },
  plugins: [],
}
