import { useCurrentName } from "../../../../configurator/context/CurrentNameContext";
import ControlsPanelNameAdd from "./ControlsPanelNameAdd";
import ControlsPanelNameEdit from "./ControlsPanelNameEdit";

export default function ControlsPanelName() {
  const [currentName] = useCurrentName();

  if (currentName) return <ControlsPanelNameEdit></ControlsPanelNameEdit>;

  return <ControlsPanelNameAdd></ControlsPanelNameAdd>;
}
