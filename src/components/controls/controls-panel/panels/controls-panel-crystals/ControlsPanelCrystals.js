import { Button } from "react-bootstrap";
import { useHasCrystals } from "../../../../configurator/context/HasCrystalsContext";

export default function ControlsPanelCrystals() {

  const [hasCrystals, setHasCrystals] = useHasCrystals();



  function onToggleCrystalsClick() {
    setHasCrystals(!hasCrystals);
  }


  return (
    <div className="py-5">
      <Button onClick={onToggleCrystalsClick}>Toggle Crystals</Button>
    </div>
  );
}
