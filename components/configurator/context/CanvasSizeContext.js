import React, { useContext, useState } from "react";

export const CanvasSizeContext = React.createContext();

export default function CanvasSizeContextProvider(props) {
  const sizeState = useState({});
  return (
    <CanvasSizeContext.Provider
      value={sizeState}
      {...props}
    ></CanvasSizeContext.Provider>
  );
}

export function useCanvasSize() {
  return useContext(CanvasSizeContext);
}
