import { OrbitControls, useContextBridge } from "@react-three/drei";
import { Canvas as CanvasR3F } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CurrentLegStyleContext } from "../configurator/context/CurrentLegStyleContext";
import { useCurrentModel } from "../configurator/context/CurrentModelContext";
import { CurrentModelPartContext } from "../configurator/context/CurrentModelPartContext";
import { CurrentNameContext } from "../configurator/context/CurrentNameContext";
import { CurrentShortSizeContext } from "../configurator/context/CurrentShortSizeContext";
import { HasTasselsContext } from "../configurator/context/HasTasselsContext";
import { NamesContext } from "../configurator/context/NamesContext";
import BoxingShortsModel from "../meshes/models/BoxingShortsModel";
import styles from "./Canvas.module.scss";
import _config from "./_config";

export default function Canvas({
  canvas = _config.canvas,
  ambientLight = _config.ambientLight,
  directionalLights = _config.directionalLights,
  orbitControls = _config.orbitControls,
}) {
  const canvasRef = useRef();
  const controlRef = useRef();
  const [dimension, setDimension] = useState({});
  const [dpr, setDpr] = useState(1);

  const [currentModel] = useCurrentModel();

  const router = useRouter();

  const ContextBridge = useContextBridge(
    NamesContext,
    CurrentNameContext,
    CurrentModelPartContext,
    CurrentLegStyleContext,
    CurrentShortSizeContext,
    HasTasselsContext
  );

  useEffect(() => {
    window.router = router;
  }, [router]);

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

  useEffect(() => {
    window.control = controlRef.current;
    console.log(controlRef);
  }, [controlRef]);

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
        <OrbitControls
          makeDefault
          ref={controlRef}
          {...orbitControls}
        ></OrbitControls>

        {currentModel && (
          <ContextBridge>
            <BoxingShortsModel model={currentModel}></BoxingShortsModel>
          </ContextBridge>
        )}
      </CanvasR3F>
    </div>
  );
}
