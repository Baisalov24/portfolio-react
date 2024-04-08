import React from "react";
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    <Skills/>
    <Projects />
    </div>
  );
}

export default App;
