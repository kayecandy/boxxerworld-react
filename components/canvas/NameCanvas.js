import { useRef, useEffect, useCallback } from "react";
import { fabric } from "fabric";
import { useCanvasSize } from "../configurator/context/CanvasSizeContext";
import { useCurrentName } from "../configurator/context/CurrentNameContext";

export default function NameCanvas({ name }) {
  const { text = "Enter name...", material } = name;
  const [dimension] = useCanvasSize();
  const canvasRef = useRef();
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

  const onNameMoving = (e) => {
    // renderFabric();
  };

  /**
   * Initialize FabricJS
   */
  useEffect(() => {
    if (canvasRef.current && !fabricRef.current) {
      const fCanvas = new fabric.Canvas(canvasRef.current);

      const fText = new fabric.Text(text, {
        left: 200,
        top: 200,
      });
      fCanvas.add(fText);

      fabricTextRef.current = fText;
      fabricRef.current = fCanvas;
      name.canvas = canvasRef.current;
      window.fabric = fCanvas;
    }
  }, [canvasRef]);

  useEffect(() => {
    if (fabricRef.current) {
      fabricRef.current.on("object:moving", onNameMoving);
    }
  }, [fabricRef, material]);

  useEffect(() => {
    fabricRef.current.on("before:transform", (e) => {
      console.log(e);
    });
  }, [fabricRef]);

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

  return <canvas ref={canvasRef}></canvas>;
}
