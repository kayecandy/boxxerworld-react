import { useEffect, useRef } from "react";
import { useCurrentGraphics } from "../../../configurator/context/CurrentGraphicsContext";
import ProjectedMaterial from "./ProjectedMaterial";

export default function GraphicsMaterial({ graphic = {}, ...props }) {
  const { canvas, freeze } = graphic;

  const materialRef = useRef();

  const [[currentGraphic], setCurrentGraphic] = useCurrentGraphics();

  useEffect(() => {
    graphic.material = materialRef.current;

    if (currentGraphic == graphic) {
      setCurrentGraphic([graphic]);
    }
  }, [materialRef]);

  return (
    <ProjectedMaterial
      ref={materialRef}
      transparent={true}
      {...{ freeze }}
      {...props}
    >
      <texture attach="map" image={canvas} needsUpdate={true}></texture>
    </ProjectedMaterial>
  );
}
