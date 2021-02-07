import React from "react";

const styles = {
    content: {
        backgroundColor: "#ffffff",
        margin: "3rem 1rem",
        padding: "2rem",
        borderRadius: "15px"
    }
}

function ContentCard({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`} style={styles.content}>
        {children}
    </div>;
}

export default ContentCard;