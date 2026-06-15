import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{padding: "1rem"}}>
        <Skills />
        <Experience />
        <Projects />
        <Certification />
        <Contact />
      </main>
    </div>
  );
}

export default App;