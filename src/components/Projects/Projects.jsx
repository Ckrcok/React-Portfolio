import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div>
        <div id="project1Card" className="card">
          <h1 className="title is-4" id="title1">
            Connect-Four In Space
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip1">
            My First project made by JS HTML And CSS
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
            Jean Model Website
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip2">
            A website dedicted to my pet bunny and his model ablities, build
            with express.js & MongoDB
          </p>
        </div>
        <img
          id="Project2"
          src="https://i.imgur.com/QlGJoP3.png"
          alt="Jean Model Website"
        />
        <div id="project3Card" className="card">
          <h1 className="title is-4" id="title3">
            Jean Model Website
          </h1>
          <hr />
          <p className="subtitle is-6" id="Descrip3">
            A website dedicted to my pet bunny and his model ablities, build
            with express.js & MongoDB
          </p>
        </div>
        <img id="Project3" src="https://i.imgur.com/DJtGHi4.png" alt="Buzz" />
      </div>
    </div>
  );
}

export default Projects;
