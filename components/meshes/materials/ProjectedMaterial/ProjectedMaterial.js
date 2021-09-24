import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ShaderChunk } from "three";
import uv_pars_vertex from "./shaders/uv_pars_vertex.glsl";
import uv_vertex from "./shaders/uv_vertex.glsl";
ShaderChunk;
const TEMP = "/temp.jpg";

function ProjectedMaterial(
  { map, normalMap, texture, freeze = true, ...props },
  materialRef
) {
  const { camera } = useThree();
  const _texture = useTexture(map ? map : TEMP);
  const _normalMap = useTexture(normalMap ? normalMap : TEMP);

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

  useEffect(() => {
    Object.assign(_texture, texture);

    _texture.needsUpdate = true;
  }, [_texture]);

  useEffect(() => {
    Object.assign(_normalMap, texture);
    _normalMap.needsUpdate = true;
  }, [_normalMap]);

  // TODO
  useEffect(() => {
    window.nameMaterial = materialRef.current;
    if (materialRef.current) materialRef.current.needsUpdate = true;
  }, [materialRef]);

  console.log(materialRef.current ? materialRef.current.userData.uniforms : "");

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
      map={map ? _texture : null}
      normalMap={normalMap ? _normalMap : null}
      needsUpdate={true}
      {...props}
    ></meshStandardMaterial>
  );
}

export default React.forwardRef(ProjectedMaterial);
