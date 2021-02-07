import React from "react";
import { Link } from "react-router-dom";

const styles = {
    navBar: {
        backgroundColor: "#2893B0",
        borderBottom: "4px solid #343A40"
    },
    navBarText: {
        color: "#f8f8f8",
        fontSize: "28px",
        paddingBottom: "0px"
    },
    linkText: {
        fontSize: "20px",
        fontWeight: "bold"
    }
}

function Navbar() {
    return (
        <nav>
            <ul className="navbar fixed-top sticky-top navbar-expand-lg navbar-light" style={styles.navBar}>
                <a href="/" className="navbar-brand" style={styles.navBarText}>Nicole Marshall</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={styles.linkText}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio" className="nav-link" style={styles.linkText}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" style={styles.linkText}>
                                Contact
                            </Link>
                        </li>
                    </div>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;