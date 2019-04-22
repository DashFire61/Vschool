import React from "react";
import TwitterLogo from "./twitter.png"


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
              Welcome!
            </p>
            <p style={bodyStyle2}>
              "We're a indie band from Salt Lake City and we're playing shows around Utah all the time with occasional out of state shows.
              You can find our music on your favorite platform. Keep on eye out on our social media for updates about new music, show dates and more."
            </p>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/uDwxZoHsFmY?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div style={tinyDiv}>
              <img src={TwitterLogo} style={logo}/>
              <a id="twitter" href="https://twitter.com/sardinesut?ref_src=twsrc%5Etfw" className="twitter-btn" data-show-count="false">Follow @sardinesUT</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>


    )
}

export default HomeBody;