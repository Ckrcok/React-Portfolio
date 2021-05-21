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
        <h5 id="name">Dor Zairi</h5>
      </div>
      <p className="subtitle is-5" id="living">
        Toronto, Canada
      </p>
      <hr id="diveder" />
      <div className="fancy" onClick={props.handleClick}>
        Game Development: “Connect 4” in Space
      </div>
      <div className="fancy" onClick={props.handleClick}>
        Full Stack Development: Jean Model
      </div>
      <div className="fancy" onClick={props.handleClick}>
        Web-App Development: Buzz
      </div>
      <div className="fancy" onClick={props.handleClick}>
        App Development: Karmik
      </div>
      <hr id="diveder" />
      <div className="fancy" onClick={props.handleClick}>
        Lets Connect!
      </div>
    </span>
  );
}

export default DorCard;
