import React from "react";


function HomeBody(props) {

  const bodyStyle1 = {
    color: props.textcolor,
    fontSize: 65,
    marginTop: '2vh',
    marginLeft: '35vh',
    clear: 'left',
    float: 'left',
    maxWidth: '55%',
  };
  const bodyStyle2 = {
    color: props.textcolor2,
    fontSize: 45,
    marginTop: '2vh',
    marginLeft: '35vh',
    clear: 'left',
    float: 'left',
    maxWidth: '30%',
  };


    return (
       

          <div>
            <p style={bodyStyle1}>
              
            </p>
            <p style={bodyStyle2}>
            </p>
            <div className="video">
              <p>
              <iframe width="893" height="503" src="https://www.youtube.com/embed/AUx3x8YolKA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </p>
            </div>
          </div>


    )
}

export default HomeBody;