"use client";

import { createContext } from "react";

import { Theme } from "@/lib/types/general";

export type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
};

const ThemeContext = createContext<ThemeContextType | null>(null);
export default ThemeContext;