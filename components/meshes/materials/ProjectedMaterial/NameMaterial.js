import { useCallback, useEffect, useRef } from "react";
import { RepeatWrapping } from "three";
import { useCanvasSize } from "../../../configurator/context/CanvasSizeContext";
import { useCurrentName } from "../../../configurator/context/CurrentNameContext";
import {
  NAMES_FINISH,
  NAMES_PRINTING,
} from "../../../controls/controls-panel/panels/controls-panel-name/_config";
import ProjectedMaterial from "./ProjectedMaterial";

export default function NameMaterial({ name = {}, ...props }) {
  const { text, printing, finish, freeze, canvas } = name;

  const materialRef = useRef();

  const [[currentName], setCurrentName] = useCurrentName();

  const isEmbroidery = useCallback(() => {
    if (materialRef.current) materialRef.current.needsUpdate = true;

    return printing == NAMES_PRINTING.EMBROIDERY;
  }, [printing]);

  useEffect(() => {
    name.material = materialRef.current;
    if (currentName == name) {
      setCurrentName([name]);
    }
  }, [materialRef]);

  return (
    <ProjectedMaterial
      ref={materialRef}
      transparent={true}
      roughness={0.6}
      metalness={0.5}
      // normalMap={isEmbroidery() ? normalMap : null}
      normalScale={
        isEmbroidery() && finish == NAMES_FINISH.PUFF ? [15, 15] : [1.5, 1.5]
      }
      {...{ freeze }}
      {...props}
    >
      <texture attach="map" image={canvas} needsUpdate={true}></texture>
    </ProjectedMaterial>
  );
}
