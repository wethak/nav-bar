import React from "react";

import "./App.css";

import Nav from "./nav.js";

const tab = [
  { link: "#", title: "Home", isActive: false },
  {
    link: "#",
    title: "Services",
    isActive: true,
    submenu: ["for entrepreneur", "for students", "for hobbies"]
  },
  { link: "#", title: "Contact", isActive: true }
];

function App() {
  return (
    <div className="App">
      <Nav x={tab}/>
    </div>
  );
}

export default App;
