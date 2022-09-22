import React from "react";

const ToggleTheme = () => {
  const handleToggle = () => {
    const root = window.document.documentElement;
    const theme = localStorage.theme;
    const newTheme = theme === "dark" ? "light" : "dark";
    root.classList.add(newTheme);
    root.classList.remove(theme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="absolute z-50 top-8 border-[1px] border-black dark:border-white w-10 h-5 right-0 md:top-12 "
    >
      <div className="relative w-full h-full">
        <div className="absolute left-0 dark:left-1/2 top-0 w-1/2 h-full border-white dark:border-neutral-800 border-[1px] bg-black dark:bg-white "></div>
      </div>
    </button>
  );
};

export default ToggleTheme;
