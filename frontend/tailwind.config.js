/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#2563EB',
        primaryDark: '#1E40AF',
        secondary: '#F59E0B',
        secondaryDark: '#B45309',
      },
      text: {
        primary: '#1E293B',
        secondary: '#475569',
      },
      success: '#10B981',
      error: '#EF4444',
      warning: '#F97316',
      background: '#F8FAFC',
    },
  }
},
  plugins: [],
}