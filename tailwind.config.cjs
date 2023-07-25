module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff9500",
      },
      fontFamily: {
        "lato-bold": ["Lato-Bold"],
        "lato-regular": ["Lato-Regular"],
      },
      backgroundImage: {
        'hero': "url('https://a.mktgcdn.com/p/zLdSJhB5bxsOkKegHhmFSwwRqwcWvs0n1SY64JpxXw8/2680x1600.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
