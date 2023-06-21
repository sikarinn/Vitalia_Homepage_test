/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(355.38deg, #FAFCFF 12.23%, rgba(255, 255, 255, 0) 48.79%), url('../public/assets/image/banner.png')",
        blog: "url('../public/assets/image/blogImg.svg')",
        feedback: "url('../public/assets/image/feedbackImg.svg')",
        slider1:
          "linear-gradient(362.18deg, #274084 -13.36%, rgba(179, 209, 254, 0) 34.67%), url('../public/assets/image/slider1.png')",
        slider2:
          "linear-gradient(357.9deg, #274084 8.84%, rgba(59, 85, 149, 0.85) 24.23%, rgba(120, 148, 203, 0.35) 52.2%, rgba(179, 209, 254, 0) 66.17%), url('../public/assets/image/slider2.jpg')",
        slider3:
          "linear-gradient(360.28deg, #274084 -36.39%, rgba(179, 209, 254, 0) 39.07%), url('../public/assets/image/slider3.jpg')",
      },

      fontFamily: {
        OldStandardTT: ["Old Standard TT"],
        AlegreyaSansSC: ["Alegreya Sans SC"],
      },
    },
  },
  plugins: [],
};
