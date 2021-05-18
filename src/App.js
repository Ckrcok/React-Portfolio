// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Hey from "./components/Hey/Hey.jsx";
import DorCard from "./components/DorCard/DorCard.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { ReactComponent as Shapes } from "./assets/Shapes.svg";

class App extends React.Component {
  projects = [
    {
      name: "Connect-Four In Space",
      description: "My First project made by JS HTML And CSS"
    },
    {
      name: "Jean Model Website",
      description:
        "A website dedicted to my pet bunny and his model ablities, build with express.js & MongoDB"
    },
    {
      name: "Buzz",
      description:
        "A coffee collector web site, with mobile first design build with another pogramer and UXDI designers built with -Django, Python, PostgresSQL"
    },
    {
      name: "Karmik",
      description:
        "Karmik gives you the freedom to create a board for every intention you desire to manifest. Karmik boasts full CRUD functionality and incorporates all of the MERN-stack technologies."
    }
  ];

  handleClick(e) {
    console.log("Click");
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Game Development: “Connect 4” in Space") {
      window.scrollTo({
        top: 2250,
        behavior: "smooth"
      });
    } else if (e.target.innerHTML === "Full Stack Development: Jean Model") {
      window.scrollTo({
        top: 3150,
        behavior: "smooth"
      });
    } else if (e.target.innerHTML === "Web-App Development: Buzz") {
      window.scrollTo({
        top: 4050,
        behavior: "smooth"
      });
    } else if (e.target.innerHTML === "App Development: Karmik") {
      window.scrollTo({
        top: 4885,
        behavior: "smooth"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div id="shapes">
          <Shapes data-aos="zoom-out" data-aos-duration="3000" />
        </div>
        <div id="bg1">
          <Hey />
        </div>
        <div id="bg2">
          <Skills />
          <DorCard handleClick={this.handleClick} />
        </div>
        <div id="bg3">
          <Projects projects={this.projects} />
        </div>
        <div id="bg4">
          <Contact />
        </div>
      </div>
    );
  }
}
export default App;
