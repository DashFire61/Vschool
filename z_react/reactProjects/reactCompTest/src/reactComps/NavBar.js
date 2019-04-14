import React from "react";


function NavBar(props) {

  const navBarStyles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "30px",
    color: props.textcolor,
    position: "relative",
    fontSize: 80,
    top: -70,
    marginTop: 0,
    left: 155,
  }

  const navBarStyles2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowHeight: "100px",
    color: props.textcolor2,
    position: "relative",
    left: 650,
    fontSize: 20,
    top: -60,
  }

  const navBarStyles3 = {
    position: "relative",
    margin: "5px",
    top: -45,
    textDecoration: "none",
    color: props.textcolor3,
  }

  const navBarStyles4 = {
    float: "right",
    position: "relative",
    right: 100,
    bottom: 60,
  }


    return (
       

          <h1>
            <img src="" />
            <h1 style={navBarStyles}>The Store at the edge of the World.</h1>
            <h3 style={navBarStyles2}>We dont get many visitors.</h3>
            <div style={navBarStyles4}>
              <a style={navBarStyles3} href="App.js">Home</a>
              <a style={navBarStyles3} href="App.js">For Sale</a>
              <a style={navBarStyles3} href="App.js">About Us</a>
            </div> 
          </h1>


    )
}

export default NavBar;


