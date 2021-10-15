import { RepeatWrapping } from "three";

export const tasselMaterial = {
  textures: {
    maps: {
      alphaMap: "/3d/boxing-shorts/textures/tassels-opacity.jpg",
      bumpMap: "/3d/boxing-shorts/textures/tassels-bump.jpg",
    },
    wrapS: RepeatWrapping,
    wrapT: RepeatWrapping,
    // offset: new Vector2(0, 0.09),
    flipY: false,
    flipX: false,
  },
  transparent: true,
  bumpScale: 0.15,
};
