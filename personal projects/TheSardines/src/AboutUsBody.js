import React from "react";
import bodyImage from './TheSardines.jpg'
import bodyImage2 from './TheSardines3.jpg'
import bodyImage3 from './TheSardines2.jpg'


function AboutUsBody(props) {

  const bodyStyle1 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '2vh',
    marginLeft: '20vh',
    clear: 'left',
    float: 'left',
    maxWidth: '40%',
  };

  const image1 = {
    height: "85vh",
    marginRight: '18%',
    float: 'right',
    clear: 'right',
    marginTop: '2%',
  }

  const image2 = {
    height: "60vh",
    marginLeft: '12%',
    float: 'left',
    clear: 'left',
    marginTop: '2%',
  }

  const bodyStyle2 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '5vh',
    marginRight: '16vh',
    clear: 'right',
    float: 'right',
    maxWidth: '45%',
  };
  
  const image3 = {
    height: "50vh",
    marginRight: '12%',
    float: 'right',
    clear: 'right',
    marginTop: '3%',
    marginBottom:'10%',
  }

  const bodyStyle3 = {
    color: props.textcolor,
    fontSize: 25,
    marginTop: '4vh',
    marginLeft: '20vh',
    clear: 'left',
    float: 'left',
    maxWidth: '38%',
  };

    return (
       

          <div>
            <p style={bodyStyle1}>
              insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text
            </p>
            <img src={bodyImage} style={image1}/>
            <img src={bodyImage2} style={image2}/>
            <p style={bodyStyle2}>
              insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text
            </p>
            <p style={bodyStyle3}>
              insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text insert text
            </p>
            <img src={bodyImage3} style={image3}/>
          </div>


    )
}

export default AboutUsBody;