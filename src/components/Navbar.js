import React, { useState } from "react";
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

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <nav className="fixed-top sticky-top">
            <ul className="navbar fixed-top sticky-top navbar-expand-lg navbar-light" style={styles.navBar}>
                <Link to="/" className="navbar-brand" style={styles.navBarText}>
                    Nicole Marshall
                </Link>
                <button 
                    className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded={!isNavCollapsed ? true : false} 
                    aria-label="Toggle navigation" onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNavAltMarkup">
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