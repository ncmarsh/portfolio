import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ContentCard from "../components/ContentCard";

const styles = {
    myPic: {
        float: "left",
        marginRight: "0.5rem",
        width: "12rem",
        height: "auto"
    }
}

function About() {
    return(
        <Container>
            <Row>
                <ContentCard>
                    <Col size="xs-8 md-10">
                        <h1>About Me</h1>
                        <hr />
                        <img className="img-fluid" style={styles.myPic} src={process.env.PUBLIC_URL + "/assets/headshot.jpg"} alt="headshot" />
                        <p>
                            Hello and welcome! My name is Nicole Marshall and I am a Front End Developer who, after earning a certificate in Full-Stack Web Development from the University of Washington Coding Boot Camp in February 2021, and working through an Associate Program as an Associate Front End Developer with a local tech consulting company. I enjoy building intuitive, responsive and interactive web applications, both on my own and through collaboration with a team. Among the coding languages I have learned so far, I have found that I enjoy using JavaScript the most because of its versatility of creating both interactive and static elements and its usability between front-end and back-end development.
                        </p>
                        <p>
                            Outside of coding, my hobbies include playing video games and board games, jigsaw puzzles, dancing and when it's nice out, hiking (though what I consider a hike, others refer to as nature walks). Back in the day, I also frequented the movie theater and enjoyed travelling... remember that?
                        </p>
                        <Row>
                            <Col size="xs-6 md-8">
                                <h4>Skills</h4>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>MySQL</li>
                                    <li>NoSQL</li>
                                    <li>Node</li>
                                    <li>Express</li>
                                    <li>MERN Stack</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </ContentCard>
            </Row>
        </Container>
    )
}

export default About;