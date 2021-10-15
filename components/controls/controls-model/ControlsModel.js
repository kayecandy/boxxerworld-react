import { useCurrentModel } from "../../configurator/context/CurrentModelContext";

import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

import Link from "next/link";

import style from "./ControlsModel.module.scss";

export default function ControlsModel() {
  const [show, setShow] = useState(false);
  const [currentModel] = useCurrentModel();

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <Button className={style.cndce_controls_model} onClick={handleShow}>
        Toggle Models
      </Button>
      <Offcanvas show={show} placement="start" onHide={handleHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Models</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Link href="/[product]/[model]" as="/boxing-shorts/classic">
            <Button>Classic</Button>
          </Link>
          <br></br>
          <br></br>
          <Link href="/[product]/[model]" as="/boxing-shorts/side-stripe">
            <Button>Side Stripe</Button>
          </Link>
          <br></br>
          <br></br>
          <Link href="/[product]/[model]" as="/boxing-shorts/slick">
            <Button>Slick</Button>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
