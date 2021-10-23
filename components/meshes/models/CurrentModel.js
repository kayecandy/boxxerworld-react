import { useEffect, useState } from "react";
import { MODELS } from "../../controls/controls-model/_config";
import ConfiguratorMesh from "../ConfiguratorMesh";

export default function CurrentModel({ router, ...props }) {
  const [Model, setModel] = useState();

  useEffect(() => {
    if (router && router.isReady) {
      const { product } = router.query;

      if (Object.keys(MODELS).includes(product)) {
        setModel(MODELS[product]);
      }
    }
  }, [router]);

  if (!Model) return <group></group>;

  return <Model.Mesh {...props}></Model.Mesh>;
}
