import React from "react";

function ProjectCard() {
    return (
        <div className="card project-card">
            <h5 className="project-title">PNW Whale Watching</h5>
            <ul>
                <li><a href="https://fathomless-springs-89027.herokuapp.com/" target="_blank">Visit the Live Page</a></li>
                <li><a href="https://github.com/watchNW/whale-watching" target="_blank">GitHub Repository</a></li>
            </ul>
            <img class="img-fluid project-img" src="../../oldcode/Assets/Projects/whales_home_screenshot.png" alt="PNW Whale Watching screenshot" />
        </div>
    )
}

export default ProjectCard;