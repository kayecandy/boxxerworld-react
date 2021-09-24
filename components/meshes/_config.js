import { DoubleSide } from "three";

export const defaultMaterial = {
  color: "#fff",
  normalScale: [1, 1],
  roughness: 0.65,
  metalness: -0.3,
  transparent: false,
  emissive: "#000000",
  emissiveIntensity: 1,
  side: DoubleSide,
};

export const defaultTexture = {
  emissiveMap: null,
  normalMap: null,
  map: null,
};
