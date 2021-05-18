import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="" id="Contact">
      <h1 id="header" className="title" data-aos="fade-up">
        Lets Connect!
      </h1>
      <hr id="contactHr" data-aos="fade-up" />
      <article className="">
        <div className="" id="message-body">
          <img
            alt="Dor's Avatar"
            id="Avatar"
            src="https://avatars.githubusercontent.com/u/56084381?v=4"
          />
          <div id="linkedin" data-aos="fade-up">
            <i className="fab fa-linkedin fa-2x" id="linkedinIcon">
              {" "}
              <a href="https://www.linkedin.com/in/dorz/">Dor Zairi</a>
            </i>
          </div>
          <div id="gitHub" data-aos="fade-up">
            <i className="fab fa-github-alt fa-2x" id="gitHubIcon">
              {" "}
              <a href="https://www.github.com/ckrcok">Ckrcok</a>
            </i>
          </div>
          <div id="Email" data-aos="fade-up">
            <i className="fas fa-inbox fa-2x" id="EmailIcon">
              {" "}
              <a href="mailto:dorzairi@ymail.com"> Email </a>
            </i>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Contact;
