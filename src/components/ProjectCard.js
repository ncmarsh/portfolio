import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    return (
        // <div className="card" id="project-card">
        //     <h5 className="project-title">{props.title}</h5>
        //     <ul>
        //         <li><a href={props.liveUrl} target="_blank">Visit the Live Page</a></li>
        //         <li><a href={props.repoUrl} target="_blank">GitHub Repository</a></li>
        //     </ul>
        //     <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.image} alt={props.alt} />
        // </div>
        <div className="card mb-3" id="project-card">
            <div className="row g-0">
                <div className="col-sm-5">
                    <img className="img-fluid project-img" src={process.env.PUBLIC_URL + props.image} alt={props.alt} />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title project-title">{props.title}</h5>
                        <div className="d-flex justify-content-center">
                            <h6 className="p-2">
                                <a href={props.liveUrl} target="_blank">Visit the Live Page</a>
                            </h6>
                            <h6 className="ms-auto p-2">
                                <a href={props.repoUrl} target="_blank">GitHub Repository</a>
                            </h6>
                        </div>
                        <p className="card-text">{props.use}</p>
                        <h6 className="card-text">Technologies Used:</h6>
                        <p>{props.technologies}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;