import React, { useContext, useEffect, useState } from "react";

export const CurrentModelPartContext = React.createContext();

export default function CurrentModelPartContextProvider(props) {
  const currentModelPartState = useState();
  const [currentModelPart] = currentModelPartState;

  return (
    <CurrentModelPartContext.Provider
      value={currentModelPartState}
      {...props}
    ></CurrentModelPartContext.Provider>
  );
}

export function useCurrentModelPart() {
  return useContext(CurrentModelPartContext);
}
