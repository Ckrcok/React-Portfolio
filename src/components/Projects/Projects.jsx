import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div>
      <div>
        <div id="project1Card" className="card">
          <h1 className="title is-4" id="title1">
            {props.projects[0].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip1">
            {props.projects[0].description}
          </p>
        </div>
        <img
          id="Project1"
          src="https://i.imgur.com/tPhb4Pw.png"
          alt="Connect-Four In Space"
        />
      </div>
      <div>
        <div id="project2Card" className="card">
          <h1 className="title is-4" id="title2">
            {props.projects[1].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip2">
            {props.projects[1].description}
          </p>
        </div>
        <img
          id="Project2"
          src="https://i.imgur.com/QlGJoP3.png"
          alt="Jean Model Website"
        />
        <div id="project3Card" className="card">
          <h1 className="title is-4" id="title3">
            {props.projects[2].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip3">
            {props.projects[2].description}
          </p>
        </div>
        <img id="Project3" src="https://i.imgur.com/DJtGHi4.png" alt="Buzz" />
      </div>
    </div>
  );
}

export default Projects;
