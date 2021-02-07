import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ContentCard from "../components/ContentCard";

function NoMatch() {
    return (
        <Container>
            <Row>
                <ContentCard>
                    <Col size="md-12">
                        <h1>404 Page Not Found</h1>
                    </Col>
                </ContentCard>
            </Row>
        </Container>
    )
}

export default NoMatch;