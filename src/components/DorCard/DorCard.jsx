import React from "react";
import "./DorCard.css";

function DorCard() {
  return (
    <span id="dorCard" className="card">
      <div className="title" id="card-id">
        <img
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
      <div className="fancy">First project</div>
      <div className="fancy">second project</div>
      <div className="fancy">third project</div>
      <div className="fancy">fourth project</div>
    </span>
  );
}

export default DorCard;
