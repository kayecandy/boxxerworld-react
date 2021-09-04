import { useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

/**
 * Uses `useGLTF` and returns the geometry of
 * the loaded model
 */
export function useModelGeometries(models) {
  const nodes = useGLTF(models.map((model) => model.url));
  const [geometries, setGeometries] = useState();

  useEffect(() => {
    function getNodeGeometry(node) {
      return Object.values(node.nodes).find((object) => object.type == "Mesh")
        .geometry;
    }

    if (nodes) {
      if (Array.isArray(nodes)) {
        setGeometries(
          models.map((model, index) => {
            model.geometry = getNodeGeometry(nodes[index]);
            console.log("loaded", model.geometry);
            return model;
          })
        );
      } else {
        setGeometries(getNodeGeometry(nodes));
      }
    }
  }, [nodes]);

  return geometries;
}
