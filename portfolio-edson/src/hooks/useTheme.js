import { useEffect, useState } from "react";

export default function useTheme() {

  const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem("theme");

    return savedTheme || "dark";

  });


  useEffect(() => {

    const html = document.documentElement;

    html.classList.remove("light", "dark");

    html.classList.add(theme);

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);


  const toggleTheme = () => {

    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );

  };


  return {
    theme,
    toggleTheme
  };

}