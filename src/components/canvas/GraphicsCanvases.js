import { useEffect } from "react";
import { useCurrentGraphics } from "../configurator/context/CurrentGraphicsContext";
import { useCurrentName } from "../configurator/context/CurrentNameContext";
import { useGraphics } from "../configurator/context/GraphicsContext";
import { EDIT_MODE } from "../controls/controls-panel/panels/controls-panel-name/_config";
import GraphicsCanvas from "./GraphicCanvas";

export default function GraphicCanvases() {
  const [graphics] = useGraphics();
  const [[currentGraphics] = []] = useCurrentGraphics();

  // TODO: Handle multiple name canvases z-indecies

  useEffect(() => {
    if (currentGraphics && currentGraphics.editMode) {
      const { material } = currentGraphics;

      switch (currentGraphics.editMode) {
        case EDIT_MODE.EDIT_2D:
          material.opacity = 0;
          break;
        case EDIT_MODE.EDIT_3D:
          material.opacity = 1;
      }

      console.log(material);
    }
  }, [currentGraphics?.editMode]);

  return (
    <div
      id="graphics-canvases"
      style={{
        position: "absolute",
        zIndex: 1000,
        display:
          currentGraphics && currentGraphics.editMode == EDIT_MODE.EDIT_2D
            ? "block"
            : "none",
      }}
    >
      {graphics.map((graphic, i) => (
        <GraphicsCanvas graphic={graphic} key={i}></GraphicsCanvas>
      ))}
    </div>
  );
}
