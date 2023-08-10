import { useCurrentGraphics } from "../../../../configurator/context/CurrentGraphicsContext";
import ControlsPanelGraphicAdd from "./ControlsPanelGraphicAdd";
import ControlsPanelGraphicEdit from "./ControlsPanelGraphicEdit";

export default function ControlsPanelGraphic() {
  const [currentGraphic] = useCurrentGraphics();

  return currentGraphic ? (
    <ControlsPanelGraphicEdit></ControlsPanelGraphicEdit>
  ) : (
    <ControlsPanelGraphicAdd></ControlsPanelGraphicAdd>
  );
}
