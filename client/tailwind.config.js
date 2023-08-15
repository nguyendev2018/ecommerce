/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
          "./public/index.html"
],
  theme: {
    fontFamily : {
      main : ['Poppins', "sans-serif"]
    },
    extend: {
      width : {
        main : "1220px"
      },
      bgColor : {
        primary : "#ee3131"
      },
      colors : {
        primary  : "#ee3131"
      }
    },
  },
  plugins: [],
}

