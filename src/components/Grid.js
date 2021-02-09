import React from "react";

const styles = {
    container: {
        marginLeft: "2rem"
    }
}

// Container
export function Container({ fluid, children }) {
    return (
        <div className={`container${fluid ? "-fluid" : ""}`} style={styles.container}>
            {children}
        </div>
    )
}

// Row
export function Row({ fluid, children }) {
    return (
        <div className={`row${fluid ? "-fluid" : ""}`}>
            {children}
        </div>
    )
}

// Col
export function Col({ size, children }) {
    return (
        <div className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    )
}
