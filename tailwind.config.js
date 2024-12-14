/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f3f0eb',
        accent: '#b0682f',
      },
      backgroundImage: {
        main: "url('/images/background.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
