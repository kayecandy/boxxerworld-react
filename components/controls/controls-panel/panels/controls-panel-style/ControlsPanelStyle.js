import { Col, Row } from "react-bootstrap";
import _config from "./_config";
import style from "./ControlsPanelStyle.module.scss";
import { useCurrentLegStyle } from "../../../../configurator/context/CurrentLegStyleContext";

export default function ControlsPanelStyle() {
  const [, setCurrentLegCut] = useCurrentLegStyle();

  function onLegCutClick() {
    console.log("click", this.id);
    setCurrentLegCut(this.id);
  }

  return (
    <div className={style.cndce_control_panel_style}>
      <Row>
        <Col xs={6}>
          <div>Choose Leg Cut</div>
          <hr></hr>

          <Row>
            {_config.legCuts.map((legCut) => (
              <Col
                key={legCut.id}
                className={style.cndce_control_panel_style__legcut}
                xs="auto"
                onClick={onLegCutClick.bind(legCut)}
              >
                <div
                  className={style.cndce_control_panel_style__legcut_img}
                  style={{
                    backgroundImage: legCut.img,
                  }}
                ></div>
                <div>{legCut.title}</div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
