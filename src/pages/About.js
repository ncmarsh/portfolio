import React from "react";
import { Container, Row, Col } from "../components/Grid";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

function About() {
    return(
        <Container>
            <Row>
                <Col size="xs-6 md-8">
                    <h1>About Me</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About;