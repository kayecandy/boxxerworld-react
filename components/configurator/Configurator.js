import Canvas from "../canvas/Canvas";
import ControlsPanel from "../controls/controls-panel/ControlsPanel";
import ControlsSummary from "../controls/controls-summary/ControlsSummary";
import { cndce_configurator } from "./Configurator.module.scss";
import CurrentModelContextProvider from "./context/CurrentModelContext";
import CurrentModelPartContextProvider from "./context/CurrentModelPartContext";

export default function Configurator() {
  return (
    <CurrentModelContextProvider>
      <CurrentModelPartContextProvider>
        <div className={`${cndce_configurator} loaded`}>
          <Canvas></Canvas>

          <ControlsSummary></ControlsSummary>
          <ControlsPanel></ControlsPanel>
        </div>
      </CurrentModelPartContextProvider>
    </CurrentModelContextProvider>
  );
}
