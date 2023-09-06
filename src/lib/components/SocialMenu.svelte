<script lang="ts">
  import { goto } from "$app/navigation";
  import figmaIcon from "$lib/assets/svgs/Figma.svg";
  import githubIcon from "$lib/assets/svgs/GitHub.svg";
  import gmailIcon from "$lib/assets/svgs/Gmail.svg";
  import linkedinIcon from "$lib/assets/svgs/Linkedin.svg";

  function gotoGitHub() {
    goto("https://github.com/pedrohaveloso");
  }

  function gotoLinkedin() {
    goto("https://www.linkedin.com/in/pedro-alves-b67593237/");
  }

  function gotoFigma() {
    goto("https://www.figma.com/@pedrohaveloso");
  }

  function gotoEmail() {
    goto("mailto:contatopedrohalves@gmail.com");
  }
</script>

<menu class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
  <li>
    <button
      type="button"
      on:click={gotoGitHub}
      class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
    >
      <h1 class="font-semibold">GitHub</h1>
      <img src={githubIcon} alt="GitHub" />
    </button>
  </li>
  <li>
    <button
      type="button"
      on:click={gotoLinkedin}
      class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
    >
      <h1 class="font-semibold">Linkedin</h1>
      <img src={linkedinIcon} alt="Linkedin" />
    </button>
  </li>
  <li>
    <button
      type="button"
      on:click={gotoFigma}
      class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
    >
      <h1 class="font-semibold">Figma</h1>
      <img src={figmaIcon} alt="Figma" />
    </button>
  </li>
  <li>
    <button
      type="button"
      on:click={gotoEmail}
      class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
    >
      <h1 class="font-semibold">Gmail</h1>
      <img src={gmailIcon} alt="Gmail" />
    </button>
  </li>
</menu>
