import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return(
        <Container>
            <Row>
                <Col size="xs-12 sm-10 md-7 lg-10">
                    <h1>Portfolio</h1>
                    <hr />
                    <Row>
                        <ProjectCard />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Portfolio;