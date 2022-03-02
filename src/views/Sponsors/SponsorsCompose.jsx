import React from "react";

// reactstrap components
import { Container, Row, Col, Media } from "reactstrap";

// core components

function SponsorsCompose() {
    return (
        <>
            <center><h1>Merci à tous nos sponsors</h1></center><br/><br/>
            <Container>
                <Row>
                    <Col>
                        <Media src={require("../../assets/img/logo wavre .png")}/>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row><br/><br/>
            </Container>
        </>
    );
}

export default SponsorsCompose;
