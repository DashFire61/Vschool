import React from "react";


function MusicBody(props) {

  const bodyStyle1 = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr',
    gridTemplateRows: '',
    color: props.textcolor,
    fontSize: 25,
    marginTop: '2vh',
    paddingLeft: '15vh',
  };

  const Music = {
    maxWidth:'20vw',
    minHeight:'50vh',
    overflow:'hidden',
    background:'transparent',
    border:'none',
    paddingRight: '12vh',
  }
  
  const Music2 = {
    minHeight:'40vh',
    minWidth:'30vw',
    overflow:'hidden',
    background:'transparent',
    border:'none',
  }
    return (
       

          <div>
            <p style={bodyStyle1}>
              <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style={Music} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/au/album/chameleons/1439546378"></iframe>
              <iframe style={Music2} src="https://www.youtube.com/embed/4ujpspG_VKs?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe style={Music2} src="https://www.youtube.com/embed/fFMmqm9dLZ0?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>
          </div>


    )
}

export default MusicBody;