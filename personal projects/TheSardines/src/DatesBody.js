import React from "react";


function HomeBody(props) {

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

    return (
       

          <div>
            <p style={bodyStyle1}>
              <ul>
                <li style={li2}>
                  Salt Lake City: April 14 ( Kilby Court ) 
                </li>
                <li>
                  Salt Lake City: April 27 ( Indiefest ) 
                </li>
                <li>
                  Salt Lake City: May 11 ( Kilby Court 20th Anniv. [Feat. Death Cab for Cutie] )
                </li>
                <li>
                  Salt Lake City: TBA ( Impact Hub )
                </li>
                <li>
                  Salt Lake City: TBA ( )
                </li>
                <li>
                  Los Angeles: TBA ()
                </li>
              </ul>  
            </p>
          </div>


    )
}

export default HomeBody;