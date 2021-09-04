import LogoStyles from "/public/icons/control-styles.svg";
import LogoText from "/public/icons/control-text.svg";
import LogoGraphic from "/public/icons/control-graphic.svg";
import LogoFlag from "/public/icons/control-flag.svg";
import LogoTassels from "/public/icons/control-tassels.svg";
import LogoCrystals from "/public/icons/control-crystals.svg";

import ControlsPanelStyle from "./panels/controls-panel-style/ControlsPanelStyle";
import ControlsPanelName from "./panels/controls-panel-name/ControlsPanelName";
import ControlsPanelGraphic from "./panels/controls-panel-graphic/ControlsPanelGraphic";
import ControlsPanelFlag from "./panels/controls-panel-flag/ControlsPanelFlag";
import ControlsPanelTassels from "./panels/controls-panel-tassels/ControlsPanelTassels";
import ControlsPanelCrystals from "./panels/controls-panel-crystals/ControlsPanelCrystals";

const CONTENT = {
  controlsActive: "styles",
  controls: [
    {
      id: "styles",
      title: "Styles",
      icon: <LogoStyles></LogoStyles>,
      content: <ControlsPanelStyle></ControlsPanelStyle>,
    },
    {
      id: "name",
      title: "Add Name",
      icon: <LogoText></LogoText>,
      content: <ControlsPanelName></ControlsPanelName>,
    },
    {
      id: "graphic",
      title: "Graphic",
      icon: <LogoGraphic></LogoGraphic>,
      content: <ControlsPanelGraphic></ControlsPanelGraphic>,
    },
    {
      id: "flag",
      title: "Flag",
      icon: <LogoFlag></LogoFlag>,
      content: <ControlsPanelFlag></ControlsPanelFlag>,
    },
    {
      id: "tassels",
      title: "Tassels",
      icon: <LogoTassels></LogoTassels>,
      content: <ControlsPanelTassels></ControlsPanelTassels>,
    },
    {
      id: "crystals",
      title: "Crystals",
      icon: <LogoCrystals></LogoCrystals>,
      content: <ControlsPanelCrystals></ControlsPanelCrystals>,
    },
  ],
};

export default CONTENT;
