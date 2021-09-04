import { Suspense } from "react";
import ConfiguratorMesh from "./ConfiguratorMesh";
import { useModelGeometries } from "./useModelGeometries";
import { withSuspense } from "./withSuspense";

function ConfiguratorModel({ model }) {
  const nodes = useModelGeometries(model);

  return (
    <group>
      {nodes &&
        nodes.map((node, index) => (
          <ConfiguratorMesh key={node.id} node={node}></ConfiguratorMesh>
        ))}
    </group>
  );
}

export default withSuspense(ConfiguratorModel);
