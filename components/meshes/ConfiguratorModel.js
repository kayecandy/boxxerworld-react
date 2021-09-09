import { useEffect, useRef } from "react";
import ConfiguratorMesh from "./ConfiguratorMesh";
import { useModelGeometries } from "./useModelGeometries";
import { withSuspense } from "./withSuspense";

function ConfiguratorModel({ model, transforms, children }) {
  const nodes = useModelGeometries(model);
  const modelRef = useRef();

  useEffect(() => {
    window.model = modelRef.current;
  }, [modelRef]);

  return (
    <group ref={modelRef} rotation={[0, 0.7, 0]}>
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
