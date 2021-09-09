import { useEffect, useRef } from "react";
import { useCurrentLegStyle } from "../configurator/context/CurrentLegStyleContext";
import { useCurrentShortSize } from "../configurator/context/CurrentShortSizeContext";
import { useHasTassels } from "../configurator/context/HasTasselsContext";
import ConfiguratorMesh from "./ConfiguratorMesh";
import ConfiguratorModel from "./ConfiguratorModel";
import { useModelGeometries } from "./useModelGeometries";
import { withSuspense } from "./withSuspense";

function BoxingShortsModel({ model, ...props }) {
  const [currentLegStyle] = useCurrentLegStyle();
  const [currentShortSize] = useCurrentShortSize();
  const [hasTassels] = useHasTassels();

  const variantNodes = useModelGeometries(
    model.variations.find(
      (variation) =>
        variation.legCut == currentLegStyle &&
        variation.size == currentShortSize
    )["parts"]
  );

  const modelTassel = model.variations.find(
    (variation) => variation.hasTassels == hasTassels
  );

  const tasselNodes = useModelGeometries(
    modelTassel ? modelTassel["parts"] : []
  );

  const prevNodes = useRef();

  useEffect(() => {
    prevNodes.current = variantNodes;
  });

  useEffect(() => {
    variantNodes;
  }, [variantNodes]);

  return (
    <ConfiguratorModel {...props} model={model.models}>
      {variantNodes &&
        variantNodes.map((node) => (
          <ConfiguratorMesh
            key={node.id}
            node={node}
            // node={{
            //   ...node,
            //   ...(prevNodes.current
            //     ? {
            //         material: prevNodes.current.find(
            //           (prevNode) => node.id == prevNode.id
            //         )["material"],
            //       }
            //     : node.material),
            // }}
          ></ConfiguratorMesh>
        ))}

      {tasselNodes &&
        tasselNodes.map((node) => (
          <ConfiguratorMesh key={node.id} node={node}></ConfiguratorMesh>
        ))}
    </ConfiguratorModel>
  );
}

export default withSuspense(BoxingShortsModel);
