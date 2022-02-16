import React, {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import { useThree } from '@react-three/fiber';

import output_fragment from './shaders/output_fragment.glsl';
import uv_pars_fragment from './shaders/uv_pars_fragment.glsl';
import uv_pars_vertex from './shaders/uv_pars_vertex.glsl';
import uv_vertex from './shaders/uv_vertex.glsl';

const TEMP = "/temp.jpg";

function ProjectedMaterial({ freeze = true, ...props }, materialRef) {
  const { camera, scene } = useThree();
  const meshGroup = scene.getObjectByName('meshGroup');


  // Uniforms variable
  const uniforms = useRef();
  
  const getCameraMatrixWorldInverse = useCallback(() => {
    if (freeze) {
      return camera.matrixWorldInverse.clone();
    }

    return camera.matrixWorldInverse;
  }, [freeze, camera]);

  const getCameraPosition = useCallback(()=>{
    return freeze ? camera.position.clone() : camera.position;
  }, [freeze, camera]);

  const getMeshMatrix = useCallback(()=>{
    meshGroup.updateMatrixWorld();

    return freeze ? meshGroup.matrixWorld.clone() : meshGroup.matrixWorld;
  }, [freeze, meshGroup]);

  useEffect(() => {
    if (uniforms.current) {
      uniforms.current.viewMatrixCamera.value = getCameraMatrixWorldInverse();
      uniforms.current.projPosition.value = getCameraPosition();
      uniforms.current.meshMatrix.value = getMeshMatrix();

    }
  }, [camera, freeze, uniforms, meshGroup]);

  window.materialRef = materialRef.current;
  window.camera = camera;
  window.scene = scene;

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
              value: camera.projectionMatrix
              ,
            },
            modelMatrixCamera: { type: "mat4", value: camera.matrixWorld },
            projPosition: { type: "v3", value: getCameraPosition() },
            meshMatrix: {
              type: "mat4", value: getMeshMatrix()
            },
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

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <uv_pars_fragment>', 
          uv_pars_fragment
        );

        shader.fragmentShader = shader.fragmentShader.replace(
          '#include <output_fragment>', 
          output_fragment
        );

        // shader.vertexShader = shader.vertexShader.concat("\nvNormal = mat3(meshMatrix) * normal;")

        console.log(shader);

      }}
      needsUpdate={true}
      {...props}
    ></meshStandardMaterial>
  );
}

export default React.forwardRef(ProjectedMaterial);
