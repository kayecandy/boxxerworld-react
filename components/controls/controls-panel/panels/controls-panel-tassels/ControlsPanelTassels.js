import { useHasTassels } from "../../../../configurator/context/HasTasselsContext";

import { Button } from "react-bootstrap";

export default function ControlsPanelTassels() {
  const [hasTassels, setHasTassels] = useHasTassels();

  function onToggleTasselsClick() {
    setHasTassels(!hasTassels);
  }

  return (
    <div className="py-5">
      <Button onClick={onToggleTasselsClick}>Toggle Tassels</Button>
    </div>
  );
}
