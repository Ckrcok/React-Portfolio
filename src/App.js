// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Hey from "./components/Hey/Hey.jsx";
import DorCard from "./components/DorCard/DorCard.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

class App extends React.Component {
  projects = [
    {
      name: "Connect-Four In Space",
      description: " My First project made by JS HTML And CSS"
    },
    {
      name: "Jean Model Website",
      description:
        "A website dedicted to my pet bunny and his model ablities, build with express.js & MongoDB"
    },
    {
      name: "Buzz",
      description:
        "  A coffee collector web site, with mobile first design build with another pogramer and UXDI designers built with -Django, Python, PostgresSQL"
    }
  ];

  render() {
    return (
      <div className="App">
        <div id="bg1">
          <Hey />
        </div>
        <div id="bg2">
          <Skills />

          <DorCard />
        </div>
        <div id="bg3">
          <Projects projects={this.projects} />
        </div>
        <div id="bg4"></div>
      </div>
    );
  }
}
export default App;
