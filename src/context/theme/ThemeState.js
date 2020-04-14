import React, { useReducer } from "react";
import ThemeContext from "./themeContext";
import ThemeReducer from "./themeReducer";
import { CHANGE_THEME } from "../types";

const ThemeState = props => {
  const initialState = {
    theme: "light"
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  // Change Theme -> Dark by default
  const toggleTheme = () => {
    const { theme } = state;
    dispatch({
      type: CHANGE_THEME,
      payload: theme === "light" ? "dark" : "light"
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;
