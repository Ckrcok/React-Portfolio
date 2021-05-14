import React from "react";
import "./DorCard.css";

function DorCard(props) {
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
      <p className="subtitle is-5" id="living">
        Toronto, Canada
      </p>
      <hr id="diveder" />
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>
      <div className="fancy">link to my github</div>

      <hr id="diveder" />
      <div className="fancy" onClick={props.handleClick}>
        First project
      </div>
      <div className="fancy" onClick={props.handleClick}>
        Second project
      </div>
      <div className="fancy" onClick={props.handleClick}>
        Third project
      </div>
      <div className="fancy" onClick={props.handleClick}>
        Fourth project
      </div>
    </span>
  );
}

export default DorCard;
