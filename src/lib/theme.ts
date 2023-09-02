import { browser } from "$app/environment";

export default class Theme {
  private static themeItem = 'theme';
  private static setTheme(value: string): void {
    if (browser) {
      window.localStorage.setItem(this.themeItem, value);
    }
  }

  public static getTheme(): string | null | undefined {
    if (browser) {
      return window.localStorage.getItem(this.themeItem);
    }
  }

  public static switchTheme(darkMode: boolean): boolean | void {
    if (browser) {
      darkMode ? this.setTheme("light") : this.setTheme("dark");

      const classList = document.documentElement.classList;

      darkMode
        ? classList.remove("dark")
        : classList.add("dark");

      return !darkMode;
    }
  }
}