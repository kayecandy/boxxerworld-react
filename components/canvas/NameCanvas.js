import { useEffect, useRef } from "react";

import { fabric } from "fabric";

import { useCanvasSize } from "../configurator/context/CanvasSizeContext";
import { useCurrentName } from "../configurator/context/CurrentNameContext";
import { EDIT_MODE } from "../controls/controls-panel/panels/controls-panel-name/_config";
import { useFabricCanvas } from "./hooks/useFabricCanvas";

export default function NameCanvas({ name }) {
  const { text = "Enter name..." } = name;

  const fabricTextRef = useRef();

  const [dimension] = useCanvasSize();

  const [arrCurrentName] = useCurrentName();
  const [currentName] = arrCurrentName;

  const { FabricCanvas, fabricRef, renderFabric } = useFabricCanvas({
    fabricObject: name,
    contextObject: currentName,
  });

  /**
   * Initialize fabric.Text object
   */
  useEffect(() => {
    if (fabricRef.current && !fabricTextRef.current) {
      const { width, height } = dimension;

      const fText = new fabric.Text(text, {
        left: width / 2,
        top: height / 2,
        originX: "center",
        originY: "center",
        textAlign: "center",
      });

      fabricRef.current.add(fText);

      fabricTextRef.current = fText;
    }
  }, [fabricRef]);

  /**
   * Update FabricJS canvas on text update
   */
  useEffect(() => {
    if (fabricTextRef.current && name == currentName) {
      fabricTextRef.current.set("text", text);
      renderFabric();
    }
  }, [arrCurrentName]);

  return <FabricCanvas></FabricCanvas>;
}
