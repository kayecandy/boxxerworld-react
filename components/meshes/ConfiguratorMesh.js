import React, { useEffect, useRef, useState } from "react";
import { useCurrentModelPart } from "../configurator/context/CurrentModelPartContext";
import { useNames } from "../configurator/context/NamesContext";
import ConfiguratorMeshMaterial from "./materials/ConfiguratorMeshMaterial";
import ProjectedMaterial from "./materials/ProjectedMaterial/ProjectedMaterial";
import { withSuspense } from "./withSuspense";

const TEMP = "temp.jpg";

function ConfiguratorMesh({ node, transforms }) {
  const [hovered, setHovered] = useState(false);

  const [currentModelPart, setCurrentModelPart] = useCurrentModelPart();

  const [names] = useNames();

  const meshRef = useRef();

  useEffect(() => {
    if (currentModelPart && currentModelPart.id == node.id) {
      window.mesh = meshRef.current;
    }
  }, [currentModelPart, meshRef]);

  function _onPointerEnter(e) {
    e.stopPropagation();
    setHovered(true);
  }

  function _onPointerLeave(e) {
    setHovered(false);
  }

  function _onPointerDown(e) {
    e.stopPropagation();

    setCurrentModelPart(node);
  }

  return (
    <>
      <mesh
        onPointerEnter={_onPointerEnter}
        onPointerLeave={_onPointerLeave}
        onPointerDown={_onPointerDown}
        geometry={node.geometry}
        name={node.id}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
        {...(transforms ? transforms(node) : {})}
      >
        <ConfiguratorMeshMaterial
          {...node.material}
          opacity={hovered ? 0.93 : 1}
        ></ConfiguratorMeshMaterial>
      </mesh>

      {node.hasTexture &&
        names.map((name, i) => (
          <NameMesh
            node={node}
            transforms={transforms}
            name={name}
            key={i}
            ref={meshRef}
          ></NameMesh>
        ))}
    </>
  );
}

export default withSuspense(ConfiguratorMesh);

const NameMesh = React.forwardRef(function (
  { name, transforms, node, ...props },
  meshRef
) {
  return (
    <mesh
      name={`texture_${node.id}`}
      geometry={node.geometry}
      scale={[1.007, 1.007, 1.007]}
      ref={meshRef}
      material={name.material}
      {...(transforms ? transforms(node) : {})}
      {...props}
    ></mesh>
  );
});
