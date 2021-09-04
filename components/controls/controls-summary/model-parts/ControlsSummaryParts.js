import { Col, Row } from "react-bootstrap";
import { useCurrentModel } from "../../../configurator/context/CurrentModelContext";
import { useCurrentModelPart } from "../../../configurator/context/CurrentModelPartContext";
import style from "./ControlsSummaryParts.module.scss";

export default function ControlsSummaryParts() {
  const [currentModel] = useCurrentModel();
  const [, setCurrentModelPart] = useCurrentModelPart();

  function _onPartClick() {
    setCurrentModelPart(this);
  }

  return (
    <div className={style.cndce_controls_summary_parts}>
      {currentModel.models.map((part) => (
        <Row
          key={part.id}
          className={`${style.cndce_controls_summary_parts__row} align-items-center py-2 px-2 m-0`}
          onClick={_onPartClick.bind(part)}
        >
          <Col xs="auto">
            <div
              className={style.cndce_controls_summary_parts__row_preview}
              style={part.selectedMaterial && part.selectedMaterial.style}
            ></div>
          </Col>
          <Col>
            <div className={style.cndce_controls_summary_parts__row_name}>
              {part.name}
            </div>

            <div className={style.cndce_controls_summary_parts__row_selected}>
              {part.selectedMaterial ? (
                part.selectedMaterial.name
              ) : (
                <span className="no-material">Select material</span>
              )}
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}
