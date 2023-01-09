import { ThemeCxt } from "contextProvider/ThemeContext";
import { useContext } from "react";

export const useColors = () => useContext(ThemeCxt)