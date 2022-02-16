import { useRef, useEffect, useCallback } from "react";
import { fabric } from "fabric";
import { useCanvasSize } from "../configurator/context/CanvasSizeContext";
import { useCurrentName } from "../configurator/context/CurrentNameContext";
import { EDIT_MODE } from "../controls/controls-panel/panels/controls-panel-name/_config";

export default function NameCanvas({ name }) {
  const { text = "Enter name...", material } = name;
  const [dimension] = useCanvasSize();
  /**
   * @type {import("react").MutableRefObject<HTMLCanvasElement>}
   */
  const canvasRef = useRef();
  /**
   * @type {import("react").MutableRefObject<fabric.Canvas>}
   */
  const fabricRef = useRef();
  const fabricTextRef = useRef();

  const [arrCurrentName] = useCurrentName();
  const [currentName] = arrCurrentName;

  const renderFabric = () => {
    if (fabricRef.current) {
      fabricRef.current.renderAll();

      if (material && material.map) material.map.needsUpdate = true;
    }
  };


  /**
   * Initialize FabricJS
   */
  useEffect(() => {
    if (canvasRef.current && !fabricRef.current) {
      const fCanvas = new fabric.Canvas(canvasRef.current);
      const { width, height } = dimension;

      const fText = new fabric.Text(text, {
        left: width/2,
        top: height/2,
        textAlign: 'center'
      });
      fCanvas.add(fText);

      fabricTextRef.current = fText;
      fabricRef.current = fCanvas;
      name.canvas = canvasRef.current;
      window.fabric = fCanvas;
    }
  }, [canvasRef]);

  /**
   * Make sure the dimension of FabricJS canvas gets updated
   * on screen resize
   */
  useEffect(() => {
    if (fabricRef.current) {
      const { width, height } = dimension;

      fabricRef.current.setDimensions({
        width,
        height,
      });

      renderFabric();
    }
  }, [dimension, fabricRef]);

  /**
   * Update FabricJS canvas on text update
   */
  useEffect(() => {
    if (name == currentName) {
      fabricTextRef.current.set("text", text);
      renderFabric();
    }
  }, [arrCurrentName]);

  /**
   * Update the selection control on edit mode update
   */
  useEffect(()=>{
    if(currentName && currentName.editMode && fabricRef.current){
      if(currentName.editMode == EDIT_MODE.EDIT_3D){
        fabricRef.current.discardActiveObject();

        renderFabric();
      }
    }

  }, [currentName?.editMode, fabricRef])

  return <canvas ref={canvasRef}></canvas>;
}
