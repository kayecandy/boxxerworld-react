import { RepeatWrapping, Vector2 } from "three";

const CONFIG = {
  categories: [
    {
      id: "whites",
      name: "Whites",
      color: "#ffffff",
    },
    {
      id: "blacks",
      name: "Blacks",
      color: "#000000",
    },
    {
      id: "golds-yellows",
      name: "Golds/Yellows",
      color: "rgb(204, 172, 0)",
    },
    {
      id: "reds",
      name: "Reds",
      color: "rgb(183, 0, 0)",
    },
  ],
  subcategories: [
    {
      id: "satin",
      name: "Satin",
    },
    {
      id: "sparkly",
      name: "Sparkly Fabrics",
    },
    {
      id: "leatherette",
      name: "Leatherette",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      categories: ["whites"],
      subcategories: ["satin"],
      material: {
        color: "#eeeeee",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
      style: {
        backgroundColor: "#eeeeee",
        backgroundImage: "url(materials/white-satin.webp)",
      },
    },
    {
      id: "black",
      name: "Black",
      categories: ["blacks"],
      subcategories: ["satin"],
      material: {
        color: "#3e3e3e",
        normalScale: [-0.25, 0.25],
        roughness: 0.45,
        metalness: 0.4,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },

      style: {
        backgroundColor: "#000000",
        backgroundImage: "url(materials/black-satin.webp)",
      },
    },
    {
      id: "red",
      name: "Red",
      categories: ["reds"],
      subcategories: ["satin"],
      material: {
        color: "rgb(183, 0, 0)",
        normalScale: [-0.25, 0.25],
        roughness: 0.6,
        metalness: 0,
        transparent: false,
        emissive: "#000000",
        emissiveIntensity: 1,
      },
      style: {
        backgroundColor: "rgb(183, 0, 0)",
        backgroundImage: "url(materials/red-satin.webp)",
      },
    },
    {
      id: "white-quilted",
      name: "White Quilted",
      categories: ["whites"],
      subcategories: ["satin"],
      material: {
        color: "#ffffff",
        roughness: 0.6,
        metalness: 0.1,
        transparent: false,
        normalScale: [1.25, 1.75],
        emissive: "#000000",
        emissiveIntensity: 1,

        textures: {
          maps: {
            normalMap: "materials/quilted_normal.jpg",
          },
        },
      },
      style: {
        backgroundColor: "#ffffff",
        backgroundImage: "url(materials/white-quilted.jpg)",
      },
    },
    {
      id: "black-quilted",
      name: "Black Quilted",
      categories: ["blacks"],
      subcategories: ["satin"],
      material: {
        color: "#3e3e3e",
        roughness: 0.5,
        metalness: 1.5,
        transparent: false,
        normalScale: [2, 2],
        emissiveIntensity: 0.3,

        textures: {
          maps: {
            normalMap: "materials/quilted_normal.jpg",
          },
        },
      },
      style: {
        backgroundColor: "#000000",
        backgroundImage: "url(materials/black-quilted.jpg)",
      },
    },
    {
      id: "red-sequin",
      name: "Red Sequins",
      categories: ["reds"],
      subcategories: ["sparkly"],
      material: {
        color: "#e20f0f",
        roughness: 0.3,
        metalness: 0.1,
        transparent: false,

        normalScale: [-0.8, -0.8],
        emissiveIntensity: 0.2,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(3, 3),
          maps: {
            normalMap: "materials/sequins2_normal.jpg",
            emissiveMap: "materials/sequins2_light.jpg",
          },
        },
      },
      style: {
        backgroundColor: "rgb(183, 0, 0)",
        backgroundImage: "url(materials/red-sequins.jpg)",
      },
    },
  ],
};

export default CONFIG;
