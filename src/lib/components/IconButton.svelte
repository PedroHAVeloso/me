<script lang="ts">
  export let filled = false;
  export let src: string;
  export let alt = "Icon";
</script>

<button type="button" class={filled ? "filled" : ""}>
  <img {src} {alt} />
</button>

<style>
  button {
    height: 60px;
    width: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 20px;

    border: solid var(--400) 4px;
    background-color: transparent;

    transition: 0.5s;
  }

  button:hover {
    background-color: var(--200);
  }

  .filled {
    background-color: var(--400);
  }
</style>
