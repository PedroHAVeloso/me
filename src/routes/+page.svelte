<script lang="ts">
  import Article from "$lib/components/Article.svelte";
  import AsideNavbar from "$lib/components/AsideNavbar.svelte";
  import langsImg from "$lib/assets/langs.svg";
  import Spacer from "$lib/components/Spacer.svelte";
</script>

<aside>
  <AsideNavbar />
</aside>

<main>
  <Article title="Início" class="home-article">
    <h1 class="home-title">
      Olá 🖖, meu nome é
      <strong>Pedro Veloso</strong>. <br />Sou
      <em>desenvolvedor</em>, com conhecimentos em
      <strong class="font-blue">Flutter</strong>
      e
      <strong class="font-blue">PHP</strong>.
    </h1>
    <Spacer />
    <img id="langs-img" src={langsImg} alt="Linguagens" />
  </Article>
</main>

<style>
  :global(body) {
    background-color: var(--100);
    display: flex;

    gap: 20px;

    padding: 20px;

    background-color: aquamarine;
  }

  @media (max-width: 800px) {
    :global(body) {
      flex-direction: column;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 10px;

    flex: 1;

    border-radius: 20px;

    background-color: var(--200);

    padding: 20px;
  }

  :global(.home-article section) {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  #langs-img {
    width: 30%;
  }

  .home-title {
    font-size: 2rem;
    font-weight: 400;
  }

  .home-title em {
    font-weight: 500;
    font-style: normal;
  }

  .font-blue {
    font-weight: 700;
    color: var(--600);
  }

  @media (max-width: 1200px) {
    :global(.home-article section) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    #langs-img {
      width: 80%;
    }
  }
</style>
