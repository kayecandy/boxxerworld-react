import { NormalMapGenerator } from "normalmap-online";
import { createElement, useCallback, useEffect, useRef, useState } from "react";

export default function Test() {
  const [a, setA] = useState();
  const [canvas, setCanvas] = useState();
  const ref = useRef();

  useEffect(() => {
    const generator = NormalMapGenerator.instance();

    const image = createElement("img", {
      src: "/test.png",
      ref: ref,
      onLoad: () => {
        const c = generator.generateFromImage(ref.current);
        setCanvas(c.toDataURL());
      },
    });

    setA(image);
  }, []);

  return (
    <>
      hello world <br></br>
      {a}
      <br></br>
      <img src={canvas}></img>
      {/* {canvas} */}
    </>
  );
}
