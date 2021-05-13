import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="card" id="Contact">
      <h1 id="header" className="title ">
        Want To Talk?
      </h1>
      <article className="message is-medium">
        <div className="message-body" id="message-body">
          <div id="linkedin">
            <i className="fab fa-linkedin fa-2x">
              {" "}
              <a href="https://www.linkedin.com/in/dorz/">DorZairi</a>
            </i>
          </div>
          <div id="gitHub">
            <i className="fab fa-github-alt fa-2x">
              {" "}
              <a href="github.com/ckrcok">Ckrcok</a>
            </i>
          </div>
          <div id="Email">
            <i className="fas fa-inbox fa-2x">
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
