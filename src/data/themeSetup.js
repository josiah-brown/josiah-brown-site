export const themeSetup = () => {
  const root = window.document.documentElement;
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export const themes = {
  light: {
    bg: "#ffffff",
    main: "#000000",
  },
  dark: {
    bg: "#262626",
    main: "#ffffff",
  },
};
