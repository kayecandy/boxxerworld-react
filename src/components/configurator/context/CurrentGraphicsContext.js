import { createContext, useContext, useState } from "react";

export const CurrentGraphicsContext = createContext();

export default function CurrentGraphicsContextProvider(props) {
  const currentGraphicState = useState();

  return (
    <CurrentGraphicsContext.Provider
      value={currentGraphicState}
      {...props}
    ></CurrentGraphicsContext.Provider>
  );
}

export function useCurrentGraphics() {
  return useContext(CurrentGraphicsContext);
}
