import { createContext, useContext, useState } from "react";

// TODO: Fix type
/**
 * @type {import("react").Context<useStateArray>}
 */
export const GraphicsContext = createContext();

export default function GraphicsContextProvider(props) {
  const graphicsState = useState([]);

  return (
    <GraphicsContext.Provider
      value={graphicsState}
      {...props}
    ></GraphicsContext.Provider>
  );
}

export function useGraphics() {
  return useContext(GraphicsContext);
}
