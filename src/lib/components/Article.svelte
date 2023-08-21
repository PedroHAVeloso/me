<script lang="ts">
  export let title: string;
  let className: string;
  export { className as class };
</script>

<article class={className}>
  <header>
    <h1>{title}</h1>
  </header>
  <section>
    <slot />
  </section>
</article>

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: flex;
  }

  header {
    margin-left: 40px;
  }

  header h1 {
    font-weight: 500;
    font-size: 1.2rem;

    color: var(--600);
  }

  section {
    background-color: var(--400);

    width: flex;

    border-radius: 20px;

    padding: 40px;
  }
</style>
