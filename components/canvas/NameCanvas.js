import { useRef, useEffect } from "react";
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

  useEffect(() => {
    if (canvasRef.current) {
      const fCanvas = new fabric.Canvas(canvasRef.current);

      const fText = new fabric.Text(text, {
        left: 200,
        top: 200,
      });
      fCanvas.add(fText);

      fabricTextRef.current = fText;
      fabricRef.current = fCanvas;
      name.canvas = canvasRef.current;
    }
  }, [canvasRef]);

  useEffect(() => {
    if (name == currentName) {
      fabricTextRef.current.set("text", text);
      fabricRef.current.renderAll();

      if (material && material.map) material.map.needsUpdate = true;
    }
  }, [arrCurrentName]);

  return (
    <canvas
      ref={canvasRef}
      width={dimension.width}
      height={dimension.height}
    ></canvas>
  );
}
