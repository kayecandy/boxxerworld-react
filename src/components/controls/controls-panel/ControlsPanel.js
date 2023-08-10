import { Nav, Tab } from "react-bootstrap";
import ControlsPanelNavItem from "./ControlsPanelNavItem";
import _content from "./_content";
import style from "./ControlsPanel.module.scss";
import { useCurrentModel } from "../../configurator/context/CurrentModelContext";
import { Fragment } from "react";

export default function ControlsPanel({ transition = true }) {
  const [currentModel] = useCurrentModel();

  if (!currentModel) {
    return <div></div>;
  }

  return (
    <div className={style.cndce_controls_panel}>
      <Tab.Container
        transition={transition}
        defaultActiveKey={_content.controlsActive}
      >
        <div className={style.cndce_controls_panel__header_wrapper}>
          <Nav className={style.cndce_controls_panel__header_wrapper__nav}>
            {_content.controls.map((control) => (
              <Fragment key={control.id}>
                {currentModel.controls[control.id] && (
                  <ControlsPanelNavItem {...control}></ControlsPanelNavItem>
                )}
              </Fragment>
            ))}
          </Nav>
        </div>

        <div className={style.cndce_controls_panel__content_wrapper}>
          <Tab.Content>
            {_content.controls.map((control) => (
              <Fragment key={control.id}>
                {currentModel.controls[control.id] && (
                  <Tab.Pane eventKey={control.id}>{control.content}</Tab.Pane>
                )}
              </Fragment>
            ))}
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}
