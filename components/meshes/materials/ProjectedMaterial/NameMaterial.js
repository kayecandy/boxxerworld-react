import { useCallback, useEffect, useRef } from "react";
import { RepeatWrapping } from "three";
import {
  NAMES_FINISH,
  NAMES_PRINTING,
} from "../../../controls/controls-panel/panels/controls-panel-name/_config";
import ProjectedMaterial from "./ProjectedMaterial";

export default function NameMaterial({
  map = "/test.png",
  normalMap = "/test-normal.png",
  name = {},
  texture = {
    repeat: { x: 5.5, y: 1 },
    wrapS: RepeatWrapping,
    wrapT: RepeatWrapping,
  },
  ...props
}) {
  const { text, printing, finish, freeze } = name;

  const materialRef = useRef();

  const isEmbroidery = useCallback(() => {
    if (materialRef.current) materialRef.current.needsUpdate = true;

    return printing == NAMES_PRINTING.EMBROIDERY;
  }, [printing]);

  useEffect(() => {
    name.material = materialRef.current;
  }, [materialRef]);

  return (
    <ProjectedMaterial
      ref={materialRef}
      transparent={true}
      roughness={0.6}
      metalness={0.5}
      normalMap={isEmbroidery() ? normalMap : null}
      normalScale={
        isEmbroidery() && finish == NAMES_FINISH.PUFF ? [15, 15] : [1.5, 1.5]
      }
      {...{ map, texture, freeze }}
      {...props}
    ></ProjectedMaterial>
  );
}
