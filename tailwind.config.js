/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'im1': 'url("assets/im1.jpg")',
      },
      backgroundColor: {
        'bright': '#F4511F',
        'purple': '#8A2BE2',
        'blue' : '#0DAD8D',
        'Light blue': '#0C98BA',
      },
      textColor: {
        'light': '#959595',
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
};
