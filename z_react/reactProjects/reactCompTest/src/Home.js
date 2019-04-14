import React from 'react';
import NavBar from "./reactComps/NavBar.js";

function Home() {
  const navBarStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowHeight: "100px",
    textColor: "blue",
  }
  return (
    <div style={navBarStyles}>p
      {}
      <NavBar />
    </div>
  )
}


export default Home;