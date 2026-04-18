"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        padding: "10px",
        border: "1px solid gray",
        borderRadius: "5px",
        marginTop: "10px"
      }}
    >
      Toggle Theme
    </button>
  );
}