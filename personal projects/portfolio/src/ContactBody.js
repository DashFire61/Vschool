import React from "react";
import TwitterLogo from "./twitter.png"


function ContactBody(props) {

  const bodyStyle1 = {
    color: props.textcolor,
    fontSize: 35,
    marginTop: '0vh',
    marginLeft: '25vh',
    clear: 'left',
    float: 'left',
  };

  const li2={
    color: props.textcolor2,
  }

  const li3={
    color: props.textcolor3,
  }

  
  const logo = {
    marginTop:'-.6vh',
    maxHeight:'4vh',
    maxWidth: '4vw',
  }

  const tinyDiv = {
    position:'absolute',
    marginTop:'60vh',
    marginLeft:'50vw',
  }

    return (
       

          <div>
            <p style={bodyStyle1}>
              <div style={tinyDiv}>
              <img src={TwitterLogo} style={logo}/>
              <a id="twitter" href="" className="twitter-btn" data-show-count="false">Follow @AspenYoung (make an account)</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </p>
          </div>


    )
}

export default ContactBody;