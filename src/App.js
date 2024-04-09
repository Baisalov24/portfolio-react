import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import Tools from "./components/tools/Tools"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Tools />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
