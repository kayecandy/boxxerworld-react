import { Accordion } from "react-bootstrap";
import { useCurrentModelPart } from "../../configurator/context/CurrentModelPartContext";
import ControlsSummaryColors from "./colors/ControlsSummaryColors";
import style from "./ControlsSummary.module.scss";

export default function ControlsSummary() {
  const [currentModelPart] = useCurrentModelPart();

  return (
    <div
      className={`${style.cndce_controls_summary} ${
        currentModelPart ? "" : "d-none"
      }`}
    >
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>
            <div className="accordion-header-text">Summary</div>
          </Accordion.Header>
          <Accordion.Body className="p-0">
            {currentModelPart && (
              <ControlsSummaryColors></ControlsSummaryColors>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
