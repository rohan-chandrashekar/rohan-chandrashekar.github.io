/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial']
      },
      boxShadow: {
        soft: '0 20px 50px rgba(16, 24, 40, 0.08)',
        luxe: '0 35px 120px rgba(2, 6, 23, 0.22)',
        hairline: '0 1px 0 rgba(2, 6, 23, 0.06), 0 0 0 1px rgba(2, 6, 23, 0.04)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};
