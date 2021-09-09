import React, { useContext, useState } from "react";

export const CurrentShortSizeContext = React.createContext();

export default function CurrentShortSizeContextProvider(props) {
  const currentSizeState = useState("standard");

  return (
    <CurrentShortSizeContext.Provider
      value={currentSizeState}
      {...props}
    ></CurrentShortSizeContext.Provider>
  );
}

export function useCurrentShortSize() {
  return useContext(CurrentShortSizeContext);
}
