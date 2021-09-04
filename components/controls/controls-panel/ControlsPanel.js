import { Nav, Tab } from "react-bootstrap";
import ControlsPanelNavItem from "./ControlsPanelNavItem";
import _content from "./_content";
import style from "./ControlsPanel.module.scss";

export default function ControlsPanel({ transition = true }) {
  return (
    <div className={style.cndce_controls_panel}>
      <Tab.Container
        transition={transition}
        defaultActiveKey={_content.controlsActive}
      >
        <div className={style.cndce_controls_panel__header_wrapper}>
          <Nav className={style.cndce_controls_panel__header_wrapper__nav}>
            {_content.controls.map((control) => (
              <ControlsPanelNavItem
                key={control.id}
                {...control}
              ></ControlsPanelNavItem>
            ))}
          </Nav>
        </div>

        <div className={style.cndce_controls_panel__content_wrapper}>
          <Tab.Content>
            {_content.controls.map((control) => (
              <Tab.Pane key={control.id} eventKey={control.id}>
                {control.content}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}
