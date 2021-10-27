import { useNames } from "../configurator/context/NamesContext";
import NameCanvas from "./NameCanvas";

export default function NameCanvases() {
  const [names] = useNames();

  // TODO: Handle multiple name canvasesd z-indices

  return (
    <div
      style={{
        position: "absolute",
      }}
    >
      {names.map((name, i) => (
        <NameCanvas key={i} name={name}></NameCanvas>
      ))}
    </div>
  );
}
