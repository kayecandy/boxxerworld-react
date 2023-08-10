import { Button } from "react-bootstrap";
import { useCurrentGraphics } from "../../../../configurator/context/CurrentGraphicsContext";
import { useGraphics } from "../../../../configurator/context/GraphicsContext";
import { DEFAULT_GRAPHIC } from "./_config";

export default function ControlsPanelGraphicAdd() {
  const [graphics, setGraphics] = useGraphics();
  const [, setCurrentGraphic] = useCurrentGraphics();

  function onAddGraphicClick() {
    const newGraphic = { ...DEFAULT_GRAPHIC };

    setGraphics([...graphics, newGraphic]);
    setCurrentGraphic([newGraphic]);
  }

  return (
    <div className="py-4 text-center">
      <div>Select a name from the model</div>
      <div>or</div>
      <div>
        <Button onClick={onAddGraphicClick}>Add Graphic</Button>
      </div>
    </div>
  );
}
