import React from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // optional

export default function useTheme() {  // function for use context
  return React.useContext(ThemeContext);
}
