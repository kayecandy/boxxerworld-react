import { Button } from "react-bootstrap";
import { useCurrentName } from "../../../../configurator/context/CurrentNameContext";
import { useNames } from "../../../../configurator/context/NamesContext";

import { DEFAULT_NAME } from "./_config.js";

export default function ControlsPanelNameAdd() {
  const [names, setNames] = useNames();
  const [, setCurrentName] = useCurrentName();

  function onAddNameClick() {
    const newName = { ...DEFAULT_NAME };

    setNames([...names, newName]);
    setCurrentName([newName]);
  }

  return (
    <div className="py-4 text-center">
      <div>Select a name from the model</div>
      <div>or</div>
      <div>
        <Button onClick={onAddNameClick}>Add Name</Button>
      </div>
    </div>
  );
}
