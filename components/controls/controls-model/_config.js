import { default as side_stripe } from "/components/meshes/models/config/boxing-shorts/side-stripe";
import { default as classic } from "/components/meshes/models/config/boxing-shorts/classic";
import { default as slick } from "/components/meshes/models/config/boxing-shorts/slick";

export const MODELS = {
  "boxing-shorts": {
    name: "Boxing Shorts",
    models: {
      classic,
      side_stripe,
      slick,
    },
  },
  robes: {
    name: "Robes",
    models: {},
  },
};
