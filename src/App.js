// import logo from "./logo.svg";
import "./App.css";
import Hey from "./components/Hey/Hey.jsx";
import DorCard from "./components/DorCard/DorCard.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";

function App() {
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
        <Projects />
      </div>
    </div>
  );
}
export default App;
