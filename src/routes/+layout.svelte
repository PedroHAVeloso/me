<script lang="ts">
  import "../app.css";
  import Theme from "$lib/theme";

  const darkMode = Theme.getTheme() == "dark" ? true : false;
  Theme.switchTheme(!darkMode);
</script>

<slot />
