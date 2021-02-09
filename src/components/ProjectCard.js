import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        <div className="card" id="project-card">
            <h5 className="project-title">{props.title}</h5>
            <ul>
                <li><a href={props.liveUrl} target="_blank">Visit the Live Page</a></li>
                <li><a href={props.repoUrl} target="_blank">GitHub Repository</a></li>
            </ul>
            <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.image} alt={props.alt} />
        </div>
    )
}

export default ProjectCard;