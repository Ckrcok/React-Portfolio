import React from "react";
import "./Hey.css";

function Hey() {
  return (
    <div className="insideHey">
      <h1
        id="heythere"
        className="title"
        data-aos="zoom-in-down"
        data-aos-duration="3000"
      >
        HEY THERE, I'M
        <strong
          id="dor"
          className="title"
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          DOR ZAIRI.
        </strong>
      </h1>
      <h2
        id="fullstack"
        className="title"
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        data-aos-delay="2000"
      >
        I'M A FULLSTACK DEVELOPER.
      </h2>
      <p
        id="project"
        className="subtitle"
        data-aos="zoom-in-down"
        data-aos-duration="3000"
        data-aos-delay="3000"
      >
        I'm project addicted and an inspiring video game developer.
      </p>
    </div>
  );
}

export default Hey;
