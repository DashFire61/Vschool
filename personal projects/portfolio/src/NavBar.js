import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(props) {

  const navBarStyles3 = {
    position: "relative",
    margin: "3vh",
    top: '0vh',
    textDecoration: "none",
    color: props.textcolor3,
    fontSize: '2vw',
  }

  const navBarStyles4 = {
    float: "right",
    position: "relative",
    right: 100,
    bottom: 60,
  }


    return (
       

          <div>
            <div style={navBarStyles4}>
              <NavLink exact={true} activeClassName='is-active' to="/Home" style={navBarStyles3}>Home</NavLink>
              <NavLink exact={true} activeClassName='is-active' to="/Projects" style={navBarStyles3}>Projects</NavLink> 
              <NavLink exact={true} activeClassName='is-active' to="/Skills" style={navBarStyles3}>Skills</NavLink>
              <NavLink exact={true} activeClassName='is-active' to="/Bio" style={navBarStyles3}>Bio & Resume</NavLink> 
              <NavLink exact={true} activeClassName='is-active' to="/Contact" style={navBarStyles3}>Contact</NavLink>
            </div> 
          </div>


    )
}

export default NavBar;


