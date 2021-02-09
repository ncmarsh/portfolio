import React from "react";
import { Container, Row, Col } from "../components/Grid";
import ContentCard from "../components/ContentCard";
import "./Contact.css";

function Contact() {
    return(
        <Container>
            <Row>
                <ContentCard>
                    <form>
                        <Col size="xs-6 md-8">
                            <h1>Contact</h1>
                            <hr />
                            <Row>
                                <Col size="md-10">
                                    <div className="form-group">
                                        <label for="user-name">Name</label>
                                        <input type="text" className="form-control" id="user-name" placeholder="Name" aria-describedby="name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="user-email">Email</label>
                                        <input type="email" className="form-control" id="user-email" placeholder="Email" aria-describedby="email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="user-message">Message</label>
                                        <textarea className="form-control" id="user-message" rows="3" placeholder="Message" aria-describedby="message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
                                </Col>
                            </Row>
                        </Col>
                    </form>
                </ContentCard>
            </Row>
        </Container>
    )
}

export default Contact;