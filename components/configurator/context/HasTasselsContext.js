import React, { useContext, useState } from "react";

export const HasTasselsContext = React.createContext();

export default function HasTasselsContextProvider(props) {
  const hasTasselsState = useState(true);

  return (
    <HasTasselsContext.Provider
      value={hasTasselsState}
      {...props}
    ></HasTasselsContext.Provider>
  );
}

export function useHasTassels() {
  return useContext(HasTasselsContext);
}
