<slot />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  :global(:root) {
    --100: #ffffff;
    --200: #f9fbff;
    --300: #f3f6fc;
    --400: #eff3fa;
    --500: #d3e3fd;
    --600: #9ab1d8;
    --700: #5f6368;
    --800: #343434;
    --900: #1f1f1f;
  }

  :global(*) {
    font-family: "Poppins";
    padding: 0;
    margin: 0;
    color: var(--900);
  }
</style>
