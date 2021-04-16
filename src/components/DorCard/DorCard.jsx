import React from "react";
import "./DorCard.css";

function DorCard() {
  return (
    <span id="dorCard" className="card">
      <div className="title" id="card-id">
        <img src="https://avatars.githubusercontent.com/u/56084381?v=4" />
        <h5 id="name">Dor Zairi</h5>
      </div>
      <p className="subtitle is-5">Toronto, Canada</p>
      <hr id="diveder" />
      <div>link to my github</div>
      <div>link to my github</div>
      <div>link to my github</div>
      <div>link to my github</div>

      <hr id="diveder" />
      <h5>Project Sample</h5>
      <div>First project</div>
      <div>second project</div>
      <div>third project</div>
      <div>fourth project</div>
    </span>
  );
}

export default DorCard;
