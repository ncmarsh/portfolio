import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

const styles = {
    itemTitle: {
        fontWeight: "bold",
        color: "#343A40"
    }
}

function ContactInfo() {
    return (
        <div>
            {/* Github */}
            <p>
                <FontAwesomeIcon icon={faGithub} size="4x" color="#7C007C" />
                <span style={styles.itemTitle}> Github: </span>
                <a href="https://github.com/ncmarsh" target="_blank" rel="noreferrer">@ncmarsh</a>
            </p>
            {/* LinkedIn */}
            <p>
                <FontAwesomeIcon icon={faLinkedin} size="4x" color="#0A66C2" />
                <span style={styles.itemTitle}> LinkedIn: </span> 
                <a href="https://www.linkedin.com/in/nicole-marshall-67375a98/" target="_blank" rel="noreferrer">nicole-marshall</a>
            </p>
            {/* Email */}
            <p>
                <FontAwesomeIcon icon={faEnvelopeOpen} size="4x" color="#343A40" />
                <span style={styles.itemTitle}> Email: </span> 
                <a href="mailto:marshall.nicole522@gmail.com">marshall.nicole522@gmail.com</a>
            </p>
            {/* Resume */}
            <p>
                <FontAwesomeIcon icon={faFilePdf} size="4x" color="#A50000" />
                <span style={styles.itemTitle}> View: </span> 
                <a href={process.env.PUBLIC_URL + "/assets/Nicole_Marshall_resume.pdf"} target="_blank" rel="noreferrer">Resume</a>
            </p>
        </div>
    )
}

export default ContactInfo;