<script>
  import Article from "$lib/components/Article.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Title from "$lib/components/Title.svelte";
</script>

<div
  id="body"
  class="h-full w-full flex p-[10px] bg-white dark:bg-black text-slate-900 dark:text-slate-50"
>
  <Navbar />

  <main
    class="bg-slate-50 dark:bg-slate-900 w-full p-[20px] m-[10px] rounded-[20px] flex flex-col gap-[20px]"
  >
    <Article>
      <h1 slot="title">ola</h1>
      <p>ola</p>
    </Article>

    <Title>Sobre mim</Title>
    <Title>Meus projetos</Title>
  </main>
</div>
