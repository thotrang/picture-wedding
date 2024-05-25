export const content = [
  "./layouts/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./modules/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = ["class", '[data-mode="dark"]'];
export const theme = {
  extend: {
    animation: {
      "infinite-scroll": "infinite-scroll 60s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    colors: {
      buttonColor: "#1C1C21",
      buttonNavigate: "#CA9200",
      buttonFilter: "#232329",
      borderColor: "#1C1C21",
      background: "#131316",
      backgroundSecond: "#0E0E10",
      backgroundGray: "#1C1C21",
      textColor: "white",
      textColorSecond: "#AFB0B6",
      textNavigate: "#D8B55B",
      textShadow: "#797C86",
    },
    borderWidth: {
      12: "12px",
    },
    maxWidth: {
      "screen-s": "400px",
      "screen-l": "1280px",
      "screen-xl": "1440px",
      "screen-2xl": "1596px",
      "screen-3xl": "1920px",
    },
    fontSize: {
      s: ["14px", "21px"],
      xs: ["16px", "24px"],
      m: ["18px", "27px"],
      xm: ["20px", "30px"],
      l: ["24px", "33px"],
      xl: ["32px", "43px"],
      "2xl": ["34px", "46px"],
      "3xl": ["44px", "60px"],
      "4xl": ["48px", "66px"],
      "5xl": ["58px", "79px"],
      max: ["40px", "55px"],
      "2max": ["60px", "82px"],
      "3max": ["80px", "110px"],
    },
    height: {
      "topbar-s": "90px",
      "topbar-m": "90px",
      "topbar-l": "120px",

      "banner-s": "",
      "banner-m": "",
      "banner-l": "512px",

      "logo-s": "48px",
      "logo-m": "48px",
      "logo-l": "60px",
    },
    gridAutoRows: {
      "banner-s": "224px",
      "banner-m": "424px",
      "banner-l": "512px",
    },
    spacing: {
      "top-s": "80px",
      "top-m": "150px",
      "top-l": "200px",

      base10: "10px",
      base20: "20px",
      base25: "25px",
      base30: "30px",
      base40: "40px",
      base50: "50px",
      base60: "60px",
      base80: "80px",
      base90: "90px",
      base100: "100px",
      base120: "120px",
      base150: "150px",
    },
    gridTemplateColumns: {
      "18": "repeat(18, minmax(0, 1fr));",
    },
    boxShadow: {
      action: "inset 0px 0px 12px -4px #FFFFFF",
    },
  },
};

export const corePlugins = {
  preflight: false,
};
export const plugins = [require("daisyui")];
