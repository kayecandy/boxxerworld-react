import { useEffect, useState } from "react";
import { useCurrentGraphics } from "../../../../configurator/context/CurrentGraphicsContext";
import { EDIT_MODE } from "../controls-panel-name/_config";
import {
  Row,
  Col,
  Button,
  Form,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

export default function ControlsPanelGraphicEdit() {
  const [[currentGraphics], setCurrentGraphic] = useCurrentGraphics();

  const [freeze, setFreeze] = useState(false);
  const [editMode, setEditMode] = useState(EDIT_MODE.EDIT_2D);

  useEffect(() => {
    currentGraphics.freeze = freeze;
    setCurrentGraphic([currentGraphics]);
  }, [freeze]);

  useEffect(() => {
    currentGraphics.editMode = editMode;
    setCurrentGraphic([currentGraphics]);
  }, [editMode]);

  function onEditModeChange(buttonValue) {
    setEditMode(buttonValue);
    setFreeze(false);
  }

  function onApplyClick() {
    setFreeze(true);
    setEditMode(EDIT_MODE.EDIT_3D);
  }

  return (
    <div className="py-4">
      <Row>
        <Col xs={3}></Col>

        <Col></Col>

        <Col>
          <h6 className="text-uppercase">Edit Image Position</h6>

          <ToggleButtonGroup
            name="testgraphic"
            type="radio"
            value={editMode}
            onChange={onEditModeChange}
          >
            <ToggleButton value={EDIT_MODE.EDIT_3D} id="testgraphic1">
              Edit 3D
            </ToggleButton>
            <ToggleButton value={EDIT_MODE.EDIT_2D} id="testgraphic2">
              Edit Image
            </ToggleButton>
          </ToggleButtonGroup>

          <br></br>
          <br></br>

          <Button onClick={onApplyClick}>Apply Position</Button>

          <div>
            <small>This is a temporary feature to set the text material</small>
          </div>
        </Col>
      </Row>
    </div>
  );
}
