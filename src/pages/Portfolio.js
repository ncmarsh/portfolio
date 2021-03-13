import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ContentCard from "../components/ContentCard";
import ProjectCard from "../components/ProjectCard";
import Projects from "../projects.json";

class Portfolio extends React.Component {
    state = {
        ProjectsList: Projects
    };
    
    render() {
        return(
            <Container>
                <Row>
                    <ContentCard>
                        <Col size="xs-12 sm-10 md-11 lg-11">
                            <h1>Portfolio</h1>
                            <hr />
                            {this.state.ProjectsList.map(item =>
                                <ProjectCard key={item.id} {...item} />)
                            }
                        </Col>
                    </ContentCard>
                </Row>
            </Container>
        )
    }
}

export default Portfolio;