import { preload_draco } from "./_preload";
import { tasselMaterial } from "./_tasselMaterial";

const CONTENT = {
  preview: "/3d/boxing-shorts/classic/preview.webp",
  models: [
    {
      id: "waist",
      name: "Waistband",
      url: "/3d/boxing-shorts/waistband/waist.glb",
      hasTexture: true,
    },
    {
      id: "waist-logo",
      name: "Waistband Logo",
      url: "/3d/boxing-shorts/waistband/waist-logo.glb",
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
          url: "/3d/boxing-shorts/classic/body_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/classic/stitching-bottom_side-slit.glb",
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
          url: "/3d/boxing-shorts/classic/body_curve.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/classic/stitching-bottom_curve.glb",
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
          url: "/3d/boxing-shorts/classic/body_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/classic/stitching-bottom_side-slit.glb",
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
          url: "/3d/boxing-shorts/classic/body_curve.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/classic/stitching-bottom_curve.glb",
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
          url: "/3d/boxing-shorts/waistband/waist-tassels.glb",
          material: tasselMaterial,
        },
        {
          id: "tassels-bottom",
          name: "Tassels",
          url: "/3d/boxing-shorts/classic/tassels-bottom_side-slit.glb",
          material: tasselMaterial,
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
          url: "/3d/boxing-shorts/waistband/waist-tassels.glb",
          material: tasselMaterial,
        },
        {
          id: "tassels-bottom",
          name: "Tassels",
          url: "/3d/boxing-shorts/classic/tassels-bottom_curve.glb",
          material: tasselMaterial,
        },
      ],
    },
  ],
};

preload_draco(CONTENT);
export default CONTENT;
