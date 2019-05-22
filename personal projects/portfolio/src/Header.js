import React from "react";


function Header(props) {

  const navBarStyles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "30px",
    color: props.textcolor,
    fontSize: '4vw',
    marginTop: '-2vh',
    marginLeft: '6vw',
  }

  const navBarStyles2 = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridRowHeight: "100px",
    color: props.textcolor2,
    left: 650,
    fontSize: 0,
    top: -60,
  }
    return (
       

          <div>
            <img src="" />
            <h1 style={navBarStyles}>Aspen Young</h1>
            <h3 style={navBarStyles2}></h3>
          </div>


    )
}

export default Header;