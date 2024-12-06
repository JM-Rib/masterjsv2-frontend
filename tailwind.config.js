/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'radial': 'radial-gradient(circle, #AAD8E6, #0066DF)', // Custom radial gradient
      },
    }
  },
  plugins: [],
}

