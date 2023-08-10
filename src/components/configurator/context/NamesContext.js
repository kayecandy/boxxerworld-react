import React, { useState, useContext } from "react";

export const NamesContext = React.createContext();

export default function NamesContextProvider(props) {
  const namesState = useState([]);

  return (
    <NamesContext.Provider
      value={namesState}
      {...props}
    ></NamesContext.Provider>
  );
}

/**
 *
 * @returns {[any[], React.Dispatch<React.SetStateAction<any[]>>]}
 */
export function useNames() {
  return useContext(NamesContext);
}
