import { useCurrentModel } from "../../configurator/context/CurrentModelContext";

import { Button, Offcanvas, Tabs, Tab, Col, Row } from "react-bootstrap";
import { useState } from "react";

import Link from "next/link";

import style from "./ControlsModel.module.scss";

import { MODELS } from "./_config";

export default function ControlsModel() {
  const [show, setShow] = useState(false);
  const [currentModel] = useCurrentModel();

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  if (!currentModel) return <div></div>;

  return (
    <>
      <div className={style.cndce_controls_model}>
        <div>
          <a href="#" className={style.back_link}>
            Back to custom shop
          </a>
        </div>
        <div className="mb-2">
          <h6 className={style.name}>{currentModel.name}</h6>&nbsp;
          <span className={style.subtitle}>{currentModel.subtitle}</span>
        </div>
        <Button
          className={style.menu_trigger}
          onClick={handleShow}
          style={{
            backgroundImage: currentModel.preview,
          }}
        ></Button>
      </div>

      <Offcanvas
        show={show}
        placement="start"
        onHide={handleHide}
        className={style.offcanvas}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h3 className={style.offcanvas_title}>Custom Fightwear</h3>
          <Tabs>
            {Object.entries(MODELS).map(([productKey, product]) => (
              <Tab
                key={productKey}
                eventKey={productKey}
                title={product.name}
                className="py-4"
                tabClassName={style.product_tab}
              >
                <Row>
                  {Object.entries(product.models).map(([modelKey, model]) => (
                    <Col xs={4} key={modelKey}>
                      <Link
                        href="/[product]/[model]"
                        as={`/${productKey}/${modelKey}`}
                      >
                        <Button className={`${style.model_btn} p-0`}>
                          <div
                            className={`${style.model_btn__img}`}
                            style={{
                              backgroundImage: model.preview,
                            }}
                          ></div>
                          <div className={`${style.model_btn__name} py-1 px-3`}>
                            {model.name}
                          </div>
                        </Button>
                      </Link>
                    </Col>
                  ))}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
