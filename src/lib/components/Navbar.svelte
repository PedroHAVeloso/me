<script>
  import SwitchThemeOnClick from "$lib/switch_theme_onclick";
  import theme from "$lib/theme";
  import { writable } from "svelte/store";
  import IconButton from "./IconButton.svelte";

  const darkMode = theme == writable("dark") ? true : false;
</script>

<nav class="p-[10px] flex flex-col justify-between items-center">
  <menu class="flex flex-col gap-[10px]">
    <li>
      <IconButton>👋</IconButton>
    </li>
    <li>
      <IconButton>🤔</IconButton>
    </li>
    <li>
      <IconButton>🗂️</IconButton>
    </li>
  </menu>

  <menu class="flex flex-col gap-[10px]">
    <li>
      <IconButton onClick={SwitchThemeOnClick} filled={true}>
        {#if darkMode}
          🌚
        {:else}
          🌞
        {/if}
      </IconButton>
    </li>
    <li>
      <IconButton filled={true}>📩</IconButton>
    </li>
  </menu>
</nav>
