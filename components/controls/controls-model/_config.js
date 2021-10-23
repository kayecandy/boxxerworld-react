import { default as side_stripe } from "/components/meshes/models/config/boxing-shorts/side-stripe";
import { default as classic } from "/components/meshes/models/config/boxing-shorts/classic";
import { default as slick } from "/components/meshes/models/config/boxing-shorts/slick";
import { default as classic_robe } from "/components/meshes/models/config/robes/classic";
import { default as playboy } from "/components/meshes/models/config/robes/playboy";

import BoxingShortsModel from "../../meshes/models/BoxingShortsModel";
import RobesModel from "../../meshes/models/RobesModel";

export const MODELS = {
  "boxing-shorts": {
    name: "Boxing Shorts",
    models: {
      classic,
      side_stripe,
      slick,
    },
    Mesh: BoxingShortsModel,
  },
  robes: {
    name: "Robes",
    models: {
      classic: classic_robe,
      playboy,
    },
    Mesh: RobesModel,
  },
};
