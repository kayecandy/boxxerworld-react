const CONTENT = {
  models: [
    {
      id: "body-fr",
      name: "Center Panel",
      url: "3d/boxing-shorts/slick-bx/body-fr.glb",
      material: {
        color: "#eeeeee",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
    },
    {
      id: "back-top",
      name: "Small Panel",
      url: "3d/boxing-shorts/slick-bx/back-top.glb",
      material: {
        color: "#eeeeee",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
    },
    {
      id: "garter",
      name: "Waistband",
      url: "3d/boxing-shorts/slick-bx/garter.glb",
      material: {
        color: "#eeeeee",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
    },
    {
      id: "stitching",
      name: "Trim",
      url: "3d/boxing-shorts/slick-bx/stitching.glb",
      material: {
        color: "#eeeeee",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
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
          url: "3d/boxing-shorts/slick-bx/back-bottom_side-slit.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "3d/boxing-shorts/slick-bx/stitching-bottom_side-slit.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
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
          url: "3d/boxing-shorts/slick-bx/back-bottom_curve.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
        },

        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "3d/boxing-shorts/slick-bx/stitching-bottom_curve.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
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
          url: "3d/boxing-shorts/slick-bx/back-bottom_side-slit.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "3d/boxing-shorts/slick-bx/stitching-bottom_side-slit.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
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
          url: "3d/boxing-shorts/slick-bx/back-bottom_curve.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
        },
        {
          id: "stitching-bottom",
          name: "Leg Trim",
          url: "3d/boxing-shorts/slick-bx/stitching-bottom_curve.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
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
          url: "3d/boxing-shorts/slick-bx/tassels.glb",
          material: {
            color: "#eeeeee",
            normalScale: [-0.25, 0.25],
            roughness: 0.6,
            metalness: 0,
            transparent: false,
            emissive: "#000000",
            emissiveIntensity: 1,
          },
        },
      ],
    },
  ],
};

export default CONTENT;
