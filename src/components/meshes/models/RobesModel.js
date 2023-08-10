import { useMemo } from "react";
import { useHasCrystals } from "../../configurator/context/HasCrystalsContext";
import ConfiguratorMesh from "../ConfiguratorMesh";
import { useModelGeometries } from "../useModelGeometries";
import { withSuspense } from "../withSuspense";
import BaseModel from "./BaseModel";

function RobesModel({ model, ...props }) {
  const { variations = [] } = model;

  const [hasCrystals] = useHasCrystals();


  const modelCrystals = useMemo(()=>(
    variations.find(
      (variation) =>
        variation.hasCrystals === hasCrystals
    )
  ), [variations, hasCrystals]);

  const crystalNodes = useModelGeometries(modelCrystals ? modelCrystals["parts"] : [])

  return <BaseModel {...props} model={model.models}>
    {crystalNodes &&
        crystalNodes.map((node) => (
          <ConfiguratorMesh
            key={node.id}
            node={node}
          ></ConfiguratorMesh>
        ))}
  </BaseModel>;
}

export default withSuspense(RobesModel);
