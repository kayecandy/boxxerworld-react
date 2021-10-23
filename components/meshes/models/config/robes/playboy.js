import { preload_draco } from "../_preload";

const CONTENT = {
  name: "Playboy Robe",
  subtitle: "Custom Fightwear Robe",
  preview: "url(/3d/robes/playboy/preview.webp)",
  models: [
    {
      id: "main",
      name: "Main Material",
      url: "/3d/robes/playboy/main.glb",
      hasTexture: true,
    },
    {
      id: "trim",
      name: "Trim",
      url: "/3d/robes/playboy/trim.glb",
    },
    {
      id: "collar",
      name: "Collar",
      url: "/3d/robes/playboy/collar.glb",
      hasTexture: true,
    },
    {
      id: "cuffs",
      name: "Cuffs",
      url: "/3d/robes/base/cuffs.glb",
      hasTexture: true,
    },
    {
      id: "belt",
      name: "Belt",
      url: "/3d/robes/base/belt.glb",
      hasTexture: true,
    },
  ],
};

preload_draco(CONTENT);
export default CONTENT;
