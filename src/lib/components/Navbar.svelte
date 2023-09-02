<script>
  import IconButton from "./IconButton.svelte";
  import Icons from "./Icons.svelte";
  import Theme from "$lib/theme";

  let darkMode = Theme.getTheme() == "dark" ? true : false;
</script>

<nav class="p-[10px] gap-[10px] flex flex-col justify-between items-center">
  <menu class="flex flex-col gap-[10px]">
    <li>
      <IconButton>
        <Icons icon="person" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
    <li>
      <IconButton>
        <Icons icon="help" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
    <li>
      <IconButton>
        <Icons icon="projects" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
  </menu>

  <menu class="flex flex-col gap-[10px]">
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
        <Icons icon="projects" class="fill-slate-500 h-[26px] w-[26px]" />
      </IconButton>
    </li>
  </menu>
</nav>
