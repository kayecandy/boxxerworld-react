import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useNames } from "../../configurator/context/NamesContext";
import ConfiguratorMesh from "../ConfiguratorMesh";
import NameMaterial from "../materials/ProjectedMaterial/NameMaterial";
import { useModelGeometries } from "../useModelGeometries";
import { withSuspense } from "../withSuspense";

function ConfiguratorModel({ model, transforms, children }) {
  const nodes = useModelGeometries(model);
  const modelRef = useRef();
  const { camera, controls } = useThree();
  const [names] = useNames();

  useEffect(() => {
    window.model = modelRef.current;
  }, [modelRef]);

  useEffect(() => {
    window.camera = camera;
    window.controls = controls;
  }, [camera]);

  return (
    <group ref={modelRef} rotation={[0, 0.7, 0]} position={[0, -0.2, 0]}>
      {names.map((name, i) => (
        <NameMaterial key={i} name={name}></NameMaterial>
      ))}

      {nodes &&
        nodes.map((node) => (
          <ConfiguratorMesh
            key={node.id}
            node={node}
            transforms={transforms}
          ></ConfiguratorMesh>
        ))}

      {children}
    </group>
  );
}

export default withSuspense(ConfiguratorModel);
