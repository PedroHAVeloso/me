import theme from "$lib/theme";
import { writable } from "svelte/store";

let darkMode = theme == writable("dark") ? true : false;

export default function SwitchThemeOnClick() {
  theme.set(darkMode ? "light" : "dark");

  darkMode = !darkMode;

  darkMode
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
}