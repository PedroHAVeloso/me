<script lang="ts">
  import { browser } from "$app/environment";
  import theme from "$lib/theme";
  import "../app.css";

  const darkMode = $theme === "dark" ? true : false;

  browser
    ? darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
    : null;
</script>

<slot />
