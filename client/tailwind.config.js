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
      bgColor : {
        primary : "#ee3131"
      },
      colors : {
        primary  : "#ee3131"
      },
      flex : {
        '2' : "2 2 0%",
        '3' : "3 3 0%",
        '4' : "4 4 0%",
        '5' : "5 5 0%"
      },
      keyframes : {
        'slide-top' : {
            "0%" : {
            transform : "translateY(0)"
          },
          "100%" :{
            transform : "translateY(-10px)"
          }
        }
      },
      animation:{
        'slide-top' : "slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      }
    },
  },
  plugins: [],
}

