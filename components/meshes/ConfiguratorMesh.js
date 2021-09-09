import { useEffect, useRef, useState } from "react";
import { useCurrentModelPart } from "../configurator/context/CurrentModelPartContext";
import ConfiguratorMeshMaterial from "./ConfiguratorMeshMaterial";
import { withSuspense } from "./withSuspense";

const TEMP = "temp.jpg";

function ConfiguratorMesh({ node }) {
  const [hovered, setHovered] = useState(false);

  const [currentModelPart, setCurrentModelPart] = useCurrentModelPart();

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
    <mesh
      onPointerEnter={_onPointerEnter}
      onPointerLeave={_onPointerLeave}
      onPointerDown={_onPointerDown}
      geometry={node.geometry}
      name={node.id}
      ref={meshRef}
    >
      <ConfiguratorMeshMaterial
        {...node.material}
        opacity={hovered ? 0.93 : 1}
      ></ConfiguratorMeshMaterial>
    </mesh>
  );
}

export default withSuspense(ConfiguratorMesh);
