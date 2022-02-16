import { useCallback, useEffect, useMemo, useRef } from "react";
import { MeshStandardMaterial } from "three";
import { useCanvasSize } from "../../configurator/context/CanvasSizeContext";
import { EDIT_MODE } from "../../controls/controls-panel/panels/controls-panel-name/_config";

/**
 * @typedef {Object} FabricObject
 * @property {MeshStandardMaterial} [material]
 * @property {HTMLCanvasElement} [canvas]
 */

/**
 * @typedef {Object} ContextObject
 * @property {EDIT_MODE} [editMode]
 */

/**
 * @param {Object} param
 * @param {FabricObject} param.fabricObject
 * @param {ContextObject} param.contextObject
 */
export const useFabricCanvas = ({ fabricObject, contextObject }) => {
  const { material } = fabricObject;

  /**
   * @type {import("react").MutableRefObject<HTMLCanvasElement>}
   */
  const canvasRef = useRef();

  /**
   * @type {import("react").MutableRefObject<fabric.Canvas>}
   */
  const fabricRef = useRef();

  const [dimension] = useCanvasSize();

  const renderFabric = useCallback(() => {
    if (fabricRef.current) {
      fabricRef.current.renderAll();

      if (material && material.map) material.map.needsUpdate = true;
    }
  }, [fabricRef, material]);

  /**
   * Initialize FabricJS
   */
  useEffect(() => {
    console.log(canvasRef, fabricRef, fabricObject);
    if (canvasRef.current && !fabricRef.current) {
      const fCanvas = new fabric.Canvas(canvasRef.current);

      fabricRef.current = fCanvas;
      fabricObject.canvas = canvasRef.current;
    }
  }, [canvasRef, fabricRef]);

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
   * Ensure fabric selection controls do not get rendered in
   * 3D material
   */
  useEffect(() => {
    if (contextObject && contextObject.editMode && fabricRef.current) {
      if (contextObject.editMode === EDIT_MODE.EDIT_3D) {
        fabricRef.current.discardActiveObject();

        renderFabric();
      }
    }
  }, [contextObject?.editMode, fabricRef]);

  const FabricCanvas = useRef((props) => {
    return <canvas ref={canvasRef} {...props}></canvas>;
  });

  return {
    renderFabric,
    canvasRef,
    fabricRef,
    FabricCanvas: FabricCanvas.current,
  };
};
