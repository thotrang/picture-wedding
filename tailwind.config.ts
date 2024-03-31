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
      textColor: 'white',
      textColorSecond: '#AFB0B6'
    },
    borderWidth: {
      12: "12px",
    },
    maxWidth: {
      "screen-xl": "1120px",
      "screen-2xl": "1596px",
      "screen-3xl": "1920px",
    },
  },
};

export const corePlugins = {
  preflight: false,
};
export const plugins = [];
