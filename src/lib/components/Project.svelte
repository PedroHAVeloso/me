<script lang="ts">
  export let title: string;
  export let thumb: string;

  export let skills: { src: string; alt: string }[];
</script>

<article
  class="p-[20px] bg-white dark:bg-slate-700 rounded-[20px] h-full flex flex-col items-center justify-between min-w-[260px] max-w-[280px] gap-[20px]"
>
  <h1 class="font-semibold text-[1.1rem]">{title}</h1>
  <img src={thumb} alt={title} class="h-[120px] sm:h-[140px] rounded-[10px]" />

  <slot name="description" />

  <ul class="flex gap-[10px] w-full">
    {#each skills as skill}
      <li>
        <img
          src={skill.src}
          alt={skill.alt}
          class="h-[30px] w-[30px] rounded-[6px]"
        />
      </li>
    {/each}
  </ul>

  <button
    type="button"
    class="h-[50px] w-full bg-slate-200 dark:bg-slate-900 rounded-[20px] transition duration-500 hover:bg-slate-300 dark:hover:bg-slate-800"
  >
    Clique para ver
  </button>
</article>
