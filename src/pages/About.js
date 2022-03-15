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
                            Hello and welcome! My name is Nicole Marshall and I am a Software Engineer who has earned a certificate in Full-Stack Web Development from the University of Washington Coding Boot Camp in February 2021, became certified as a Section 508 Trusted Tester (accessibility testing) through DHS and completed the Associate Front-end Developer program at iSoftstone. I am currently working on the front end of a client's external website, adding new features and fixing accessibility bugs using TypeScript, CSS and HTML. I enjoy building intuitive, responsive and accessible web applications, both on my own and through collaboration with a team. Among the coding languages I have learned so far, I have found that I enjoy using TypeScript the most because of its versatility of creating both interactive and static elements, its usability between front-end and back-end development and its ability to create more stable code.
                        </p>
                        <p>
                            Outside of coding, my hobbies include playing video games and board games, jigsaw puzzles, dancing and when it's nice out, hiking (though what I consider a hike, others refer to as nature walks). I'm also enjoying being able to get back to the movie theater and traveling.
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