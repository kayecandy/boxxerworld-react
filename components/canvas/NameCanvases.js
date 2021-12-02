import { useCurrentName } from "../configurator/context/CurrentNameContext";
import { useNames } from "../configurator/context/NamesContext";
import { EDIT_MODE } from "../controls/controls-panel/panels/controls-panel-name/_config";
import NameCanvas from "./NameCanvas";

export default function NameCanvases() {
  const [names] = useNames();
  const [[currentName] = []] = useCurrentName();

  // TODO: Handle multiple name canvasesd z-indices

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        display:
          currentName && currentName.editMode == EDIT_MODE.EDIT_2D
            ? "block"
            : "none",
      }}
    >
      {names.map((name, i) => (
        <NameCanvas key={i} name={name}></NameCanvas>
      ))}
    </div>
  );
}
