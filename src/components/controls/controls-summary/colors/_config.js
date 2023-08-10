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
      id: "silver-greys",
      name: "Silvers/Greys",
      color: "#999999",
    },
    {
      id: "reds",
      name: "Reds",
      color: "rgb(183, 0, 0)",
    },
    {
      id: "blues",
      name: "Blues",
      color: "#0000CC",
    },
    {
      id: "greens",
      name: "Greens",
      color: "#007300",
    },
    {
      id: "oranges",
      name: "Oranges",
      color: "#ffa500",
    },
    {
      id: "purples",
      name: "Purples",
      color: "#8C198C",
    },

    {
      id: "pinks",
      name: "Pinks",
      color: "#f00c93",
    },

    {
      id: "browns",
      name: "Browns",
      color: "#654321",
    },

    {
      id: "prints",
      name: "Prints",
      color: "#000000",
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
    {
      id: "high-shine",
      name: "High Shine",
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
        roughness: 0.55,
        metalness: -0.3,
      },
      style: {
        backgroundColor: "#eeeeee",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/white-satin.webp)",
      },
    },
    {
      id: "black",
      name: "Black",
      categories: ["blacks"],
      subcategories: ["satin"],
      material: {
        color: "#111111",
        roughness: 0.27,
        metalness: 0.5,
      },

      style: {
        backgroundColor: "#000000",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/black-satin.webp)",
      },
    },
    {
      id: "gold-true",
      name: "Gold True",
      categories: ["golds-yellows"],
      subcategories: ["satin"],
      material: {
        color: "#e9b642",
        roughness: 0.3,
        metalness: 0.03,
      },

      style: {
        backgroundColor: "#CCAC00",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/gold-true-satin.webp)",
      },
    },
    {
      id: "red",
      name: "Red",
      categories: ["reds"],
      subcategories: ["satin"],
      material: {
        color: "rgb(183, 0, 0)",
        roughness: 0.4,
        metalness: -0.1,
      },
      style: {
        backgroundColor: "rgb(183, 0, 0)",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/red-satin.webp)",
      },
    },
    {
      id: "grey",
      name: "Grey",
      categories: ["silver-greys"],
      subcategories: ["satin"],
      material: {
        color: "#424242",
        roughness: 0.4,
        metalness: -0.1,
      },
      style: {
        backgroundColor: "#424242",
      },
    },
    {
      id: "blue",
      name: "Blue",
      categories: ["blues"],
      subcategories: ["satin"],
      material: {
        color: "#344ca5",
        roughness: 0.4,
        metalness: 0.1,
      },
      style: {
        backgroundColor: "#344ca5",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/blue-satin.webp)",
      },
    },
    {
      id: "irish-green",
      name: "Irish Green",
      categories: ["greens"],
      subcategories: ["satin"],
      material: {
        color: "#3eb240",
        roughness: 0.4,
        metalness: 0.1,
      },
      style: {
        backgroundColor: "#3eb240",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/irish-green-satin.webp)",
      },
    },
    {
      id: "orange",
      name: "Orange",
      categories: ["oranges"],
      subcategories: ["satin"],
      material: {
        color: "#ff8137",
        roughness: 0.4,
        metalness: 0.1,
      },
      style: {
        backgroundColor: "#ED6319",
      },
    },
    {
      id: "pink",
      name: "Pink",
      categories: ["pinks"],
      subcategories: ["satin"],
      material: {
        color: "#ff4579",
        roughness: 0.4,
        metalness: 0.1,
      },
      style: {
        backgroundColor: "#ff4579",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/pink-satin.webp)",
      },
    },
    {
      id: "purple-light",
      name: "Purple(Light)",
      categories: ["purples"],
      subcategories: ["satin"],
      material: {
        color: "#b40090",
        roughness: 0.4,
        metalness: 0.1,
      },
      style: {
        backgroundColor: "#b40090",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/purple-light-satin.webp)",
      },
    },
    {
      id: "leopard",
      name: "Leopard",
      categories: ["browns", "prints"],
      subcategories: ["high-shine"],
      material: {
        color: "#fff",
        roughness: 0.35,
        metalness: 0.1,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(0.5, 0.5),
          maps: {
            map: "https://kayecandy.github.io/cdn/boxxerworld/materials/leopard-high-shine.webp",
          },
        },
      },
      style: {
        backgroundColor: "#434124",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/leopard-high-shine.webp)",
      },
    },
    {
      id: "white-quilted",
      name: "White Quilted",
      categories: ["whites"],
      subcategories: ["satin"],
      material: {
        color: "#ffffff",
        roughness: 0.5,
        metalness: -0.25,
        normalScale: [1.25, 1.75],

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          maps: {
            normalMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/quilted_normal.jpg",
          },
        },
      },
      style: {
        backgroundColor: "#ffffff",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/white-quilted.jpg)",
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
        normalScale: [2, 2],
        emissiveIntensity: 0.3,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          maps: {
            normalMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/quilted_normal.jpg",
          },
        },
      },
      style: {
        backgroundColor: "#000000",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/black-quilted.jpg)",
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

        normalScale: [-0.8, -0.8],
        emissiveIntensity: 0.2,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(3, 3),
          maps: {
            normalMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins2_normal.jpg",
            emissiveMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins2_light.jpg",
          },
        },
      },
      style: {
        backgroundColor: "rgb(183, 0, 0)",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/red-sequins.jpg)",
      },
    },
    {
      id: "white-sequin",
      name: "White Sequins",
      categories: ["whites"],
      subcategories: ["sparkly"],
      material: {
        color: "#ffffff",
        roughness: 0.2,
        metalness: 0,

        normalScale: [-0.7, -0.7],
        emissiveIntensity: 0.2,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(4, 4),
          maps: {
            normalMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins2_normal.jpg",
            emissiveMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins2_light.jpg",
          },
        },
      },
      style: {
        backgroundColor: "#ffffff",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/white-sequins.webp)",
      },
    },
    {
      id: "black-gold-reversible",
      name: "Black Gold Reversible",
      categories: ["blacks", "golds-yellows"],
      subcategories: ["sparkly"],
      material: {
        // color: "#dfbb3b",
        roughness: 0.27,
        metalness: 0.2,

        normalScale: [0.6, 0.6],
        emissiveIntensity: 0.2,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(1.2, 1.2),
          maps: {
            normalMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins-reversed-normal.jpg",
            emissiveMap: "https://kayecandy.github.io/cdn/boxxerworld/materials/sequins-reversed-light.jpg",
            map: "https://kayecandy.github.io/cdn/boxxerworld/materials/black-gold-reversible-map.webp",
          },
        },
      },
      style: {
        backgroundColor: "#dfbb3b",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/black-gold-reversible.webp)",
      },
    },
    {
      id: "baroque",
      name: "Baroque (Blk Yellow Gld)",
      categories: ["prints"],
      subcategories: ["satin"],
      material: {
        color: "#fff",
        roughness: 0.35,
        metalness: 0.1,

        textures: {
          wrapS: RepeatWrapping,
          wrapT: RepeatWrapping,
          repeat: new Vector2(3, 3),
          maps: {
            map: "https://kayecandy.github.io/cdn/boxxerworld/materials/baroque.jpg",
          },
        },
      },
      style: {
        backgroundColor: "rgb(0, 0, 0)",
        backgroundImage: "url(https://kayecandy.github.io/cdn/boxxerworld/materials/baroque.jpg)",
      },
    },
  ],
};

export default CONFIG;
