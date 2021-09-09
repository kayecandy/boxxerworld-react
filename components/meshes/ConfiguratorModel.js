import ConfiguratorMesh from "./ConfiguratorMesh";
import { useModelGeometries } from "./useModelGeometries";
import { withSuspense } from "./withSuspense";

function ConfiguratorModel({ model, children }) {
  const nodes = useModelGeometries(model);

  return (
    <group>
      {nodes &&
        nodes.map((node) => (
          <ConfiguratorMesh key={node.id} node={node}></ConfiguratorMesh>
        ))}

      {children}
    </group>
  );
}

export default withSuspense(ConfiguratorModel);
