import { preload_draco } from "./_preload";

const CONTENT = {
  preview: "/3d/boxing-shorts/slick-bx/preview.webp",
  models: [
    {
      id: "body-fr",
      name: "Center Panel",
      url: "/3d/boxing-shorts/slick-bx/body-fr.glb",
      hasTexture: true,
    },
    {
      id: "back-top",
      name: "Small Panel",
      url: "/3d/boxing-shorts/slick-bx/back-top.glb",
      hasTexture: true,
    },
    {
      id: "garter",
      name: "Waistband",
      url: "/3d/boxing-shorts/slick-bx/garter.glb",
      hasTexture: true,
    },
    {
      id: "stitching",
      name: "Trim",
      url: "/3d/boxing-shorts/slick-bx/stitching.glb",
    },
  ],
  variations: [
    {
      legCut: "side-slit",
      size: "standard",
      parts: [
        {
          id: "back-bottom",
          name: "Large Panel",
          url: "/3d/boxing-shorts/slick-bx/back-bottom_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/slick-bx/stitching-bottom_side-slit.glb",
        },
      ],
    },
    {
      legCut: "curve",
      size: "standard",
      parts: [
        {
          id: "back-bottom",
          name: "Large Panel",
          url: "/3d/boxing-shorts/slick-bx/back-bottom_curve.glb",
          hasTexture: true,
        },

        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/slick-bx/stitching-bottom_curve.glb",
        },
      ],
    },
    {
      legCut: "side-slit",
      size: "retro",
      parts: [
        {
          id: "back-bottom",
          name: "Large Panel",
          url: "/3d/boxing-shorts/slick-bx/back-bottom_side-slit.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/slick-bx/stitching-bottom_side-slit.glb",
        },
      ],
      transforms: (node) => {
        if (node.id != "garter") {
          return {
            scale: [1, 0.8, 1],
          };
        }

        return {
          position: [0, -0.19, 0],
        };
      },
    },
    {
      legCut: "curve",
      size: "retro",
      parts: [
        {
          id: "back-bottom",
          name: "Large Panel",
          url: "/3d/boxing-shorts/slick-bx/back-bottom_curve.glb",
          hasTexture: true,
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "/3d/boxing-shorts/slick-bx/stitching-bottom_curve.glb",
        },
      ],
      transforms: (node) => {
        if (node.id != "garter") {
          return {
            scale: [1, 0.8, 1],
          };
        }

        return {
          position: [0, -0.19, 0],
        };
      },
    },
    {
      hasTassels: true,
      parts: [
        {
          id: "tassels",
          name: "Tassels",
          url: "/3d/boxing-shorts/slick-bx/tassels.glb",
        },
      ],
    },
  ],
};

preload_draco(CONTENT);

export default CONTENT;
