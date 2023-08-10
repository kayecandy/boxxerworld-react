import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { useFabricCanvas } from "./hooks/useFabricCanvas";
import { useCurrentGraphics } from "../configurator/context/CurrentGraphicsContext";
import { useCanvasSize } from "../configurator/context/CanvasSizeContext";

export default function GraphicsCanvas({ graphic }) {
  const [[currentGraphic]] = useCurrentGraphics();

  const [dimension] = useCanvasSize();

  const { FabricCanvas, fabricRef, canvasRef, renderFabric } = useFabricCanvas({
    fabricObject: graphic,
    contextObject: currentGraphic,
  });

  const fImageRef = useRef();

  /**
   * Initialize fabric object
   */
  useEffect(() => {
    if (fabricRef.current && !fImageRef.current) {
      const { width, height } = dimension;

      fImageRef.current = "loading";

      fabric.Image.fromURL(
        "/sample.jpeg",
        function (oImg) {
          fabricRef.current.add(oImg);
          fImageRef.current = oImg;
        },
        {
          left: width / 2,
          top: height / 2,
          originX: "center",
          originY: "center",
          width: 100,
          height: 100,
        }
      );
    }
  }, [fabricRef]);

  return <FabricCanvas></FabricCanvas>;
}
