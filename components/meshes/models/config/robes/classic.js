import { preload_draco } from "../_preload";

const CONTENT = {
  name: "Classic Robe",
  subtitle: "Custom Fightwear Robe",
  preview: "url(/3d/robes/classic/preview.webp)",
  controls: {
    styles: false,
    name: true,
    graphic: true,
    flag: true,
    tassels: false,
    crystals: true,
  },
  models: [
    {
      id: "main",
      name: "Main Material",
      url: "/3d/robes/classic/main.glb",
      hasTexture: true,
    },
    {
      id: "main-trim",
      name: "Main Trim",
      url: "/3d/robes/classic/main-trim.glb",
    },
    {
      id: "belt",
      name: "Belt",
      url: "/3d/robes/base/belt.glb",
      hasTexture: true,
    },
    {
      id: "hood-outside",
      name: "Hood",
      url: "/3d/robes/classic/hood-outside.glb",
      hasTexture: true,
    },
    {
      id: "hood-inside",
      name: "Inside Hood",
      url: "/3d/robes/classic/hood-inside.glb",
      hasTexture: true,
    },
    {
      id: "other-trim",
      name: "Other Trim",
      url: "/3d/robes/classic/other-trim.glb",
    },
    {
      id: "cuffs",
      name: "Cuffs",
      url: "/3d/robes/base/cuffs.glb",
      hasTexture: true,
    },
  ],
};

preload_draco(CONTENT);
export default CONTENT;
