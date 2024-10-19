/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{

        customGreen:'#165315',
        customYellow:'#F3A939',
        transparentGray:"#999999",
        customPaleGreen:"#F0FFE5",
        customBlack:"#0000004D",
        customLightGreen:"#247822",
      },
    },
  },
  plugins: ['flowbite/plugin'],
}

