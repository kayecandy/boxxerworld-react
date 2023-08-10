import { preload_draco } from "../_preload";

const CONTENT = {
  name: "Playboy Robe",
  subtitle: "Custom Fightwear Robe",
  preview: "url(https://kayecandy.github.io/cdn/boxxerworld/3d/robes/playboy/preview.webp)",
  controls: {
    styles: false,
    name: true,
    graphic: true,
    flag: true,
    tassels: false,
    // crystals: true,
  },
  models: [
    {
      id: "main",
      name: "Main Material",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/robes/playboy/main.glb",
      hasTexture: true,
    },
    {
      id: "trim",
      name: "Trim",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/robes/playboy/trim.glb",
    },
    {
      id: "collar",
      name: "Collar",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/robes/playboy/collar.glb",
      hasTexture: true,
    },
    {
      id: "cuffs",
      name: "Cuffs",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/robes/base/cuffs.glb",
      hasTexture: true,
    },
    {
      id: "belt",
      name: "Belt",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/robes/base/belt.glb",
      hasTexture: true,
    },
  ],
};

preload_draco(CONTENT);
export default CONTENT;
