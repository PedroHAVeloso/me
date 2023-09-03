<script>
  import { goto } from "$app/navigation";
  import Theme from "$lib/theme";
  import IconButton from "./IconButton.svelte";
  import Icons from "./Icons.svelte";

  let darkMode = Theme.getTheme() == "dark" ? true : false;
</script>

<nav class="gap-[10px] flex md:flex-col justify-between items-center">
  <menu class="flex md:flex-col gap-[10px]">
    <li class="flex md:hidden">
      <IconButton onClick={() => goto("#home")}>
        <Icons icon="menu" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
    <li class="hidden md:flex">
      <IconButton onClick={() => goto("#home")}>
        <Icons icon="person" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
    <li class="hidden md:flex">
      <IconButton onClick={() => goto("#me")}>
        <Icons icon="help" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
    <li class="hidden md:flex">
      <IconButton onClick={() => goto("#projects")}>
        <Icons icon="projects" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
  </menu>

  <menu class="flex md:flex-col gap-[10px]">
    <li>
      <IconButton
        onClick={() => (darkMode = Theme.switchTheme(darkMode) ?? true)}
        filled={true}
      >
        {#if darkMode}
          <Icons icon="light" class="fill-slate-500 h-[26px] w-[26px]" />
        {:else}
          <Icons icon="dark" class="fill-slate-500 h-[26px] w-[26px]" />
        {/if}
      </IconButton>
    </li>
    <li>
      <IconButton filled={true}>
        <Icons icon="email" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
  </menu>
</nav>
