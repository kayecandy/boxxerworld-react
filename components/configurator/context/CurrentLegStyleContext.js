import React, { useContext, useState } from "react";

export const CurrentLegStyleContext = React.createContext();

export default function CurrentLegStyleContextProvider(props) {
  const currentLegStyleState = useState("side-slit");

  return (
    <CurrentLegStyleContext.Provider
      value={currentLegStyleState}
      {...props}
    ></CurrentLegStyleContext.Provider>
  );
}

export function useCurrentLegStyle() {
  return useContext(CurrentLegStyleContext);
}
