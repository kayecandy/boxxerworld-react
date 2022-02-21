import { NormalMapGenerator } from "normalmap-online";
import { useCallback, useEffect, useRef, useState } from "react";
import { Texture } from "three";
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

  /**
   * @typedef {typeof useState<HTMLImageElement>} UseNormalMap
   * @type {ReturnType<UseNormalMap>}
   */
  const [normalMap, setNormalMap] = useState();

  /**
   * @typedef  {typeof useRef<NormalMapGenerator>} NormalMapGeneratorRef
   * @type {ReturnType<NormalMapGeneratorRef>}
   */
  const normalMapGenerator = useRef();

  const [currentNameWrapper, setCurrentName] = useCurrentName();
  const [currentName] = currentNameWrapper;

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

  useEffect(() => {
    if (!normalMapGenerator.current) {
      normalMapGenerator.current = new NormalMapGenerator();
    }

    if (canvas) {
      const t = normalMapGenerator.current.generateFromImage(canvas, {
        strength: 1,
        blur: 7,
        level: 5,
      });
      setNormalMap(t);

      // console.log(t.toDataURL());
    }
  }, [canvas, currentNameWrapper]);

  return (
    <ProjectedMaterial
      ref={materialRef}
      transparent={true}
      shininess={1}
      reflectivity={0.5}
      displacementScale={10}
      normalScale={
        isEmbroidery() && finish == NAMES_FINISH.PUFF ? [30, 30] : [1.5, 1.5]
      }
      {...{ freeze }}
      {...props}
    >
      {isEmbroidery() && (
        <texture
          attach="normalMap"
          image={normalMap}
          needsUpdate={true}
        ></texture>
      )}

      <texture attach="map" image={canvas} needsUpdate={true}></texture>
    </ProjectedMaterial>
  );
}
