import { preload_draco } from "../_preload";
import { tasselMaterial } from "./_tasselMaterial";

const CONTENT = {
  name: "Classic BX",
  subtitle: "Custom Fightwear Short",
  preview: "url(https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/preview.webp)",
  controls: {
    styles: true,
    name: true,
    graphic: true,
    flag: true,
    tassels: true,
    crystals: true,
  },
  models: [
    {
      id: "waist",
      name: "Waistband",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/waistband/waist.glb",
      hasTexture: true,
    },
    {
      id: "waist-logo",
      name: "Waistband Logo",
      url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/waistband/waist-logo-5-small.glb",
      hasTexture: true,
    },
  ],
  variations: [
    {
      legCut: "side-slit",
      size: "standard",
      parts: [
        {
          id: "body",
          name: "Main Colour",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/body_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/stitching-bottom_side-slit.glb",
          hasTexture: true,
        },
      ],
    },
    {
      legCut: "curve",
      size: "standard",
      parts: [
        {
          id: "body",
          name: "Main Colour",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/body_curve.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/stitching-bottom_curve.glb",
          hasTexture: true,
        },
      ],
    },
    {
      legCut: "side-slit",
      size: "retro",
      parts: [
        {
          id: "body",
          name: "Main Colour",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/body_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/stitching-bottom_side-slit.glb",
          hasTexture: true,
        },
      ],
      transforms: (node) => {
        if (node.id != "waist" && node.id != "waist-logo") {
          return {
            scale: [1, 0.8, 1],
          };
        }

        return {
          position: [0, -0.252, 0],
        };
      },
    },
    {
      legCut: "curve",
      size: "retro",
      parts: [
        {
          id: "body",
          name: "Main Colour",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/body_curve.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/stitching-bottom_curve.glb",
          hasTexture: true,
        },
      ],
      transforms: (node) => {
        if (node.id != "waist" && node.id != "waist-logo") {
          return {
            scale: [1, 0.8, 1],
          };
        }

        return {
          position: [0, -0.252, 0],
        };
      },
    },
    {
      hasTassels: true,
      legCut: "side-slit",
      parts: [
        {
          id: "waist-tassels",
          name: "Tassels",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/waistband/waist-tassels.glb",
          baseMaterial: tasselMaterial,
        },
        {
          id: "tassels-bottom",
          name: "Tassels",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/tassels-bottom_side-slit.glb",
          baseMaterial: tasselMaterial,
        },
      ],
    },
    {
      hasTassels: true,
      legCut: "curve",
      parts: [
        {
          id: "waist-tassels",
          name: "Tassels",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/waistband/waist-tassels.glb",
          baseMaterial: tasselMaterial,
        },
        {
          id: "tassels-bottom",
          name: "Tassels",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/tassels-bottom_curve.glb",
          baseMaterial: tasselMaterial,
        },
      ],
    },
    {
      hasCrystals: true,
      legCut: "side-slit",
      parts: [
        {
          id: "crystals-front",
          name: "Crystals",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/crystals-front_side-slit.glb"
        },
        {
          id: "crystals-back",
          name: "Crystals",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/crystals-back_side-slit.glb"
        }
      ]
    },
    {
      hasCrystals: true,
      legCut: "curve",
      parts: [
        {
          id: "crystals-front",
          name: "Crystals",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/crystals-front_curve.glb"
        },
        {
          id: "crystals-back",
          name: "Crystals",
          url: "https://kayecandy.github.io/cdn/boxxerworld/3d/boxing-shorts/classic/crystals-back_curve.glb"
        }
      ]
    }
  ],
};

preload_draco(CONTENT);
export default CONTENT;
