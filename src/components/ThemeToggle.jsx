import React from "react";
import {useContext, useState, useEffect} from "react";
import "../styles/ThemeToggle.css";
import ThemeContext from "../context/context";

function ThemeToggle() {
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
      <button className="theme-btn" onClick={toggleTheme}>
        <span class="material-symbols-outlined">{theme === "light" ? "dark_mode" :"light_mode"}</span>
      </button>
    </>
  );
}

export default ThemeToggle;
