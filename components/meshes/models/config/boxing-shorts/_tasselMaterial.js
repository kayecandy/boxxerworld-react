import { RepeatWrapping, Vector2 } from "three";

export const tasselMaterial = {
  textures: {
    maps: {
      alphaMap: "/3d/boxing-shorts/textures/tassels-opacity.jpg",
      bumpMap: "/3d/boxing-shorts/textures/tassels-bump.jpg",
    },
    wrapS: RepeatWrapping,
    wrapT: RepeatWrapping,
    repeat: new Vector2(1, 1),
    // offset: new Vector2(0, 0.09),
    flipY: false,
    flipX: false,
  },
  transparent: true,
  bumpScale: 0.15,
  roughness: 0.8,
};
