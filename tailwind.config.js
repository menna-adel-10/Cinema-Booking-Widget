/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8A74F9',
        bgPrimary: '#f4f2ff',
        secondary: '#F3F5F7',
        gray: '#ABAAB1',
        gray2: '#C4C4C4',
        gray3: '#E9EAEA',
        gray4: '#e7eaed',
        gray5: '#f9f9f9'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'Neo': ['Neo Sans Arabic', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
