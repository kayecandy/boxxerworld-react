import { useTexture } from "@react-three/drei";
import { useCallback, useEffect, useRef } from "react";
import { defaultMaterial, defaultTexture } from "../_config";

const TEMP = "/temp.jpg";

export default function ConfiguratorMeshMaterial({
  textures = {},
  ...materials
}) {
  const { maps, ...textureProps } = textures;
  const _textures = useTexture(maps ? Object.values(maps) : TEMP);

  const materialRef = useRef();

  const textureMaps = useCallback(() => {
    if (!maps) return defaultTexture;

    let _textureMaps = { ...defaultTexture };
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
      {...defaultMaterial}
      {...textureMaps()}
      {...materials}
    ></meshStandardMaterial>
  );
}
