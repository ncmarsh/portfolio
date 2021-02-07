import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen, faFilePdf, faPhoneSquare, faUser } from "@fortawesome/free-solid-svg-icons";

const styles = {
    list: {
        listStyleType: "none"
    },
    itemTitle: {
        fontWeight: "bold",
        color: "#343A40"
    }
}

function ContactInfo() {
    return (
        <ul style={styles.list}>
            {/* Github */}
            <li>
                <FontAwesomeIcon icon={faGithub} />
                <span style={styles.itemTitle}> Github: </span>
                <a href="https://github.com/ncmarsh" target="_blank">@ncmarsh</a>
            </li>
            {/* LinkedIn */}
            <li>
                <FontAwesomeIcon icon={faLinkedin} />
                <span style={styles.itemTitle}> LinkedIn: </span> 
                <a href="https://www.linkedin.com/in/nicole-marshall-67375a98/" target="_blank">nicole-marshall</a>
            </li>
            {/* Email */}
            <li>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <span style={styles.itemTitle}> Email: </span> 
                <a href="mailto:marshall.nicole522@gmail.com">marshall.nicole522@gmail.com</a>
            </li>
            {/* Resume */}
            <li>
                <FontAwesomeIcon icon={faFilePdf} />
                <span style={styles.itemTitle}> View: </span> 
                <a href={process.env.PUBLIC_URL + "/assets/Nicole_Marshall_resume.pdf"} target="_blank">Resume</a>
            </li>
            {/* Phone */}
            <li>
                <FontAwesomeIcon icon={faPhoneSquare} />
                <span style={styles.itemTitle}> Phone: </span> 
                <a href="tel:360-220-3079">Call</a>
            </li>
            {/* Portfolio */}
            <li>
                <FontAwesomeIcon icon={faUser} />
                <span style={styles.itemTitle}> View: </span> 
                <a href="https://ncmarsh.github.io/portfolio/portfolio.html">Portfolio</a>
            </li>
        </ul>
    )
}

export default ContactInfo;