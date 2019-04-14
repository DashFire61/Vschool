import React from "react";


function HeadBar(props) {

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

    return (
       

          <h1>
            <h1 style={navBarStyles}>Information Sheet</h1>
            <h3 style={navBarStyles2}>Enter info Below.</h3>
          </h1>


    )
}

export default HeadBar;


