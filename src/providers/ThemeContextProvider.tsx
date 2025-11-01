import { useState, useEffect } from "react";

import { Theme } from "@/lib/types/general";
import ThemeContext from "@/context/ThemeContext";

interface ThemeContextProviderProps { 
  children: React.ReactNode
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("system")

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    root.classList.remove("light", "dark")

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    window.localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null

    //? Check if there's a theme in localStorage
    if (localTheme && ["light", "dark", "system"].includes(localTheme)) {
      setThemeState(localTheme)
      applyTheme(localTheme)
    } else {
      //? Default to system if no preference is stored
      setThemeState("system")
      applyTheme("system")
    }

    //? Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;