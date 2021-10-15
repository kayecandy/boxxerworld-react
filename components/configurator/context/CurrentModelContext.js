import { Router, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { MODELS } from "../../controls/controls-model/_config";

const CurrentModelContext = React.createContext();

export default function CurrentModelContextProvider(props) {
  const currentModelState = useState();
  const [currentModel, setCurrentModel] = currentModelState;

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { product, model } = router.query;

      if (
        Object.keys(MODELS).includes(product) &&
        Object.keys(MODELS[product]).includes(model)
      ) {
        setCurrentModel(MODELS[product][model]);
      } else {
        router.push("/[product]/[model]", "/boxing-shorts/classic");
      }
    }
  }, [router]);

  return (
    <CurrentModelContext.Provider
      value={currentModelState}
      {...props}
    ></CurrentModelContext.Provider>
  );
}

/**
 *
 * @returns {[_model, React.Dispatch<_model>]}
 */
export function useCurrentModel() {
  return useContext(CurrentModelContext);
}
