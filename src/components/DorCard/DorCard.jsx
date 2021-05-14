import React from "react";
import "./DorCard.css";

function DorCard() {
  return (
    <span
      id="dorCard"
      className="card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="title" id="card-id">
        <img
          alt="Dor's Avatar"
          id="Avatar"
          src="https://avatars.githubusercontent.com/u/56084381?v=4"
        />
        <h5 id="name">Dor Zairi</h5>
      </div>
      <p className="subtitle is-5">Toronto, Canada</p>
      <hr id="diveder" />
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>

      <hr id="diveder" />
      <h5>Project Sample</h5>
      <div className="fancy">
        <a href="#project-1">First project</a>
      </div>
      <div className="fancy">
        <a href="#Project2">second project</a>
      </div>
      <div className="fancy">
        <a href="#project-3">third project</a>
      </div>
      <div className="fancy">
        <a href="#project-4">fourth project</a>
      </div>
    </span>
  );
}

export default DorCard;
