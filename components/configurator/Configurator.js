import Canvas from "../canvas/Canvas";
import ControlsPanel from "../controls/controls-panel/ControlsPanel";
import ControlsSummary from "../controls/controls-summary/ControlsSummary";
import { cndce_configurator } from "./Configurator.module.scss";
import CurrentLegStyleContextProvider from "./context/CurrentLegStyleContext";
import CurrentModelContextProvider from "./context/CurrentModelContext";
import CurrentModelPartContextProvider from "./context/CurrentModelPartContext";
import CurrentNameContextProvider from "./context/CurrentNameContext";
import CurrentShortSizeContextProvider from "./context/CurrentShortSizeContext";
import HasTasselsContextProvider from "./context/HasTasselsContext";
import NamesContextProvider from "./context/NamesContext";

export default function Configurator() {
  return (
    <NamesContextProvider>
      <CurrentNameContextProvider>
        <CurrentModelContextProvider>
          <CurrentModelPartContextProvider>
            <CurrentShortSizeContextProvider>
              <CurrentLegStyleContextProvider>
                <HasTasselsContextProvider>
                  <div className={`${cndce_configurator} loaded`}>
                    <Canvas></Canvas>

                    <ControlsSummary></ControlsSummary>
                    <ControlsPanel></ControlsPanel>
                  </div>
                </HasTasselsContextProvider>
              </CurrentLegStyleContextProvider>
            </CurrentShortSizeContextProvider>
          </CurrentModelPartContextProvider>
        </CurrentModelContextProvider>
      </CurrentNameContextProvider>
    </NamesContextProvider>
  );
}
