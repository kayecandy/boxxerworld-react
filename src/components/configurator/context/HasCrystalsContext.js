import React, { useContext, useState } from "react";

export const HasCrystalsContext = React.createContext();

export default function HasCrystalsContextProvider(props) {
  const hasCrystalsState = useState(false);

  return (
    <HasCrystalsContext.Provider
      value={hasCrystalsState}
      {...props}
    ></HasCrystalsContext.Provider>
  );
}

export function useHasCrystals() {
  return useContext(HasCrystalsContext);
}
