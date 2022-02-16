import React, { useEffect, useRef, useState } from "react";
import { useCurrentModelPart } from "../configurator/context/CurrentModelPartContext";
import { useNames } from "../configurator/context/NamesContext";
import ConfiguratorMeshMaterial from "./materials/ConfiguratorMeshMaterial";
import ProjectedMaterial from "./materials/ProjectedMaterial/ProjectedMaterial";
import { withSuspense } from "./withSuspense";

const TEMP = "temp.jpg";

function ConfiguratorMesh({ node, transforms }) {
  const { material = {}, baseMaterial = {} } = node;

  const {
    textures: { maps: materialMaps, ...materialTextures } = {},
    ...nodeMaterial
  } = material;
  const {
    textures: { maps: baseMaterialMaps, ...baseMaterialTextures } = {},
    ...nodeBaseMaterial
  } = baseMaterial;

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
        {...node.meshProps}
        {...(transforms ? transforms(node) : {})}
      >
        <ConfiguratorMeshMaterial
          {...nodeMaterial}
          {...nodeBaseMaterial}
          textures={{
            ...materialTextures,
            ...baseMaterialTextures,
            maps: {
              ...materialMaps,
              ...baseMaterialMaps,
            },
          }}
          opacity={hovered ? 0.93 : 1}
        ></ConfiguratorMeshMaterial>
      </mesh>

      {node.hasTexture &&
        names.map((name, i) => (
          <mesh
            key={i}
            name={`texture_${node.id}`}
            geometry={node.geometry}
            scale={[1.007, 1.007, 1.007]}
            ref={meshRef}
            material={name.material}
            {...(transforms ? transforms(node) : {})}
          ></mesh>
        ))}
    </>
  );
}

export default withSuspense(ConfiguratorMesh);
