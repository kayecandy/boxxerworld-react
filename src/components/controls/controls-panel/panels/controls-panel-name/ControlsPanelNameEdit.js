import { useCallback, useEffect, useState } from "react";
import { Row, Col, Button, Form, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useCurrentName } from "../../../../configurator/context/CurrentNameContext";
import { EDIT_MODE, NAMES_FINISH, NAMES_PRINTING } from "./_config";

export default function ControlsPanelNameEdit() {
  const [[currentName], setCurrentName] = useCurrentName();
  const [text, setText] = useState();
  const [printing, setPrinting] = useState();
  const [finish, setFinish] = useState();
  const [freeze, setFreeze] = useState(false);
  const [editMode, setEditMode] = useState(EDIT_MODE.EDIT_2D);

  const {material} = currentName;

  useEffect(() => {
    currentName.printing = printing;
    setCurrentName([currentName]);
  }, [printing]);

  useEffect(() => {
    currentName.finish = finish;
    setCurrentName([currentName]);
  }, [finish]);

  useEffect(() => {
    currentName.freeze = freeze;
    setCurrentName([currentName]);
  }, [freeze]);

  useEffect(() => {
    currentName.text = text;
    setCurrentName([currentName]);
  }, [text]);

  useEffect(() => {
    currentName.editMode = editMode;
    setCurrentName([currentName]);
  }, [editMode]);


  function onEditModeChange(buttonValue){
    setEditMode(buttonValue);
    setFreeze(false);
  }

  function onApplyClick(){
    setFreeze(true);
    setEditMode(EDIT_MODE.EDIT_3D);
  }

  return (
    <div className="py-4">
      <Row>
        <Col xs={3}>
          <h6 className="text-uppercase">Printing</h6>
          <Row className="mb-4">
            <Col>
              <Button
                onClick={() => setPrinting(NAMES_PRINTING.PRINTED)}
                style={{ fontSize: "80%" }}
              >
                Printed
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setPrinting(NAMES_PRINTING.EMBROIDERY)}
                style={{ fontSize: "80%" }}
              >
                Embroidery
              </Button>
            </Col>
          </Row>

          {/* Finish */}
          {printing == NAMES_PRINTING.EMBROIDERY && (
            <>
              <h6 className="text-uppercase">Finish</h6>
              <Row>
                <Col>
                  <Button
                    onClick={() => setFinish(NAMES_FINISH.FLAT)}
                    style={{ fontSize: "80%" }}
                  >
                    Flat
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={() => setFinish(NAMES_FINISH.PUFF)}
                    style={{ fontSize: "80%" }}
                  >
                    3D (Puff)
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </Col>

        <Col>
          <h6 className="text-uppercase">Your Name</h6>

          <Form.Control
            type="text"
            placeholder="Enter your text"
            className="mb-3"
            onChange={(e) => setText(e.target.value)}
          ></Form.Control>

          <div className="text-uppercase">Font</div>
        </Col>

        <Col>

          <h6 className="text-uppercase">Edit Text Position</h6>

          <ToggleButtonGroup name="test" type="radio" value={editMode} onChange={onEditModeChange}>
            <ToggleButton value={EDIT_MODE.EDIT_3D} id="test1">Edit 3D</ToggleButton>
            <ToggleButton value={EDIT_MODE.EDIT_2D} id="test2">Edit Text</ToggleButton>
          </ToggleButtonGroup>

            <br></br><br></br>

          <Button onClick={onApplyClick}>Apply Position</Button>

       
          <div>
            <small>This is a temporary feature to set the text material</small>
          </div>
        </Col>
      </Row>
    </div>
  );
}
