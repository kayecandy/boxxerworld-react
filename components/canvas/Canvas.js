import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas as CanvasR3F } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useCurrentModel } from "../configurator/context/CurrentModelContext";
import {
  CurrentModelPartContext,
  useCurrentModelPart,
} from "../configurator/context/CurrentModelPartContext";
import ConfiguratorModel from "../meshes/ConfiguratorModel";
import styles from "./Canvas.module.scss";
import _config from "./_config";

export default function Canvas({
  canvas = _config.canvas,
  ambientLight = _config.ambientLight,
  directionalLights = _config.directionalLights,
  orbitControls = _config.orbitControls,
}) {
  const canvasRef = useRef();
  const [dimension, setDimension] = useState({});
  const [dpr, setDpr] = useState(1);

  const [currentModel] = useCurrentModel();

  const ContextBridge = useContextBridge(CurrentModelPartContext);

  useEffect(() => {
    function resize() {
      if (canvasRef.current) {
        setDimension({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });
      }
    }

    window.addEventListener("resize", resize);

    setDpr(window.devicePixelRatio || 2);

    resize();
  }, []);

  return (
    <div
      ref={canvasRef}
      width={dimension.width}
      height={dimension.height}
      className={styles.cndce_canvas}
    >
      <CanvasR3F dpr={dpr} {...canvas} fallback={null}>
        {/* Lights */}
        <hemisphereLight {...ambientLight}></hemisphereLight>
        {directionalLights.map((directionalLight, index) => (
          <directionalLight
            key={index}
            {...directionalLight}
          ></directionalLight>
        ))}
        {/* Controls */}
        <OrbitControls {...orbitControls}></OrbitControls>

        <ContextBridge>
          <ConfiguratorModel model={currentModel.models}></ConfiguratorModel>
        </ContextBridge>
      </CanvasR3F>
    </div>
  );
}
