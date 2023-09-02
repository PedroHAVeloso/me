<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import SwitchThemeOnClick from "$lib/switch_theme_onclick";
</script>

<div
  class="h-full w-full flex p-[10px] bg-white dark:bg-black text-slate-900 dark:text-slate-50"
>
  <Navbar />

  <main
    class="bg-slate-50 dark:bg-slate-900 w-full p-[20px] m-[10px] rounded-[20px]"
  >
    <h1>Início</h1>
    <h1>Sobre mim</h1>
    <h1>Meus projetos</h1>
  </main>
</div>
