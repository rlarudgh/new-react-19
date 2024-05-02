import { DarkModeContext, DarkModeDispatch } from "../contexts/$theme";
import { useContext } from "react";

export const useTheme = () => {
  const darkModeState = useContext(DarkModeContext);
  const darkModeDispatch = useContext(DarkModeDispatch);

  const toggleDarkMode = () => {
    darkModeDispatch({ type: "Click", darkMode: !darkModeState.darkMode });
    updateDarkMode(!darkModeState.darkMode);
  };

  const handleDarkModeChange = (value: boolean) => {
    darkModeDispatch({ type: "Click", darkMode: value });
  };

  const updateDarkMode = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      handleDarkModeChange(true);
      localStorage.theme = "dark";
      return;
    }
    document.documentElement.classList.remove("dark");
    handleDarkModeChange(false);
    localStorage.theme = "light";
  };

  return {
    darkModeState,
    handleDarkModeChange,
    updateDarkMode,
    toggleDarkMode,
  };
};
