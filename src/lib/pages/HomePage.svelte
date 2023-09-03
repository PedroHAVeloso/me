<script>
  import { goto } from "$app/navigation";
  import IconButton from "$lib/components/IconButton.svelte";
  import Icons from "$lib/components/Icons.svelte";
  import Title from "$lib/components/Title.svelte";
  import Project from "$lib/components/Project.svelte";
  import Theme from "$lib/theme";

  // Foto:
  import profile from "$lib/assets/profile.png";

  // Ícones
  import figmaIcon from "$lib/assets/svgs/Figma.svg";
  import githubIcon from "$lib/assets/svgs/GitHub.svg";
  import gmailIcon from "$lib/assets/svgs/Gmail.svg";
  import linkedinIcon from "$lib/assets/svgs/Linkedin.svg";
  import gitIcon from "$lib/assets/svgs/Git.svg";
  import dartIcon from "$lib/assets/svgs/Dart.svg";
  import flutterIcon from "$lib/assets/svgs/Flutter.svg";
  import dockerIcon from "$lib/assets/svgs/Docker.svg";
  import dartfrogIcon from "$lib/assets/svgs/DartFrog.svg";

  // Thumbs dos projetos:
  import brapiProject from "$lib/assets/projects/brapi_dart.png";
  import vzappProject from "$lib/assets/projects/vzapp.png";
  import vzapiProject from "$lib/assets/projects/vzapi.png";
  import vzappFigmaProject from "$lib/assets/projects/vzapp_figma.png";

  let darkMode = Theme.getTheme() == "dark" ? true : false;
</script>

<div
  id="body"
  class="h-full w-full flex-col md:flex-row flex p-[20px] gap-[20px] bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200"
>
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

  <main
    class="bg-slate-50 dark:bg-slate-900 w-full p-[10px] md:p-[20px] pt-[20px] rounded-[20px] flex flex-col gap-[20px] scroll-smooth overflow-auto"
  >
    <!-- Home -->
    <section id="home" class="flex flex-col gap-[10px]">
      <Title>Início</Title>

      <article
        class="w-full h-fit p-[30px] bg-slate-100 dark:bg-slate-800 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-[20px]"
      >
        <div class="flex flex-col gap-[10px]">
          <h1
            class="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]"
          >
            Olá 🖖, meu nome é Pedro.
          </h1>
          <p
            class="text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem] xl:text-[1.8rem]"
          >
            Sou desenvolvedor, com conhecimentos em
            <strong>Flutter</strong>/<strong>Dart</strong>,
            <strong>PHP</strong> e dando meus primeiros passos em
            <strong>TypeScript</strong>, com
            <strong>React</strong>
            e <strong>Svelte</strong>.
          </p>
        </div>
        <img
          src={profile}
          alt="Perfil"
          class="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
        />
      </article>

      <menu class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        <li>
          <button
            type="button"
            class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
          >
            <h1 class="font-semibold">GitHub</h1>
            <img src={githubIcon} alt="GitHub" />
          </button>
        </li>
        <li>
          <button
            type="button"
            class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
          >
            <h1 class="font-semibold">Linkedin</h1>
            <img src={linkedinIcon} alt="Linkedin" />
          </button>
        </li>
        <li>
          <button
            type="button"
            class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
          >
            <h1 class="font-semibold">Figma</h1>
            <img src={figmaIcon} alt="Figma" />
          </button>
        </li>
        <li>
          <button
            type="button"
            class="hover:bg-slate-300 dark:hover:bg-slate-600 transition duration-500 w-full h-fit p-[20px] bg-slate-200 dark:bg-slate-700 rounded-[20px] flex items-center justify-between gap-[20px]"
          >
            <h1 class="font-semibold">Gmail</h1>
            <img src={gmailIcon} alt="Gmail" />
          </button>
        </li>
      </menu>
    </section>
    <!-- / Home -->

    <hr
      class="border-[2px] ms-[10px] me-[10px] rounded-full border-slate-100 dark:border-slate-800"
    />

    <!-- Projects -->
    <section id="projects" class="flex flex-col gap-[10px]">
      <Title>Meus projetos</Title>

      <div
        class="w-full h-fit p-[20px] bg-slate-100 dark:bg-slate-800 rounded-[20px] flex overflow-auto items-center gap-[20px]"
      >
        <Project
          title="BrApi Dart"
          thumb={brapiProject}
          skills={[
            { src: dartIcon, alt: "Dart" },
            { src: gitIcon, alt: "Git" },
            { src: githubIcon, alt: "GitHub" },
          ]}
        >
          <p slot="description">
            Uma biblioteca em Dart para a API Brasil API, com todas suas
            funcionalidades.
          </p>
        </Project>

        <Project
          title="VZ App"
          thumb={vzappProject}
          skills={[
            { src: flutterIcon, alt: "Flutter" },
            { src: dartIcon, alt: "Dart" },
            { src: gitIcon, alt: "Git" },
            { src: githubIcon, alt: "GitHub" },
          ]}
        >
          <p slot="description">
            VZ App, um gerador de frases que, provavelmente, seriam
            compartilhadas por velhas e tias do zap.
          </p>
        </Project>

        <Project
          title="VZ Api"
          thumb={vzapiProject}
          skills={[
            { src: dartfrogIcon, alt: "Dart Frog" },
            { src: dartIcon, alt: "Dart" },
            { src: dockerIcon, alt: "Docker" },
            { src: gitIcon, alt: "Git" },
            { src: githubIcon, alt: "GitHub" },
          ]}
        >
          <p slot="description">
            API em Dart, utilizando o framework Dart Frog, que retorna frases
            aleatórias de 'velha do zap'.
          </p>
        </Project>

        <Project
          title="VZ App Design"
          thumb={vzappFigmaProject}
          skills={[{ src: figmaIcon, alt: "Figma" }]}
        >
          <p slot="description">
            Um gerador de frases que, provavelmente, seriam compartilhadas por
            velhas e tias do zap.
          </p>
        </Project>
      </div>
    </section>
    <!-- / Projects -->
  </main>
</div>
