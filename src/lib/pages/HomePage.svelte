<script>
  import Title from "$lib/components/Title.svelte";

  // Foto:
  import profile from "$lib/assets/profile.png";

  import ProjectsRow from "$lib/components/ProjectsRow.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import SocialMenu from "$lib/components/SocialMenu.svelte";
</script>

<div
  id="body"
  class="h-full w-full flex-col md:flex-row flex p-[20px] gap-[20px] bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200"
>
  <Navbar />

  <main
    class="bg-slate-50 dark:bg-slate-900 w-full p-[10px] md:p-[20px] pt-[20px] rounded-[20px] flex flex-col gap-[20px] scroll-smooth overflow-auto"
  >
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

      <SocialMenu />
    </section>

    <Divider />

    <section id="me" class="flex flex-col gap-[10px]">
      <Title>Sobre mim</Title>

      <article
        class="w-full h-fit p-[30px] pt-[300px] pb-[300px] bg-slate-100 dark:bg-slate-800 rounded-[20px] flex flex-col sm:flex-row items-center justify-center gap-[20px]"
      >
        <h1 class="text-center text-[1.2rem] md:text-[2rem] font-bold">
          Em desenvolvimento...
        </h1>
      </article>
    </section>

    <Divider />

    <section id="projects" class="flex flex-col gap-[10px]">
      <Title>Meus projetos</Title>
      <ProjectsRow />
    </section>
  </main>
</div>
