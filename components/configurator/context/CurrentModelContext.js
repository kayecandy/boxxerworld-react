import React, { useContext, useEffect, useState } from "react";
import _model from "/components/meshes/boxing-shorts/slick-bx/_config.js";

const CurrentModelContext = React.createContext();

export default function CurrentModelContextProvider(props) {
  const currentModelState = useState(_model);

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
