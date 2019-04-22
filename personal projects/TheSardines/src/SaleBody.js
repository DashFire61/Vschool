import React from "react";

function HomeBody(props) {

  const bodyStyle1 = {
    color: props.textcolor,
    fontSize: 40,
    marginTop: '2vh',
    marginLeft: '12vh',
  };
  const bodyStyle2 = {
    color: props.textcolor2,
    fontSize: 25,
    marginTop: '5vh',
    marginLeft: '12vh',
  };

  const button = {
    width: '2vw',
    height: '2vh',
    marginLeft:'8vw',
  }

    return (
       

          <div>
            <p style={bodyStyle1}>
              The Fish Market
            </p>
            <span style={bodyStyle2}>coming soon</span>
            {/* <p style={bodyStyle2}>
              price:
            </p>
            <button style={button}>Buy</button> */}
          </div>


    )
}

export default HomeBody;