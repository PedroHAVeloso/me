<script lang="ts">
  export let filled = false;
  export let onClick = () => {};
</script>

{#if filled}
  <button
    type="button"
    on:click={onClick}
    class="flex items-center justify-center h-[60px] w-[60px] bg-slate-200 dark:bg-slate-900 rounded-[20px] hover:bg-slate-300 dark:hover:bg-slate-800 transition duration-500 text-[1.5rem]"
  >
    <slot />
  </button>
{:else}
  <button
    type="button"
    on:click={onClick}
    class="flex items-center justify-center h-[60px] w-[60px] border-slate-100 dark:border-slate-800 border-[4px] rounded-[20px] hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-500 text-[1.5rem]"
  >
    <slot />
  </button>
{/if}
