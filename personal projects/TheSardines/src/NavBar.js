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
              <NavLink exact={true} activeClassName='is-active' to="/Dates" style={navBarStyles3}>Shows & Tour Dates</NavLink> 
              <NavLink exact={true} activeClassName='is-active' to="/Music" style={navBarStyles3}>Music</NavLink>
              <NavLink exact={true} activeClassName='is-active' to="/Sale" style={navBarStyles3}>For Sale</NavLink> 
              <NavLink exact={true} activeClassName='is-active' to="/AboutUs" style={navBarStyles3}>About Us</NavLink>
            </div> 
          </div>


    )
}

export default NavBar;


