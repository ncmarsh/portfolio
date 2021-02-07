import React from "react";

const styles = {
    footerNav: {
        borderTop: "4px solid #2893B0",
        borderBottom: "none"
    },
    footer: {
        fontSize: ".75rem",
        color: "#2893B0"
    }
}

function Footer() {
    return (
        <footer className="footer">
            <nav className="navbar fixed-bottom sticky-bottom navbar-dark bg-dark" id="nav-bottom" style={styles.footerNav}>
                <a id="footer" className="navbar-brand mx-auto" style={styles.footer}>Nicole Marshall &#169; 2021</a>
            </nav>
        </footer>
    );
};

export default Footer;