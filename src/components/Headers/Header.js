import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SelfHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/img.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Les 6km de Bierges</h1>
            </div>
            <h2 className="presentation-subtitle text-center" id="about">
              Organisée par les horizons de la 40e de Bierges
            </h2>
              <Row className="presentation-subtitle text-center mt-5">
                <Col className="mt-3">
                <img src={require("../../assets/img/cal.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>9 mai de 10h à 12h</h6>
                </Col>
                <Col className="mt-3">
                <img src={require("../../assets/img/marker.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>Salle Jules Colette à Bierges</h6>
                </Col>
                <Col className="mt-3">
                <img src={require("../../assets/img/dist.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>6km de course</h6>
                </Col>
              </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SelfHeader;
