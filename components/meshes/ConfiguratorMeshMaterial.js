import { useTexture } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { DoubleSide } from "three";

const TEMP = "/temp.jpg";

export default function ConfiguratorMeshMaterial({
  textures = {},
  ...materials
}) {
  const { maps, ...textureProps } = textures;
  const _textures = useTexture(maps ? Object.values(maps) : TEMP);

  const materialRef = useRef();

  const textureMaps = useCallback(() => {
    if (!maps)
      return {
        emissiveMap: null,
        normalMap: null,
        map: null,
      };

    let _textureMaps = {};
    Object.keys(maps).map((mapKey, index) => {
      _textureMaps[mapKey] = _textures[index];
    });

    return _textureMaps;
  }, [_textures]);

  useEffect(() => {
    if (maps) {
      if (textureProps) {
        _textures.forEach((texture) => {
          Object.assign(texture, textureProps);
          texture.needsUpdate = true;
        });
      }
    }
    materialRef.current.needsUpdate = true;
  }, [_textures]);

  return (
    <meshStandardMaterial
      ref={materialRef}
      side={DoubleSide}
      {...textureMaps()}
      {...materials}
    ></meshStandardMaterial>
  );
}
