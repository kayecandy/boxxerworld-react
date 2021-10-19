import { useGLTF } from "@react-three/drei";

const DRACO_URL = "https://www.gstatic.com/draco/versioned/decoders/1.4.3/";

export function preload_draco(modelConfig) {
  useGLTF.preload(
    modelConfig.models.map((model) => model.url),
    DRACO_URL
  );

  modelConfig.variations.forEach((variation) => {
    useGLTF.preload(
      variation.parts.map((part) => part.url),
      DRACO_URL
    );
  });
}
