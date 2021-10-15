import { useCallback, useEffect, useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useCurrentName } from "../../../../configurator/context/CurrentNameContext";
import { NAMES_FINISH, NAMES_PRINTING } from "./_config";

export default function ControlsPanelNameEdit() {
  const [[currentName], setCurrentName] = useCurrentName();
  const [text, setText] = useState();
  const [printing, setPrinting] = useState();
  const [finish, setFinish] = useState();
  const [freeze, setFreeze] = useState(true);

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

  function onFreezeClick() {
    setFreeze(!freeze);
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
          ></Form.Control>

          <div className="text-uppercase">Font</div>
        </Col>

        <Col>
          <Button onClick={onFreezeClick}>Toggle Freeze</Button>
          <div>
            <small>This is a temporary feature to set the text material</small>
          </div>
        </Col>
      </Row>
    </div>
  );
}