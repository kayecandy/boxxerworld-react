import { useThree } from "@react-three/fiber";
import React, { useCallback, useEffect, useRef } from "react";
import { ShaderChunk } from "three";
import uv_pars_vertex from "./shaders/uv_pars_vertex.glsl";
import uv_vertex from "./shaders/uv_vertex.glsl";
ShaderChunk;

const TEMP = "/temp.jpg";

function ProjectedMaterial({ freeze = true, ...props }, materialRef) {
  const { camera } = useThree();

  // Uniforms variable
  const uniforms = useRef();
  const getCameraMatrixWorldInverse = useCallback(() => {
    if (freeze) {
      return camera.matrixWorldInverse.clone();
    }

    return camera.matrixWorldInverse;
  }, [freeze]);

  useEffect(() => {
    if (uniforms.current) {
      uniforms.current.viewMatrixCamera.value = getCameraMatrixWorldInverse();
    }
  }, [camera, freeze, uniforms]);

  return (
    <meshStandardMaterial
      ref={materialRef}
      onBeforeCompile={(shader) => {
        if (uniforms.current) {
          shader.uniforms = uniforms.current;
        } else {
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld();
          camera.updateWorldMatrix();

          const _uniforms = {
            ...shader.uniforms,
            viewMatrixCamera: {
              type: "m4",
              value: getCameraMatrixWorldInverse(),
            },
            projectionMatrixCamera: {
              type: "m4",
              value: camera.projectionMatrix,
            },
            modelMatrixCamera: { type: "mat4", value: camera.matrixWorld },
            projPosition: { type: "v3", value: camera.position },
          };
          uniforms.current = _uniforms;
          shader.uniforms = _uniforms;

          // TEMP
          materialRef.current.userData.uniforms = _uniforms;
        }

        shader.vertexShader = shader.vertexShader.replace(
          "#include <uv_pars_vertex>",
          uv_pars_vertex
        );

        shader.vertexShader = shader.vertexShader.replace(
          "#include <uv_vertex>",
          uv_vertex
        );
      }}
      needsUpdate={true}
      {...props}
    ></meshStandardMaterial>
  );
}

export default React.forwardRef(ProjectedMaterial);
