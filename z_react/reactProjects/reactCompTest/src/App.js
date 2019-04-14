import React from 'react';
import NavBar from "./reactComps/NavBar.js";
import Sale from "./reactComps/Sale.js"
import ItemsForSale from './reactComps/Sale.js';

function AboutUs() {
  const body2 ={
    backgroundColor: "beige",
    position: "fixed", 
    minWidth: "100vw",
    maxHeight: "12vh",
    top: 0,
    left: 0,
  }
  const body ={
    position: "fixed", 
    backgroundColor: "black",
    left: 0,
    minHeight: "200vh",
    minWidth: "100vw",
  }
  const bodyText ={
    color: "beige",
    position: "relative",
  }

  const h4 ={
    position: "relative",
    top: 320,
    left: 430,
    fontSize: 35,
  }

  
  const h4two ={
    position: "relative",
    top: -410,
    left: 430,
    fontSize: 35,
  }

  const p ={
    position: "relative",
    top: -440,
    left: 550,
    fontSize: 30,
  }

  const f ={
    position: "relative",
    top: 120,
    left: 1745,
  }


  const sale ={
    position: "relative",
    left: 750,
    top: 300,
  }
  const width ={
    width: 700,
  }

  const border ={
    borderColor: "orange",
    borderWidth: "10px",
  }

    return(
      <div style={body}>
        <div>
          



          <div style={body2}>
            {}
            <NavBar textcolor = "orange" textcolor2 = "orange" textcolor3 = "orange" />
          </div>

        <div style={bodyText}>
          <div style={border}>
            <h4 style={h4}>
              For Sale
            </h4>
            <div style={sale}>
              {}
              <ItemsForSale />
            </div>
          </div>


          <div style={bodyText}>
            <div style ={width}>
              <h4 style={h4two}>
                About Us
              </h4>
              <p style={p}>
                Hi. We Sell Things that we found on the ground outside or in abandoned houses. All Items are checked for being moderately useful in a task that they were not original intended for.
              </p>
            </div>
          </div>
        </div>




        <div style={bodyText}>
          <footer>
            <p style={f}> © 2019 Changling Studios</p>
          </footer>
        </div>


        </div>
      </div>
    )
  }

export default AboutUs;