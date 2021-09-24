import React, { useState, useContext } from "react";

export const CurrentNameContext = React.createContext();

export default function CurrentNameContextProvider(props) {
  const currentNameState = useState();

  return (
    <CurrentNameContext.Provider
      value={currentNameState}
      {...props}
    ></CurrentNameContext.Provider>
  );
}

export function useCurrentName() {
  return useContext(CurrentNameContext);
}
