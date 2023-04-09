import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills"
import "./app.scss"
import { useState } from "react";
import { Menu } from "./components/menu/Menu";
import { React, useEffect } from 'react';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro />
        <Experience />
        <Skills />
        <Portfolio />

        <Contact />
      </div>

    </div>
  );
}

export default App;
