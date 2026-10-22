const constantsColors = {
  black: "#000000",
  blue: "#001EB9",
  danger: "#dc3545",
  grey: "#B0B0B0",
  light: "#f8f9fa",
  white: "#ffffff",
};
export const lightTheme = {
  colors: {
    ...constantsColors,
    background: "#ffffff",
    barStyle: "dark-content",
    darkwhite: "#000000",
    opacity50: "rgba(1,1,1,0.5)",
    placeholder: "rgba(1,1,1,0.52)",
    textInputColor: "rgba(217, 217, 217,0.2)",
    typography: "#000000",
  },
  margins: {
    lg: 8,
    md: 4,
    sm: 2,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    ...constantsColors,
    background: "#000000",
    barStyle: "light-content",
    darkwhite: "#ffffff",
    opacity50: "rgba(201, 201, 201,0.5)",
    placeholder: "#f8f9fa",
    textInputColor: "#000000",
    typography: "#ffffff",
  },
  margins: {
    lg: 8,
    md: 4,
    sm: 2,
    xl: 12,
  },
} as const;
