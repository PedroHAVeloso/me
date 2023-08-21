<script lang="ts">
  import homeIcon from "$lib/assets/home.svg";
  import personIcon from "$lib/assets/person.svg";
  import menuIcon from "$lib/assets/menu.svg";
  import githubIcon from "$lib/assets/github.svg";
  import linkedinIcon from "$lib/assets/linkedin.svg";
  import figmaIcon from "$lib/assets/figma.svg";
  import gmailIcon from "$lib/assets/gmail.svg";

  import IconButton from "./IconButton.svelte";
  import Spacer from "./Spacer.svelte";
</script>

<nav>
  <IconButton src={homeIcon} />
  <IconButton src={personIcon} />
  <IconButton src={menuIcon} />
  <Spacer />
  <IconButton src={githubIcon} filled={true} />
  <IconButton src={linkedinIcon} filled={true} />
  <IconButton src={figmaIcon} filled={true} />
  <IconButton src={gmailIcon} filled={true} />
</nav>

<style>
  nav {
    height: calc(100vh - 40px);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;
  }

  @media (max-width: 800px) {
    nav {
      display: none;
    }
  }
</style>
