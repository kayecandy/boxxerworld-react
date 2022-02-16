import { useEffect } from "react";
import { useCurrentName } from "../configurator/context/CurrentNameContext";
import { useNames } from "../configurator/context/NamesContext";
import { EDIT_MODE } from "../controls/controls-panel/panels/controls-panel-name/_config";
import NameCanvas from "./NameCanvas";

export default function NameCanvases() {
  const [names] = useNames();
  const [[currentName] = []] = useCurrentName();

  // TODO: Handle multiple name canvasesd z-indices


  useEffect(()=>{


    if(currentName && currentName.editMode){

      const {material} = currentName;

      switch(currentName.editMode){
        case EDIT_MODE.EDIT_2D:
          material.opacity = 0;
          break;
        case EDIT_MODE.EDIT_3D:
          material.opacity = 1;
      }

  
  
      console.log(material);
    }

  }, [currentName?.editMode])

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        display:
          currentName && currentName.editMode == EDIT_MODE.EDIT_2D
            ? "block"
            : "none",
      }}
    >
      {names.map((name, i) => (
        <NameCanvas key={i} name={name}></NameCanvas>
      ))}
    </div>
  );
}
