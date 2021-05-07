import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="card" id="Contact">
      <h1 id="header" className="title ">
        My Contact
      </h1>
      ( // Bulma)
      <article className="message is-medium">
        <div className="message-header">
          <p id="message-header">Medium message</p>
        </div>
        <div className="message-body" id="message-body">
          <div id="linkedin">This is my LinkedIn</div>
          <div id="gitHub">This is my GitHub</div>
          <div id="Email">This Is My Email</div>
        </div>
      </article>
    </div>
  );
}

export default Contact;
