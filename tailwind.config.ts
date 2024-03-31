export const content = [
  "./layouts/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./modules/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = ["class", '[data-mode="dark"]'];
export const theme = {
  extend: {
    colors: {
      primary: "#D6D0FB",
      secondary: "#1C1C21",
      borderColor: "#1C1C21",
      background: "#131316",
      textColor: "white",
      textColorSecond: "#AFB0B6",
    },
    borderWidth: {
      12: "12px",
    },
    maxWidth: {
      "screen-xl": "1120px",
      "screen-2xl": "1596px",
      "screen-3xl": "1920px",
    },
    fontSize: {
      s: ["14px", "21px"],
      xs: ["16px", "24px"],
      m: ["18px", "27px"],
      xm: ["20px", "30px"],
      l: ["24px", "33px"],
      xl: ["30px", "41px"],
      "2xl": ["34px", "46px"],
      "3xl": ["44px", "60px"],
      "4xl": ["48px", "66px"],
      '5xl': ['58px', '79px'],
      'max': ['40px', '55px'],
      '2max': ['60px', '82px'],
      '3max': ['80px', '110px'],
    },
  },
};

export const corePlugins = {
  preflight: false,
};
export const plugins = [];
