import { Nav } from "react-bootstrap";
import style from "./ControlsPanelNavItem.module.scss";

export default function ControlsPanelNavItem({
  id = "",
  icon = "",
  title = "",
}) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={id} className={style.cndce_controls_nav_link}>
        <div className={style.cndce_controls_headers}>
          {icon}
          <div className={style.cndce_controls_headers__title}>{title}</div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
}
