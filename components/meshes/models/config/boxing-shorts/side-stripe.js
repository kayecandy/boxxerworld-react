import { preload_draco } from "../_preload";
import { tasselMaterial } from "./_tasselMaterial";

const partsSideSlit = [
  {
    id: "stripe",
    name: "Stripe Material",
    url: "/3d/boxing-shorts/side-stripe/stripe_side-slit.glb",
    hasTexture: true,
  },
  {
    id: "stitching-bottom",
    name: "Leg Trim",
    url: "/3d/boxing-shorts/side-stripe/stitching-bottom_side-slit.glb",
    hasTexture: true,
  },
];

const partsCurve = [
  {
    id: "stripe",
    name: "Stripe Material",
    url: "/3d/boxing-shorts/side-stripe/stripe_curve.glb",
    hasTexture: true,
  },
  {
    id: "stitching-bottom",
    name: "Leg Trim",
    url: "/3d/boxing-shorts/side-stripe/stitching-bottom_curve.glb",
    hasTexture: true,
  },
];

const transformRetro = (node) => {
  if (node.id != "waist" && node.id != "waist-logo") {
    return {
      scale: [1, 0.8, 1],
    };
  }

  return {
    position: [0, -0.252, 0],
  };
};

const CONTENT = {
  name: "Side Stripe BX",
  subtitle: "Custom Fightwear Short",

  preview: "url(/3d/boxing-shorts/side-stripe/preview.webp)",
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
      url: "/3d/boxing-shorts/waistband/waist.glb",
      hasTexture: true,
    },
    {
      id: "waist-logo",
      name: "Waistband Logo",
      url: "/3d/boxing-shorts/waistband/waist-logo.glb",
      hasTexture: true,
    },
    {
      id: "body",
      name: "Main Colour",
      url: "/3d/boxing-shorts/side-stripe/body.glb",
      hasTexture: true,
    },
    {
      id: "stitching",
      name: "Vertical Trim",
      url: "/3d/boxing-shorts/side-stripe/stitching.glb",
      hasTexture: true,
    },
  ],
  variations: [
    {
      legCut: "side-slit",
      size: "standard",
      parts: partsSideSlit,
    },
    {
      legCut: "curve",
      size: "standard",
      parts: partsCurve,
    },
    {
      legCut: "side-slit",
      size: "retro",
      parts: partsSideSlit,
      transforms: transformRetro,
    },
    {
      legCut: "curve",
      size: "retro",
      parts: partsCurve,
      transforms: transformRetro,
    },
    {
      hasTassels: true,
      parts: [
        {
          id: "tassels-side",
          name: "Tassels",
          url: "/3d/boxing-shorts/side-stripe/tassels.glb",
          material: tasselMaterial,
          meshProps: {
            renderOrder: 1,
          },
        },
      ],
    },
  ],
};

preload_draco(CONTENT);

export default CONTENT;
