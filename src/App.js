import React from "react";
import './App.css'
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    <Skills/>
    </div>
  );
}

export default App;
