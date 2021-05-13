import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div>
      <div id="project1">
        <div
          id="project1Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-3" id="title1">
            {props.projects[0].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip1">
            {props.projects[0].description}
          </p>
        </div>
        <img
          id="Project1"
          src="https://i.imgur.com/SWpyJff.png"
          alt="Connect-Four In Space"
        />
      </div>
      <div id="project2">
        <div
          id="project2Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-3" id="title2">
            {props.projects[1].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip2">
            {props.projects[1].description}
          </p>
        </div>
        <img
          id="Project2"
          src="https://i.imgur.com/ZSgNeT5.png"
          alt="Jean Model Website"
        />
      </div>
      <div id="project3">
        <div
          id="project3Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-2" id="title3">
            {props.projects[2].name}
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip3">
            {props.projects[2].description}
          </p>
        </div>
        <img id="Project3" src="https://i.imgur.com/5KqoaSp.png" alt="Buzz" />
      </div>
    </div>
  );
}

export default Projects;
