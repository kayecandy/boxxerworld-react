import React, { useState } from "react";

export const DEFAULT_NAME = {};

class NameMaterial extends React.Component {
  _text;
  _setText;

  constructor() {
    [this._text, this._setText] = useState();
  }

  useText() {
    return [_text, _setText];
  }

  render(props) {}
}

export const NAMES_PRINTING = {
  EMBROIDERY: "embroidery",
  PRINTED: "printed",
};

export const NAMES_FINISH = {
  FLAT: "flat",
  PUFF: "puff",
};
