import { Col, Row } from "react-bootstrap";
import _config from "./_config";
import style from "./ControlsPanelStyle.module.scss";
import { useCurrentLegStyle } from "../../../../configurator/context/CurrentLegStyleContext";
import { useCurrentShortSize } from "../../../../configurator/context/CurrentShortSizeContext";

export default function ControlsPanelStyle() {
  const [, setCurrentLegCut] = useCurrentLegStyle();
  const [, setCurrentShortSize] = useCurrentShortSize();

  function onLegCutClick() {
    setCurrentLegCut(this.id);
  }

  function onShortSizeClick() {
    setCurrentShortSize(this.id);
  }

  return (
    <div className={`${style.cndce_control_panel_style} py-4`}>
      <Row>
        {/* Short Sizes */}
        <Col xs={6}>
          <div>Choose your style</div>
          <hr></hr>

          <Row>
            {_config.sizes.map((shortSize) => (
              <Col
                key={shortSize.id}
                className={style.cndce_control_panel_style__size}
                xs="auto"
                onClick={onShortSizeClick.bind(shortSize)}
              >
                <div
                  className={style.cndce_control_panel_style__size_img}
                  style={{
                    backgroundImage: shortSize.img,
                  }}
                ></div>
                <div>{shortSize.title}</div>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Leg Cuts */}
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
