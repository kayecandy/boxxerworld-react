import { useEffect, useRef } from "react";
import { useCurrentLegStyle } from "../../configurator/context/CurrentLegStyleContext";
import { useCurrentShortSize } from "../../configurator/context/CurrentShortSizeContext";
import { useHasTassels } from "../../configurator/context/HasTasselsContext";
import ConfiguratorMesh from "../ConfiguratorMesh";
import ConfiguratorModel from "./ConfiguratorModel";
import { useModelGeometries } from "../useModelGeometries";
import { withSuspense } from "../withSuspense";

function BoxingShortsModel({ model, ...props }) {
  const { variations = [] } = model;
  const [currentLegStyle] = useCurrentLegStyle();
  const [currentShortSize] = useCurrentShortSize();
  const [hasTassels] = useHasTassels();

  const modelTassel = variations.find(
    (variation) =>
      variation.hasTassels == hasTassels &&
      (variation.legCut ? variation.legCut == currentLegStyle : true)
  );

  const modelVariation = variations.find(
    (variation) =>
      variation.legCut == currentLegStyle && variation.size == currentShortSize
  );

  const variantNodes = useModelGeometries(
    modelVariation ? modelVariation["parts"] : []
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
    <ConfiguratorModel
      {...props}
      model={model.models}
      transforms={modelVariation ? modelVariation.transforms : undefined}
    >
      {variantNodes &&
        variantNodes.map((node) => (
          <ConfiguratorMesh
            key={node.id}
            node={node}
            transforms={modelVariation ? modelVariation.transforms : undefined}
          ></ConfiguratorMesh>
        ))}

      {tasselNodes &&
        tasselNodes.map((node) => (
          <ConfiguratorMesh
            key={node.id}
            node={node}
            transforms={modelVariation ? modelVariation.transforms : undefined}
          ></ConfiguratorMesh>
        ))}
    </ConfiguratorModel>
  );
}

export default withSuspense(BoxingShortsModel);
