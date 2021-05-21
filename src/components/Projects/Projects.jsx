import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div id="projects">
      <div id="project-1">
        <div
          id="project1Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-3" id="title1">
            <a
              href="https://ckrcok.github.io/Connect-Four-In-Space/"
              target="_blank"
              rel="noreferrer"
            >
              {props.projects[0].name}
            </a>
          </h1>
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
      <div id="project-2">
        <div
          id="project2Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-3" id="title2">
            <a
              href="https://jeanmodel.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              {props.projects[1].name}
            </a>
          </h1>
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
      <div id="project-3">
        <div
          id="project3Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-2" id="title3">
            <a
              href="https://buzzcollectco.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              {props.projects[2].name}
            </a>
          </h1>

          <p className="subtitle is-6" id="Descrip3">
            {props.projects[2].description}
          </p>
        </div>
        <img id="Project3" src="https://i.imgur.com/5KqoaSp.png" alt="Buzz" />
      </div>
      <div id="project-4">
        <div
          id="project4Card"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="title is-2" id="title3">
            <a
              href="https://karmik.herokuapp.com/home"
              target="_blank"
              rel="noreferrer"
            >
              {props.projects[3].name}
            </a>
          </h1>

          <p className="subtitle is-6" id="Descrip4">
            {props.projects[3].description}
          </p>
        </div>
        <img id="Project4" src="https://i.imgur.com/ZGdlZ5y.png" alt="Buzz" />
      </div>
    </div>
  );
}

export default Projects;
