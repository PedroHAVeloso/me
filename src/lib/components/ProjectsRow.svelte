<script>
  import Project from "./Project.svelte";

  // Ícones
  import figmaIcon from "$lib/assets/svgs/Figma.svg";
  import gitIcon from "$lib/assets/svgs/Git.svg";
  import dartIcon from "$lib/assets/svgs/Dart.svg";
  import flutterIcon from "$lib/assets/svgs/Flutter.svg";
  import dockerIcon from "$lib/assets/svgs/Docker.svg";
  import dartfrogIcon from "$lib/assets/svgs/DartFrog.svg";
  import typescriptIcon from "$lib/assets/svgs/TypeScript.svg";
  import tailwindIcon from "$lib/assets/svgs/Tailwind.svg";
  import reactIcon from "$lib/assets/svgs/React.svg";
  import phpIcon from "$lib/assets/svgs/PHP.svg";

  // Thumbs dos projetos:
  import brapiProject from "$lib/assets/projects/brapi_dart.png";
  import vzappProject from "$lib/assets/projects/vzapp.png";
  import vzapiProject from "$lib/assets/projects/vzapi.png";
  import vzappFigmaProject from "$lib/assets/projects/vzapp_figma.png";
  import postinProject from "$lib/assets/projects/postin.png";
</script>

<span
  class="w-full h-fit p-[20px] bg-slate-100 dark:bg-slate-800 rounded-[20px] flex overflow-auto items-center gap-[20px]"
>
  <Project
    title="Post in"
    thumb={postinProject}
    projectLink="https://github.com/PedroHAVeloso/postin"
    skills={[
      { src: typescriptIcon, alt: "TS" },
      { src: reactIcon, alt: "React" },
      { src: tailwindIcon, alt: "Tailwind" },
      { src: phpIcon, alt: "PHP" },
      { src: gitIcon, alt: "Git" },
    ]}
  >
    <p slot="description">
      Post in, uma rede Unimar. Se baseia em papeis coloridos colados em um
      mural.
    </p>
  </Project>

  <Project
    title="BrApi Dart"
    thumb={brapiProject}
    projectLink="https://pub.dev/packages/br_api"
    skills={[
      { src: dartIcon, alt: "Dart" },
      { src: gitIcon, alt: "Git" },
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
    projectLink="https://github.com/PedroHAVeloso/vz_app"
    skills={[
      { src: flutterIcon, alt: "Flutter" },
      { src: dartIcon, alt: "Dart" },
      { src: gitIcon, alt: "Git" },
    ]}
  >
    <p slot="description">
      VZ App, um gerador de frases que, provavelmente, seriam compartilhadas por
      velhas e tias do zap.
    </p>
  </Project>

  <Project
    title="VZ Api"
    thumb={vzapiProject}
    projectLink="https://github.com/PedroHAVeloso/vz_api"
    skills={[
      { src: dartfrogIcon, alt: "Dart Frog" },
      { src: dartIcon, alt: "Dart" },
      { src: dockerIcon, alt: "Docker" },
      { src: gitIcon, alt: "Git" },
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
    projectLink="https://www.figma.com/community/file/1258821624890062447"
    skills={[{ src: figmaIcon, alt: "Figma" }]}
  >
    <p slot="description">
      Um gerador de frases que, provavelmente, seriam compartilhadas por velhas
      e tias do zap.
    </p>
  </Project>
</span>
